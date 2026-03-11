// SectionTitle.jsx
import { motion } from 'framer-motion';
// Button.jsx
// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation, Link} from 'react-router-dom';

export function SectionTitle({ eyebrow, title, subtitle, align = 'center', light = false }) {
    const alignStyle = align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center';
    const textAlign = align === 'left' ? 'left' : align === 'right' ? 'right' : 'center';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: alignStyle, textAlign, marginBottom: '56px' }}
        >
            {eyebrow && (
                <span style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: '700',
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '14px',
                }}>
                    <span style={{ width: '24px', height: '1px', background: 'var(--accent)', display: 'inline-block' }} />
                    {eyebrow}
                    <span style={{ width: '24px', height: '1px', background: 'var(--accent)', display: 'inline-block' }} />
                </span>
            )}

            <h2 style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: '800',
                fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                lineHeight: '1.15',
                letterSpacing: '-0.02em',
                color: light ? '#fff' : 'var(--text-primary)',
                maxWidth: '680px',
                marginBottom: subtitle ? '16px' : '0',
            }}>
                {title}
            </h2>

            {subtitle && (
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    maxWidth: '520px',
                }}>
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}



export function Button({ children, to, href, onClick, variant = 'primary', size = 'md', icon, style = {} }) {
    const sizes = {
        sm: { padding: '8px 18px', fontSize: '0.8rem', borderRadius: '8px' },
        md: { padding: '12px 28px', fontSize: '0.9rem', borderRadius: '10px' },
        lg: { padding: '16px 36px', fontSize: '1rem', borderRadius: '12px' },
    };

    const baseStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        textDecoration: 'none',
        fontFamily: 'Syne, sans-serif',
        fontWeight: '600',
        letterSpacing: '0.01em',
        cursor: 'pointer',
        border: 'none',
        ...sizes[size],
        ...style,
    };

    const variants = {
        primary: {
            background: 'linear-gradient(135deg, var(--accent), #0099bb)',
            color: '#000',
        },
        outline: {
            background: 'transparent',
            border: '1px solid var(--border-accent)',
            color: 'var(--accent)',
        },
        ghost: {
            background: 'rgba(255,255,255,0.05)',
            color: 'var(--text-secondary)',
            border: '1px solid var(--border)',
        },
    };

    const finalStyle = { ...baseStyle, ...variants[variant] };

    const content = (
        <motion.span
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            style={finalStyle}
            onClick={onClick}
        >
            {children}
            {icon && icon}
        </motion.span>
    );

    if (to) return <Link to={to} style={{ textDecoration: 'none' }}>{content}</Link>;
    if (href) return <a href={href} style={{ textDecoration: 'none' }}>{content}</a>;
    return content;
}

// Loader.jsx
export function Loader() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--bg-primary)',
        }}>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                style={{
                    width: '40px',
                    height: '40px',
                    border: '2px solid var(--border)',
                    borderTop: '2px solid var(--accent)',
                    borderRadius: '50%',
                }}
            />
        </div>
    );
}


export function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);
    return null;
}