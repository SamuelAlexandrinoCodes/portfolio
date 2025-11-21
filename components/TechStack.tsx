import { motion } from 'framer-motion';
import { Terminal, Code2, Server, Database } from 'lucide-react';

export default function TechStack({ title }: { title: string }) {
  return (
    <section className="max-w-6xl mx-auto px-6 mb-32">
      <motion.div 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="border-t border-slate-800 pt-10"
      >
        <p className="text-slate-500 text-sm font-mono mb-6">{title}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <TechItem icon={<Terminal size={24} className="text-purple-400"/>} text="C# / .NET 9" border="hover:border-purple-500/30" />
          <TechItem icon={<Code2 size={24} className="text-yellow-400"/>} text="Python & AI" border="hover:border-yellow-500/30" />
          <TechItem icon={<Server size={24} className="text-blue-400"/>} text="Docker & Cloud" border="hover:border-blue-500/30" />
          <TechItem icon={<Database size={24} className="text-emerald-400"/>} text="SQL & NoSQL" border="hover:border-emerald-500/30" />
        </div>
      </motion.div>
    </section>
  );
}

function TechItem({ icon, text, border }: any) {
  return (
    <div className={`flex items-center gap-3 text-slate-300 bg-slate-900/30 p-3 rounded-lg border border-slate-800/50 ${border} transition-colors`}>
      {icon} <span className="font-bold">{text}</span>
    </div>
  )
}