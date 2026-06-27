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
    FiCode
} from "react-icons/fi";


const steps = [
    { icon: FiSend, label: "Send us a message", desc: "Fill the form or email us directly." },
    { icon: FiUsers, label: "Free discovery call", desc: "We understand your requirements in depth." },
    { icon: FiFileText, label: "Proposal & timeline", desc: "You get a detailed plan and fixed quote." },
    { icon: FiCode, label: "We build & deliver", desc: "Regular updates, clean code, on time." },
];

export function ContactPage() {

    const info = [
        { icon: FiMail, label: "Email Us", value: "sharktechinnovations@outlook.com", href: "mailto:sharktechinnovations@outlook.com" },
        { icon: FiPhone, label: "Call Us", value: "+91 7727922769", href: "tel:+919999999999" },
        { icon: FiMapPin, label: "Location", value: "India — Remote Worldwide", href: null },
    ];

    return (
        <>
            <section
                style={{
                    paddingTop: "140px",
                    paddingBottom: "80px",
                    background: "var(--bg-primary)"
                }}
                className="grid-bg"
            >
                <div className="container-custom">

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        style={{ marginBottom: "48px" }}
                    >
                        <span
                            style={{
                                display: "block",
                                width: "fit-content",
                                background: "rgba(0,212,255,0.08)",
                                border: "1px solid rgba(0,212,255,0.2)",
                                borderRadius: "50px",
                                padding: "6px 16px",
                                marginBottom: "18px",
                                fontSize: "0.72rem",
                                fontFamily: "Syne, sans-serif",
                                fontWeight: "700",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: "var(--accent)"
                            }}
                        >
                            Get In Touch
                        </span>

                        <h1
                            style={{
                                fontFamily: "Syne, sans-serif",
                                fontWeight: "800",
                                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                                lineHeight: "1.1",
                                letterSpacing: "-0.03em",
                                color: "var(--text-primary)",
                                marginBottom: "14px"
                            }}
                        >
                            Let's Build Something <br />
                            <span style={{ color: "var(--accent)" }}>Amazing Together</span>
                        </h1>

                        <p
                            style={{
                                color: "var(--text-secondary)",
                                fontSize: "1rem",
                                lineHeight: "1.7",
                                maxWidth: "480px"
                            }}
                        >
                            Have a project in mind? Drop us a message. We typically respond within a few hours.
                        </p>
                    </motion.div>

                    {/* GRID */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "minmax(0,1fr)",
                            gap: "32px"
                        }}
                        className="contact-grid"
                    >

                        {/* LEFT SIDE */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
                        >

                            {info.map(item => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.label}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "14px",
                                            background: "var(--bg-card)",
                                            border: "1px solid var(--border)",
                                            borderRadius: "14px",
                                            padding: "16px 18px"
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: "38px",
                                                height: "38px",
                                                background: "rgba(0,212,255,0.1)",
                                                border: "1px solid rgba(0,212,255,0.2)",
                                                borderRadius: "10px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "var(--accent)"
                                            }}
                                        >
                                            <Icon />
                                        </div>

                                        <div>
                                            <div
                                                style={{
                                                    fontFamily: "Syne",
                                                    fontWeight: "700",
                                                    fontSize: "0.7rem",
                                                    color: "var(--text-muted)"
                                                }}
                                            >
                                                {item.label}
                                            </div>

                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    style={{
                                                        color: "var(--text-primary)",
                                                        textDecoration: "none"
                                                    }}
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <span>{item.value}</span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}



                        </motion.div>

                        {/* RIGHT SIDE FORM */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <ContactForm />
                        </motion.div>

                    </div>

                    {/* FULL WIDTH HOW IT WORKS */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        style={{
                            marginTop: "60px",
                            background: "var(--bg-card)",
                            border: "1px solid var(--border)",
                            borderRadius: "16px",
                            padding: "28px"
                        }}
                    >
                        <p
                            style={{
                                textAlign: "center",
                                fontFamily: "Syne",
                                fontWeight: "700",
                                marginBottom: "28px",
                                color: "var(--text-muted)"
                            }}
                        >
                            How It Works
                        </p>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
                                gap: "28px"
                            }}
                        >
                            {steps.map((step, i) => {
                                const Icon = step.icon;

                                return (
                                    <div key={i} style={{ textAlign: "center" }}>
                                        <div
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                margin: "0 auto 14px",
                                                background: "rgba(0,212,255,0.1)",
                                                border: "1px solid rgba(0,212,255,0.25)",
                                                borderRadius: "12px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "var(--accent)",
                                                fontSize: "20px"
                                            }}
                                        >
                                            <Icon />
                                        </div>

                                        <h4 style={{ fontWeight: "700", marginBottom: "6px" }}>
                                            {step.label}
                                        </h4>

                                        <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
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
        @media (min-width:768px){
          .contact-grid{
            grid-template-columns:1fr 1.4fr !important;
          }
        }
      `}</style>
        </>
    );
}