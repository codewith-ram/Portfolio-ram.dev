"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="relative w-full bg-[#030303] py-40 px-6 md:px-12 z-20 overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Left Side - The "Code" look */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-5 relative group"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative glass-panel rounded-3xl p-8 font-mono text-sm leading-relaxed overflow-hidden">
                            <div className="flex gap-2 mb-6">
                                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            </div>
                            <div className="space-y-2">
                                <p className="text-blue-400">class <span className="text-white">Engineer</span> &#123;</p>
                                <p className="ml-4 text-purple-400">constructor<span className="text-white">() &#123;</span></p>
                                <p className="ml-8 text-white/50">this.name = <span className="text-green-400">"Ramanuja Ganesh K."</span>;</p>
                                <p className="ml-8 text-white/50">this.focus = [<span className="text-green-400">"LLMs"</span>, <span className="text-green-400">"Architecture"</span>];</p>
                                <p className="ml-4 text-white">&#125;</p>
                                <p className="ml-4 text-purple-400">solve<span className="text-white">(complex_problem) &#123;</span></p>
                                <p className="ml-8 text-blue-400">return <span className="text-white/50">elegant_solution;</span></p>
                                <p className="ml-4 text-white">&#125;</p>
                                <p className="text-white">&#125;</p>
                            </div>
                            {/* Decorative Blur */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
                        </div>
                    </motion.div>

                    {/* Right Side - Description */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-blue-500 font-mono text-sm mb-6 tracking-[0.4em] uppercase font-bold">About / 01</p>
                            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-tight">
                                CRAFTING THE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">DIGITAL FRONTIER.</span>
                            </h2>
                            <div className="h-[2px] w-24 bg-gradient-to-r from-blue-500 to-transparent mb-12" />

                            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed mb-8">
                                I specialize in building <span className="text-white font-medium">high-performance intelligence systems</span> that bridge the gap between complex backend architectures and cutting-edge Gen AI capabilities.
                            </p>

                            <p className="text-lg text-white/50 font-light leading-relaxed">
                                My approach combines rigorous engineering discipline with creative problem-solving, ensuring every line of code contributes to a scalable, future-proof ecosystem. Currently pushing boundaries in the LLM space.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

