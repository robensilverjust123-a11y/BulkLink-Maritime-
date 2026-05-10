import React from 'react';
import { motion } from 'motion/react';
import { ROUTES } from '../constants';
import { MapPin, Globe, Clock, Ship, ShieldCheck, ChevronRight } from 'lucide-react';

const RoutesPage = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-900 py-24 text-white relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center md:text-left"
          >
            <h1 className="text-6xl md:text-7xl font-display font-bold mb-6 tracking-tighter">Global Shipping <br/> <span className="text-brand-orange italic">Lanes.</span></h1>
            <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">
              Leveraging the world's most efficient maritime arteries to deliver your bulk cargo with pinpoint precision and industrial reliability.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544216717-3bbf5215bc82?auto=format&fit=crop&q=80&w=2000')] bg-cover opacity-10 mix-blend-overlay" />
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Visual Column */}
            <div className="lg:col-span-2">
               <div className="bg-slate-50 rounded-3xl p-10 relative overflow-hidden shadow-inner aspect-[16/9] flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <Globe className="w-32 h-32 text-brand-navy/10 mx-auto animate-spin-slow" />
                    <h3 className="text-2xl font-display font-black text-brand-navy">INTERACTIVE GLOBAL MAP</h3>
                    <p className="text-slate-400 font-medium">Map interaction powered by Real-time AIS data</p>
                    <div className="flex justify-center gap-4">
                       <span className="w-3 h-3 bg-brand-orange rounded-full animate-ping" />
                       <span className="w-3 h-3 bg-brand-navy rounded-full animate-bounce" />
                       <span className="w-3 h-3 bg-brand-orange rounded-full animate-ping" />
                    </div>
                  </div>
                  {/* Decorative shipping lines */}
                  <div className="absolute inset-x-0 top-1/2 h-0.5 bg-brand-orange/10 transform -rotate-12" />
                  <div className="absolute inset-x-0 bottom-1/3 h-0.5 bg-brand-orange/10 transform rotate-45" />
               </div>
               
               <div className="mt-12 grid md:grid-cols-2 gap-8">
                  <div className="p-8 bg-slate-900 rounded-2xl text-white">
                     <p className="text-brand-orange font-bold text-xs uppercase tracking-widest mb-2">Transit Highlight</p>
                     <h3 className="text-2xl font-display font-bold mb-4">Suez Canal Priority</h3>
                     <p className="text-slate-400 text-sm leading-relaxed mb-6">Our fleet holds priority transit status across major canals, reducing idling time and project delays by up to 15%.</p>
                     <div className="flex items-center gap-3 text-brand-orange">
                        <Clock className="w-5 h-5"/>
                        <span className="font-bold">Avg. Saving: 48 Hours</span>
                     </div>
                  </div>
                  <div className="p-8 bg-brand-orange rounded-2xl text-white">
                     <p className="text-brand-navy font-bold text-xs uppercase tracking-widest mb-2">Network Expansion</p>
                     <h3 className="text-2xl font-display font-bold mb-4">West Coast Entry</h3>
                     <p className="text-orange-950 text-sm leading-relaxed mb-6">New strategic partnerships in Port of Long Beach and Vancouver to serve North American infrastructure giants.</p>
                     <div className="flex items-center gap-3 text-brand-navy">
                        <Ship className="w-5 h-5"/>
                        <span className="font-bold">Weekly Scheduled Service</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Routes List */}
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold mb-8">Active Shipping Lanes</h2>
              {ROUTES.map(route => (
                <div key={route.id} className="p-6 border border-slate-100 rounded-2xl bg-white hover:shadow-xl transition-all group">
                   <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-slate-50 text-brand-navy rounded-lg group-hover:bg-brand-orange group-hover:text-white transition-colors">
                        <Ship className="w-5 h-5" />
                      </div>
                      <h4 className="font-display font-bold text-lg">{route.name}</h4>
                   </div>
                   <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                         <MapPin className="w-4 h-4 text-brand-orange" />
                         <span>{route.origin} → {route.destination}</span>
                      </div>
                      <div className="flex items-center gap-4 pt-2">
                         <div className="flex items-center gap-1.5 text-xs font-bold text-brand-navy">
                            <Clock className="w-3.5 h-3.5" />
                            {route.transitTime}
                         </div>
                         <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            {route.frequency}
                         </div>
                      </div>
                   </div>
                </div>
              ))}
              <div className="bg-slate-50 p-8 rounded-2xl border border-dashed border-slate-300 text-center">
                 <p className="text-slate-500 text-sm font-medium mb-4">Don't see your route?</p>
                 <button className="bg-brand-navy text-white px-6 py-3 rounded-xl font-bold w-full hover:bg-brand-orange transition-colors">
                   Request Custom Routing
                 </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoutesPage;
