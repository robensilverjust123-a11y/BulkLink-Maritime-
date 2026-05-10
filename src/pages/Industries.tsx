import React from 'react';
import { motion } from 'motion/react';
import { Building2, Landmark, Factory, Truck, Globe, HardHat, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Industries = () => {
  return (
    <div className="pt-20 bg-brand-navy min-h-screen">
       <section className="py-24 bg-brand-navy border-b border-brand-slate text-white text-left">
         <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 text-brand-orange mb-4">
                <span className="h-px w-10 bg-brand-orange"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Sector Specialization</span>
              </div>
              <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter mb-8 uppercase leading-[0.85]">
                Sectors We <br/> 
                <span className="text-stroke text-white/5">Empower.</span>
              </h1>
              <p className="text-slate-400 text-lg max-w-xl leading-relaxed font-medium uppercase text-xs tracking-[0.1em]">
                 Frameworks architected for systems that drive the global economy.
              </p>
            </motion.div>
         </div>
       </section>

       <section className="py-24 bg-brand-navy">
         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-slate border border-brand-slate overflow-hidden">
            <IndustryCard 
              icon={<Landmark />}
              title="Government Assets"
              desc="Strategic support for national highway, bridge, and dam projects with strictly mandated delivery schedules."
            />
            <IndustryCard 
              icon={<Building2 />}
              title="Commercial Urbanism"
              desc="Scalable cement supply chain management for high-rise developments and urban expansion projects."
            />
            <IndustryCard 
              icon={<Factory />}
              title="Cement Production"
              desc="Assisting global producers with export logistics and vessel chartering to reach international markets."
            />
            <IndustryCard 
              icon={<Truck />}
              title="Industrial Supply"
              desc="Optimizing the flow from port terminals to regional distribution centers for trading organizations."
            />
            <IndustryCard 
              icon={<Globe />}
              title="Maritime Commerce"
              desc="Expert maritime coordination for complex cross-border cement trading and maritime freight."
            />
            <IndustryCard 
              icon={<HardHat />}
              title="Remote Exploration"
              desc="Providing bulk materials logistics for remote mining sites requiring specialized maritime entry."
            />
         </div>
       </section>

       <section className="py-32 bg-brand-navy border-t border-brand-slate relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="bg-slate-900 border border-brand-slate p-12 md:p-24 text-left relative">
               <h2 className="text-4xl md:text-7xl font-display font-black mb-8 uppercase tracking-tighter">Need a Custom <br/> Sector Solution?</h2>
               <p className="text-slate-400 text-sm max-w-xl mb-12 uppercase font-bold tracking-widest leading-relaxed">
                 We architect unique logistics pathways for specialized requirements. Talk to our engineering team today.
               </p>
               <Link to="/contact" className="industrial-btn-primary group">
                 Strategic Consultation <ChevronRight className="group-hover:translate-x-2 transition-transform" />
               </Link>
               
               <div className="absolute top-0 right-0 p-10 opacity-5">
                  <Factory className="w-64 h-64" />
               </div>
            </div>
          </div>
       </section>
    </div>
  );
};

const IndustryCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-12 bg-brand-navy hover:bg-slate-900 transition-all group border-0">
    <div className="w-14 h-14 bg-brand-slate flex items-center justify-center mb-10 group-hover:bg-brand-orange group-hover:text-white transition-all transform group-hover:scale-110">
      {React.cloneElement(icon as React.ReactElement, { className: 'w-7 h-7' })}
    </div>
    <h3 className="text-2xl font-display font-black mb-6 uppercase tracking-tight leading-tight">{title}</h3>
    <p className="text-slate-400 leading-relaxed mb-8 text-sm">{desc}</p>
    <Link to="/contact" className="inline-flex items-center gap-3 text-brand-orange font-black text-[10px] uppercase tracking-[0.2em] group-hover:gap-5 transition-all">
      Deploy System <ChevronRight className="w-4 h-4"/>
    </Link>
  </div>
);

export default Industries;
