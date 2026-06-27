/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { SectionTitle } from "../common/index.jsx";

const API_URL = import.meta.env.VITE_API_URL;

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await fetch(`${API_URL}/testimonials`);
                const data = await res.json();

                console.log("Testimonials:", data);

                if (data.success) {
                    // Show only published testimonials
                    const published = data.data.filter(
                        (item) => item.status === "Published"
                    );

                    setTestimonials(published);
                }
            } catch (error) {
                console.error("Failed to fetch testimonials:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    return (
        <section
            className="section-padding"
            style={{ background: "var(--bg-primary)" }}
        >
            <div className="container-custom">
                <SectionTitle
                    eyebrow="Client Love"
                    title="What Our Clients Say"
                    subtitle="Real words from the businesses we've helped grow."
                />

                {loading ? (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            padding: "60px 0",
                            color: "var(--text-secondary)",
                            fontSize: "1rem",
                        }}
                    >
                        Loading testimonials...
                    </div>
                ) : testimonials.length === 0 ? (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            padding: "60px 0",
                            color: "var(--text-secondary)",
                            fontSize: "1rem",
                        }}
                    >
                        No testimonials available.
                    </div>
                ) : (
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fill, minmax(320px, 1fr))",
                            gap: "20px",
                        }}
                    >
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={t._id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: i * 0.1,
                                    duration: 0.6,
                                }}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.3 },
                                }}
                                className="card-hover"
                                style={{
                                    background: "var(--bg-card)",
                                    border: "1px solid var(--border)",
                                    borderRadius: "20px",
                                    padding: "32px",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                {/* Quote */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "20px",
                                        right: "24px",
                                        fontFamily: "serif",
                                        fontSize: "6rem",
                                        lineHeight: "1",
                                        color: "rgba(255,255,255,.03)",
                                        fontWeight: "900",
                                        pointerEvents: "none",
                                    }}
                                >
                                    "
                                </div>

                                {/* Rating */}
                                <div
                                    style={{
                                        display: "flex",
                                        gap: "4px",
                                        marginBottom: "20px",
                                    }}
                                >
                                    {Array.from({
                                        length: t.rating || 5,
                                    }).map((_, j) => (
                                        <FiStar
                                            key={j}
                                            style={{
                                                color: "#fbbf24",
                                                fill: "#fbbf24",
                                                fontSize: "14px",
                                            }}
                                        />
                                    ))}
                                </div>

                                {/* Message */}
                                <p
                                    style={{
                                        color: "var(--text-secondary)",
                                        fontSize: "0.9rem",
                                        lineHeight: "1.75",
                                        marginBottom: "28px",
                                        fontStyle: "italic",
                                    }}
                                >
                                    "{t.message}"
                                </p>

                                {/* Author */}
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px",
                                    }}
                                >
                                    {/* Avatar */}
                                    <div
                                        style={{
                                            width: "46px",
                                            height: "46px",
                                            borderRadius: "50%",
                                            overflow: "hidden",
                                            background:
                                                "rgba(0,212,255,.08)",
                                            border:
                                                "1px solid rgba(0,212,255,.2)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexShrink: 0,
                                        }}
                                    >
                                        {t.avatar ? (
                                            <img
                                                src={t.avatar}
                                                alt={t.name}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        ) : (
                                            <span
                                                style={{
                                                    color: "var(--accent)",
                                                    fontWeight: "700",
                                                    fontFamily:
                                                        "Syne, sans-serif",
                                                }}
                                            >
                                                {t.name
                                                    ?.split(" ")
                                                    .map((n) => n[0])
                                                    .join("")
                                                    .toUpperCase()}
                                            </span>
                                        )}
                                    </div>

                                    {/* Details */}
                                    <div>
                                        <div
                                            style={{
                                                fontFamily:
                                                    "Syne, sans-serif",
                                                fontWeight: "700",
                                                fontSize: "0.9rem",
                                                color:
                                                    "var(--text-primary)",
                                            }}
                                        >
                                            {t.name}
                                        </div>

                                        <div
                                            style={{
                                                color:
                                                    "var(--text-muted)",
                                                fontSize: "0.775rem",
                                            }}
                                        >
                                            {t.role}
                                            {t.company &&
                                                ` • ${t.company}`}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}



