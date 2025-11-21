'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Terminal, ArrowRight, Code2, Server, Database, ArrowUp } from 'lucide-react';

export default function Home() {
  // --- LÓGICA DO BOTÃO DE SCROLL ---
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 400) {
            setShowScrollBtn(true);
        } else {
            setShowScrollBtn(false);
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-slate-950 text-slate-200 selection:bg-emerald-500/30 relative overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-emerald-400 font-bold text-lg cursor-pointer"
          >
            &lt;Samuel /&gt;
          </span>
          <div className="flex gap-4">
            <a href="https://github.com/SamuelAlexandrinoCodes" target="_blank" className="hover:text-emerald-400 transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/samuel-alexandrino-de-oliveira-81183b2a7/" target="_blank" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </nav>

      {/* ========================================== */}
      {/* BLOCO 1: HERO SECTION (TEXTO + FOTO)       */}
      {/* ========================================== */}
      <section className="max-w-6xl mx-auto px-6 pt-40 pb-20 md:pt-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* TEXTO */}
          <div className="flex flex-col justify-center order-2 md:order-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-fit px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-6 flex items-center gap-2"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for work
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight"
              >
                Construindo Arquiteturas <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Escaláveis & Inteligentes.
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed"
              >
                Engenheiro de Software focado em <b>.NET</b> e <b>Inteligência Artificial</b>. 
                Transformo requisitos complexos em sistemas robustos, seguros e performáticos.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <a href="#projetos" className="group relative px-6 py-3 bg-emerald-500 text-slate-950 font-bold rounded-lg hover:bg-emerald-400 transition-all flex items-center gap-2">
                  Ver Projetos
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </a>
                <a href="https://github.com/SamuelAlexandrinoCodes" target="_blank" className="px-6 py-3 border border-slate-700 text-slate-300 rounded-lg hover:border-slate-500 hover:bg-slate-900 transition-all flex items-center gap-2">
                  <Github size={18} />
                  GitHub Arsenal
                </a>
              </motion.div>
          </div>

          {/* FOTO (Agora com container fixo para não esmagar) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center md:justify-end"
          >
             <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-br from-emerald-500/50 to-cyan-500/20 shadow-2xl shadow-emerald-500/10">
                <div className="rounded-full overflow-hidden w-full h-full bg-slate-950 relative">
                    <Image 
                        src="/samuel-profile.png" 
                        alt="Samuel Alexandrino" 
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================== */}
      {/* BLOCO 2: TECH ARSENAL (SEPARADO)           */}
      {/* ========================================== */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 pt-10"
        >
          <p className="text-slate-500 text-sm font-mono mb-6">TECH ARSENAL</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3 text-slate-300 bg-slate-900/30 p-3 rounded-lg border border-slate-800/50">
              <Terminal size={24} className="text-purple-400"/> <span className="font-bold">C# / .NET 9</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300 bg-slate-900/30 p-3 rounded-lg border border-slate-800/50">
              <Code2 size={24} className="text-yellow-400"/> <span className="font-bold">Python & AI</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300 bg-slate-900/30 p-3 rounded-lg border border-slate-800/50">
              <Server size={24} className="text-blue-400"/> <span className="font-bold">Docker & Cloud</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300 bg-slate-900/30 p-3 rounded-lg border border-slate-800/50">
              <Database size={24} className="text-emerald-400"/> <span className="font-bold">SQL & NoSQL</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ========================================== */}
      {/* BLOCO 3: PROJETOS (SEPARADO)               */}
      {/* ========================================== */}
      <section id="projetos" className="max-w-6xl mx-auto px-6 pb-40">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">Projetos de Engenharia</h2>
              <p className="text-slate-400 text-lg">Sistemas focados em performance, segurança e escalabilidade.</p>
            </div>
            <a href="https://github.com/SamuelAlexandrinoCodes?tab=repositories" target="_blank" className="hidden md:flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-mono border border-emerald-500/20 px-4 py-2 rounded-full hover:bg-emerald-500/10">
              View Full Archive <ArrowRight size={16}/>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* CARD 1 */}
            <div className="group relative bg-slate-900 border border-slate-800 hover:border-emerald-500/50 rounded-2xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-emerald-900/20 p-8 flex flex-col min-h-[400px]">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                <Server size={100} className="text-emerald-500 rotate-12 group-hover:rotate-0 transition-transform duration-500"/>
              </div>
              <div className="mb-6 relative z-10">
                <div className="p-3 bg-slate-800 w-fit rounded-xl mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <Database size={28} className="text-emerald-400"/>
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-3">Fleet Manager API</h3>
                <p className="text-slate-400 leading-relaxed">
                  API REST completa para gestão de frotas. Arquitetura limpa com foco em segurança e performance. Implementa autenticação JWT e controle de acesso granular (RBAC).
                </p>
              </div>
              <div className="mt-auto relative z-10">
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-slate-950 text-emerald-400 text-xs rounded-full font-mono border border-emerald-900">.NET 9</span>
                  <span className="px-3 py-1 bg-slate-950 text-blue-400 text-xs rounded-full font-mono border border-blue-900">Docker</span>
                  <span className="px-3 py-1 bg-slate-950 text-slate-300 text-xs rounded-full font-mono border border-slate-700">PostgreSQL</span>
                </div>
                <a href="https://github.com/SamuelAlexandrinoCodes/XP-FULLSTACK" target="_blank" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-emerald-400 transition-colors">
                  <Github size={18}/> Acessar Repositório
                </a>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="group relative bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-2xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-blue-900/20 p-8 flex flex-col min-h-[400px]">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                <Code2 size={100} className="text-blue-500 -rotate-12 group-hover:rotate-0 transition-transform duration-500"/>
              </div>
              <div className="mb-6 relative z-10">
                <div className="p-3 bg-slate-800 w-fit rounded-xl mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <Terminal size={28} className="text-blue-400"/>
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-3">Secure Blog Platform</h3>
                <p className="text-slate-400 leading-relaxed">
                  Sistema Fullstack com foco em segurança defensiva. Utiliza Row Level Security (RLS) no banco de dados para garantir isolamento de dados por usuário.
                </p>
              </div>
              <div className="mt-auto relative z-10">
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-slate-950 text-slate-300 text-xs rounded-full font-mono border border-slate-700">Next.js</span>
                  <span className="px-3 py-1 bg-slate-950 text-blue-400 text-xs rounded-full font-mono border border-blue-900">Supabase</span>
                  <span className="px-3 py-1 bg-slate-950 text-emerald-400 text-xs rounded-full font-mono border border-emerald-900">RLS</span>
                </div>
                <a href="https://github.com/SamuelAlexandrinoCodes?tab=repositories" target="_blank" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors">
                  <Github size={18}/> Acessar Código
                </a>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="group relative bg-slate-900 border border-slate-800 hover:border-purple-500/50 rounded-2xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-purple-900/20 p-8 flex flex-col min-h-[400px]">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                <Database size={100} className="text-purple-500 rotate-6 group-hover:rotate-0 transition-transform duration-500"/>
              </div>
              <div className="mb-6 relative z-10">
                <div className="p-3 bg-slate-800 w-fit rounded-xl mb-6 group-hover:bg-purple-500/20 transition-colors">
                  <Server size={28} className="text-purple-400"/>
                </div>
                <h3 className="text-2xl font-bold text-slate-100 mb-3">ML Optimizer</h3>
                <p className="text-slate-400 leading-relaxed">
                  Implementação pura de algoritmos de Machine Learning (Descida do Gradiente) e normalização matemática (Z-Score) usando C# sem bibliotecas externas.
                </p>
              </div>
              <div className="mt-auto relative z-10">
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-3 py-1 bg-slate-950 text-slate-300 text-xs rounded-full font-mono border border-slate-700">C# Core</span>
                  <span className="px-3 py-1 bg-slate-950 text-purple-400 text-xs rounded-full font-mono border border-purple-900">Math</span>
                  <span className="px-3 py-1 bg-slate-950 text-slate-300 text-xs rounded-full font-mono border border-slate-700">Algorithms</span>
                </div>
                <a href="https://github.com/SamuelAlexandrinoCodes/ProjetosAI" target="_blank" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-purple-400 transition-colors">
                  <Github size={18}/> Ver Algoritmo
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* BOTÃO SCROLL */}
      <AnimatePresence>
        {showScrollBtn && (
            <motion.button 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
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