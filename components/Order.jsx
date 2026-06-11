'use client'
import React from 'react'
import { motion } from 'framer-motion'
const Order = () => {
  
   const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }
  return (
       <React.Fragment>
        <section id="order">
    <motion.div variants={cardVariants}>
  <div className="section-container">
    <h2 className="section-title">Place Your Order</h2>
    <p className="section-subtitle">Complete the form below and we'll deliver your meal</p>
    
    <form className="order-form" id="orderForm">
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" placeholder="Enter your full name" required />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" placeholder="Enter your phone number (e.g., +234xxxxxxxxxx)" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder="Enter your email address" required />
      </div>

      <div className="form-group">
        <label htmlFor="food">Select Food Item</label>
        <select id="food" required>
          <option value="">Choose your favorite meal</option>
          <option value="Chicken Shawarma - ₦3,500">Chicken Shawarma - ₦3,500</option>
          <option value="Beef Burger - ₦4,500">Beef Burger - ₦4,500</option>
          <option value="Grilled Chicken - ₦6,000">Grilled Chicken - ₦6,000</option>
          <option value="Grilled Beef - ₦7,500">Grilled Beef - ₦7,500</option>
          <option value="Stir-Fried Noodles - ₦3,500">Stir-Fried Noodles - ₦3,500</option>
        </select>
      </div>

      {/* <div className="form-group">
        <label htmlFor="food">Select Food Item</label>
        <select id="food" required>
          <option value="">Choose your favourite soup </option>
          <option value="Chicken Shawarma - ₦3,500">Oha Soup = 2ltr - ₦30,000, 3ltr - ₦40,000, 5ltr - ₦60,000</option>
          <option value="Beef Burger - ₦4,500">Beef Burger - ₦4,500</option>
          <option value="Grilled Chicken - ₦6,000">Grilled Chicken - ₦6,000</option>
          <option value="Grilled Beef - ₦7,500">Grilled Beef - ₦7,500</option>
          <option value="Stir-Fried Noodles - ₦3,500">Stir-Fried Noodles - ₦3,500</option>
          <option></option>
        </select>
      </div> */}

      <div className="form-group">
        <label htmlFor="location">Delivery Location</label>
        <textarea id="location" placeholder="Enter your full delivery address" required></textarea>
      </div>

      <div className="form-group">
       {/* // (Optional) this was added to the enter items field to make it optional for the customer */}
        <label htmlFor="instructions">Enter Items Ordered </label>
        <textarea id="instructions" placeholder="Enter Items Ordered?"></textarea>
      </div>

      <button type="submit" className="btn btn-primary btn-block">Submit Order</button>

      <p id="message" className="message"></p>
    </form>
  </div>
  </motion.div>
</section>
       </React.Fragment>
  )
}

export default Order