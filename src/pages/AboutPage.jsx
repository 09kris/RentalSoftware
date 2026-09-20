import React from 'react';
import { MapPin, ShieldCheck, Zap, Users, Code2, Cpu, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="page-section">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-tag">About Organization</span>
          <h1 className="section-title">About <span className="gradient-text">Rent Software</span></h1>
          <p className="section-subtitle">
            A software development organization based in Deesa, Gujarat, India, delivering high-quality web applications, mobile apps, and custom software systems.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid-2" style={{ alignItems: 'center', marginBottom: '5rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#FFF' }}>
              Who We Are & What We Do
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.25rem' }}>
              <strong>Rent Software</strong> is an official software engineering and IT services organization headquartered in <strong>Deesa, Gujarat, India</strong>.
            </p>
            <p style={{ color: 'var(--text-body)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Our organization develops, maintains, and deploys modern software applications, web applications, mobile software, and custom business management systems tailored for enterprise operations and retail customers.
            </p>

            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--accent)', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#FFF', fontWeight: '700', marginBottom: '0.5rem' }}>
                <MapPin size={20} style={{ color: 'var(--accent)' }} />
                <span>Headquarters Location</span>
              </div>
              <p style={{ color: 'var(--text-body)', fontSize: '0.95rem', margin: 0 }}>
                Deesa, Gujarat, India - 385535
              </p>
            </div>
          </div>

          {/* Core Values Card */}
          <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '1.5rem', color: '#FFF' }}>Our Engineering Focus</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ background: 'rgba(37, 99, 235, 0.15)', width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60A5FA', flexShrink: 0 }}>
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <strong style={{ color: '#FFF', display: 'block' }}>Reliable Software</strong>
                  <span style={{ color: 'var(--text-body)', fontSize: '0.9rem' }}>We write well-tested, robust code structured for stability and long-term uptime.</span>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ background: 'rgba(6, 182, 212, 0.15)', width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', flexShrink: 0 }}>
                  <Zap size={20} />
                </div>
                <div>
                  <strong style={{ color: '#FFF', display: 'block' }}>Scalable Architecture</strong>
                  <span style={{ color: 'var(--text-body)', fontSize: '0.9rem' }}>Our applications are architected to scale effortlessly as user demand grows.</span>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ background: 'rgba(99, 102, 241, 0.15)', width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--indigo)', flexShrink: 0 }}>
                  <Users size={20} />
                </div>
                <div>
                  <strong style={{ color: '#FFF', display: 'block' }}>User-Centric Design</strong>
                  <span style={{ color: 'var(--text-body)', fontSize: '0.9rem' }}>Clean interfaces and intuitive user flows designed for mobile and web end-users.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Technical Capabilities Section */}
        <div style={{ background: 'var(--bg-card)', padding: '3.5rem 2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            <span className="section-tag">Core Development Domains</span>
            <h2 className="section-title">What Powers Our Solutions</h2>
          </div>

          <div className="grid-3">
            <div className="glass-card">
              <div style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
                <Code2 size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#FFF' }}>Full-Stack Web Engineering</h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.95rem' }}>
                Modern single-page and multi-page web applications utilizing React, Node.js, RESTful microservices, and secure authentication protocols.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
                <Cpu size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#FFF' }}>Mobile Ecosystems</h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.95rem' }}>
                Cross-platform mobile applications engineered for high responsiveness, offline capabilities, background notifications, and Google Play ecosystem deployment.
              </p>
            </div>

            <div className="glass-card">
              <div style={{ color: 'var(--accent)', marginBottom: '1rem' }}>
                <CheckCircle size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#FFF' }}>Business Management Systems</h3>
              <p style={{ color: 'var(--text-body)', fontSize: '0.95rem' }}>
                Operational software tools including inventory tracking, point-of-sale systems, billing solutions, and automated enterprise record management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
