import React from 'react';
import { motion } from 'motion/react';
import { CASE_STUDIES } from '../constants';
import { BarChart3, Clock, CheckCircle2, ChevronRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
           <h1 className="text-6xl font-display font-bold tracking-tighter mb-6">Logistics <span className="text-brand-orange">Impact.</span></h1>
           <p className="text-slate-500 text-xl max-w-2xl mx-auto">
             Hard data and real-world results from our most challenging industrial deployments.
           </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
           {CASE_STUDIES.map((study, idx) => (
             <div key={study.id} className={idx % 2 === 1 ? 'lg:flex-row-reverse flex flex-col lg:flex-row gap-16 items-center' : 'lg:flex flex-col lg:flex-row gap-16 items-center'}>
                <div className="lg:w-1/2 space-y-8">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-1 bg-brand-orange" />
                      <span className="text-brand-orange font-bold uppercase tracking-widest text-xs">Featured Project</span>
                   </div>
                   <h2 className="text-4xl font-display font-bold leading-tight">{study.title}</h2>
                   <p className="text-brand-navy font-bold text-lg">Client: {study.client}</p>
                   <p className="text-slate-500 text-lg leading-relaxed">
                     {study.description}
                   </p>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {study.kpis.map((kpi, i) => (
                        <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                           <p className="text-brand-navy font-black text-xl">{kpi.value}</p>
                           <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">{kpi.label}</p>
                        </div>
                      ))}
                   </div>
                   <div className="pt-4">
                      <Link to="/contact" className="bg-brand-navy text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 w-fit group">
                         Get Project Insights <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                   </div>
                </div>
                <div className="lg:w-1/2 relative group">
                   <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10">
                      <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                   </div>
                   <div className="absolute -inset-4 border-2 border-brand-orange/30 rounded-[3rem] z-0" />
                   <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-6 py-4 rounded-2xl shadow-xl z-20 flex items-center gap-3">
                      <TrendingUp className="text-green-500 w-6 h-6" />
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Outcome</p>
                        <p className="font-display font-black text-brand-navy uppercase">{study.outcome}</p>
                      </div>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Success Metrics Banner */}
      <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center relative z-10">
            <MetricBox label="Reliability" value="99.9%" sub="Uptime" />
            <MetricBox label="Efficiency" value="+28%" sub="Avg. Improvement" />
            <MetricBox label="Global Reach" value="48" sub="Countries" />
            <MetricBox label="Team Exp." value="250+" sub="Maritime Experts" />
         </div>
         <BarChart3 className="absolute -bottom-20 -right-20 w-80 h-80 text-white/5 rotate-12" />
      </section>
    </div>
  );
};

const MetricBox = ({ label, value, sub }: { label: string; value: string; sub: string }) => (
  <div>
    <h3 className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.3em] mb-4">{label}</h3>
    <p className="text-5xl md:text-6xl font-display font-black mb-1">{value}</p>
    <p className="text-brand-orange font-bold text-sm">{sub}</p>
  </div>
);

export default CaseStudies;
