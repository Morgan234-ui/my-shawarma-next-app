'use client'
import React from 'react'
import { useState } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev)

  return (
        <React.Fragment>
            <header>
  <div className="header-container">
    <div className="logo-section">
      <div className="logo-icon">🍢</div>
      <div className="logo-text">
        <h1>MimiRichies Bite</h1>
         <p className="tagline">Premium Shawarma & Grill</p>
      </div>
    </div>

    <button
      type="button"
      className="menu-toggle"
      aria-expanded={menuOpen}
      aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
      onClick={toggleMenu}
    >
      {menuOpen ? '✕' : '☰'}
    </button>

    <nav className={menuOpen ? 'nav-open' : ''}>
      <ul>
        <li><a href="#home" className="nav-link">Home</a></li>
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#menu" className="nav-link">Menu</a></li>
        <li><a href="#order" className="nav-link">Order</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
      </ul>
    </nav>

    {/* Header actions removed for a clean navigation layout */}

  </div>
</header>
        </React.Fragment>
  )
}

export default Header