// app/api/order/route.js
// Next.js App Router API Route Handler

import { NextResponse } from 'next/server';

const BUSINESS_EMAIL = 'edachemorgan10@gmail.com';
const BUSINESS_PHONE = '08126201628';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, food, location, instructions } = body;

    // --- Validation ---
    if (!name?.trim() || !phone?.trim() || !email?.trim() || !food || !location?.trim()) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid phone number.' },
        { status: 400 }
      );
    }

    const orderTime = new Date().toLocaleString();

    // --- Email to Business ---
    const businessEmailBody = `
NEW ORDER RECEIVED

Customer Name: ${name}
Phone Number: ${phone}
Email: ${email}
Order Item: ${food}
Delivery Location: ${location}
Special Instructions: ${instructions || 'None'}

Order Time: ${orderTime}
    `.trim();

    await sendEmail({
      to: BUSINESS_EMAIL,
      subject: `New Order from ${name}`,
      body: businessEmailBody,
    });

    // --- SMS to Business ---
    const smsMessage = `New Order - ${name} ordered ${food} for delivery to ${location}. Contact: ${phone}`;

    await sendSMS({
      to: BUSINESS_PHONE,
      message: smsMessage,
    });

    // --- Confirmation Email to Customer ---
    const confirmationBody = `
Hello ${name},

Thank you for ordering with MimiRichies Bite!

Order Details:
- Item: ${food}
- Delivery Location: ${location}
- Order Time: ${orderTime}

We will prepare your order and deliver it shortly.
For inquiries, contact us at:
📱 ${BUSINESS_PHONE}
📧 ${BUSINESS_EMAIL}

Thank you for choosing MimiRichies Bite!
    `.trim();

    await sendEmail({
      to: email,
      subject: 'Order Confirmation - MimiRichies Bite',
      body: confirmationBody,
    });

    return NextResponse.json({
      success: true,
      message: `Thank you, ${name}! Your order for ${food} has been received. We'll deliver to ${location} soon. Check your email for confirmation.`,
    });

  } catch (error) {
    console.error('Order processing error:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

// ─── Helpers ───────────────────────────────────────────────────────────────

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  const digitsOnly = phone.replace(/\D/g, '');
  return digitsOnly.length >= 10;
}

import nodemailer from 'nodemailer';

/**
 * Send an email using Nodemailer (SMTP)
 * Configure your SMTP credentials below.
 */
async function sendEmail({ to, subject, body }) {
  // Replace with your SMTP credentials
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // e.g., 'smtp.gmail.com'
    port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // SMTP username
      pass: process.env.SMTP_PASS, // SMTP password or app password
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to,
    subject,
    text: body,
  });
}

import twilio from 'twilio';

/**
 * Send an SMS using Twilio
 * Configure your Twilio credentials below.
 */
async function sendSMS({ to, message }) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_PHONE_NUMBER; // Your Twilio phone number
  if (!accountSid || !authToken || !from) {
    throw new Error('Twilio credentials are not set in environment variables.');
  }
  const client = twilio(accountSid, authToken);
  await client.messages.create({
    body: message,
    from,
    to,
  });
}
