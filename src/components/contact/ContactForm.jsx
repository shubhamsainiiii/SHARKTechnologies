// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FiSend, FiCheck, FiUser, FiMail, FiMessageSquare, FiPhone } from 'react-icons/fi';

// const budgetOptions = ['< ₹50K', '₹50K – ₹2L', '₹2L – ₹5L', '₹5L+', 'Not sure yet'];
// const serviceOptions = ['Web Development', 'Mobile App', 'UI/UX Design', 'API/Backend', 'Cloud/DevOps', 'Other'];

// export default function ContactForm() {
//     const [form, setForm] = useState({
//         name: '', email: '', phone: '', service: '', budget: '', message: '',
//     });
//     const [loading, setLoading] = useState(false);
//     const [success, setSuccess] = useState(false);
//     const [focused, setFocused] = useState('');

//     const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         // Simulate API call (replace with real API later)
//         await new Promise(r => setTimeout(r, 1500));
//         setLoading(false);
//         setSuccess(true);
//     };

//     const inputStyle = (field) => ({
//         width: '100%',
//         background: focused === field ? 'rgba(0,212,255,0.04)' : 'rgba(255,255,255,0.03)',
//         border: focused === field ? '1px solid rgba(0,212,255,0.4)' : '1px solid var(--border)',
//         borderRadius: '12px',
//         padding: '14px 16px 14px 46px',
//         color: 'var(--text-primary)',
//         fontSize: '0.9rem',
//         fontFamily: 'DM Sans, sans-serif',
//         outline: 'none',
//         transition: 'all 0.3s ease',
//         boxShadow: focused === field ? '0 0 0 3px rgba(0,212,255,0.08)' : 'none',
//     });

