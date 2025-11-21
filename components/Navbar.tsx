import { Github, Linkedin, Globe } from 'lucide-react';

interface NavbarProps {
  lang: 'pt' | 'en';
  toggleLang: () => void;
}

export default function Navbar({ lang, toggleLang }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl transition-all">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-emerald-400 font-bold text-lg cursor-pointer hover:tracking-widest transition-all"
        >
          &lt;Samuel /&gt;
        </span>
        
        <div className="flex items-center gap-6">
          {/* LANGUAGE TOGGLE */}
          <button 
            onClick={toggleLang}
            className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 hover:border-emerald-500/50 transition-all cursor-pointer group"
          >
            <span className={`text-xs font-bold font-mono transition-all ${lang === 'pt' ? 'text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]' : 'text-slate-600 group-hover:text-slate-500'}`}>BR</span>
            <div className="h-3 w-px bg-slate-700"></div>
            <span className={`text-xs font-bold font-mono transition-all ${lang === 'en' ? 'text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]' : 'text-slate-600 group-hover:text-slate-500'}`}>EN</span>
          </button>

          <div className="h-4 w-px bg-slate-800 hidden sm:block"></div>

          <div className="flex gap-4">
            <a href="https://github.com/SamuelAlexandrinoCodes" target="_blank" className="hover:text-emerald-400 transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/samuel-alexandrino-de-oliveira-81183b2a7/" target="_blank" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </nav>
  );
}