
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiMail } from 'react-icons/fi';

export default function CtaBanner() {
    return (
        <section style={{ padding: '100px 0', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
          linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
        `,
                backgroundSize: '60px 60px',
                pointerEvents: 'none',
            }} />
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '300px',
                    background: 'radial-gradient(ellipse, rgba(0,212,255,0.08) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            <div className="container-custom" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span style={{
                        display: 'inline-block',
                        padding: '6px 16px',
                        background: 'rgba(0,212,255,0.08)',
                        border: '1px solid rgba(0,212,255,0.2)',
                        borderRadius: '50px',
                        fontSize: '0.72rem',
                        fontFamily: 'Syne, sans-serif',
                        fontWeight: '700',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--accent)',
                        marginBottom: '24px',
                    }}>
                        Ready to Build?
                    </span>

                    <h2 style={{
                        fontFamily: 'Syne, sans-serif',
                        fontWeight: '800',
                        fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                        lineHeight: '1.1',
                        letterSpacing: '-0.03em',
                        color: 'var(--text-primary)',
                        marginBottom: '20px',
                        maxWidth: '700px',
                        margin: '0 auto 20px',
                    }}>
                        Have a Project in Mind?{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, var(--accent), #00ffcc)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Let's Talk.
                        </span>
                    </h2>

                    <p style={{
                        color: 'var(--text-secondary)',
                        fontSize: '1rem',
                        lineHeight: '1.7',
                        maxWidth: '480px',
                        margin: '0 auto 44px',
                    }}>
                        We're a team of builders who love solving hard problems. Drop us a message and we'll get back within 24 hours.
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px' }}>
                        <Link
                            to="/contact"
                            className="btn-primary"
                            style={{
                                padding: '16px 36px',
                                borderRadius: '14px',
                                fontSize: '1rem',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                            }}
                        >
                            <span>Start a Conversation</span>
                            <FiArrowRight />
                        </Link>
                        <a
                            href="mailto:hello@nexora.dev"
                            style={{
                                padding: '16px 36px',
                                borderRadius: '14px',
                                fontSize: '1rem',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--border)',
                                color: 'var(--text-secondary)',
                                fontFamily: 'Syne, sans-serif',
                                fontWeight: '600',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.09)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
                        >
                            <FiMail />
                            hello@nexora.dev
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}