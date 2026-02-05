"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
    {
        title: "Chat-Coder",
        category: "LLM-Powered Development Tool",
        description: "Real-time code generation & explanation reducing onboarding time by 42%. Deployed on AWS Fargate with auto-scaling.",
        gradient: "from-blue-600/20 to-cyan-500/20",
        tech: ["Python", "Streamlit", "AWS", "LLM Integration"],
        link: "#"
    },
    {
        title: "Prompt Playground",
        category: "AI/ML Evaluation Platform",
        description: "Interactive web app using GPT-4o to rapidly test, evaluate, and visualize prompt performance variations.",
        gradient: "from-purple-600/20 to-indigo-600/20",
        tech: ["GPT-4o", "Pandas", "Plotly", "Streamlit"],
        link: "#"
    },
    {
        title: "Autonomous Mission Planner",
        category: "Robotics & Drone Systems",
        description: "MAVLink Ground Control Station for autonomous flight operations and real-time monitoring of telemetry.",
        gradient: "from-orange-500/20 to-red-600/20",
        tech: ["Python", "PyQt5", "MAVLink", "PyQtGraph"],
        link: "#"
    },
    {
        title: "Mini Business Management",
        category: "Enterprise Software",
        description: "A comprehensive business management system featuring automated workflows and SQLite integration.",
        gradient: "from-green-500/20 to-emerald-600/20",
        tech: ["Django", "PostgreSQL", "React", "REST API"],
        link: "#"
    }
];

export default function Projects() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={containerRef} className="relative w-full bg-[#030303] py-40 px-6 md:px-12 z-20 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-blue-500 font-mono text-sm mb-4 tracking-[0.4em] uppercase font-bold">Portfolios / 02</p>
                        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
                            SELECTED <br />
                            <span className="text-white/20">WORKS.</span>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-white/40 max-w-sm text-lg font-light leading-relaxed"
                    >
                        A showcase of engineering excellence, combining robust architecture with intuitive interface design.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative flex flex-col glass-panel rounded-[2.5rem] p-8 md:p-12 overflow-hidden transition-all duration-500 hover:border-white/20"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-12">
                                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                                        {project.category}
                                    </span>
                                    <motion.div
                                        whileHover={{ rotate: 45, scale: 1.1 }}
                                        className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-white group-hover:text-black transition-all duration-500"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                        </svg>
                                    </motion.div>
                                </div>

                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                                    {project.title}
                                </h3>

                                <p className="text-white/50 text-xl font-light leading-relaxed mb-12 max-w-md">
                                    {project.description}
                                </p>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-[11px] font-mono font-bold px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-white/50 group-hover:border-white/20 group-hover:text-white transition-all">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