//     if (success) {
//         return (
//             <motion.div
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 style={{
//                     background: 'var(--bg-card)',
//                     border: '1px solid rgba(0,255,136,0.3)',
//                     borderRadius: '20px',
//                     padding: '60px 40px',
//                     textAlign: 'center',
//                 }}
//             >
//                 <div style={{
//                     width: '64px',
//                     height: '64px',
//                     background: 'rgba(0,255,136,0.12)',
//                     border: '2px solid rgba(0,255,136,0.3)',
//                     borderRadius: '50%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     margin: '0 auto 24px',
//                     fontSize: '28px',
//                     color: 'var(--accent-green)',
//                 }}>
//                     <FiCheck />
//                 </div>
//                 <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '12px' }}>
//                     Message Sent! 🎉
//                 </h3>
//                 <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.9rem' }}>
//                     Thanks for reaching out! We'll get back to you within 24 hours.
//                 </p>
//                 <button
//                     onClick={() => { setSuccess(false); setForm({ name: '', email: '', phone: '', service: '', budget: '', message: '' }); }}
//                     style={{
//                         marginTop: '28px',
//                         padding: '10px 24px',
//                         background: 'rgba(0,255,136,0.1)',
//                         border: '1px solid rgba(0,255,136,0.25)',
//                         borderRadius: '10px',
//                         color: 'var(--accent-green)',
//                         fontFamily: 'Syne, sans-serif',
//                         fontWeight: '600',
//                         fontSize: '0.85rem',
//                         cursor: 'pointer',
//                     }}
//                 >
//                     Send Another
//                 </button>
//             </motion.div>
//         );
//     }

//     return (
//         <motion.form
//             onSubmit={handleSubmit}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             style={{
//                 background: 'var(--bg-card)',
//                 border: '1px solid var(--border)',
//                 borderRadius: '24px',
//                 padding: '40px',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 gap: '20px',
//             }}
//         >
//             <div>
//                 <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '6px' }}>
//                     Tell Us About Your Project
//                 </h3>
//                 <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
//                     Fill in the details and we'll respond within 24 hours.
//                 </p>
//             </div>

//             {/* Name + Email row */}
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
//                 {/* Name */}
//                 <div style={{ position: 'relative' }}>
//                     <FiUser style={{
//                         position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
//                         color: focused === 'name' ? 'var(--accent)' : 'var(--text-muted)', fontSize: '16px', transition: 'color 0.3s',
//                     }} />
//                     <input
//                         name="name"
//                         type="text"
//                         placeholder="Your Name"
//                         value={form.name}
//                         onChange={handleChange}
//                         onFocus={() => setFocused('name')}
//                         onBlur={() => setFocused('')}
//                         required
//                         style={inputStyle('name')}
//                     />
//                 </div>

//                 {/* Email */}
//                 <div style={{ position: 'relative' }}>
//                     <FiMail style={{
//                         position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
//                         color: focused === 'email' ? 'var(--accent)' : 'var(--text-muted)', fontSize: '16px', transition: 'color 0.3s',
//                     }} />
//                     <input
//                         name="email"
//                         type="email"
//                         placeholder="Email Address"
//                         value={form.email}
//                         onChange={handleChange}
//                         onFocus={() => setFocused('email')}
//                         onBlur={() => setFocused('')}
//                         required
//                         style={inputStyle('email')}
//                     />
//                 </div>
//             </div>

//             {/* Phone */}
//             <div style={{ position: 'relative' }}>
//                 <FiPhone style={{
//                     position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
//                     color: focused === 'phone' ? 'var(--accent)' : 'var(--text-muted)', fontSize: '16px', transition: 'color 0.3s',
//                 }} />
//                 <input
//                     name="phone"
//                     type="tel"
//                     placeholder="Phone Number (optional)"
//                     value={form.phone}
//                     onChange={handleChange}
//                     onFocus={() => setFocused('phone')}
//                     onBlur={() => setFocused('')}
//                     style={inputStyle('phone')}
//                 />
//             </div>

//             {/* Service select */}
//             <div>
//                 <label style={{ display: 'block', fontFamily: 'Syne, sans-serif', fontWeight: '600', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '10px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
//                     Service Needed
//                 </label>
//                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
//                     {serviceOptions.map(s => (
//                         <button
//                             key={s}
//                             type="button"
//                             onClick={() => setForm({ ...form, service: s })}
//                             style={{
//                                 padding: '8px 14px',
//                                 borderRadius: '8px',
//                                 fontSize: '0.8rem',
//                                 fontFamily: 'Syne, sans-serif',
//                                 fontWeight: '600',
//                                 cursor: 'pointer',
//                                 transition: 'all 0.2s',
//                                 border: form.service === s ? '1px solid rgba(0,212,255,0.5)' : '1px solid var(--border)',
//                                 background: form.service === s ? 'rgba(0,212,255,0.12)' : 'rgba(255,255,255,0.03)',
//                                 color: form.service === s ? 'var(--accent)' : 'var(--text-secondary)',
//                             }}
//                         >
//                             {s}
//                         </button>
//                     ))}
//                 </div>
//             </div>

//             {/* Budget select */}
//             <div>
//                 <label style={{ display: 'block', fontFamily: 'Syne, sans-serif', fontWeight: '600', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '10px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
//                     Budget Range
//                 </label>
//                 <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
//                     {budgetOptions.map(b => (
//                         <button
//                             key={b}
//                             type="button"
//                             onClick={() => setForm({ ...form, budget: b })}
//                             style={{
//                                 padding: '8px 14px',
//                                 borderRadius: '8px',
//                                 fontSize: '0.8rem',
//                                 fontFamily: 'Syne, sans-serif',
//                                 fontWeight: '600',
//                                 cursor: 'pointer',
//                                 transition: 'all 0.2s',
//                                 border: form.budget === b ? '1px solid rgba(255,107,53,0.5)' : '1px solid var(--border)',
//                                 background: form.budget === b ? 'rgba(255,107,53,0.12)' : 'rgba(255,255,255,0.03)',
//                                 color: form.budget === b ? 'var(--accent-warm)' : 'var(--text-secondary)',
//                             }}
//                         >
//                             {b}
//                         </button>
//                     ))}
//                 </div>
//             </div>

//             {/* Message */}
//             <div style={{ position: 'relative' }}>
//                 <FiMessageSquare style={{
//                     position: 'absolute', left: '16px', top: '18px',
//                     color: focused === 'message' ? 'var(--accent)' : 'var(--text-muted)', fontSize: '16px', transition: 'color 0.3s',
//                 }} />
//                 <textarea
//                     name="message"
//                     placeholder="Describe your project..."
//                     value={form.message}
//                     onChange={handleChange}
//                     onFocus={() => setFocused('message')}
//                     onBlur={() => setFocused('')}
//                     required
//                     rows={5}
//                     style={{
//                         ...inputStyle('message'),
//                         padding: '14px 16px 14px 46px',
//                         resize: 'vertical',
//                         minHeight: '120px',
//                     }}
//                 />
//             </div>

//             {/* Submit */}
//             <motion.button
//                 type="submit"
//                 disabled={loading}
//                 whileHover={{ scale: 1.01 }}
//                 whileTap={{ scale: 0.98 }}
//                 style={{
//                     padding: '16px 32px',
//                     background: loading ? 'rgba(0,212,255,0.3)' : 'linear-gradient(135deg, var(--accent), #0099bb)',
//                     border: 'none',
//                     borderRadius: '12px',
//                     color: '#000',
//                     fontFamily: 'Syne, sans-serif',
//                     fontWeight: '700',
//                     fontSize: '0.95rem',
//                     cursor: loading ? 'not-allowed' : 'pointer',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     gap: '10px',
//                     transition: 'all 0.3s ease',
//                 }}
//             >
//                 {loading ? (
//                     <>
//                         <motion.div
//                             animate={{ rotate: 360 }}
//                             transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
//                             style={{ width: '18px', height: '18px', border: '2px solid rgba(0,0,0,0.3)', borderTop: '2px solid #000', borderRadius: '50%' }}
//                         />
//                         Sending...
//                     </>
//                 ) : (
//                     <>
//                         <FiSend />
//                         Send Message
//                     </>
//                 )}
//             </motion.button>
//         </motion.form>
//     );
// }


import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheck, FiUser, FiMail, FiMessageSquare, FiPhone } from 'react-icons/fi';

const budgetOptions = ['< ₹50K', '₹50K – ₹2L', '₹2L – ₹5L', '₹5L+', 'Not sure yet'];
const serviceOptions = ['Web Development', 'Mobile App', 'UI/UX Design', 'API/Backend', 'Cloud/DevOps', 'Other'];

export default function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [focused, setFocused] = useState('');

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await new Promise(r => setTimeout(r, 1500));
        setLoading(false);
        setSuccess(true);
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
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                style={{
                    background: 'var(--bg-card)', border: '1px solid rgba(0,255,136,0.3)',
                    borderRadius: '20px', padding: '48px 28px', textAlign: 'center',
                }}
            >
                <div style={{
                    width: '60px', height: '60px',
                    background: 'rgba(0,255,136,0.12)', border: '2px solid rgba(0,255,136,0.3)',
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 20px', fontSize: '26px', color: 'var(--accent-green)',
                }}>
                    <FiCheck />
                </div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '10px' }}>
                    Message Sent! 🎉
                </h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.875rem' }}>
                    Thanks for reaching out! We'll get back to you within 24 hours.
                </p>
                <button
                    onClick={() => { setSuccess(false); setForm({ name: '', email: '', phone: '', service: '', budget: '', message: '' }); }}
                    style={{
                        marginTop: '24px', padding: '10px 24px',
                        background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.25)',
                        borderRadius: '10px', color: 'var(--accent-green)',
                        fontFamily: 'Syne, sans-serif', fontWeight: '600', fontSize: '0.85rem', cursor: 'pointer',
                    }}
                >Send Another</button>
            </motion.div>
        );
    }

    return (
        <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: '20px', padding: '28px',
                display: 'flex', flexDirection: 'column', gap: '16px',
                boxSizing: 'border-box', width: '100%', overflow: 'hidden',
            }}
        >
            <div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                    Tell Us About Your Project
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem' }}>
                    Fill in the details and we'll respond within 24 hours.
                </p>
            </div>

            {/* Name + Email — stack on mobile, side by side on desktop */}
            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
                <div style={{ position: 'relative' }}>
                    <FiUser style={{
                        position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)',
                        color: focused === 'name' ? 'var(--accent)' : 'var(--text-muted)', fontSize: '15px', transition: 'color 0.25s',
                    }} />
                    <input name="name" type="text" placeholder="Your Name" value={form.name}
                        onChange={handleChange} onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                        required style={inputStyle('name')} />
                </div>
                <div style={{ position: 'relative' }}>
                    <FiMail style={{
                        position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)',
                        color: focused === 'email' ? 'var(--accent)' : 'var(--text-muted)', fontSize: '15px', transition: 'color 0.25s',
                    }} />
                    <input name="email" type="email" placeholder="Email Address" value={form.email}
                        onChange={handleChange} onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                        required style={inputStyle('email')} />
                </div>
            </div>

            {/* Phone */}
            <div style={{ position: 'relative' }}>
                <FiPhone style={{
                    position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)',
                    color: focused === 'phone' ? 'var(--accent)' : 'var(--text-muted)', fontSize: '15px', transition: 'color 0.25s',
                }} />
                <input name="phone" type="tel" placeholder="Phone Number (optional)" value={form.phone}
                    onChange={handleChange} onFocus={() => setFocused('phone')} onBlur={() => setFocused('')}
                    style={inputStyle('phone')} />
            </div>

            {/* Service */}
            <div>
                <label style={{
                    display: 'block', fontFamily: 'Syne, sans-serif', fontWeight: '600',
                    fontSize: '0.72rem', color: 'var(--text-secondary)', marginBottom: '8px',
                    letterSpacing: '0.05em', textTransform: 'uppercase',
                }}>Service Needed</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                    {serviceOptions.map(s => (
                        <button key={s} type="button" onClick={() => setForm({ ...form, service: s })}
                            style={{
                                padding: '7px 12px', borderRadius: '8px', fontSize: '0.78rem',
                                fontFamily: 'Syne, sans-serif', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s',
                                border: form.service === s ? '1px solid rgba(0,212,255,0.5)' : '1px solid var(--border)',
                                background: form.service === s ? 'rgba(0,212,255,0.12)' : 'rgba(255,255,255,0.03)',
                                color: form.service === s ? 'var(--accent)' : 'var(--text-secondary)',
                            }}
                        >{s}</button>
                    ))}
                </div>
            </div>

            {/* Budget */}
            <div>
                <label style={{
                    display: 'block', fontFamily: 'Syne, sans-serif', fontWeight: '600',
                    fontSize: '0.72rem', color: 'var(--text-secondary)', marginBottom: '8px',
                    letterSpacing: '0.05em', textTransform: 'uppercase',
                }}>Budget Range</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                    {budgetOptions.map(b => (
                        <button key={b} type="button" onClick={() => setForm({ ...form, budget: b })}
                            style={{
                                padding: '7px 12px', borderRadius: '8px', fontSize: '0.78rem',
                                fontFamily: 'Syne, sans-serif', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s',
                                border: form.budget === b ? '1px solid rgba(255,107,53,0.5)' : '1px solid var(--border)',
                                background: form.budget === b ? 'rgba(255,107,53,0.12)' : 'rgba(255,255,255,0.03)',
                                color: form.budget === b ? 'var(--accent-warm)' : 'var(--text-secondary)',
                            }}
                        >{b}</button>
                    ))}
                </div>
            </div>

            {/* Message */}
            <div style={{ position: 'relative' }}>
                <FiMessageSquare style={{
                    position: 'absolute', left: '14px', top: '16px',
                    color: focused === 'message' ? 'var(--accent)' : 'var(--text-muted)', fontSize: '15px', transition: 'color 0.25s',
                }} />
                <textarea name="message" placeholder="Describe your project..." value={form.message}
                    onChange={handleChange} onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                    required rows={4}
                    style={{
                        ...inputStyle('message'),
                        padding: '13px 14px 13px 44px',
                        resize: 'vertical', minHeight: '110px',
                    }}
                />
            </div>

            {/* Submit */}
            <motion.button type="submit" disabled={loading}
                whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
                style={{
                    padding: '14px 28px',
                    background: loading ? 'rgba(0,212,255,0.3)' : 'linear-gradient(135deg, var(--accent), #0099bb)',
                    border: 'none', borderRadius: '12px', color: '#000',
                    fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.9rem',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                }}
            >
                {loading ? (
                    <>
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            style={{ width: '16px', height: '16px', border: '2px solid rgba(0,0,0,0.3)', borderTop: '2px solid #000', borderRadius: '50%' }} />
                        Sending...
                    </>
                ) : (
                    <><FiSend /> Send Message</>
                )}
            </motion.button>

            {/* Form row responsive */}
            <style>{`
                @media (min-width: 540px) {
                    .form-row { grid-template-columns: 1fr 1fr !important; }
                }
            `}</style>
        </motion.form>
    );
}