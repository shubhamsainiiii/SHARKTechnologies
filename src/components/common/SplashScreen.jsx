/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/images/logoo.png";

const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 1,
    duration: Math.random() * 2 + 2,
}));

export default function SplashScreen() {
    const [showParticles, setShowParticles] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowParticles(true);
        }, 350);

        return () => clearTimeout(timer);
    }, []);
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#050A16]"
        >
            {/* Background Glow */}
            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.6,
                }}
                animate={{
                    opacity: [0.15, 0.35, 0.15],
                    scale: [1, 1.25, 1],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                }}
                className="absolute w-[260px] h-[260px] sm:w-[430px] sm:h-[430px] rounded-full"
                style={{
                    background:
                        "radial-gradient(circle,#00bfff55 0%,transparent 70%)",
                }}
            />

            {/* Outer Ring */}
            <motion.div
                initial={{
                    opacity: 0,
                    scale: .8
                }}
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 8,
                    ease: "linear",
                }}
                className="absolute w-56 h-56 sm:w-80 sm:h-80 rounded-full border border-cyan-400/20"
            />

            {/* Inner Ring */}
            <motion.div
                initial={{
                    opacity: 0,
                    scale: .8
                }}
                animate={{ rotate: -360 }}
                transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "linear",
                }}
                className="absolute w-40 h-40 sm:w-56 sm:h-56 rounded-full border border-dashed border-cyan-400/20"
            />

            {/* Floating Particles */}
            {showParticles &&
                particles.map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute rounded-full bg-cyan-400"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            width: p.size,
                            height: p.size,
                        }}
                        initial={{
                            opacity: 0,
                            scale: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: [0, 0.8, 0],
                            y: [20, -20, -40],
                            scale: [0, 1, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: p.duration,
                            delay: p.delay,
                            ease: "easeInOut",
                        }}
                    />
                ))
            }

            {/* Logo */}
            <motion.img
                src={logo}
                alt="Shark Web & Cyber Solution"
                className="relative z-20 w-40 sm:w-60"
                style={{
                    filter:
                        "brightness(7) drop-shadow(0 0 25px rgba(0,191,255,.45))",
                }}
                initial={{
                    opacity: 0,
                    scale: 0,
                    rotate: -15,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                }}
            />

            {/* Pulse */}
            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    scale: [1, 1.6],
                    opacity: [0.4, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 2,
                }}
                className="absolute w-44 h-44 sm:w-64 sm:h-64 rounded-full border border-cyan-400/20"
            />

            {/* Shine */}
            <motion.div
                initial={{ x: "-120%" }}
                animate={{ x: "220%" }}
                transition={{
                    repeat: Infinity,
                    duration: 2.2,
                    ease: "linear",
                }}
                className="absolute w-24 h-full rotate-12 bg-white/10 blur-2xl"
            />
        </motion.div>
    );
}