'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

// Importando Módulos
import { CONTENT } from '@/lib/content';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';

export default function Home() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  
  const t = CONTENT[lang];
  const toggleLang = () => setLang(prev => prev === 'pt' ? 'en' : 'pt');

  useEffect(() => {
    const handleScroll = () => { setShowScrollBtn(window.scrollY > 400); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-slate-950 text-slate-200 selection:bg-emerald-500/30 relative overflow-x-hidden font-sans">
      
      {/* CABEÇALHO */}
      <Navbar lang={lang} toggleLang={toggleLang} />

      {/* CORPO */}
      <Hero t={t.hero} lang={lang} />
      <TechStack title={t.tech.title} />
      <Projects t={t.projects} />

      {/* UTILITÁRIOS */}
      <AnimatePresence>
        {showScrollBtn && (
            <motion.button 
                initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 p-4 bg-emerald-500 text-slate-900 rounded-full shadow-lg shadow-emerald-900/20 hover:bg-emerald-400 hover:-translate-y-1 transition-all z-50 group"
                title="Voltar ao Topo"
            >
                <ArrowUp size={24} className="group-hover:animate-bounce" />
            </motion.button>
        )}
      </AnimatePresence>

    </main>
  );
}