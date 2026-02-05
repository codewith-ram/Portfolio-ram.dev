"use client";

import { motion } from "framer-motion";

const certifications = [
    { name: "AI Agents Fundamentals", issuer: "Hugging Face" },
    { name: "AI Automation with Claude API", issuer: "LinkedIn Learning" },
    { name: "Generative AI: LLMs", issuer: "LinkedIn Learning" },
    { name: "Git Dependency Management", issuer: "LinkedIn Learning" },
    { name: "TypeScript for JS Developers", issuer: "LinkedIn Learning" },
    { name: "Prompt Engineering for Gen AI", issuer: "LinkedIn Learning" }
];

export default function Education() {
    return (
        <section className="relative w-full bg-[#030303] py-24 px-4 md:px-12 z-20 overflow-hidden">

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">

                {/* Education Card */}
                <div className="flex-1">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-white mb-10 tracking-tight flex items-center gap-3"
                    >
                        Education
                        <div className="h-px bg-white/20 flex-grow ml-4 opacity-50" />
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group relative bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10">
                            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-400 uppercase bg-blue-500/10 rounded-full">2021 - 2025</span>
                            <h3 className="text-3xl font-bold text-white mb-2">B.E Aerospace Engineering</h3>
                            <p className="text-xl text-gray-300 mb-6">SNS College of Technology</p>

                            <div className="flex items-center gap-4">
                                <div className="px-4 py-2 rounded-lg bg-black/40 border border-white/10">
                                    <span className="text-gray-400 text-sm">CGPA</span>
                                    <span className="block text-xl font-bold text-white">7.9</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Certifications List */}
                <div className="flex-1">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl font-bold text-white mb-10 tracking-tight flex items-center gap-3"
                    >
                        Certifications
                        <div className="h-px bg-white/20 flex-grow ml-4 opacity-50" />
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ scale: 1.02 }}
                                className="flex flex-col p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                            >
                                <span className="text-gray-200 font-medium leading-tight mb-1">{cert.name}</span>
                                <span className="text-xs text-blue-400/80 uppercase tracking-wider">{cert.issuer}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
