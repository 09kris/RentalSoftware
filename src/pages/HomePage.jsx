import React from 'react';
import { ArrowRight, Code2, Globe, Smartphone, Cpu, Database, ShieldCheck, CheckCircle2, Layers } from 'lucide-react';

export default function HomePage({ setActivePage }) {
  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = pageId;
  };

  const coreServices = [
    {
      icon: <Globe size={28} />,
      title: 'Web Application Development',
      desc: 'High-performance, scalable web platforms built with modern frontend frameworks and robust backend microservices.'
    },
    {
      icon: <Smartphone size={28} />,
      title: 'Mobile Application Development',
      desc: 'Native and cross-platform Android & iOS mobile applications designed for seamless user experience and performance.'
    },
    {
      icon: <Cpu size={28} />,
      title: 'Custom Software Development',
      desc: 'Tailored enterprise software applications built specifically to meet unique business workflows and operational demands.'
    },
    {
      icon: <Database size={28} />,
      title: 'API & Database Systems',
      desc: 'Secure RESTful APIs, GraphQL integrations, high-availability database architectures, and cloud data management.'
    },
    {
      icon: <Layers size={28} />,
      title: 'Business Management Software',
      desc: 'All-in-one software suites for inventory management, sales tracking, invoicing, and business process automation.'
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'Maintenance & Support',
      desc: 'Continuous software monitoring, security patching, feature enhancements, and dedicated technical maintenance.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-badge">
                <Code2 size={16} /> Software Engineering & IT Services
              </div>
              <h1 className="hero-title">
                Software Solutions for <span className="gradient-text">Modern Businesses</span>
              </h1>
              <p className="hero-desc">
                <strong>Rent Software</strong> develops high-reliability software, web applications, mobile apps, and custom digital solutions designed to help businesses optimize operations and achieve digital growth.
              </p>
              <div className="hero-actions">
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => navigateTo('services')}
                >
                  Explore Services <ArrowRight size={18} />
                </button>
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => navigateTo('contact')}
                >
                  Contact Us
                </button>
              </div>

              {/* Trust Features */}
              <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', color: 'var(--text-body)', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent)' }} /> Reliable Codebase
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent)' }} /> Scalable Architecture
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--accent)' }} /> Deesa, Gujarat, India
                </div>
              </div>
            </div>

            {/* Visual Banner */}
            <div className="hero-image-wrapper">
              <img 
                src="/images/hero_tech_banner.jpg" 
                alt="Rent Software Technical Infrastructure Banner" 
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Organization Introduction Section */}
      <section className="page-section" style={{ background: 'rgba(15, 23, 42, 0.5)' }}>
        <div className="container">
          <div className="glass-panel" style={{ borderRadius: 'var(--radius-lg)', padding: '3rem 2.5rem', border: '1px solid var(--border-subtle)' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
              <span className="section-tag">About Rent Software</span>
              <h2 className="section-title">Built for Performance, Security, and Scalability</h2>
              <p style={{ color: 'var(--text-body)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                Based in <strong>Deesa, Gujarat, India</strong>, <strong>Rent Software</strong> is a dedicated software development organization focused on delivering reliable digital solutions. We design, code, deploy, and maintain software tailored for businesses, enterprise clients, and mobile end-users.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', textAlign: 'left', marginTop: '2.5rem' }}>
                <div className="glass-card">
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Web & Mobile Apps</h4>
                  <p style={{ color: 'var(--text-body)', fontSize: '0.9rem' }}>Responsive web applications and intuitive mobile applications crafted with modern tech stacks.</p>
                </div>
                <div className="glass-card">
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Custom Software</h4>
                  <p style={{ color: 'var(--text-body)', fontSize: '0.9rem' }}>Specialized software built around exact operational workflows and business requirements.</p>
                </div>
                <div className="glass-card">
                  <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Support & Upkeep</h4>
                  <p style={{ color: 'var(--text-body)', fontSize: '0.9rem' }}>Long-term software maintenance, security updates, and active system optimization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="page-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Our Software Engineering Services</h2>
          <p className="section-subtitle">
            Comprehensive software development capabilities from concept to production deployment.
          </p>

          <div className="grid-3" style={{ textAlign: 'left' }}>
            {coreServices.map((service, idx) => (
              <div key={idx} className="glass-card">
                <div className="service-icon-box">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem' }}>
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => navigateTo('services')}
            >
              View Full Services Menu <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Teaser */}
      <section className="page-section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <span className="section-tag">Our Work</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Featured Solutions & Products</h2>
            </div>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={() => navigateTo('products')}
            >
              Explore All Projects <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid-2">
            <div className="product-card">
              <div className="product-img-box">
                <img src="/images/product_biz_suite.jpg" alt="RentBiz Enterprise Suite UI" />
              </div>
              <div className="product-content">
                <span className="product-category">Business Software</span>
                <h3 className="product-title">RentBiz Enterprise Suite</h3>
                <p className="product-desc">
                  An integrated business management software providing real-time sales tracking, stock control, customer ledger management, and automated invoicing.
                </p>
                <div className="tag-list">
                  <span className="tag-item">React</span>
                  <span className="tag-item">Node.js</span>
                  <span className="tag-item">PostgreSQL</span>
                  <span className="tag-item">Web App</span>
                </div>
              </div>
            </div>

            <div className="product-card">
              <div className="product-img-box">
                <img src="/images/product_mobile_app.jpg" alt="RentApp Mobile Client UI" />
              </div>
              <div className="product-content">
                <span className="product-category">Mobile Application</span>
                <h3 className="product-title">RentApp Mobile Utility</h3>
                <p className="product-desc">
                  A high-performance Android & iOS mobile app designed for real-time data sync, task organization, and secure cloud connectivity for field operations.
                </p>
                <div className="tag-list">
                  <span className="tag-item">Flutter</span>
                  <span className="tag-item">REST API</span>
                  <span className="tag-item">Mobile</span>
                  <span className="tag-item">Android / iOS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="page-section">
        <div className="container">
          <div className="glass-panel" style={{ borderRadius: 'var(--radius-lg)', padding: '4rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <h2 className="section-title" style={{ fontSize: '2.25rem' }}>
              Ready to build your next software solution?
            </h2>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              Contact <strong>Rent Software</strong> today to discuss software development requirements, API integration, or mobile application development.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => navigateTo('contact')}
              >
                Get In Touch With Us <ArrowRight size={16} />
              </button>
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={() => navigateTo('about')}
              >
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
