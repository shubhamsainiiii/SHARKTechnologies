import { motion } from 'framer-motion';
import { FiGlobe, FiSmartphone, FiLayout, FiServer, FiCloud, FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/common/index.jsx';
import { techCategories } from '../constants/techStack';
import CtaBanner from '../components/home/CtaBanner';

const services = [
    {
        icon: FiGlobe,
        title: 'Web Development',
        desc: 'We build production-grade web applications with React, Next.js, and modern full-stack architectures. From SaaS platforms to enterprise portals, we cover it all.',
        features: ['Custom CMS Integration', 'SEO-optimized Structure', 'Progressive Web Apps', 'Real-time Features', 'Payment Integration', 'Multi-language Support'],
        accent: '#00d4ff',
    },
    {
        icon: FiSmartphone,
        title: 'Mobile App Development',
        desc: 'iOS and Android apps built with React Native or Flutter. We deliver native performance, beautiful UX, and seamless API integrations.',
        features: ['Cross-platform (iOS + Android)', 'Push Notifications', 'Offline Support', 'App Store Deployment', 'In-app Purchases', 'Analytics Integration'],
        accent: '#ff6b35',
    },
    {
        icon: FiLayout,
        title: 'UI/UX Design',
        desc: 'From user research to final pixel — we design interfaces that are intuitive, accessible, and visually stunning. Every design decision is backed by data.',
        features: ['User Research & Personas', 'Wireframing & Prototyping', 'Design Systems', 'Figma Handoff', 'Usability Testing', 'Brand Identity'],
        accent: '#a78bfa',
    },
    {
        icon: FiServer,
        title: 'API & Backend Development',
        desc: 'Scalable REST and GraphQL APIs, microservices, database architecture, and third-party integrations for any complexity level.',
        features: ['RESTful API Design', 'GraphQL Services', 'Microservices', 'Database Optimization', 'Authentication Systems', 'Webhook Integrations'],
        accent: '#00ff88',
    },
    {
        icon: FiCloud,
        title: 'Cloud & DevOps',
        desc: 'Full infrastructure setup on AWS, GCP or Azure. CI/CD pipelines, Docker, Kubernetes, monitoring, and auto-scaling for production workloads.',
        features: ['AWS / GCP / Azure Setup', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Auto-scaling', 'Monitoring & Alerts', 'Cost Optimization'],
        accent: '#fbbf24',
    },
    {
        icon: FiTrendingUp,
        title: 'Performance & SEO',
        desc: 'Speed up your existing apps and rank higher. We audit, optimize, and fix performance bottlenecks for maximum Core Web Vitals scores.',
        features: ['Core Web Vitals Audit', 'Image & Bundle Optimization', 'Server-side Rendering', 'Technical SEO', 'Structured Data', 'Lighthouse 90+ Scores'],
        accent: '#f472b6',
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section style={{ paddingTop: '160px', paddingBottom: '80px', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }} className="grid-bg">
                <div style={{
                    position: 'absolute', top: '30%', right: '10%',
                    width: '400px', height: '400px',
                    background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }} />
                <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)',
                            borderRadius: '50px', padding: '6px 16px',
                            fontSize: '0.72rem', fontFamily: 'Syne, sans-serif', fontWeight: '700',
                            letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)',
                            marginBottom: '22px',
                        }}>
                            What We Offer
                        </span>
                        <h1 style={{
                            fontFamily: 'Syne, sans-serif', fontWeight: '800',
                            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                            lineHeight: '1.08', letterSpacing: '-0.03em',
                            color: 'var(--text-primary)', marginBottom: '20px', maxWidth: '700px',
                        }}>
                            Services That Drive{' '}
                            <span style={{
                                background: 'linear-gradient(135deg, var(--accent), #00ffcc)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                            }}>Real Results</span>
                        </h1>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '520px' }}>
                            A full spectrum of digital services — from design to deployment. We own every layer of your product.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services list */}
            <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container-custom">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {services.map((service, i) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                    className="card-hover"
                                    style={{
                                        background: 'var(--bg-card)',
                                        border: '1px solid var(--border)',
                                        borderRadius: '20px',
                                        padding: '40px',
                                        display: 'grid',
                                        gridTemplateColumns: '1fr 1fr',
                                        gap: '40px',
                                        alignItems: 'center',
                                        position: 'relative',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <div style={{
                                        position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px',
                                        background: `linear-gradient(to bottom, ${service.accent}, transparent)`,
                                        borderRadius: '20px 0 0 20px',
                                    }} />

                                    <div style={{ paddingLeft: '12px' }}>
                                        <div style={{
                                            width: '52px', height: '52px',
                                            background: `${service.accent}15`,
                                            border: `1px solid ${service.accent}30`,
                                            borderRadius: '14px',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: '22px', color: service.accent, marginBottom: '20px',
                                        }}>
                                            <Icon />
                                        </div>
                                        <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '12px', letterSpacing: '-0.01em' }}>
                                            {service.title}
                                        </h3>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.75' }}>
                                            {service.desc}
                                        </p>
                                    </div>

                                    <div>
                                        <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '14px' }}>
                                            What's Included
                                        </p>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                            {service.features.map(f => (
                                                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: service.accent, flexShrink: 0 }} />
                                                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{f}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <style>{`@media(max-width:767px){.service-grid{grid-template-columns:1fr !important;}}`}</style>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
                <div className="container-custom">
                    <SectionTitle eyebrow="Tech Stack" title="Technologies We Master" subtitle="We pick the right tool for every job. Here's what powers our solutions." />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
                        {techCategories.map((cat, i) => (
                            <motion.div
                                key={cat.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                                style={{
                                    background: 'var(--bg-card)', border: '1px solid var(--border)',
                                    borderRadius: '16px', padding: '24px',
                                }}
                            >
                                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: cat.color, marginBottom: '14px' }}>
                                    {cat.category}
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {cat.techs.map(tech => (
                                        <span key={tech} style={{
                                            padding: '4px 10px',
                                            background: `${cat.color}10`,
                                            border: `1px solid ${cat.color}20`,
                                            borderRadius: '6px',
                                            fontSize: '0.78rem',
                                            color: 'var(--text-secondary)',
                                            fontFamily: 'DM Sans, sans-serif',
                                        }}>{tech}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CtaBanner />
        </>
    );
}