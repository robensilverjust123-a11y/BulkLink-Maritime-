import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Users, Award, ShieldCheck, Zap, Globe2, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20 bg-brand-navy min-h-screen">
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden border-b border-brand-slate">
        <div className="absolute inset-0 bg-brand-navy">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544216717-3bbf5215bc82?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay opacity-20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center gap-3 text-brand-orange mb-8">
              <span className="h-px w-10 bg-brand-orange"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Establishment 2014</span>
              <span className="h-px w-10 bg-brand-orange"></span>
            </div>
            <h1 className="text-6xl md:text-[12rem] font-display font-black text-white tracking-tighter mb-8 leading-none uppercase">
              Built on <br/>
              <span className="text-stroke">Trust.</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-black uppercase tracking-[0.2em] italic">
              Specialized Maritime Engineering for the Global Construction Sector.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="flex items-center gap-3 text-brand-orange">
                <span className="h-px w-6 bg-brand-orange"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Operational Excellence</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-black leading-[0.9] uppercase tracking-tighter">Infrastructure <br/> the World <br/> relies on.</h2>
              <p className="text-lg text-slate-400 leading-relaxed font-medium">
                BulkLink Maritime was founded to solve a critical bottleneck: the inefficient transport of specialized cement powders. Today, we manage the market's most advanced pneumatic fleet.
              </p>
              <div className="grid grid-cols-2 gap-12 pt-8 border-t border-brand-slate">
                <div>
                  <p className="text-5xl font-display font-black text-brand-orange mb-2 tracking-tighter">10Y+</p>
                  <p className="text-slate-500 font-black uppercase text-[9px] tracking-[0.3em]">Operational Longevity</p>
                </div>
                <div>
                  <p className="text-5xl font-display font-black text-brand-orange mb-2 tracking-tighter">100%</p>
                  <p className="text-slate-500 font-black uppercase text-[9px] tracking-[0.3em]">Safety Compliance</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-slate-900 border border-brand-slate overflow-hidden relative z-10 group">
                <img 
                  src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1000" 
                  alt="Industrial Scene" 
                  className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 border-[24px] border-brand-navy group-hover:border-[12px] transition-all duration-500 pointer-events-none" />
              </div>
              <div className="absolute top-1/2 -right-12 w-48 h-1 bg-brand-orange z-0 hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-navy border-t border-brand-slate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
             <div>
                <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter leading-none mb-4">Internal <br/> Standards</h2>
                <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">Global Logistics Benchmarks.</p>
             </div>
             <div className="text-brand-orange font-black italic text-8xl opacity-10 select-none">
                CORE
             </div>
          </div>
          <div className="grid md:grid-cols-4 gap-px bg-brand-slate border border-brand-slate overflow-hidden">
            <ValueCard icon={<ShieldCheck/>} title="Safe Harbor" desc="Zero-compromise protocols for all maritime operations." />
            <ValueCard icon={<Zap/>} title="Mach Speed" desc="Maximum terminal efficiency via advanced pneumatic systems." />
            <ValueCard icon={<Users/>} title="Asset Unity" desc="Enterprise account integration for every logistical node." />
            <ValueCard icon={<Target/>} title="Clean Fuel" desc="Pioneering low-emission maritime propulsion methods." />
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-20 uppercase tracking-tighter text-center">Protocol Leaders</h2>
          <div className="grid md:grid-cols-3 gap-16">
            <TeamMember name="Capt. Elias Thorne" role="Chief Operations Officer" />
            <TeamMember name="Heidi Vance" role="Head of Logistics Arch" />
            <TeamMember name="Arjun Metha" role="Global Route Director" />
          </div>
        </div>
      </section>
    </div>
  );
};

const ValueCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="p-12 bg-brand-navy hover:bg-slate-900 transition-all group">
    <div className="text-slate-500 group-hover:text-brand-orange w-12 h-12 mb-8 transition-colors">
      {React.cloneElement(icon as React.ReactElement, { className: 'w-full h-full' })}
    </div>
    <h3 className="text-xl font-display font-black mb-4 uppercase tracking-tight">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const TeamMember = ({ name, role }: { name: string; role: string }) => (
  <div className="group border-l border-brand-slate transition-all hover:border-brand-orange pl-8">
    <div className="aspect-[3/4] bg-slate-900 overflow-hidden mb-8 border border-white/5 group-hover:border-brand-orange/30 transition-all grayscale group-hover:grayscale-0 relative">
      <div className="absolute inset-0 bg-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="w-full h-full flex items-center justify-center bg-slate-900/50">
        <Briefcase className="w-16 h-16 text-slate-800" />
      </div>
    </div>
    <h3 className="text-2xl font-display font-black text-white mb-2 uppercase tracking-tighter">{name}</h3>
    <p className="text-brand-orange font-black text-[10px] tracking-[0.3em] uppercase italic">{role}</p>
  </div>
);

export default About;
