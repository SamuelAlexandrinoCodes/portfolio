import { Github, Linkedin } from 'lucide-react';
import Image from 'next/image';

interface NavbarProps {
  lang: 'pt' | 'en';
  toggleLang: () => void;
}

export default function Navbar({ lang, toggleLang }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl transition-all h-28">
      {/* ADICIONEI 'relative' AQUI PARA SER A REFERÊNCIA DO CENTRO */}
      <div className="relative max-w-6xl mx-auto px-6 h-full flex items-center">
        
        {/* --- ÁREA DO LOGO (CENTRALIZADA ABSOLUTA) --- */}
        {/* Ele flutua no meio exato da barra, independente dos outros itens */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <Image 
            src="/sac-logo-horizontal.png" 
            alt="SAC Logo - Samuel Alexandrino Codes"
            width={360} 
            height={120}  
            className="h-24 w-auto object-contain" 
            priority
          />
        </div>
        
        {/* --- BOTÕES (EMPURRADOS PARA A DIREITA) --- */}
        {/* 'ml-auto' joga tudo isso para o canto direito */}
        <div className="ml-auto flex items-center gap-6 z-10">
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