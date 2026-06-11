'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  }

  const menuItems = [
    { id: 1, category: 'shawarma', title: 'Mouth Watering Noodles', desc: 'Delicious Noodles with creamy garlic sauce, lettuce, and tomato', price: '₦3,500', image: '/images/food2.jpg', badge: 'Best Seller' },
    { id: 2, category: 'shawarma', title: 'Chicken Shawarma', desc: 'Juicy grilled Chicken patty with crispy fries and special sauce', price: '₦3,000', image: '/images/unsplash 1.jpg', badge: 'Featured' },
    { id: 3, category: 'shawarma', title: 'Turkey Shawarma', desc: 'Spiced grilled Turkey served with fresh garden salad', price: '₦10,000', image: '/images/unsplash 3.jpg' },
    { id: 4, category: 'shawarma', title: 'Chicken & Sausage Shawarma', desc: 'Perfectly grilled chicken paired with savory sausage and sides', price: '₦3,500', image: '/images/unsplash 4.jpg' },
    { id: 5, category: 'shawarma', title: 'Beef Shawarma', desc: 'Aromatic Beef tossed with fresh vegetables and protein', price: '₦4,500', image: '/images/unsplash 2.jpg' },
    { id: 6, category: 'native-dishes', title: 'Grilled Plantain', desc: 'Premium grilled plantain cuts grilled to perfection with herb seasoning', price: '₦7,500', image: '/images/download4.jpg' },
    { id: 7, category: 'native-dishes', title: 'Vegetable Soup', desc: 'Premium Taste at your platter, making you feel home away from home', price: '₦7,500', image: '/images/ibo12.jpg' },
    { id: 8, category: 'native-dishes', title: 'Native Ugba and Cocoyam', desc: 'Taste the feeling like you are part of something big', price: '₦7,500', image: '/images/ibo15.jpg' },
    { id: 9, category: 'soups', title: 'Egusi Soup', desc: 'Enjoy the premium taste of Egusi soup', prices: ['2Ltr - ₦35,000', '3Ltr - ₦53,000', '5Ltr - ₦88,000'], image: '/images/ibo16.jpg' },
    { id: 10, category: 'soups', title: 'OHA Soup', desc: 'Enjoy the premium taste of OHA soup', prices: ['2Ltr - ₦40,000', '3Ltr - ₦60,000', '5Ltr - ₦100,000'], image: '/images/ibo13.jpg' },
    { id: 11, category: 'soups', title: 'AFANG Soup', desc: 'Enjoy the premium taste of AFANG soup', prices: ['2Ltr - ₦40,000', '3Ltr - ₦60,000', '5Ltr - ₦100,000'], image: '/images/ibo5.jpg' },
    { id: 12, category: 'soups', title: 'EFO RIRO Soup', desc: 'Enjoy the premium taste of EFO RIRO soup', prices: ['2Ltr - ₦35,000', '3Ltr - ₦53,000', '5Ltr - ₦88,000'], image: '/images/ibo8.jpg' },
    { id: 13, category: 'soups', title: 'OGBONNO Soup', desc: 'Enjoy the premium taste of OGBONNO soup', prices: ['2Ltr - ₦35,000', '3Ltr - ₦53,000', '5Ltr - ₦88,000'], image: '/images/ibo17.jpg' },
    { id: 14, category: 'soups', title: 'EGUSI IJEBU Soup', desc: 'Enjoy the premium taste of EGUSI IJEBU soup', prices: ['2Ltr - ₦40,000', '3Ltr - ₦60,000', '5Ltr - ₦100,000'], image: '/images/ibo9.jpg' },
    { id: 15, category: 'soups', title: 'EDIKAIKONG Soup', desc: 'Enjoy the premium taste of EDIKAIKONG soup', prices: ['2Ltr - ₦40,000', '3Ltr - ₦60,000', '5Ltr - ₦100,000'], image: '/images/ibo10.jpg' },
    { id: 16, category: 'soups', title: 'BLACK SOUP', desc: 'Enjoy the premium taste of BLACK SOUP', prices: ['2Ltr - ₦40,000', '3Ltr - ₦60,000', '5Ltr - ₦100,000'], image: '/images/ibo10.jpg' },
    { id: 17, category: 'soups', title: 'BANG SOUP', desc: 'Enjoy the premium taste of BANG SOUP', prices: ['2Ltr - ₦40,000', '3Ltr - ₦60,000', '5Ltr - ₦100,000'], image: '/images/ibo10.jpg' },
    { id: 18, category: 'soups', title: 'SEAFOOD OKRO', desc: 'Enjoy the premium taste of SEAFOOD OKRO', prices: ['2Ltr - ₦50,000', '3Ltr - ₦75,000', '5Ltr - ₦125,000'], image: '/images/ibo10.jpg' },
    { id: 19, category: 'soups', title: 'FISHERMAN SOUP', desc: 'Enjoy the premium taste of FISHERMAN SOUP', prices: ['2Ltr - ₦50,000', '3Ltr - ₦75,000', '5Ltr - ₦125,000'], image: '/images/ibo10.jpg' },
    { id: 20, category: 'soups', title: 'BITTERLEAF SOUP', desc: 'Enjoy the premium taste of BITTERLEAF SOUP', prices: ['2Ltr - ₦40,000', '3Ltr - ₦60,000', '5Ltr - ₦100,000'], image: '/images/ibo10.jpg' },
    { id: 21, category: 'soups', title: 'OFE NSALA', desc: 'Enjoy the premium taste of OFE NSALA', prices: ['2Ltr - ₦40,000', '3Ltr - ₦60,000', '5Ltr - ₦100,000'], image: '/images/ibo10.jpg' },
  ]

  const categories = [
    { id: 'all', label: 'All ' },
    { id: 'shawarma', label: 'shawarma' },
    // { id: 'native-dishes', label: 'Native Dishes' },
    { id: 'soups', label: 'Soups' },
  ]

  const filteredItems = selectedCategory === 'all' ? menuItems : menuItems.filter(item => item.category === selectedCategory)

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

          {/* Category Filter */}
          <motion.div
            className="menu-categories"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          <motion.div
            className="menu-container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={selectedCategory}
          >

            {filteredItems.map((item) => (
              <motion.div key={item.id} className="menu-card" variants={cardVariants}>
                <div className="menu-card-image">
                  <img src={item.image} alt={item.title} />
                  {item.badge && <div className="menu-card-badge">{item.badge}</div>}
                </div>
                <div className="menu-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div className="menu-card-footer">
                    {item.prices ? (
                      <div className="price-options">
                        {item.prices.map((p, i) => (
                          <span key={i} className="price">{p}</span>
                        ))}
                      </div>
                    ) : (
                      <span className="price">{item.price}</span>
                    )}
                    <button className="btn-icon" title="Add to cart" aria-label="Add to cart">+</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Menu
