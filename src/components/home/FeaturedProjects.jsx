import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiExternalLink, FiGithub } from 'react-icons/fi';
import { SectionTitle } from '../common/index.jsx';

const projects = [
    {
        title: 'FinTrack Dashboard',
        category: 'Web App',
        desc: 'Real-time financial analytics platform with live data, custom charts, and role-based access control.',
        tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
        color: '#00d4ff',
        slug: 'fintrack-dashboard',
        featured: true,
    },
    {
        title: 'ShopNest E-Commerce',
        category: 'Full-Stack',
        desc: 'End-to-end e-commerce platform with payment gateway, inventory management, and seller dashboard.',
        tech: ['Next.js', 'Stripe', 'PostgreSQL'],
        color: '#ff6b35',
        slug: 'shopnest',
        featured: false,
    },
    {
        title: 'Wellness Mobile App',
        category: 'Mobile',
        desc: 'Cross-platform health tracking app with AI-powered insights, push notifications, and wearable sync.',
        tech: ['React Native', 'FastAPI', 'Redis'],
        color: '#00ff88',
        slug: 'wellness-app',
        featured: false,
    },
];

export default function FeaturedProjects() {
    return (
        <section className="section-padding" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '50%',
                right: '-200px',
                transform: 'translateY(-50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div className="container-custom">
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', marginBottom: '56px' }}>
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                color: 'var(--accent)',
                                fontSize: '0.7rem',
                                fontFamily: 'Syne, sans-serif',
                                fontWeight: '700',
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                marginBottom: '14px',
                            }}
                        >
                            <span style={{ width: '24px', height: '1px', background: 'var(--accent)' }} />
                            Our Work
                            <span style={{ width: '24px', height: '1px', background: 'var(--accent)' }} />
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                fontFamily: 'Syne, sans-serif',
                                fontWeight: '800',
                                fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                                letterSpacing: '-0.02em',
                                lineHeight: '1.15',
                                color: 'var(--text-primary)',
                            }}
                        >
                            Featured Projects
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="/projects"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                color: 'var(--text-secondary)',
                                textDecoration: 'none',
                                fontSize: '0.875rem',
                                fontFamily: 'Syne, sans-serif',
                                fontWeight: '600',
                                transition: 'color 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >
                            View All Projects <FiArrowRight />
                        </Link>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '20px' }}>
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="card-hover"
                            style={{
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border)',
                                borderRadius: '20px',
                                overflow: 'hidden',
                                position: 'relative',
                            }}
                        >
                            {/* Project image placeholder */}
                            <div style={{
                                height: '200px',
                                background: `linear-gradient(135deg, ${project.color}20 0%, ${project.color}05 100%)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                borderBottom: '1px solid var(--border)',
                                overflow: 'hidden',
                            }}>
                                {/* Abstract pattern for placeholder */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundImage: `
                    linear-gradient(${project.color}15 1px, transparent 1px),
                    linear-gradient(90deg, ${project.color}15 1px, transparent 1px)
                  `,
                                    backgroundSize: '30px 30px',
                                }} />
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    background: `${project.color}20`,
                                    border: `2px solid ${project.color}40`,
                                    borderRadius: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontFamily: 'Syne, sans-serif',
                                    fontWeight: '800',
                                    fontSize: '1.5rem',
                                    color: project.color,
                                    position: 'relative',
                                    zIndex: 1,
                                }}>
                                    {project.title.charAt(0)}
                                </div>

                                {/* Category badge */}
                                <span style={{
                                    position: 'absolute',
                                    top: '16px',
                                    left: '16px',
                                    padding: '4px 10px',
                                    background: `${project.color}20`,
                                    border: `1px solid ${project.color}40`,
                                    borderRadius: '20px',
                                    fontSize: '0.68rem',
                                    fontFamily: 'Syne, sans-serif',
                                    fontWeight: '700',
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                    color: project.color,
                                    zIndex: 1,
                                }}>
                                    {project.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div style={{ padding: '28px' }}>
                                <h3 style={{
                                    fontFamily: 'Syne, sans-serif',
                                    fontWeight: '700',
                                    fontSize: '1.15rem',
                                    color: 'var(--text-primary)',
                                    marginBottom: '10px',
                                    letterSpacing: '-0.01em',
                                }}>
                                    {project.title}
                                </h3>
                                <p style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.85rem',
                                    lineHeight: '1.7',
                                    marginBottom: '20px',
                                }}>
                                    {project.desc}
                                </p>

                                {/* Tech tags */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                                    {project.tech.map(t => (
                                        <span key={t} style={{
                                            padding: '3px 8px',
                                            background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid var(--border)',
                                            borderRadius: '5px',
                                            fontSize: '0.7rem',
                                            color: 'var(--text-muted)',
                                            fontFamily: 'DM Sans, sans-serif',
                                        }}>{t}</span>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <Link
                                        to={`/projects/${project.slug}`}
                                        style={{
                                            flex: 1,
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '6px',
                                            padding: '10px 16px',
                                            background: `${project.color}12`,
                                            border: `1px solid ${project.color}25`,
                                            borderRadius: '8px',
                                            color: project.color,
                                            textDecoration: 'none',
                                            fontSize: '0.8rem',
                                            fontFamily: 'Syne, sans-serif',
                                            fontWeight: '600',
                                            transition: 'all 0.2s',
                                        }}
                                        onMouseEnter={e => { e.currentTarget.style.background = `${project.color}20`; }}
                                        onMouseLeave={e => { e.currentTarget.style.background = `${project.color}12`; }}
                                    >
                                        View Details <FiArrowRight />
                                    </Link>
                                    <a
                                        href="#"
                                        style={{
                                            width: '40px', height: '40px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid var(--border)',
                                            borderRadius: '8px',
                                            color: 'var(--text-muted)',
                                            textDecoration: 'none',
                                            fontSize: '15px',
                                            transition: 'all 0.2s',
                                        }}
                                        onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                                        onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                                    >
                                        <FiExternalLink />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}