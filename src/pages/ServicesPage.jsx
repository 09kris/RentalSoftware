import React from 'react';
import { Globe, Smartphone, Code, Cpu, Database, Briefcase, ShieldCheck, ArrowRight, Check } from 'lucide-react';

export default function ServicesPage({ setActivePage }) {
  const servicesList = [
    {
      id: 'web-dev',
      icon: <Globe size={32} />,
      title: 'Web Application Development',
      badge: 'Frontend & Backend',
      desc: 'We construct high-speed, secure, and modern web applications engineered for scalability. From responsive consumer web portals to complex enterprise web dashboards.',
      features: [
        'Single Page Applications (SPAs) & Progressive Web Apps',
        'Responsive, mobile-first design across all screen sizes',
        'Optimized frontend performance and fast load times',
        'Secure user authentication and data encryption'
      ]
    },
    {
      id: 'mobile-dev',
      icon: <Smartphone size={32} />,
      title: 'Mobile Application Development',
      badge: 'Android & iOS',
      desc: 'Full-cycle mobile app engineering for Android and iOS devices. Built for high performance, intuitive navigation, and Google Play Console compliance.',
      features: [
        'Native and cross-platform mobile development',
        'Offline storage & real-time sync capabilities',
        'Integration with camera, push notifications, and GPS',
        'Play Store and App Store submission readiness'
      ]
    },
    {
      id: 'custom-dev',
      icon: <Code size={32} />,
      title: 'Custom Software Development',
      badge: 'Tailored Solutions',
      desc: 'Bespoke software applications engineered specifically around your company’s unique operational requirements, workflows, and automated tasks.',
      features: [
        'Custom workflow automation tools',
        'Desktop & cross-platform software systems',
        'Legacy code refactoring and modern framework migration',
        'Strict adherence to modular software architecture'
      ]
    },
    {
      id: 'api-dev',
      icon: <Cpu size={32} />,
      title: 'API Development & Integration',
      badge: 'Connectivity',
      desc: 'Designing and deploying robust RESTful APIs, GraphQL endpoints, and microservices for reliable communication between web, mobile, and third-party services.',
      features: [
        'Secure RESTful & GraphQL API architecture',
        'Third-party payment & SMS gateway integrations',
        'Comprehensive OpenAPI / Swagger documentation',
        'Rate limiting, auth tokens, and API key management'
      ]
    },
    {
      id: 'database-dev',
      icon: <Database size={32} />,
      title: 'Database Development',
      badge: 'Data Architecture',
      desc: 'High-availability relational and NoSQL database design, data modeling, query optimization, and secure cloud backup protocols.',
      features: [
        'PostgreSQL, MySQL, and MongoDB architecture',
        'Database indexing and query optimization',
        'Automated database backup & recovery strategies',
        'Data migration and schema management'
      ]
    },
    {
      id: 'business-software',
      icon: <Briefcase size={32} />,
      title: 'Business Management Software',
      badge: 'ERP & POS Solutions',
      desc: 'Comprehensive software systems designed to streamline daily retail, distribution, and corporate operations.',
      features: [
        'Inventory tracking and stock management',
        'Point-of-Sale (POS) and automated billing',
        'Customer Relationship Management (CRM) tools',
        'Financial reporting & analytics dashboards'
      ]
    },
    {
      id: 'support-maintenance',
      icon: <ShieldCheck size={32} />,
      title: 'Software Maintenance and Support',
      badge: 'Ongoing Support',
      desc: 'Dedicated technical maintenance, security audit updates, bug remediation, and continuous feature upgrades to ensure long-term software health.',
      features: [
        'Routine security updates & patch management',
        'Performance monitoring and bug fixing',
        'Version upgrades & dependency maintenance',
        '24/7 technical incident support'
      ]
    }
  ];

  return (
    <div className="page-section">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-tag">Engineering Capabilities</span>
          <h1 className="section-title">Our Software <span className="gradient-text">Services</span></h1>
          <p className="section-subtitle">
            <strong>Rent Software</strong> provides end-to-end software development services tailored for modern businesses, mobile users, and enterprise clients.
          </p>
        </div>

        {/* Services List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {servicesList.map((service) => (
            <div 
              key={service.id} 
              className="glass-card" 
              style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', padding: '2.5rem' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div className="service-icon-box" style={{ marginBottom: 0 }}>
                    {service.icon}
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {service.badge}
                    </span>
                    <h2 style={{ fontSize: '1.6rem', color: '#FFF' }}>{service.title}</h2>
                  </div>
                </div>
                <p style={{ color: 'var(--text-body)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  {service.desc}
                </p>
                <div style={{ marginTop: 'auto' }}>
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    style={{ fontSize: '0.9rem' }}
                    onClick={() => {
                      setActivePage('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    Inquire About This Service <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Feature Checklist */}
              <div style={{ background: 'var(--bg-dark)', padding: '1.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                <h4 style={{ color: '#FFF', fontSize: '1rem', marginBottom: '1rem' }}>Key Deliverables & Specifications:</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-body)', fontSize: '0.95rem' }}>
                      <Check size={18} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
