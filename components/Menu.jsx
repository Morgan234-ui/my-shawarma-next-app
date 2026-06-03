'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Menu = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <React.Fragment>
        <section id="menu">
  <div className="section-container">
    <motion.h2
      className="section-title"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      Our Menu
    </motion.h2>
    <motion.p
      className="section-subtitle"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      Discover our handcrafted selections
    </motion.p>

    <motion.div
      className="menu-container"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >

      <motion.div className="menu-card" variants={cardVariants}>
        <div className="menu-card-image">
          <img src="/images/food2.jpg" alt="Chicken Shawarma" />
          <div className="menu-card-badge">Best Seller</div>
        </div>
        <div className="menu-card-content">
          <h3>Mouth Watering Noodles</h3>
          <p> Delicious Noodles with creamy garlic sauce, lettuce, and tomato</p>
          <div className="menu-card-footer">
            <span className="price">₦3,500</span>
            <button className="btn-icon" title="Add to cart">+</button>
          </div>
        </div>
      </motion.div>

      <motion.div className="menu-card" variants={cardVariants}>
        <div className="menu-card-image">
          <img src="/images/unsplash 1.jpg" alt="Beef Burger" />
          <div className="menu-card-badge">Featured</div>
        </div>
        <div className="menu-card-content">
          <h3>Chicken Shawarma</h3>
          <p>Juicy grilled Chicken patty with crispy fries and special sauce</p>
          <div className="menu-card-footer">
            <span className="price">₦3,000</span>
            <button className="btn-icon" title="Add to cart">+</button>
          </div>
        </div>
      </motion.div>

      <motion.div className="menu-card" variants={cardVariants}>
        <div className="menu-card-image">
          <img src="/images/unsplash 3.jpg" alt="Grilled Chicken" />
        </div>
        <div className="menu-card-content">
          <h3>Turkey Shawarma</h3>
          <p>Spiced grilled Turkey served with fresh garden salad</p>
          <div className="menu-card-footer">
            <span className="price">₦10,000</span>
            <button className="btn-icon" title="Add to cart">+</button>
          </div>
        </div>
      </motion.div>

      <motion.div className="menu-card" variants={cardVariants}>
        <div className="menu-card-image">
          <img src="/images/unsplash 4.jpg" alt="Grilled Chicken & Sausage" />
        </div>
        <div className="menu-card-content">
          <h3> Chicken & Sausage Shawarma</h3>
          <p>Perfectly grilled chicken paired with savory sausage and sides</p>
          <div className="menu-card-footer">
            <span className="price">₦3,500</span>
            <button className="btn-icon" title="Add to cart">+</button>
          </div>
        </div>
      </motion.div>

      <motion.div className="menu-card" variants={cardVariants}>
        <div className="menu-card-image">
          <img src="/images/unsplash 2.jpg" alt="Noodles" />
        </div>
        <div className="menu-card-content">
          <h3>Beef Shawarma</h3>
          <p>Aromatic Beef tossed with fresh vegetables and protein</p>
          <div className="menu-card-footer">
            <span className="price">₦4,500</span>
            <button className="btn-icon" title="Add to cart">+</button>
          </div>
        </div>
      </motion.div>

      <motion.div className="menu-card" variants={cardVariants}>
        <div className="menu-card-image">
          <img src="/images/download4.jpg" alt="Grilled Beef" />
        </div>
        <div className="menu-card-content">
          <h3>Grilled plantain</h3>
          <p>Premium grilled plantain cuts grilled to perfection with herb seasoning</p>
          <div className="menu-card-footer">
            <span className="price">₦7,500</span>
            <button className="btn-icon" title="Add to cart">+</button>
          </div>
        </div>
      </motion.div>

      <motion.div className="menu-card" variants={cardVariants}>
        <div className="menu-card-image">
          <img src="/images/ibo12.jpg" alt="Grilled Beef"/>
        </div>
        <div className="menu-card-content">
          <h3>vegetable soup</h3>
          <p>Premium Taste at your platter, making you to feel home away from home</p>
          <div className="menu-card-footer">
            <span className="price">₦7,500</span>
            <button className="btn-icon" title="Add to cart">+</button>
          </div>
        </div>
      </motion.div>

      <motion.div className="menu-card" variants={cardVariants}>
        <div className="menu-card-image">
          <img src="/images/ibo15.jpg" alt="Grilled Beef" />
        </div>
        <div className="menu-card-content">
          <h3>Native ugba and cocoyam</h3>
          <p>Taste the feeling like you are part of something big</p>
          <div className="menu-card-footer">
            <span className="price">₦7,500</span>
            <button className="btn-icon" title="Add to cart">+</button>
          </div>
        </div>
      </motion.div>
      
      <motion.div className="menu-card" variants={cardVariants}>
        <div className="menu-card-image">
          <img src="/images/ibo16.jpg" alt="Grilled Beef" />
        </div>
        <div className="menu-card-content">
          <h3>Delicious Okpa</h3>
          <p>Taste the feeling</p>
          <div className="menu-card-footer">
            <span className="price">₦2,000</span>
            <button className="btn-icon" title="Add to cart">+</button>
          </div>
        </div>
      </motion.div>

    </motion.div>
  </div>
</section>
    </React.Fragment>
  )
}

export default Menu