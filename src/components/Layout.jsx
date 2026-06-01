import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Compass, Menu, X } from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleNavClick = (hash) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      // If we are not on the home page, redirect to home page with hash
      window.location.href = `/${hash}`;
    } else {
      // If on home page, scroll smoothly
      const el = document.querySelector(hash);
      if (el) {
        // Offset for sticky header
        const yOffset = -80; 
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const NavButton = ({ hash, children }) => (
    <button 
      onClick={() => handleNavClick(hash)} 
      className="nav-btn"
      style={{ 
        fontWeight: 500, 
        background: 'none', 
        border: 'none', 
        color: 'inherit', 
        cursor: 'pointer',
        fontSize: '1rem',
        padding: '0.5rem'
      }}
    >
      {children}
    </button>
  );

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ 
        borderBottom: '1px solid var(--border-color)', 
        backgroundColor: 'var(--bg-primary)',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div className="container" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          height: '5rem' 
        }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1.5rem', zIndex: 51 }}>
            <Compass size={32} color="var(--accent-color)" />
            <span>Design.in<span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>Tours</span></span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <NavButton hash="#destinations">Destinations</NavButton>
            <NavButton hash="#about">About</NavButton>
            <NavButton hash="#contact">Contact</NavButton>
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation Controls */}
          <div className="mobile-nav-controls" style={{ display: 'none', alignItems: 'center', gap: '1rem', zIndex: 51 }}>
            <ThemeToggle />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem 1.5rem' }}>
            <button onClick={() => handleNavClick('#destinations')} className="mobile-nav-item">Destinations</button>
            <button onClick={() => handleNavClick('#about')} className="mobile-nav-item">About Us</button>
            <button onClick={() => handleNavClick('#contact')} className="mobile-nav-item">Contact</button>
          </div>
        </div>
      </header>

      <main style={{ flex: 1 }}>
        {children}
      </main>

      <footer style={{ backgroundColor: 'var(--bg-secondary)', padding: '4rem 0', marginTop: 'auto' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ flex: '1 1 300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '1.25rem', marginBottom: '1rem' }}>
              <Compass size={24} color="var(--accent-color)" />
              <span>Design.in Tours</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '300px' }}>
              Curated travel experiences for the modern explorer. Minimalist journeys, maximum memories.
            </p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1rem', fontWeight: 600 }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)' }}>
              <li><button onClick={() => handleNavClick('#')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>Home</button></li>
              <li><button onClick={() => handleNavClick('#destinations')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>Destinations</button></li>
              <li><button onClick={() => handleNavClick('#contact')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>Contact</button></li>
            </ul>
          </div>
        </div>
        <div className="container" style={{ textAlign: 'center', color: 'var(--text-secondary)', marginTop: '3rem', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} Design.in Tours. All rights reserved. Designed by Priyanshu Saha.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
