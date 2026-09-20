import React from 'react';
import { ShieldCheck, Mail, MapPin } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="page-section">
      <div className="container" style={{ maxWidth: '960px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-tag">Legal Compliance</span>
          <h1 className="section-title">Privacy Policy</h1>
          <p style={{ color: 'var(--text-body)', fontSize: '1rem' }}>
            Effective Date: September 20, 2026 | Last Updated: September 20, 2026
          </p>
        </div>

        <div className="legal-content">
          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy describes how <strong>Rent Software</strong> ("Organization", "we", "us", or "our"), headquartered in <strong>Deesa, Gujarat, India</strong>, collects, uses, stores, and protects personal information when you visit our website, utilize our software development services, or interact with mobile applications developed and distributed by Rent Software.
          </p>
          <p>
            We are committed to maintaining the confidentiality, security, and integrity of your data in accordance with applicable legal standards and developer policy guidelines, including Google Play Developer Program Policies.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect information directly from you when you interact with our website or applications:</p>
          <ul>
            <li>
              <strong>Contact & Identity Data:</strong> Name, email address, phone number, and organization details submitted voluntarily via our contact form or support requests.
            </li>
            <li>
              <strong>Technical & Device Data:</strong> IP address, browser type, operating system version, device identifiers, and page navigation statistics gathered automatically when accessing our website.
            </li>
            <li>
              <strong>Application Usage Data:</strong> For software and mobile apps developed by Rent Software, minimal diagnostics, error reports, and functional data necessary for application performance.
            </li>
          </ul>

          <h2>3. How We Use Information</h2>
          <p>Rent Software uses collected information strictly for legitimate organizational purposes:</p>
          <ul>
            <li>To respond to inquiries and deliver software development & IT services.</li>
            <li>To maintain, optimize, and secure our software systems and mobile applications.</li>
            <li>To communicate updates, technical patches, or administrative notices.</li>
            <li>To comply with legal obligations and prevent fraud or unauthorized access.</li>
          </ul>

          <h2>4. Data Protection & Security</h2>
          <p>
            Rent Software implements industry-standard technical and organizational safeguards, including SSL/TLS encryption, firewall protection, role-based access control, and secure database protocols to guard against unauthorized access, loss, or misuse of personal data.
          </p>

          <h2>5. Third-Party Services & Analytics</h2>
          <p>
            We do not sell, trade, or rent personal data to third parties. We may utilize trusted third-party infrastructure providers (such as web hosting, cloud database servers, or analytics tools) strictly to operate our software applications. These service providers are bound by strict data protection agreements.
          </p>

          <h2>6. Mobile Application Privacy (Google Play Console Alignment)</h2>
          <p>
            For mobile applications published by Rent Software on the Google Play Store:
          </p>
          <ul>
            <li>Applications only request permissions strictly required for core functionality.</li>
            <li>No confidential user data is collected without explicit user consent.</li>
            <li>Users can request account deletion or data removal by contacting our support team at <a href="mailto:support@rentsoftware.in" style={{ color: 'var(--accent)' }}>support@rentsoftware.in</a>.</li>
          </ul>

          <h2>7. Cookies Policy</h2>
          <p>
            Our website uses minimal essential cookies to ensure proper page navigation and site functionality. You can modify your browser settings to refuse non-essential cookies.
          </p>

          <h2>8. Your Data Rights</h2>
          <p>
            Under applicable data protection laws, you have the right to request access to your personal data, request correction of inaccurate data, or request deletion of your information stored by Rent Software.
          </p>

          <h2>9. Contact Information</h2>
          <p>
            If you have questions, concerns, or data privacy requests regarding this Privacy Policy, please contact our privacy officer:
          </p>
          <div style={{ background: 'var(--bg-dark)', padding: '1.5rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', marginTop: '1rem' }}>
            <p style={{ color: '#FFF', fontWeight: '700', marginBottom: '0.4rem' }}>Rent Software</p>
            <p style={{ color: 'var(--text-body)', margin: 0, fontSize: '0.95rem' }}>
              Deesa, Gujarat, India - 385535<br />
              Email: <a href="mailto:contact@rentsoftware.in" style={{ color: 'var(--accent)' }}>contact@rentsoftware.in</a> / <a href="mailto:support@rentsoftware.in" style={{ color: 'var(--accent)' }}>support@rentsoftware.in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
