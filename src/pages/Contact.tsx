import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20 bg-brand-navy min-h-screen">
      <section className="py-24 bg-brand-navy border-b border-brand-slate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="flex items-center gap-3 text-brand-orange mb-4">
                  <span className="h-px w-10 bg-brand-orange"></span>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em]">Get in Touch</span>
                </div>
                
                <h1 className="text-6xl md:text-8xl font-display font-black mb-8 leading-[0.9] tracking-tighter uppercase">
                  Global Logistics <br/>
                  <span className="text-stroke">Consultation.</span>
                </h1>
                <p className="text-slate-400 text-lg mb-12 leading-relaxed font-medium uppercase text-xs tracking-[0.1em]">
                  Industrial architects ready to secure your bulk supply chain needs.
                </p>

                <div className="space-y-4">
                  <ContactMethod icon={<Mail />} label="Secure Data" value="logistics@bulklink.ma" />
                  <ContactMethod icon={<Phone />} label="Global Line" value="+65 6789 0123" />
                  <ContactMethod icon={<MapPin />} label="Global HQ" value="Singapore Tower, 1200 Blvd" />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-brand-navy p-10 border border-brand-slate shadow-2xl relative"
            >
              {submitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-brand-orange/10 flex items-center justify-center mx-auto mb-6">
                    <Send className="text-brand-orange w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-display font-black mb-4 uppercase tracking-tight">Transmission Received</h3>
                  <p className="text-slate-500 mb-8 uppercase text-[10px] font-bold tracking-[0.2em]">Our logistical team will respond within 4 hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="industrial-btn-outline w-full"
                  >
                    New Transmission
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-display font-black mb-10 uppercase tracking-tight">Request Strategic Quote</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Company Organization</label>
                        <input required type="text" className="w-full bg-slate-900 border border-slate-800 px-4 py-4 focus:outline-none focus:border-brand-orange transition-all font-black uppercase text-sm tracking-tighter text-white" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Logistics Lead Name</label>
                        <input required type="text" className="w-full bg-slate-900 border border-slate-800 px-4 py-4 focus:outline-none focus:border-brand-orange transition-all font-black uppercase text-sm tracking-tighter text-white" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Business Comms Email</label>
                      <input required type="email" className="w-full bg-slate-900 border border-slate-800 px-4 py-4 focus:outline-none focus:border-brand-orange transition-all font-black uppercase text-sm tracking-tighter text-white" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Volume Projection (Mt)</label>
                        <input required type="number" placeholder="50,000" className="w-full bg-slate-900 border border-slate-800 px-4 py-4 focus:outline-none focus:border-brand-orange transition-all font-black uppercase text-sm tracking-tighter text-white placeholder:text-slate-700" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Geographic Hub</label>
                        <select className="w-full bg-slate-900 border border-slate-800 px-4 py-4 focus:outline-none focus:border-brand-orange transition-all font-black uppercase text-sm tracking-tighter text-white appearance-none">
                          <option>Middle East</option>
                          <option>Asia Pacific</option>
                          <option>Europe</option>
                          <option>North America</option>
                          <option>Africa</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Mission Critical Notes</label>
                      <textarea rows={4} className="w-full bg-slate-900 border border-slate-800 px-4 py-4 focus:outline-none focus:border-brand-orange transition-all font-black uppercase text-sm tracking-tighter text-white"></textarea>
                    </div>

                    <button type="submit" className="industrial-btn-primary w-full group">
                      Initialize Quote Engine
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-24 border-t border-brand-slate bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-display font-black text-center mb-16 uppercase tracking-tighter">Strategic Nodes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <LocationCard city="Singapore" role="Global Logistics Axis" coords="1.3521° N, 103.8198° E" />
            <LocationCard city="Rotterdam" role="EU Gateway Hub" coords="51.9225° N, 4.4792° E" />
            <LocationCard city="Dubai" role="ME Corridor Command" coords="25.2048° N, 55.2708° E" />
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactMethod = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-center gap-6 p-6 border border-brand-slate hover:border-brand-orange transition-all group">
     <div className="text-slate-500 group-hover:text-brand-orange transition-colors">
       {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6' })}
     </div>
     <div>
       <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">{label}</p>
       <p className="text-white font-black text-lg tracking-tighter uppercase">{value}</p>
     </div>
  </div>
);

const LocationCard = ({ city, role, coords }: { city: string; role: string; coords: string }) => (
  <div className="industrial-card group overflow-hidden relative">
    <div className="relative z-10">
      <h3 className="text-2xl font-display font-black mb-2 uppercase tracking-tight group-hover:text-brand-orange transition-colors">{city}</h3>
      <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-6">{role}</p>
      <div className="flex items-center gap-2 text-slate-500 font-mono text-xs font-bold italic">
        <MapPin className="w-3 h-3" />
        {coords}
      </div>
    </div>
    <div className="absolute -bottom-6 -right-6 text-white/5 font-display font-black text-8xl select-none uppercase tracking-tighter group-hover:text-brand-orange/5 transition-all">
      {city}
    </div>
  </div>
);

export default Contact;
