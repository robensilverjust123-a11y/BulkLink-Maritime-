import React from 'react';
import { motion } from 'motion/react';
import { Ship, Anchor, Briefcase, Warehouse, LineChart, Globe, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="pt-20 bg-brand-navy min-h-screen">
      <section className="py-24 bg-brand-navy border-b border-brand-slate text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 text-brand-orange mb-4">
              <span className="h-px w-10 bg-brand-orange"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Logistics Architecture</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-display font-black tracking-tighter mb-8 uppercase leading-[0.85]">
              Industrial <br/> 
              <span className="text-stroke text-white/10">Connectivity.</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl font-medium uppercase text-xs tracking-[0.1em]">
               The world's most robust maritime network for bulk cement transportation. Built for speed, secured for scale.
            </p>
          </motion.div>
          <div className="hidden lg:flex justify-end opacity-20">
             <Ship className="w-[30rem] h-[30rem] -mr-20 rotate-12" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-navy border-b border-brand-slate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-slate border border-brand-slate overflow-hidden">
            <ServiceSection 
              icon={<Ship />}
              title="Bulk Cement Shipping"
              description="Dedicated vessel allocation for multi-million ton transport projects with global route coverage."
            />
            <ServiceSection 
              icon={<Anchor />}
              title="Port Coordination"
              description="Full-service management of vessel calls, discharging sequences, and customs protocols."
            />
            <ServiceSection 
              icon={<Warehouse />}
              title="Storage & Handling"
              description="Strategic terminal management and inland storage coordination for construction sites."
            />
            <ServiceSection 
              icon={<Briefcase />}
              title="Supply Chain Analytics"
              description="Data-driven supply chain audits to identify cost leakages and optimize freight lead times."
            />
            <ServiceSection 
              icon={<LineChart />}
              title="Project Logistics"
              description="End-to-end oversized and large-scale cargo coordination for massive infrastructure works."
            />
            <ServiceSection 
              icon={<Globe />}
              title="Global Trading Hubs"
              description="Assisting cement manufacturers and traders with logistics for international export ventures."
            />
          </div>
        </div>
      </section>

      {/* Freight Estimator Feature */}
      <section className="py-24 bg-brand-navy overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="bg-brand-navy border border-brand-slate p-8 md:p-16 shadow-2xl grid lg:grid-cols-2 gap-24 relative overflow-hidden">
              <div>
                <h2 className="text-4xl md:text-6xl font-display font-black mb-10 uppercase tracking-tighter">Freight Estimate Tool</h2>
                <p className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-12 italic">
                  Instant, non-binding data for 500+ global shipping lanes.
                </p>
                <div className="space-y-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Origin Hub</label>
                      <select className="w-full bg-slate-900 border border-slate-800 px-4 py-4 font-black uppercase text-sm tracking-tighter text-white appearance-none focus:border-brand-orange outline-none">
                        <option>Piraeus, Greece</option>
                        <option>Shanghai, China</option>
                        <option>Haifa, Israel</option>
                        <option>Rotterdam, NL</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Target Node</label>
                      <select className="w-full bg-slate-900 border border-slate-800 px-4 py-4 font-black uppercase text-sm tracking-tighter text-white appearance-none focus:border-brand-orange outline-none">
                        <option>Jebel Ali, UAE</option>
                        <option>Houston, USA</option>
                        <option>NEOM Port, KSA</option>
                        <option>Cape Town, SA</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Material Classification</label>
                    <div className="flex gap-px bg-brand-slate border border-brand-slate">
                       <button className="flex-1 py-4 px-4 bg-brand-orange text-white font-black uppercase text-[10px] tracking-widest">OPC (Bulk)</button>
                       <button className="flex-1 py-4 px-4 bg-slate-900 text-slate-500 hover:text-white transition-colors font-black uppercase text-[10px] tracking-widest">Clinker</button>
                    </div>
                  </div>
                  <button className="industrial-btn-primary w-full">
                    Initialize Rate Calculation
                  </button>
                  <p className="text-center text-[9px] text-slate-500 uppercase font-bold italic tracking-widest">
                    *Data indexed against current market volatility benchmarks.
                  </p>
                </div>
              </div>
              <div className="bg-slate-900/50 p-12 border border-slate-800 flex flex-col justify-center relative">
                <div className="relative z-10">
                  <h3 className="text-2xl font-display font-black mb-8 uppercase tracking-tight">Enterprise Tiers</h3>
                  <div className="space-y-10 pt-4">
                    <div className="flex items-start gap-6 border-b border-white/5 pb-8">
                       <div className="w-12 h-12 bg-brand-orange flex items-center justify-center shrink-0"><LineChart className="w-6 h-6 text-white"/></div>
                       <div>
                         <p className="font-black uppercase tracking-tighter text-xl">Standard Volume</p>
                         <p className="text-brand-orange font-mono text-[10px] font-black uppercase tracking-widest mt-1">Starting $45.00 / Metric Ton</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-6">
                       <div className="w-12 h-12 bg-brand-slate flex items-center justify-center shrink-0"><Briefcase className="w-6 h-6 text-white"/></div>
                       <div>
                         <p className="font-black uppercase tracking-tighter text-xl">Institutional Scale</p>
                         <p className="text-slate-500 font-mono text-[10px] font-black uppercase tracking-widest mt-1">Custom Logistical Architecture Required</p>
                       </div>
                    </div>
                  </div>
                  <Link to="/contact" className="mt-16 industrial-btn-outline w-full flex justify-center">
                    Talk to an Architect
                  </Link>
                </div>
                {/* Decorative map elements */}
                <Globe className="absolute -bottom-20 -right-20 w-80 h-80 text-white/5" />
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

const ServiceSection = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="p-12 bg-brand-navy hover:bg-slate-900 transition-all group border-0">
    <div className="w-14 h-14 bg-brand-slate flex items-center justify-center mb-10 group-hover:bg-brand-orange group-hover:text-white transition-all transform group-hover:rotate-6">
      {React.cloneElement(icon as React.ReactElement, { className: 'w-7 h-7' })}
    </div>
    <h3 className="text-2xl font-display font-black mb-6 uppercase tracking-tight leading-tight">{title}</h3>
    <p className="text-slate-400 leading-relaxed mb-8 text-sm">{description}</p>
    <Link to="/contact" className="inline-flex items-center gap-3 text-brand-orange font-black text-[10px] uppercase tracking-[0.2em] group-hover:gap-5 transition-all">
      Deploy Service <ChevronRight className="w-4 h-4"/>
    </Link>
  </div>
);

export default Services;
