import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats } from '../../constants/techStack';

function CountUp({ target, suffix = '', duration = 2000 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        const numTarget = parseInt(target);
        const step = numTarget / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
            current += step;
            if (current >= numTarget) {
                setCount(numTarget);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [inView, target, duration]);

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
}

export default function StatsSection() {
    return (
        <section style={{
            padding: '80px 0',
            position: 'relative',
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
            background: 'var(--bg-secondary)',
        }}>
            <div className="container-custom">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '2px',
                }}>
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            style={{
                                padding: '40px 32px',
                                textAlign: 'center',
                                position: 'relative',
                            }}
                        >
                            {/* Divider between stats */}
                            {i > 0 && (
                                <div style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: '20%',
                                    bottom: '20%',
                                    width: '1px',
                                    background: 'var(--border)',
                                }} />
                            )}

                            <div style={{
                                fontFamily: 'Syne, sans-serif',
                                fontWeight: '800',
                                fontSize: 'clamp(2rem, 3vw, 2.8rem)',
                                lineHeight: '1',
                                background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--accent) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                marginBottom: '10px',
                                letterSpacing: '-0.03em',
                            }}>
                                <CountUp target={parseInt(stat.value)} suffix={stat.suffix || (stat.value.includes('+') ? '+' : '')} />
                            </div>

                            <div style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.875rem',
                                fontFamily: 'DM Sans, sans-serif',
                                letterSpacing: '0.01em',
                            }}>
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}