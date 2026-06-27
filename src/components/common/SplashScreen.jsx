/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../../assets/images/logoo.png";

const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1.5,
    delay: Math.random() * 1,
    duration: Math.random() * 3 + 2,
}));

export default function SplashScreen() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] bg-[#050A16] flex items-center justify-center overflow-hidden"
                >
                    {/* Ambient Glow — smaller on mobile */}
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute w-[260px] h-[260px] sm:w-[420px] sm:h-[420px] rounded-full"
                        style={{ background: "radial-gradient(circle, #00BFFF55 0%, transparent 70%)" }}
                    />

                    {/* Outer Rotating Ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                        className="absolute w-52 h-52 sm:w-72 sm:h-72 rounded-full"
                        style={{ border: "1px solid rgba(0,191,255,0.2)" }}
                    />

                    {/* Inner Counter-Rotating Ring */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                        className="absolute w-36 h-36 sm:w-52 sm:h-52 rounded-full"
                        style={{ border: "1px dashed rgba(0,191,255,0.15)" }}
                    />

                    {/* Floating Particles */}
                    {particles.map((p) => (
                        <motion.div
                            key={p.id}
                            className="absolute rounded-full bg-cyan-400"
                            style={{
                                left: `${p.x}%`,
                                top: `${p.y}%`,
                                width: p.size,
                                height: p.size,
                                opacity: 0,
                            }}
                            animate={{
                                opacity: [0, 0.6, 0],
                                y: [0, -20, -40],
                                scale: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: p.duration,
                                delay: p.delay,
                                ease: "easeInOut",
                            }}
                        />
                    ))}

                    {/* Logo */}
                    <motion.div className="relative z-10 flex flex-col items-center gap-4">
                        <motion.img
                            src={logo}
                            alt="Logo"
                            style={{ filter: "brightness(7) " }}
                            initial={{ opacity: 0, scale: 0.4, rotate: -15, y: 20 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="w-40 sm:w-56"
                        />
                    </motion.div>

                    {/* Shimmer Sweep */}
                    <motion.div
                        initial={{ x: "-120%" }}
                        animate={{ x: "220%" }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "linear", delay: 1 }}
                        className="absolute w-16 h-full bg-white/10 blur-2xl rotate-12 pointer-events-none"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}