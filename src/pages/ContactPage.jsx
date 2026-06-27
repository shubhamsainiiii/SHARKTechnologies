/* eslint-disable no-unused-vars */
import ContactForm from "../components/contact/ContactForm";
import { motion } from "framer-motion";
import {
    FiMail,
    FiPhone,
    FiMapPin,
    FiSend,
    FiUsers,
    FiFileText,
    FiCode,
    FiArrowRight,
    FiClock,
    FiGlobe,
} from "react-icons/fi";

const steps = [
    { icon: FiSend, step: "01", label: "Send a Message", desc: "Fill the form with your project details. Takes under 2 minutes." },
    { icon: FiUsers, step: "02", label: "Discovery Call", desc: "We hop on a free call to deeply understand your vision and goals." },
    { icon: FiFileText, step: "03", label: "Proposal", desc: "You get a detailed plan, fixed pricing, and a clear timeline." },
    { icon: FiCode, step: "04", label: "We Build", desc: "Regular updates, clean code, delivered on time — every time." },
];

export function ContactPage() {

    const info = [
        {
            icon: FiMail,
            label: "Email",
            value: "sharktechinnovations@outlook.com",
            href: "mailto:sharktechinnovations@outlook.com",
            sub: "We reply within a few hours"
        },
        {
            icon: FiPhone,
            label: "Phone",
            value: "+91 7727922769",
            href: "tel:+917727922769",
            sub: "Mon – Sat, 10am – 7pm IST"
        },
        {
            icon: FiGlobe,
            label: "Location",
            value: "India — Remote Worldwide",
            href: null,
            sub: "Available across all time zones"
        },
    ];

    return (
        <>
            <section
                style={{
                    paddingTop: "130px",
                    paddingBottom: "100px",
                    background: "var(--bg-primary)",
                    position: "relative",
                    overflow: "hidden",
                }}
                className="grid-bg"
            >

                <div className="container-custom">

                    {/* ── Page heading ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65 }}
                        style={{ marginBottom: "56px", maxWidth: "600px" }}
                    >
                        <span style={{
                            display: "inline-block",
                            background: "rgba(0,212,255,0.08)",
                            border: "1px solid rgba(0,212,255,0.2)",
                            borderRadius: "50px",
                            padding: "5px 15px",
                            marginBottom: "20px",
                            fontSize: "0.7rem",
                            fontFamily: "Syne, sans-serif",
                            fontWeight: "700",
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            color: "var(--accent)",
                        }}>
                            Get In Touch
                        </span>

                        <h1 style={{
                            fontFamily: "Syne, sans-serif",
                            fontWeight: "800",
                            fontSize: "clamp(2rem, 4vw, 3rem)",
                            lineHeight: "1.08",
                            letterSpacing: "-0.04em",
                            color: "var(--text-primary)",
                            marginBottom: "16px",
                        }}>
                            Let's Build Something<br />
                            <span style={{ color: "var(--accent)" }}>Amazing Together</span>
                        </h1>

                        <p style={{
                            color: "var(--text-secondary)",
                            fontSize: "1rem",
                            lineHeight: "1.75",
                        }}>
                            Have a project in mind? Drop us a message and we'll get back to you within a few hours.
                        </p>
                    </motion.div>

                    {/* ── Main grid: left info + right form ── */}
                    <div className="contact-main-grid">

                        {/* Left column */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65, delay: 0.15 }}
                            style={{ display: "flex", flexDirection: "column", gap: "0" }}
                        >
                            {/* Response time badge */}
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                                marginBottom: "28px",
                                padding: "10px 14px",
                                background: "rgba(0,255,136,0.06)",
                                border: "1px solid rgba(0,255,136,0.15)",
                                borderRadius: "10px",
                                width: "fit-content",
                            }}>
                                <div style={{
                                    width: "7px",
                                    height: "7px",
                                    borderRadius: "50%",
                                    background: "#00ff88",
                                    boxShadow: "0 0 8px #00ff88",
                                    flexShrink: 0,
                                }} />
                                <span style={{
                                    fontSize: "0.75rem",
                                    fontFamily: "Syne, sans-serif",
                                    fontWeight: "600",
                                    color: "#00ff88",
                                }}>
                                    Typically responds within a few hours
                                </span>
                            </div>

                            {/* Contact info cards */}
                            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
                                {info.map(item => {
                                    const Icon = item.icon;
                                    return (
                                        <div
                                            key={item.label}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "16px",
                                                background: "var(--bg-card)",
                                                border: "1px solid var(--border)",
                                                borderRadius: "14px",
                                                padding: "18px 20px",
                                                transition: "border-color 0.2s",
                                            }}
                                        >
                                            <div style={{
                                                width: "42px",
                                                height: "42px",
                                                background: "rgba(0,212,255,0.08)",
                                                border: "1px solid rgba(0,212,255,0.18)",
                                                borderRadius: "12px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "var(--accent)",
                                                fontSize: "17px",
                                                flexShrink: 0,
                                            }}>
                                                <Icon />
                                            </div>

                                            <div style={{ minWidth: 0 }}>
                                                <div style={{
                                                    fontFamily: "Syne, sans-serif",
                                                    fontWeight: "700",
                                                    fontSize: "0.68rem",
                                                    color: "var(--text-muted)",
                                                    letterSpacing: "0.08em",
                                                    textTransform: "uppercase",
                                                    marginBottom: "3px",
                                                }}>
                                                    {item.label}
                                                </div>

                                                {item.href ? (
                                                    <a href={item.href} style={{
                                                        color: "var(--text-primary)",
                                                        textDecoration: "none",
                                                        fontSize: "0.875rem",
                                                        fontWeight: "600",
                                                        display: "block",
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                        whiteSpace: "nowrap",
                                                    }}>
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <span style={{
                                                        color: "var(--text-primary)",
                                                        fontSize: "0.875rem",
                                                        fontWeight: "600",
                                                    }}>
                                                        {item.value}
                                                    </span>
                                                )}

                                                <div style={{
                                                    fontSize: "0.72rem",
                                                    color: "var(--text-muted)",
                                                    marginTop: "2px",
                                                }}>
                                                    {item.sub}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* What to expect */}
                            <div style={{
                                background: "var(--bg-card)",
                                border: "1px solid var(--border)",
                                borderRadius: "14px",
                                padding: "22px",
                            }}>
                                <p style={{
                                    fontFamily: "Syne, sans-serif",
                                    fontWeight: "700",
                                    fontSize: "0.8rem",
                                    color: "var(--text-muted)",
                                    letterSpacing: "0.08em",
                                    textTransform: "uppercase",
                                    marginBottom: "16px",
                                }}>
                                    What to expect
                                </p>

                                {[
                                    "Free, no-obligation consultation",
                                    "Fixed pricing — no surprise bills",
                                    "Weekly progress updates",
                                    "Clean, maintainable code",
                                ].map((item, i) => (
                                    <div key={i} style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        marginBottom: i < 3 ? "12px" : "0",
                                    }}>
                                        <div style={{
                                            width: "18px",
                                            height: "18px",
                                            borderRadius: "50%",
                                            background: "rgba(0,212,255,0.1)",
                                            border: "1px solid rgba(0,212,255,0.25)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                        }}>
                                            <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                                                <polyline points="2 6 5 9 10 3" stroke="#00d4ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <span style={{
                                            fontSize: "0.83rem",
                                            color: "var(--text-secondary)",
                                        }}>
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right column — form */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.65, delay: 0.25 }}
                        >
                            <ContactForm />
                        </motion.div>
                    </div>

                    {/* ── How it works ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.1 }}
                        style={{ marginTop: "72px" }}
                    >
                        <div style={{ textAlign: "center", marginBottom: "40px" }}>
                            <span style={{
                                display: "inline-block",
                                background: "rgba(0,212,255,0.08)",
                                border: "1px solid rgba(0,212,255,0.2)",
                                borderRadius: "50px",
                                padding: "5px 15px",
                                marginBottom: "14px",
                                fontSize: "0.7rem",
                                fontFamily: "Syne, sans-serif",
                                fontWeight: "700",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: "var(--accent)",
                            }}>
                                Our Process
                            </span>
                            <h2 style={{
                                fontFamily: "Syne, sans-serif",
                                fontWeight: "800",
                                fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                                color: "var(--text-primary)",
                                letterSpacing: "-0.03em",
                                margin: 0,
                            }}>
                                How We Work
                            </h2>
                        </div>

                        <div className="steps-grid">
                            {steps.map((step, i) => {
                                const Icon = step.icon;
                                return (
                                    <div
                                        key={i}
                                        style={{
                                            background: "var(--bg-card)",
                                            border: "1px solid var(--border)",
                                            borderRadius: "16px",
                                            padding: "28px 24px",
                                            position: "relative",
                                            overflow: "hidden",
                                        }}
                                    >
                                        {/* Step number background watermark */}
                                        <span style={{
                                            position: "absolute",
                                            top: "12px",
                                            right: "16px",
                                            fontFamily: "Syne, sans-serif",
                                            fontWeight: "800",
                                            fontSize: "3rem",
                                            color: "rgba(0,212,255,0.05)",
                                            lineHeight: 1,
                                            letterSpacing: "-0.04em",
                                            userSelect: "none",
                                        }}>
                                            {step.step}
                                        </span>

                                        <div style={{
                                            width: "46px",
                                            height: "46px",
                                            background: "rgba(0,212,255,0.08)",
                                            border: "1px solid rgba(0,212,255,0.2)",
                                            borderRadius: "12px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "var(--accent)",
                                            fontSize: "19px",
                                            marginBottom: "18px",
                                        }}>
                                            <Icon />
                                        </div>

                                        <h4 style={{
                                            fontFamily: "Syne, sans-serif",
                                            fontWeight: "700",
                                            fontSize: "0.95rem",
                                            color: "var(--text-primary)",
                                            marginBottom: "8px",
                                        }}>
                                            {step.label}
                                        </h4>

                                        <p style={{
                                            fontSize: "0.83rem",
                                            color: "var(--text-secondary)",
                                            lineHeight: "1.65",
                                            margin: 0,
                                        }}>
                                            {step.desc}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                </div>
            </section>

            <style>{`
                @media (min-width: 768px) {
                    .contact-main-grid {
                        display: grid;
                        grid-template-columns: 1fr 1.5fr;
                        gap: 28px;
                        align-items: start;
                    }
                }

                @media (max-width: 767px) {
                    .contact-main-grid {
                        display: flex;
                        flex-direction: column;
                        gap: 24px;
                    }
                }

                .steps-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 16px;
                }
            `}</style>
        </>
    );
}