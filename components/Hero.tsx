import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';
import { ContentType } from '@/lib/content';

export default function Hero({ t, lang }: { t: ContentType['hero'], lang: string }) {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-40 pb-20 md:pt-48">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* TEXTO */}
        <div className="flex flex-col justify-center order-2 md:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="w-fit px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-6 flex items-center gap-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {t.badge}
            </motion.div>

            <motion.h1 
              key={lang} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight"
            >
              {t.title_1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">{t.title_2}</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t.description }} 
            />

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#projetos" className="group relative px-6 py-3 bg-emerald-500 text-slate-950 font-bold rounded-lg hover:bg-emerald-400 transition-all flex items-center gap-2">
                {t.btn_projects} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </a>
              <a href="https://github.com/SamuelAlexandrinoCodes" target="_blank" className="px-6 py-3 border border-slate-700 text-slate-300 rounded-lg hover:border-slate-500 hover:bg-slate-900 transition-all flex items-center gap-2">
                <Github size={18} /> {t.btn_github}
              </a>
            </motion.div>
        </div>
        {/* FOTO */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
           <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-br from-emerald-500/50 to-cyan-500/20 shadow-2xl shadow-emerald-500/10">
              <div className="rounded-full overflow-hidden w-full h-full bg-slate-950 relative">
                  <Image src="/samuel-profile.png" alt="Samuel Alexandrino" fill className="object-cover" priority />
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}