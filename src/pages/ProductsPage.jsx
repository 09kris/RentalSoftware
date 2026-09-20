import React, { useState } from 'react';
import { Layers, Smartphone, Server, Globe, ExternalLink, X, CheckCircle2 } from 'lucide-react';

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const productsList = [
    {
      id: 'rentbiz-suite',
      category: 'business',
      categoryLabel: 'Business Software',
      title: 'RentBiz Management Suite',
      image: '/images/product_biz_suite.jpg',
      shortDesc: 'Complete business management software featuring inventory tracking, billing, POS, and sales analytics.',
      fullDesc: 'RentBiz Management Suite is an enterprise software solution engineered by Rent Software for retail and business operators. It automates inventory tracking, streamlines billing workflows, manages customer ledgers, and generates real-time operational reports.',
      stack: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Tailwind CSS'],
      features: [
        'Real-time inventory stock level monitoring & reorder alerts',
        'Fast POS checkout interface with thermal receipt printing',
        'Customer ledger management & transaction history',
        'Automated daily/monthly revenue & sales tax reports'
      ]
    },
    {
      id: 'rentapp-mobile',
      category: 'mobile',
      categoryLabel: 'Mobile Application',
      title: 'RentApp Mobile Client',
      image: '/images/product_mobile_app.jpg',
      shortDesc: 'A sleek Android & iOS mobile utility for real-time task management and remote field operations.',
      fullDesc: 'RentApp Mobile Client is a cross-platform smartphone application developed by Rent Software. Designed for field personnel and remote teams, it enables instant data synchronization, task execution tracking, and cloud document access.',
      stack: ['Flutter', 'Dart', 'Firebase', 'RESTful API', 'SQLite'],
      features: [
        'Cross-platform support for Android & iOS',
        'Offline data persistence with automatic cloud background sync',
        'Push notifications for critical operational alerts',
        'Secure user authentication with biometrics support'
      ]
    },
    {
      id: 'rent-api-gateway',
      category: 'api',
      categoryLabel: 'API Infrastructure',
      title: 'RentCloud Microservice Gateway',
      image: '/images/hero_tech_banner.jpg',
      shortDesc: 'High-speed API microservices framework powering multi-platform web and mobile synchronization.',
      fullDesc: 'RentCloud Microservice Gateway is our proprietary backend microservices layer that handles authentication, data serialization, rate-limiting, and database connectivity for all Rent Software applications.',
      stack: ['Node.js', 'Docker', 'Redis', 'PostgreSQL', 'Swagger'],
      features: [
        'Low-latency JSON API response routing',
        'JWT token-based authorization and RBAC controls',
        'Redis caching layer for high concurrency traffic',
        'Automated error reporting and transaction logging'
      ]
    }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? productsList 
    : productsList.filter(p => p.category === activeFilter);

  return (
    <div className="page-section">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag">Software Portfolio</span>
          <h1 className="section-title">Products & <span className="gradient-text">Projects</span></h1>
          <p className="section-subtitle">
            Explore software applications and technology solutions engineered by <strong>Rent Software</strong>.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <button 
            type="button" 
            className={`btn ${activeFilter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveFilter('all')}
            style={{ fontSize: '0.875rem', padding: '0.6rem 1.25rem' }}
          >
            All Projects
          </button>
          <button 
            type="button" 
            className={`btn ${activeFilter === 'business' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveFilter('business')}
            style={{ fontSize: '0.875rem', padding: '0.6rem 1.25rem' }}
          >
            Business Software
          </button>
          <button 
            type="button" 
            className={`btn ${activeFilter === 'mobile' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveFilter('mobile')}
            style={{ fontSize: '0.875rem', padding: '0.6rem 1.25rem' }}
          >
            Mobile Applications
          </button>
          <button 
            type="button" 
            className={`btn ${activeFilter === 'api' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveFilter('api')}
            style={{ fontSize: '0.875rem', padding: '0.6rem 1.25rem' }}
          >
            Backend & APIs
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid-3">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-img-box">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-content">
                <span className="product-category">{product.categoryLabel}</span>
                <h3 className="product-title">{product.title}</h3>
                <p className="product-desc">{product.shortDesc}</p>
                
                <div className="tag-list">
                  {product.stack.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="tag-item">{tech}</span>
                  ))}
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                  <button 
                    type="button" 
                    className="btn btn-secondary" 
                    style={{ width: '100%', fontSize: '0.875rem' }}
                    onClick={() => setSelectedProduct(product)}
                  >
                    View Project Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Modal */}
        {selectedProduct && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(11, 17, 32, 0.85)',
            backdropFilter: 'blur(12px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}>
            <div className="glass-panel" style={{
              maxWidth: '700px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              position: 'relative',
              border: '1px solid var(--border-hover)'
            }}>
              <button 
                type="button" 
                onClick={() => setSelectedProduct(null)}
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: '#FFF',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>

              <span className="product-category">{selectedProduct.categoryLabel}</span>
              <h2 style={{ fontSize: '1.8rem', color: '#FFF', marginBottom: '1rem' }}>{selectedProduct.title}</h2>
              
              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '260px', marginBottom: '1.5rem' }}>
                <img src={selectedProduct.image} alt={selectedProduct.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <p style={{ color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                {selectedProduct.fullDesc}
              </p>

              <h4 style={{ color: '#FFF', marginBottom: '0.75rem' }}>Key Modules & Specifications:</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                {selectedProduct.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-body)', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--accent)' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <h4 style={{ color: '#FFF', marginBottom: '0.75rem' }}>Tech Stack & Technologies:</h4>
              <div className="tag-list" style={{ marginBottom: '1.5rem' }}>
                {selectedProduct.stack.map((tech, idx) => (
                  <span key={idx} className="tag-item" style={{ fontSize: '0.85rem', padding: '0.4rem 0.8rem' }}>{tech}</span>
                ))}
              </div>

              <button 
                type="button" 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                onClick={() => setSelectedProduct(null)}
              >
                Close View
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
