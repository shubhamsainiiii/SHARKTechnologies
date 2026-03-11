import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function NotFoundPage() {
    return (
        <section
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--bg-primary)",
                textAlign: "center",
            }}
            className="grid-bg"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div
                    style={{
                        fontFamily: "Syne, sans-serif",
                        fontWeight: "800",
                        fontSize: "clamp(5rem, 15vw, 10rem)",
                        lineHeight: "1",
                        letterSpacing: "-0.05em",
                        background:
                            "linear-gradient(135deg, rgba(0,212,255,0.15), rgba(0,212,255,0.05))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        marginBottom: "24px",
                    }}
                >
                    404
                </div>

                <h2
                    style={{
                        fontFamily: "Syne, sans-serif",
                        fontWeight: "700",
                        fontSize: "1.5rem",
                        color: "var(--text-primary)",
                        marginBottom: "12px",
                    }}
                >
                    Page Not Found
                </h2>

                <p
                    style={{
                        color: "var(--text-secondary)",
                        marginBottom: "32px",
                        fontSize: "0.9rem",
                    }}
                >
                    The page you're looking for doesn't exist or was moved.
                </p>

                <Link
                    to="/"
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "12px 28px",
                        background: "linear-gradient(135deg, var(--accent), #0099bb)",
                        borderRadius: "12px",
                        color: "#000",
                        textDecoration: "none",
                        fontFamily: "Syne, sans-serif",
                        fontWeight: "700",
                        fontSize: "0.9rem",
                    }}
                >
                    Back to Home
                </Link>
            </motion.div>
        </section>
    );
}