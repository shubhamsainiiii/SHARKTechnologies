/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPhone, FiMail, FiX, FiMessageCircle } from 'react-icons/fi';

const PHONE = '+917727922769';
const EMAIL = 'sharktechinnovations@outlook.com';
const WHATSAPP_MSG = encodeURIComponent('Hi! I found your website and would like to discuss a project.');

const buttons = [
    {
        key: 'email',
        label: 'Email Us',
        href: `mailto:${EMAIL}`,
        bg: '#0f172a',
        border: 'rgba(0,212,255,0.3)',
        iconColor: '#00d4ff',
        shadow: 'rgba(0,212,255,0.2)',
        icon: <FiMail size={16} color="#00d4ff" />,
    },
    {
        key: 'call',
        label: 'Call Us',
        href: `tel:${PHONE}`,
        bg: '#0f172a',
        border: 'rgba(0,212,255,0.3)',
        iconColor: '#00d4ff',
        shadow: 'rgba(0,0,0,0.25)',
        icon: <FiPhone size={16} color="#00d4ff" />,
    },
    {
        key: 'whatsapp',
        label: 'WhatsApp',
        href: `https://wa.me/${PHONE}?text=${WHATSAPP_MSG}`,
        bg: '#25d366',
        border: 'rgba(37,211,102,0.4)',
        shadow: 'rgba(37,211,102,0.3)',
        icon: (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
        ),
    },
];

export default function FloatingButtons() {
    const [open, setOpen] = useState(false);

    return (
        <div style={{
            position: 'fixed',
            bottom: '28px',
            right: '28px',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '10px',
        }}>

            {/* Action buttons */}
            <AnimatePresence>
                {open && buttons.map((btn, i) => (
                    <motion.a
                        key={btn.key}
                        href={btn.href}
                        target={btn.key === 'whatsapp' ? '_blank' : undefined}
                        rel={btn.key === 'whatsapp' ? 'noopener noreferrer' : undefined}
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        transition={{
                            duration: 0.25,
                            delay: open ? i * 0.07 : (buttons.length - 1 - i) * 0.05,
                            type: 'spring',
                            stiffness: 300,
                            damping: 22,
                        }}
                        whileHover={{ scale: 1.05, x: -3 }}
                        whileTap={{ scale: 0.96 }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: btn.bg,
                            border: `1px solid ${btn.border}`,
                            color: '#fff',
                            textDecoration: 'none',
                            padding: '10px 18px 10px 14px',
                            borderRadius: '50px',
                            fontSize: '0.82rem',
                            fontFamily: 'Syne, sans-serif',
                            fontWeight: '600',
                            boxShadow: `0 4px 20px ${btn.shadow}`,
                            whiteSpace: 'nowrap',
                            cursor: 'pointer',
                        }}
                    >
                        {btn.icon}
                        {btn.label}
                    </motion.a>
                ))}
            </AnimatePresence>

            {/* Main FAB */}
            <motion.button
                onClick={() => setOpen(p => !p)}
                whileTap={{ scale: 0.92 }}
                style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #00d4ff, #0099bb)',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0a0f1a',
                    boxShadow: '0 4px 24px rgba(0,212,255,0.45)',
                    position: 'relative',
                    overflow: 'hidden',
                    flexShrink: 0,
                }}
            >
                {/* Ripple ping animation when closed */}
                {!open && (
                    <>
                        <motion.span
                            animate={{ scale: [1, 1.8], opacity: [0.4, 0] }}
                            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                borderRadius: '50%',
                                background: 'rgba(0,212,255,0.4)',
                            }}
                        />
                        <motion.span
                            animate={{ scale: [1, 1.8], opacity: [0.25, 0] }}
                            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut', delay: 0.5 }}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                borderRadius: '50%',
                                background: 'rgba(0,212,255,0.3)',
                            }}
                        />
                    </>
                )}

                {/* Icon switch */}
                <AnimatePresence mode="wait">
                    {open ? (
                        <motion.span
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            style={{ display: 'flex' }}
                        >
                            <FiX size={22} />
                        </motion.span>
                    ) : (
                        <motion.span
                            key="open"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            style={{ display: 'flex' }}
                        >
                            <FiMessageCircle size={22} />
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>

        </div>
    );
}


