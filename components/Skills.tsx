"use client";

import { motion } from "framer-motion";

const skillGroups = [
    {
        title: "Programming",
        skills: ["Python", "JavaScript", "TypeScript", "C++", "Java", "SQL"],
        icon: "💻",
        size: "md"
    },
    {
        title: "AI & ML",
        skills: ["LLMs", "LangChain", "OpenAI", "PyTorch", "Prompt Engineering"],
        icon: "🤖",
        size: "lg"
    },
    {
        title: "Frameworks",
        skills: ["Next.js", "React", "Node.js", "FastAPI", "Django"],
        icon: "⚡",
        size: "md"
    },
    {
        title: "Tools & Cloud",
        skills: ["Docker", "AWS", "Git", "Kubernetes", "PostgreSQL", "Redis"],
        icon: "🛠️",
        size: "sm"
    },
    {
        title: "Design",
        skills: ["Figma", "Framer", "CSS/Tailwind", "Responsive Design"],
        icon: "🎨",
        size: "sm"
    }
];

export default function Skills() {
    return (
        <section className="relative w-full bg-[#030303] py-40 px-6 md:px-12 z-20">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-blue-500 font-mono text-sm mb-4 tracking-[0.4em] uppercase font-bold"
                    >
                        Stack / 03
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-black text-white tracking-tighter"
                    >
                        TECH <span className="text-white/20">STACK.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]">
                    {skillGroups.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className={`
                                relative group overflow-hidden rounded-[2.5rem] glass-panel p-8 flex flex-col justify-between
                                ${group.size === 'lg' ? 'md:col-span-2 md:row-span-2' : ''}
                                ${group.size === 'md' ? 'md:col-span-1 md:row-span-2' : ''}
                                ${group.size === 'sm' ? 'md:col-span-1 md:row-span-1' : ''}
                            `}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-500">{group.icon}</span>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{group.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill, i) => (
                                        <span key={i} className="text-[11px] font-mono font-bold px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-white/40 group-hover:border-white/20 group-hover:text-white transition-all">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10 mt-4 overflow-hidden h-1">
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    whileInView={{ x: "0%" }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="h-full w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

