"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        company: "Ultrex Drones LLP",
        role: "Software & Gen AI Developer",
        period: "Nov 2024 - Dec 2025",
        achievements: [
            "Engineered Python/MAVLink Ground Control Station processing 100+ real-time data points/sec with 92% uptime.",
            "Implemented AI/ML data pipelines using Pandas/NumPy, reducing data processing time by 30%.",
            "Developed multi-threaded communication system handling 10+ simultaneous drone connections."
        ]
    },
    {
        company: "CACPL-LMW",
        role: "Data Analyst Intern",
        period: "Sep 2023 - Oct 2023",
        achievements: [
            "Automated EDA processes for 1TB+ production datasets, reducing manual analysis time by 60%.",
            "Created interactive dashboards that improved operational decision-making speed by 45%.",
            "Implemented data cleaning pipelines that increased data quality score from 78% to 95%."
        ]
    }
];

export default function Experience() {
    return (
        <section className="relative w-full bg-[#030303] py-40 px-6 md:px-12 z-20 overflow-hidden">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <p className="text-blue-500 font-mono text-sm mb-4 tracking-[0.4em] uppercase font-bold">Journey / 04</p>
                    <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
                        PROFESSIONAL <br />
                        <span className="text-white/20">EXPERIENCE.</span>
                    </h2>
                </motion.div>

                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-12 border-l-2 border-white/5 py-4 group"
                        >
                            {/* Timeline Node */}
                            <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-blue-500 group-hover:scale-125 transition-transform duration-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]" />

                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">{exp.role}</h3>
                                    <p className="text-xl text-blue-400 font-medium">{exp.company}</p>
                                </div>
                                <span className="text-xs font-mono font-bold tracking-widest text-white/30 uppercase bg-white/5 px-4 py-2 rounded-full border border-white/10 self-start md:self-center">
                                    {exp.period}
                                </span>
                            </div>

                            <ul className="space-y-6">
                                {exp.achievements.map((item, i) => (
                                    <li key={i} className="text-lg text-white/50 leading-relaxed max-w-3xl group-hover:text-white/80 transition-colors duration-500 flex items-start">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-3 mr-4 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

