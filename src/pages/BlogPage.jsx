// BlogPage.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi';

const blogs = [
    { title: 'Why React Server Components Change Everything', category: 'React', date: 'Jan 15, 2025', read: '6 min', slug: 'react-server-components', color: '#00d4ff', excerpt: 'RSC is not just a feature — it fundamentally shifts how we think about rendering, data fetching, and component boundaries in modern React apps.' },
    { title: 'Building Scalable APIs with NestJS and MongoDB', category: 'Backend', date: 'Dec 28, 2024', read: '8 min', slug: 'nestjs-mongodb-api', color: '#ff6b35', excerpt: 'NestJS brings Angular-style structure to Node.js. Here\'s how we architect large-scale APIs that stay maintainable as they grow.' },
    { title: 'Tailwind CSS v4: What\'s New and Why It Matters', category: 'CSS', date: 'Dec 10, 2024', read: '5 min', slug: 'tailwindcss-v4', color: '#a78bfa', excerpt: 'The Vite plugin approach, CSS-first configuration, and performance improvements — a deep dive into what changed and why you should upgrade.' },
    { title: 'From 3s to 0.8s: Our Performance Optimization Playbook', category: 'Performance', date: 'Nov 20, 2024', read: '10 min', slug: 'performance-optimization', color: '#00ff88', excerpt: 'A real case study of how we took a React app from 3 second load times to under 800ms using code splitting, lazy loading, and CDN strategies.' },
];

export function BlogPage() {
    return (
        <>
            <section style={{ paddingTop: '160px', paddingBottom: '60px', background: 'var(--bg-primary)' }} className="grid-bg">
                <div className="container-custom">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <span style={{
                            display: 'block', width: 'fit-content',
                            background: 'rgba(167,139,250,0.08)', border: '1px solid rgba(167,139,250,0.2)',
                            borderRadius: '50px', padding: '6px 16px', marginBottom: '22px',
                            fontSize: '0.72rem', fontFamily: 'Syne, sans-serif', fontWeight: '700',
                            letterSpacing: '0.12em', textTransform: 'uppercase', color: '#a78bfa',
                        }}>Insights & Articles</span>
                        <h1 style={{
                            fontFamily: 'Syne, sans-serif', fontWeight: '800',
                            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                            lineHeight: '1.08', letterSpacing: '-0.03em',
                            color: 'var(--text-primary)', marginBottom: '20px',
                        }}>
                            The Blog
                        </h1>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '480px' }}>
                            Deep dives, tutorials, and thoughts on modern web development from our team.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding" style={{ background: 'var(--bg-secondary)', paddingTop: '40px' }}>
                <div className="container-custom">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '20px' }}>
                        {blogs.map((post, i) => (
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="card-hover"
                                style={{
                                    background: 'var(--bg-card)', border: '1px solid var(--border)',
                                    borderRadius: '20px', overflow: 'hidden',
                                }}
                            >
                                <div style={{
                                    height: '160px',
                                    background: `linear-gradient(135deg, ${post.color}18 0%, transparent 100%)`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden',
                                }}>
                                    <div style={{
                                        position: 'absolute', inset: 0,
                                        backgroundImage: `linear-gradient(${post.color}10 1px, transparent 1px), linear-gradient(90deg, ${post.color}10 1px, transparent 1px)`,
                                        backgroundSize: '24px 24px',
                                    }} />
                                    <span style={{
                                        padding: '6px 14px', background: `${post.color}20`, border: `1px solid ${post.color}35`,
                                        borderRadius: '8px', fontSize: '0.72rem', fontFamily: 'Syne, sans-serif',
                                        fontWeight: '700', letterSpacing: '0.08em', textTransform: 'uppercase',
                                        color: post.color, zIndex: 1, position: 'relative',
                                    }}>{post.category}</span>
                                </div>

                                <div style={{ padding: '24px' }}>
                                    <div style={{ display: 'flex', gap: '16px', marginBottom: '14px' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                                            <FiCalendar style={{ fontSize: '11px' }} /> {post.date}
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                                            <FiClock style={{ fontSize: '11px' }} /> {post.read} read
                                        </span>
                                    </div>
                                    <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: '10px', lineHeight: '1.4' }}>
                                        {post.title}
                                    </h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', lineHeight: '1.65', marginBottom: '20px' }}>
                                        {post.excerpt}
                                    </p>
                                    <Link to={`/blog/${post.slug}`} style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                                        color: post.color, textDecoration: 'none',
                                        fontFamily: 'Syne, sans-serif', fontWeight: '600', fontSize: '0.82rem',
                                    }}>
                                        Read Article <FiArrowRight />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

