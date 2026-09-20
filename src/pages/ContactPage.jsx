import React, { useState } from 'react';
import { MapPin, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: 'Web Application Development',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrorMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please fill in all required fields (Name, Email, and Message).');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    // Simulate successful form submission
    setSubmitted(true);
  };

  return (
    <div className="page-section">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-tag">Reach Out</span>
          <h1 className="section-title">Contact <span className="gradient-text">Rent Software</span></h1>
          <p className="section-subtitle">
            Get in touch with our software engineering team in Deesa, Gujarat, India for project inquiries or support.
          </p>
        </div>

        <div className="contact-grid">
          {/* Organization Contact Details */}
          <div>
            <h2 style={{ fontSize: '1.8rem', color: '#FFF', marginBottom: '1.5rem' }}>
              Organization Information
            </h2>
            <p style={{ color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '2rem' }}>
              Whether you need web app engineering, mobile software development, API integration, or custom business software, <strong>Rent Software</strong> is ready to assist.
            </p>

            <div className="info-item">
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="info-title">Headquarters Address</h3>
                <p className="info-text">
                  <strong>Rent Software</strong><br />
                  Deesa, Gujarat, India - 385535
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="info-title">Official Contact Emails</h3>
                <p className="info-text">
                  General Inquiries: <a href="mailto:contact@rentsoftware.in" style={{ color: 'var(--accent)' }}>contact@rentsoftware.in</a><br />
                  Technical Support: <a href="mailto:support@rentsoftware.in" style={{ color: 'var(--accent)' }}>support@rentsoftware.in</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="info-title">Operating Hours</h3>
                <p className="info-text">
                  Monday – Saturday: 09:00 AM – 06:30 PM (IST)<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Google Maps Location Section */}
            <div className="map-box">
              <iframe
                title="Rent Software Location - Deesa, Gujarat, India"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58284.14856417743!2d72.164303!3d24.258414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395ce6f0d984711f%3A0x7d28383e440445d4!2sDeesa%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
            <h2 style={{ fontSize: '1.6rem', color: '#FFF', marginBottom: '1.5rem' }}>
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="alert-success" style={{ flexDirection: 'column', alignItems: 'flex-start', padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.2rem', fontWeight: 700 }}>
                  <CheckCircle2 size={28} /> Thank You for Contacting Rent Software!
                </div>
                <p style={{ marginTop: '0.75rem', color: '#E2E8F0', fontSize: '0.95rem' }}>
                  Your message has been received. Our team will review your request and get back to you at <strong>{formData.email}</strong> shortly.
                </p>
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  style={{ marginTop: '1.5rem' }}
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: '', service: 'Web Application Development', message: '' });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {errorMsg && (
                  <div style={{
                    padding: '0.85rem 1.1rem',
                    background: 'rgba(239, 68, 68, 0.15)',
                    border: '1px solid rgba(239, 68, 68, 0.4)',
                    color: '#FCA5A5',
                    borderRadius: 'var(--radius-sm)',
                    marginBottom: '1.25rem',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <AlertCircle size={18} /> {errorMsg}
                  </div>
                )}

                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-control" 
                    placeholder="Enter your full name" 
                    value={formData.name} 
                    onChange={handleChange} 
                  />
                </div>

                <div className="grid-2" style={{ gap: '1rem', marginBottom: 0 }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className="form-control" 
                      placeholder="name@example.com" 
                      value={formData.email} 
                      onChange={handleChange} 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone Number (Optional)</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      className="form-control" 
                      placeholder="+91 Mobile number" 
                      value={formData.phone} 
                      onChange={handleChange} 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="service">Service of Interest</label>
                  <select 
                    id="service" 
                    name="service" 
                    className="form-control" 
                    value={formData.service} 
                    onChange={handleChange}
                  >
                    <option value="Web Application Development">Web Application Development</option>
                    <option value="Mobile Application Development">Mobile Application Development</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="API Development">API Development & Integration</option>
                    <option value="Database Development">Database Development</option>
                    <option value="Business Management Software">Business Management Software</option>
                    <option value="Software Maintenance and Support">Software Maintenance and Support</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message / Project Details *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    className="form-control" 
                    placeholder="Briefly describe your software project or inquiry..." 
                    value={formData.message} 
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                  Submit Inquiry <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
