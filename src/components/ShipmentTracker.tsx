import React, { useState } from 'react';
import { Search, Ship, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { VESSELS } from '../constants';

export const ShipmentTracker = () => {
  const [query, setQuery] = useState('');
  const [trackingData, setTrackingData] = useState<any>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    const vessel = VESSELS.find(v => v.id.toLowerCase().includes(query.toLowerCase()) || v.name.toLowerCase().includes(query.toLowerCase()));
    if (vessel) {
      setTrackingData(vessel);
    } else {
      setTrackingData('not_found');
    }
  };

  return (
    <div className="bg-brand-navy border border-brand-slate p-8 shadow-2xl relative overflow-hidden">
      <div className="flex items-center gap-2 text-orange-500 mb-6">
        <span className="h-px w-6 bg-orange-500"></span>
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Live Shipment Tracking</span>
      </div>
      <form onSubmit={handleTrack} className="flex flex-col gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
          <input 
            type="text" 
            placeholder="ENTER VESSEL NAME OR IMO..." 
            className="w-full pl-12 pr-4 py-4 bg-slate-900 border border-slate-800 rounded-none focus:outline-none focus:border-brand-orange text-white font-black text-sm tracking-tighter uppercase"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button className="bg-brand-orange text-white px-8 py-4 rounded-none font-black uppercase text-sm tracking-tighter hover:bg-orange-700 transition-colors shadow-lg">
          Track Now
        </button>
      </form>

      <AnimatePresence mode="wait">
        {!trackingData && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-12 border border-brand-slate flex flex-col items-center gap-4"
          >
            <Ship className="w-12 h-12 text-brand-slate" />
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Live Data Awaiting Input</p>
            <p className="text-[10px] text-slate-400 italic">Try "NAVIGATOR" or "TITAN"</p>
          </motion.div>
        )}

        {trackingData === 'not_found' && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-12 bg-red-500/10 border border-red-500/20"
          >
            <p className="text-red-500 text-[10px] font-black uppercase tracking-widest">Network Error: Vessel ID Not Recognized</p>
          </motion.div>
        )}

        {trackingData && trackingData !== 'not_found' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between p-5 bg-slate-900/50 border border-slate-800">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-orange flex items-center justify-center font-black italic">
                   <Ship className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Active Vessel</p>
                  <p className="font-display font-black text-white text-xl tracking-tighter uppercase">{trackingData.name}</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-green-500/10 text-green-500 text-[9px] font-black uppercase tracking-widest border border-green-500/20">
                {trackingData.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 border border-slate-800 bg-slate-900/30">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Origin Port</p>
                <p className="font-black text-white uppercase tracking-tighter">{trackingData.currentPort}</p>
              </div>
              <div className="p-5 border border-slate-800 bg-slate-900/30">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">ETA Data</p>
                <p className="font-black text-white uppercase tracking-tighter">{trackingData.eta || 'N/A'}</p>
              </div>
            </div>

            <div className="relative pt-4">
               <div className="h-1 bg-slate-800 w-full rounded-none overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: trackingData.status === 'In Transit' ? '65%' : '100%' }}
                    className="h-full bg-brand-orange" 
                  />
               </div>
               <div className="flex justify-between mt-3 text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] italic">
                  <span>Loading</span>
                  <span>In Transit</span>
                  <span>Discharging</span>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Decorative text */}
      <div className="absolute -bottom-6 -right-6 text-6xl font-black text-white/5 pointer-events-none select-none">
        DATA
      </div>
    </div>
  );
};
