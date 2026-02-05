import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-[#030303] bg-grid-pattern relative">
      <ScrollyCanvas />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />

      <footer className="w-full py-24 text-center text-gray-400 text-sm border-t border-white/5 bg-[#030303] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        <div className="relative z-10 flex flex-col items-center space-y-6 mb-8">
          <h3 className="text-2xl font-bold text-white tracking-tight">Let's Connect</h3>
          <p className="text-lg text-gray-400">ramanujaganeshlk.work@gmail.com</p>
          <p className="text-gray-500 font-mono">+91-82483 72040</p>

          <div className="flex space-x-6 mt-4">
            <a href="https://linkedin.com/in/ramanujaganeshk/" target="_blank" className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 hover:border-white/20 hover:text-white transition-all">LinkedIn</a>
            <a href="https://github.com/codewith-ram" target="_blank" className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 hover:border-white/20 hover:text-white transition-all">GitHub</a>
          </div>
        </div>
        <p className="relative z-10 opacity-50">© {new Date().getFullYear()} Ramanuja Ganesh K. Engineered with Next.js.</p>
      </footer>
    </main>
  );
}
