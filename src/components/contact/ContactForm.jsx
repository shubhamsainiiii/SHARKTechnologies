/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheck, FiUser, FiMail, FiMessageSquare, FiPhone, FiCheckCircle } from 'react-icons/fi';

export default function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [focused, setFocused] = useState('');

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.message || "Something went wrong");

            setSuccess(true);
        } catch (err) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };

    const inputStyle = (field) => ({
        width: '100%',
        boxSizing: 'border-box',
        background: focused === field ? 'rgba(0,212,255,0.04)' : 'rgba(255,255,255,0.03)',
        border: focused === field ? '1px solid rgba(0,212,255,0.4)' : '1px solid var(--border)',
        borderRadius: '12px',
        padding: '13px 14px 13px 44px',
        color: 'var(--text-primary)',
        fontSize: '0.875rem',
        fontFamily: 'DM Sans, sans-serif',
        outline: 'none',
        transition: 'border 0.25s ease, box-shadow 0.25s ease, background 0.25s ease',
        boxShadow: focused === field ? '0 0 0 3px rgba(0,212,255,0.08)' : 'none',
    });

    if (success) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                    background: 'var(--bg-card)',
                    border: '1px solid rgba(0,255,136,0.3)',
                    borderRadius: '20px',
                    padding: '48px 28px',
                    textAlign: 'center',
                }}
            >
                <div style={{
                    width: '60px',
                    height: '60px',
                    background: 'rgba(0,255,136,0.12)',
                    border: '2px solid rgba(0,255,136,0.3)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '26px',
                    color: 'var(--accent-green)',
                }}>
                    <FiCheck />
                </div>

                <h3
                    style={{
                        fontFamily: 'Syne, sans-serif',
                        fontWeight: '700',
                        fontSize: '1.3rem',
                        color: 'var(--text-primary)',
                        marginBottom: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                    }}
                >
                    <FiCheckCircle
                        style={{
                            color: 'var(--accent-green)',
                            fontSize: '1.5rem',
                        }}
                    />
                    Message Sent!
                </h3>

                <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.7',
                    fontSize: '0.875rem'
                }}>
                    Thanks for reaching out! We'll get back to you within 24 hours.
                </p>

                <button
                    onClick={() => {
                        setSuccess(false);
                        setForm({ name: '', email: '', phone: '', message: '' });
                    }}
                    style={{
                        marginTop: '24px',
                        padding: '10px 24px',
                        background: 'rgba(0,255,136,0.1)',
                        border: '1px solid rgba(0,255,136,0.25)',
                        borderRadius: '10px',
                        color: 'var(--accent-green)',
                        fontFamily: 'Syne, sans-serif',
                        fontWeight: '600',
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                    }}
                >
                    Send Another
                </button>
            </motion.div>
        );
    }

    return (
        <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                width: '100%',
            }}
        >

            <div>
                <h3 style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: '700',
                    fontSize: '1.2rem',
                    color: 'var(--text-primary)',
                    marginBottom: '4px'
                }}>
                    Tell Us About Your Project
                </h3>

                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.82rem'
                }}>
                    Fill in the details and we'll respond within 24 hours.
                </p>
            </div>

            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>

                <div style={{ position: 'relative' }}>
                    <FiUser style={{
                        position: 'absolute',
                        left: '14px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: focused === 'name' ? 'var(--accent)' : 'var(--text-muted)'
                    }} />

                    <input
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused('')}
                        required
                        style={inputStyle('name')}
                    />
                </div>

                <div style={{ position: 'relative' }}>
                    <FiMail style={{
                        position: 'absolute',
                        left: '14px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: focused === 'email' ? 'var(--accent)' : 'var(--text-muted)'
                    }} />

                    <input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused('')}
                        required
                        style={inputStyle('email')}
                    />
                </div>
            </div>

            <div style={{ position: 'relative' }}>
                <FiMessageSquare
                    style={{
                        position: 'absolute',
                        left: '14px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: focused === 'subject'
                            ? 'var(--accent)'
                            : 'var(--text-muted)',
                    }}
                />

                <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused('')}
                    required
                    style={inputStyle('subject')}
                />
            </div>

            <div style={{ position: 'relative' }}>
                <FiPhone style={{
                    position: 'absolute',
                    left: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: focused === 'phone' ? 'var(--accent)' : 'var(--text-muted)'
                }} />

                <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number (optional)"
                    value={form.phone}
                    onChange={handleChange}
                    onFocus={() => setFocused('phone')}
                    onBlur={() => setFocused('')}
                    style={inputStyle('phone')}
                />
            </div>

            <div style={{ position: 'relative' }}>
                <FiMessageSquare style={{
                    position: 'absolute',
                    left: '14px',
                    top: '16px',
                    color: focused === 'message' ? 'var(--accent)' : 'var(--text-muted)'
                }} />

                <textarea
                    name="message"
                    placeholder="Describe your project..."
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    required
                    rows={4}
                    style={{
                        ...inputStyle('message'),
                        resize: 'vertical',
                        minHeight: '110px',
                    }}
                />
            </div>

            <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                style={{
                    padding: '14px 28px',
                    background: loading
                        ? 'rgba(0,212,255,0.3)'
                        : 'linear-gradient(135deg, var(--accent), #0099bb)',
                    border: 'none',
                    borderRadius: '12px',
                    color: '#000',
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                }}
            >
                {loading ? "Sending..." : (<><FiSend /> Send Message</>)}
            </motion.button>

        </motion.form>
    );
}