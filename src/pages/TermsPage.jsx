import React from 'react';

export default function TermsPage() {
  return (
    <div className="page-section">
      <div className="container" style={{ maxWidth: '960px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-tag">Terms & Conditions</span>
          <h1 className="section-title">Terms of Service</h1>
          <p style={{ color: 'var(--text-body)', fontSize: '1rem' }}>
            Effective Date: September 20, 2026 | Organization: Rent Software
          </p>
        </div>

        <div className="legal-content">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the website, software applications, or IT services provided by <strong>Rent Software</strong> ("Organization", "we", "us"), headquartered in <strong>Deesa, Gujarat, India</strong>, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access or use our services.
          </p>

          <h2>2. Software & Digital Services</h2>
          <p>
            Rent Software provides software engineering, web application development, mobile application development, API microservices, and custom business management software solutions.
          </p>
          <p>
            Users and clients agree to use our software applications strictly for lawful purposes and in compliance with all applicable local, national, and international laws.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All original code, graphics, user interfaces, branding, product designs, and content created by <strong>Rent Software</strong> are the exclusive property of Rent Software and protected under copyright and trademark laws.
          </p>

          <h2>4. User Responsibilities & Acceptable Use</h2>
          <p>When interacting with Rent Software platforms or services, you agree NOT to:</p>
          <ul>
            <li>Attempt to decompile, reverse engineer, or extract source code from proprietary applications without written permission.</li>
            <li>Use applications to transmit malware, viruses, or harmful scripts.</li>
            <li>Interfere with server security, RESTful APIs, or application backend performance.</li>
          </ul>

          <h2>5. Disclaimer of Warranties</h2>
          <p>
            Our software applications and website services are provided on an "AS IS" and "AS AVAILABLE" basis. While Rent Software strives for high reliability and security, we make no explicit warranties that services will be uninterrupted or error-free.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Rent Software shall not be liable for indirect, incidental, special, or consequential damages resulting from the use or inability to use our software applications or web services.
          </p>

          <h2>7. Governing Law & Jurisdiction</h2>
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of India. Any legal proceedings or disputes arising under these terms shall be subject to the jurisdiction of the competent courts in <strong>Deesa, Gujarat, India</strong>.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. Continued use of our website or software after updates constitutes acceptance of the modified terms.
          </p>

          <h2>9. Contact Information</h2>
          <p>
            If you have questions regarding these Terms of Service, please contact:
          </p>
          <div style={{ background: 'var(--bg-dark)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', marginTop: '1rem' }}>
            <p style={{ color: '#FFF', fontWeight: '700', marginBottom: '0.4rem' }}>Rent Software</p>
            <p style={{ color: 'var(--text-body)', margin: 0, fontSize: '0.95rem' }}>
              Deesa, Gujarat, India - 385535<br />
              Email: <a href="mailto:contact@rentsoftware.in" style={{ color: 'var(--accent)' }}>contact@rentsoftware.in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
