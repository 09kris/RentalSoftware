import React from 'react';
import { Code2, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const handlePageChange = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = id;
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <a 
              href="#home" 
              className="logo"
              onClick={(e) => { e.preventDefault(); handlePageChange('home'); }}
            >
              <div className="logo-icon">
                <Code2 size={24} />
              </div>
              <span>Rent <span className="gradient-text">Software</span></span>
            </a>
            <p>
              Software Solutions for Modern Businesses. We specialize in web applications, mobile apps, API integrations, and custom software engineering.
            </p>
            <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--accent)', fontSize: '0.9rem' }}>
              <MapPin size={18} />
              <strong style={{ color: '#FFF' }}>Deesa, Gujarat, India</strong>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-title">Navigation</h4>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); handlePageChange('home'); }}>Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); handlePageChange('about'); }}>About Us</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => { e.preventDefault(); handlePageChange('services'); }}>Services</a>
              </li>
              <li>
                <a href="#products" onClick={(e) => { e.preventDefault(); handlePageChange('products'); }}>Products & Projects</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => { e.preventDefault(); handlePageChange('contact'); }}>Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Legal Pages (Required for Google Verification) */}
          <div>
            <h4 className="footer-title">Legal & Compliance</h4>
            <ul className="footer-links">
              <li>
                <a href="#privacy" onClick={(e) => { e.preventDefault(); handlePageChange('privacy'); }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" onClick={(e) => { e.preventDefault(); handlePageChange('terms'); }}>
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-title">Organization Info</h4>
            <ul className="footer-links" style={{ gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <MapPin size={18} style={{ color: 'var(--accent)', marginTop: '3px', flexShrink: 0 }} />
                <span>Deesa, Gujarat, India - 385535</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <a href="mailto:contact@rentsoftware.in">contact@rentsoftware.in</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Mail size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                <a href="mailto:support@rentsoftware.in">support@rentsoftware.in</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            Copyright © 2026 <strong>Rent Software</strong>. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#privacy" onClick={(e) => { e.preventDefault(); handlePageChange('privacy'); }}>Privacy Policy</a>
            <span>•</span>
            <a href="#terms" onClick={(e) => { e.preventDefault(); handlePageChange('terms'); }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
