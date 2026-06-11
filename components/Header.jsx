'use client'
import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)
  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
        <React.Fragment>
            <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
  <div className="header-container">
    <motion.div className="logo-section" variants={logoVariants} initial="hidden" animate="visible">
      <div className="logo-icon">🍢</div>
      <div className="logo-text">
        <h1>MimiRichies Bite</h1>
         <p className="tagline">Premium Shawarma & Grill</p>
      </div>
    </motion.div>

    <motion.button
      type="button"
      className="menu-toggle"
      aria-expanded={menuOpen}
      aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
      onClick={toggleMenu}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {menuOpen ? '✕' : '☰'}
    </motion.button>

    <nav className={menuOpen ? 'nav-open' : ''}>
      <motion.div className="div" variants={logoVariants} initial='hidden' animate='visible'>
      <ul>
        <li><a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#menu" className="nav-link" onClick={() => setMenuOpen(false)}>Menu</a></li>
        <li><a href="#order" className="nav-link" onClick={() => setMenuOpen(false)}>Order</a></li>
        <li><a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>
      </motion.div>
    </nav>

    {/* Header actions removed for a clean navigation layout */}

  </div>
</motion.header>
        </React.Fragment>
  )
}

export default Header