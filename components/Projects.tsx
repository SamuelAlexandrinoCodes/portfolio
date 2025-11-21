import { motion } from 'framer-motion';
import { Github, Terminal, ArrowRight, Code2, Server, Database } from 'lucide-react';
import { ContentType } from '@/lib/content';

export default function Projects({ t }: { t: ContentType['projects'] }) {
  return (
    <section id="projetos" className="max-w-6xl mx-auto px-6 pb-40">
      <motion.div 
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">{t.title}</h2>
            <p className="text-slate-400 text-lg">{t.subtitle}</p>
          </div>
          <a href="https://github.com/SamuelAlexandrinoCodes?tab=repositories" target="_blank" className="hidden md:flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-mono border border-emerald-500/20 px-4 py-2 rounded-full hover:bg-emerald-500/10">
            {t.view_archive} <ArrowRight size={16}/>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* CARD 1: FLEET MANAGER (Link Atualizado para a pasta do Backend) */}
          <ProjectCard 
            icon={<Server size={100} className="text-emerald-500 rotate-12 group-hover:rotate-0 transition-transform duration-500"/>}
            smallIcon={<Database size={28} className="text-emerald-400"/>}
            title={t.p1.title} desc={t.p1.desc} btn={t.p1.btn}
            tags={['.NET 9', 'Docker', 'PostgreSQL']}
            color="emerald" 
            link="https://github.com/SamuelAlexandrinoCodes/XP-FULLSTACK/tree/main/1-Backend/vehicle-management-api"
          />

          {/* CARD 2: BLOG SECURE (Link Atualizado para a pasta do Blog) */}
          <ProjectCard 
            icon={<Code2 size={100} className="text-blue-500 -rotate-12 group-hover:rotate-0 transition-transform duration-500"/>}
            smallIcon={<Terminal size={28} className="text-blue-400"/>}
            title={t.p2.title} desc={t.p2.desc} btn={t.p2.btn}
            tags={['Next.js', 'Supabase', 'RLS']}
            color="blue" 
            link="https://github.com/SamuelAlexandrinoCodes/XP-FULLSTACK/tree/main/5-Fullstack/blog-next-supabase"
          />

          {/* CARD 3: ML OPTIMIZER (Link de Precisão) */}
          <ProjectCard 
            icon={<Database size={100} className="text-purple-500 rotate-6 group-hover:rotate-0 transition-transform duration-500"/>}
            smallIcon={<Server size={28} className="text-purple-400"/>}
            title={t.p3.title} desc={t.p3.desc} btn={t.p3.btn}
            tags={['C# Core', 'Math', 'Algorithms']}
            color="purple" 
            link="https://github.com/SamuelAlexandrinoCodes/ProjetosAI/tree/main/1-Foundations-CSharp/multivariate-optimizer"
          />
          
        </div>
      </motion.div>
    </section>
  );
}

function ProjectCard({ icon, smallIcon, title, desc, tags, color, link, btn }: any) {
    const colorClasses: any = {
        emerald: "hover:border-emerald-500/50 hover:shadow-emerald-900/20 hover:text-emerald-400 group-hover:bg-emerald-500/20 border-emerald-900 text-emerald-400",
        blue: "hover:border-blue-500/50 hover:shadow-blue-900/20 hover:text-blue-400 group-hover:bg-blue-500/20 border-blue-900 text-blue-400",
        purple: "hover:border-purple-500/50 hover:shadow-purple-900/20 hover:text-purple-400 group-hover:bg-purple-500/20 border-purple-900 text-purple-400",
    }

    return (
        <div className={`group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all hover:shadow-2xl p-8 flex flex-col min-h-[400px] cursor-pointer ${colorClasses[color].split(' ')[0]} ${colorClasses[color].split(' ')[1]}`}
             onClick={() => window.open(link, '_blank')}>
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">{icon}</div>
            <div className="mb-6 relative z-10">
                <div className={`p-3 bg-slate-800 w-fit rounded-xl mb-6 transition-colors ${colorClasses[color].split(' ')[3]}`}>{smallIcon}</div>
                <h3 className="text-2xl font-bold text-slate-100 mb-3">{title}</h3>
                <p className="text-slate-400 leading-relaxed">{desc}</p>
            </div>
            <div className="mt-auto relative z-10">
                <div className="flex flex-wrap gap-2 mb-8">
                    {tags.map((tag:string) => (
                        <span key={tag} className={`px-3 py-1 bg-slate-950 text-xs rounded-full font-mono border ${colorClasses[color].split(' ').slice(4).join(' ')}`}>{tag}</span>
                    ))}
                </div>
                <span className={`inline-flex items-center gap-2 text-sm font-bold text-white transition-colors ${colorClasses[color].split(' ')[2]}`}>
                    <Github size={18}/> {btn}
                </span>
            </div>
        </div>
    )
}