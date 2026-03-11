// Testimonials.jsx
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { SectionTitle } from '../common/index.jsx';

const testimonials = [
    {
        name: 'Rahul Sharma',
        role: 'CEO, TechStartup',
        avatar: 'RS',
        avatarColor: '#00d4ff',
        text: 'Nexora transformed our outdated platform into a blazing-fast, modern web app. The attention to detail and communication throughout was exceptional. Delivered on time and above expectations.',
        rating: 5,
    },
    {
        name: 'Priya Mehta',
        role: 'Founder, StyleCart',
        avatar: 'PM',
        avatarColor: '#ff6b35',
        text: 'Working with this team was a game-changer. They built our entire e-commerce system from scratch in 6 weeks. The product quality is outstanding — our conversions went up 40% post-launch.',
        rating: 5,
    },
    {
        name: 'David Kim',
        role: 'CTO, HealthTech Inc.',
        avatar: 'DK',
        avatarColor: '#00ff88',
        text: "They understood our complex requirements quickly and delivered a HIPAA-compliant mobile app that our users love. Professional, skilled, and genuinely invested in our success.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
            <div className="container-custom">
                <SectionTitle
                    eyebrow="Client Love"
                    title="What Our Clients Say"
                    subtitle="Real words from the businesses we've helped grow."
                />

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="card-hover"
                            style={{
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border)',
                                borderRadius: '20px',
                                padding: '32px',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            {/* Quote mark */}
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                right: '24px',
                                fontFamily: 'serif',
                                fontSize: '6rem',
                                lineHeight: '1',
                                color: 'rgba(255,255,255,0.03)',
                                fontWeight: '900',
                                pointerEvents: 'none',
                            }}>"</div>

                            {/* Stars */}
                            <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                                {Array(t.rating).fill(0).map((_, j) => (
                                    <FiStar key={j} style={{ color: '#fbbf24', fontSize: '14px', fill: '#fbbf24' }} />
                                ))}
                            </div>

                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.9rem',
                                lineHeight: '1.75',
                                marginBottom: '28px',
                                fontStyle: 'italic',
                            }}>
                                "{t.text}"
                            </p>

                            {/* Author */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{
                                    width: '42px',
                                    height: '42px',
                                    borderRadius: '12px',
                                    background: `${t.avatarColor}20`,
                                    border: `1px solid ${t.avatarColor}40`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontFamily: 'Syne, sans-serif',
                                    fontWeight: '700',
                                    fontSize: '0.8rem',
                                    color: t.avatarColor,
                                }}>
                                    {t.avatar}
                                </div>
                                <div>
                                    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.9rem', color: 'var(--text-primary)' }}>{t.name}</div>
                                    <div style={{ color: 'var(--text-muted)', fontSize: '0.775rem' }}>{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}