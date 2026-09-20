import React, { useState } from 'react';
import { Menu, X, Code2, ArrowRight } from 'lucide-react';

export default function Header({ activePage, setActivePage }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'products', label: 'Products & Projects' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = id;
  };

  return (
    <header className="header-sticky">
      <div className="container">
        <div className="nav-wrapper">
          {/* Logo */}
          <a 
            href="#home" 
            className="logo" 
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
          >
            <div className="logo-icon">
              <Code2 size={24} />
            </div>
            <span>Rent <span className="gradient-text">Software</span></span>
          </a>

          {/* Desktop Nav */}
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Header CTA */}
          <div className="header-cta">
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => handleNavClick('contact')}
            >
              Get in Touch <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button 
            type="button" 
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`mobile-nav-link ${activePage === item.id ? 'active' : ''}`}
            onClick={() => handleNavClick(item.id)}
            style={{ background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}
          >
            {item.label}
          </button>
        ))}
        <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
          <button 
            type="button" 
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={() => handleNavClick('contact')}
          >
            Contact Us <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}
