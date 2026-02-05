"use client";

import { MotionValue, motion, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
    const [typedText, setTypedText] = useState("");
    const fullText = "Ramanuja Ganesh K.";

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    // Typing effect for the main title
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTypedText(fullText.substring(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    // Section 1: Appear at start, fade out by 20%
    const opacity1 = useTransform(smoothProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const scale1 = useTransform(smoothProgress, [0, 0.2], [1, 1.1]);
    const blur1 = useTransform(smoothProgress, [0, 0.2], [0, 10]);

    // Section 2: Appear around 30%
    const opacity2 = useTransform(smoothProgress, [0.25, 0.3, 0.4, 0.45], [0, 1, 1, 0]);
    const x2 = useTransform(smoothProgress, [0.25, 0.45], [-50, 50]);

    // Section 3: Appear around 60%
    const opacity3 = useTransform(smoothProgress, [0.55, 0.6, 0.7, 0.75], [0, 1, 1, 0]);
    const y3 = useTransform(smoothProgress, [0.55, 0.75], [50, -50]);

    // Scroll Progress Indicator (Circular)
    const rotateIndicator = useTransform(smoothProgress, [0, 1], [0, 360]);

    return (
        <div className="absolute inset-0 z-10 pointer-events-none text-white overflow-hidden">
            {/* Scroll Progress Ring */}
            <div className="fixed top-12 right-12 z-50 pointer-events-auto">
                <svg className="w-16 h-16 transform -rotate-90">
                    <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="2"
                        fill="transparent"
                    />
                    <motion.circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="transparent"
                        strokeDasharray="176"
                        style={{
                            strokeDashoffset: useTransform(smoothProgress, [0, 1], [176, 0]),
                            color: useTransform(smoothProgress, [0, 0.5, 1], ["#3b82f6", "#a855f7", "#3b82f6"])
                        }}
                    />
                </svg>
                <motion.div
                    style={{ rotate: rotateIndicator }}
                    className="absolute inset-0 flex items-center justify-center text-[10px] font-mono font-bold"
                >
                    {Math.round(scrollYProgress.get() * 100)}%
                </motion.div>
            </div>

            {/* Section 1 - Hero Center */}
            <motion.div
                style={{ opacity: opacity1, scale: scale1, filter: `blur(${blur1}px)` }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-4"
            >
                <div className="relative mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute -inset-20 bg-blue-500/10 blur-[100px] rounded-full"
                    />
                    <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-none mix-blend-difference">
                        {typedText}
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-4 h-24 bg-blue-500 ml-2 align-middle"
                        />
                    </h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="flex flex-col items-center gap-8"
                >
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center gap-3 glass-panel">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-sm font-bold tracking-[0.2em] uppercase text-white/70">Creative Developer</span>
                        </div>
                        <div className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center gap-3 glass-panel">
                            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                            <span className="text-sm font-bold tracking-[0.2em] uppercase text-white/70">AI Specialist</span>
                        </div>
                    </div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="mt-8 flex flex-col items-center gap-2 opacity-40"
                    >
                        <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Scroll to Explore</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Section 2 - Technical Excellence */}
            <motion.div
                style={{ opacity: opacity2, x: x2 }}
                className="absolute inset-0 flex items-center justify-start px-8 md:px-32"
            >
                <div className="max-w-3xl">
                    <p className="text-blue-500 font-mono text-sm mb-6 tracking-[0.5em] uppercase font-bold">01 / Capabilities</p>
                    <h2 className="text-6xl md:text-[8rem] font-bold leading-[0.85] tracking-tighter mb-8">
                        PRECISION <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">ENGINEERING.</span>
                    </h2>
                    <div className="h-[2px] w-32 bg-blue-500 mb-8" />
                    <p className="text-xl md:text-2xl text-white/50 max-w-xl font-light leading-relaxed">
                        Architecting high-performance systems with a focus on scalability, AI integration, and fluid user experiences.
                    </p>
                </div>
            </motion.div>

            {/* Section 3 - Vision */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-0 flex items-center justify-end px-8 md:px-32"
            >
                <div className="text-right max-w-3xl">
                    <p className="text-purple-500 font-mono text-sm mb-6 tracking-[0.5em] uppercase font-bold">02 / Vision</p>
                    <h2 className="text-6xl md:text-[8rem] font-bold leading-[0.85] tracking-tighter mb-8">
                        FUTURE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-purple-500 to-white">DEFINITION.</span>
                    </h2>
                    <div className="h-[2px] w-32 bg-purple-500 ml-auto mb-8" />
                    <p className="text-xl md:text-2xl text-white/50 max-w-xl ml-auto font-light leading-relaxed">
                        Pushing the boundaries of what's possible with Generative AI and autonomous systems for the next decade.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

