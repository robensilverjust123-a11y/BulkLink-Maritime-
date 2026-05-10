import React, { useState } from 'react';
import { motion } from 'motion/react';
import { VESSELS } from '../constants';
import { Ship, Anchor, Activity, Wind, Filter, ChevronDown, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

const Fleet = () => {
  const [activeVessel, setActiveVessel] = useState(VESSELS[0]);
  const [filter, setFilter] = useState('All');

  return (
    <div className="pt-20 bg-brand-navy min-h-screen">
      <section className="bg-brand-navy py-24 text-white relative overflow-hidden border-b border-brand-slate">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-3/4"
          >
            <div className="flex items-center gap-3 text-brand-orange mb-4">
              <span className="h-px w-10 bg-brand-orange"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">The Fleet</span>
            </div>
            <h1 className="text-6xl md:text-[10rem] font-display font-black mb-8 leading-[0.8] tracking-tighter uppercase text-left">
              Advanced <br/>
              <span className="text-stroke">Vessels.</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl font-medium uppercase text-xs tracking-[0.1em]">
              Precision maritime platforms engineered for the global bulk supply chain.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* List */}
            <div className="lg:w-1/3 space-y-4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Active Database</h2>
                <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest cursor-pointer hover:text-brand-orange transition-colors">
                  <Filter className="w-3 h-3" />
                  <span>Filter</span>
                </div>
              </div>
              
              <div className="space-y-px bg-brand-slate">
                {VESSELS.map((vessel) => (
                  <button
                    key={vessel.id}
                    onClick={() => setActiveVessel(vessel)}
                    className={cn(
                      "w-full px-8 py-6 text-left transition-all flex items-center justify-between group rounded-none",
                      activeVessel.id === vessel.id 
                        ? "bg-brand-orange" 
                        : "bg-brand-navy hover:bg-slate-900 border border-brand-slate"
                    )}
                  >
                    <div>
                      <h3 className={cn(
                        "font-black text-xl uppercase tracking-tighter transition-colors",
                        activeVessel.id === vessel.id ? "text-white" : "text-white"
                      )}>
                        {vessel.name}
                      </h3>
                      <p className={cn(
                        "text-[9px] font-black uppercase tracking-widest",
                        activeVessel.id === vessel.id ? "text-white/70" : "text-slate-500"
                      )}>{vessel.type}</p>
                    </div>
                    <Anchor className={cn(
                      "w-5 h-5 transition-colors",
                      activeVessel.id === vessel.id ? "text-white" : "text-slate-700"
                    )} />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="lg:w-2/3">
              <motion.div
                key={activeVessel.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-brand-navy border border-brand-slate shadow-2xl overflow-hidden relative"
              >
                <div className="bg-slate-900 p-10 border-b border-brand-slate flex flex-col md:flex-row md:items-center justify-between gap-10">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                       <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter">{activeVessel.name}</h2>
                       <span className="px-3 py-1 bg-green-500/10 text-green-500 text-[9px] font-black uppercase tracking-widest border border-green-500/20">
                         {activeVessel.status}
                       </span>
                    </div>
                    <p className="text-slate-500 font-mono text-[10px] font-black uppercase tracking-[0.2em] italic">REGISTRY NO: {activeVessel.id} | LAUNCHED {activeVessel.buildYear}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 shrink-0">
                    <div className="p-4 border border-slate-800 bg-slate-900/50">
                      <p className="text-slate-500 text-[9px] uppercase font-black tracking-widest mb-1 italic">Payload</p>
                      <p className="font-display font-black text-2xl uppercase tracking-tighter text-white">{activeVessel.capacity}</p>
                    </div>
                    <div className="p-4 border border-slate-800 bg-slate-900/50">
                      <p className="text-slate-500 text-[9px] uppercase font-black tracking-widest mb-1 italic">Discharge</p>
                      <p className="font-display font-black text-2xl uppercase tracking-tighter text-white">1,200 T/H</p>
                    </div>
                  </div>
                </div>

                <div className="p-10">
                  <div className="grid md:grid-cols-2 gap-16">
                    <div>
                      <h4 className="text-brand-orange font-black text-[10px] uppercase tracking-[0.4em] mb-8 flex items-center gap-4 italic">
                        <span className="h-px w-6 bg-brand-orange"></span>
                        Specifications
                      </h4>
                      <div className="space-y-4">
                        <SpecItem label="Length Overall" value={activeVessel.specs.length} />
                        <SpecItem label="Beam" value={activeVessel.specs.beam} />
                        <SpecItem label="Max Draught" value={activeVessel.specs.draught} />
                        <SpecItem label="Main Engine" value={activeVessel.specs.engine} />
                        <SpecItem label="Cruise Speed" value="14.5 Knots" />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-brand-orange font-black text-[10px] uppercase tracking-[0.4em] mb-8 flex items-center gap-4 italic">
                        <span className="h-px w-6 bg-brand-orange"></span>
                        Capabilities
                      </h4>
                      <div className="space-y-6">
                        <CheckItem text="Dust-free Self-discharging" />
                        <CheckItem text="Fully Enclosed Cargo Control" />
                        <CheckItem text="Proprietary Pumping Matrix" />
                        <CheckItem text="Automated Weight Analytics" />
                        <CheckItem text="Global AIS Tracking Hub" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-16 pt-10 border-t border-brand-slate flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6 p-6 border border-brand-slate bg-slate-900/30">
                      <Activity className="w-8 h-8 text-brand-orange" />
                      <div>
                        <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest italic mb-1">Live Positioning</p>
                        <p className="font-display font-black text-xl uppercase tracking-tighter">{activeVessel.currentPort || 'Ocean Transit'}</p>
                      </div>
                    </div>
                    <button className="industrial-btn-primary w-full md:w-auto h-fit">
                      Inquire Allocation
                    </button>
                  </div>
                </div>
                
                {/* Decorative */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[15rem] font-black text-white/5 pointer-events-none select-none -mr-20 uppercase tracking-tighter">
                  {activeVessel.name.split(' ')[0]}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const SpecItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between items-center py-4 border-b border-brand-slate cursor-default hover:bg-slate-900/50 transition-colors px-2">
    <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{label}</span>
    <span className="font-black text-white uppercase tracking-tighter text-sm">{value}</span>
  </div>
);

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-4 group">
    <div className="w-5 h-5 bg-brand-orange/10 flex items-center justify-center border border-brand-orange/20 group-hover:bg-brand-orange group-hover:text-white transition-all">
      <CheckCircle2 className="w-3 h-3" />
    </div>
    <span className="font-black text-white uppercase tracking-tighter text-xs">{text}</span>
  </div>
);

export default Fleet;
