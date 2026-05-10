import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Shield, Globe, Clock, BarChart3, Ship } from 'lucide-react';
import { Link } from 'react-router-dom';
import { VESSELS, CASE_STUDIES } from '../constants';
import { cn } from '../lib/utils';

import { ShipmentTracker } from '../components/ShipmentTracker';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544216717-3bbf5215bc82?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover brightness-[0.4]" 
            alt="Cargo Ship"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 to-brand-navy" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3 text-brand-orange mb-4">
              <span className="h-px w-10 bg-brand-orange"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Industrial Enterprise Logistics</span>
            </div>
            
            <h1 className="text-6xl md:text-[10rem] font-display font-black text-white leading-[0.8] tracking-tighter uppercase text-left">
              Bulk Cement <br/>
              <span className="text-stroke">At Scale.</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-start gap-12 pt-8">
              <p className="text-lg text-slate-400 max-w-md leading-relaxed text-left font-medium">
                The world's most reliable maritime supply chain for infrastructure and commercial construction firms. Global reach. Precision delivery.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link to="/contact" className="industrial-btn-primary w-full sm:w-auto">
                  Start Shipping <ChevronRight className="w-5 h-5" />
                </Link>
                <Link to="/fleet" className="industrial-btn-outline w-full sm:w-auto">
                  Performance Data
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-brand-border pt-12"
          >
            <StatItem label="Annual Tonnage" value="12.8M" />
            <StatItem label="Fleet Status" value="48 Active" />
            <StatItem label="Ports Secured" value="122" />
            <StatItem label="Delivery Sla" value="99.8%" />
          </motion.div>
        </div>
      </section>

      {/* Tracking Section */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6">Unprecedented <span className="text-brand-orange">Visibility</span> for Your Cargo.</h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Log in to our enterprise dashboard to track your bulk cement shipments in real-time. Our global AIS-integrated system provides precise coordinates, ETA updates, and port performance analytics.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 font-bold text-brand-navy">
                  <div className="w-6 h-6 bg-brand-orange/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-brand-orange rounded-full" />
                  </div>
                  Real-time AIS Vessel Positioning
                </li>
                <li className="flex items-center gap-3 font-bold text-brand-navy">
                  <div className="w-6 h-6 bg-brand-orange/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-brand-orange rounded-full" />
                  </div>
                  Port Discharging Rate Monitoring
                </li>
                <li className="flex items-center gap-3 font-bold text-brand-navy">
                   <div className="w-6 h-6 bg-brand-orange/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-brand-orange rounded-full" />
                  </div>
                  Automated Alert Systems for Delays
                </li>
              </ul>
            </div>
            <div>
              <ShipmentTracker />
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Proof */}
      <section className="py-24 bg-brand-navy border-y border-brand-slate">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-black mb-4 uppercase tracking-tighter">Strategic Partners & Compliance</h2>
            <p className="text-slate-500 text-sm uppercase tracking-widest">Powering infrastructure projects across 40+ countries.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
             {/* Logo placeholders with better styling */}
             {['ISO:9001', 'IMO-CERT', 'MARPOL', 'OHSAS', 'DNV-GL'].map(text => (
               <div key={text} className="flex items-center gap-2">
                 <span className="font-black text-2xl text-white tracking-widest">{text}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <FeatureCard 
            icon={<Globe className="w-8 h-8"/>}
            title="Maritime Fleet"
            description="Premium pneumatic dry bulk carriers equipped with the world's most advanced self-discharging technology."
          />
          <FeatureCard 
            icon={<Clock className="w-8 h-8"/>}
            title="Global Routes"
            description="Established shipping lanes connecting major production hubs with defining infrastructure projects."
          />
          <FeatureCard 
            icon={<BarChart3 className="w-8 h-8"/>}
            title="Port Terminals"
            description="Strategic control of port logistics to ensure zero-delay discharging and inland coordination."
          />
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-24 industrial-gradient text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold mb-6 text-white leading-tight">
                Case Study: <br/> 
                <span className="text-brand-orange">Optimizing the Neom Supply Chain</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Learn how we managed the delivery of 2.5 million tons of bulk cement for the first phase of Neom City, maintaining a 99.8% on-time record despite complex port dependencies.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-10">
                {CASE_STUDIES[0].kpis.map((kpi, idx) => (
                  <div key={idx}>
                    <p className="text-brand-orange font-bold text-2xl">{kpi.value}</p>
                    <p className="text-slate-500 text-xs uppercase tracking-wider">{kpi.label}</p>
                  </div>
                ))}
              </div>
              <Link to="/case-studies" className="inline-flex items-center gap-2 text-brand-orange font-bold hover:underline">
                Read Full Case Study <ChevronRight className="w-4 h-4"/>
              </Link>
            </motion.div>
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img src={CASE_STUDIES[0].image} className="w-full h-full object-cover" alt="Neom Case Study" />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-orange/10 blur-3xl rounded-full z-0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-20 bg-brand-orange relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">Ready to Secure Your Supply Chain?</h2>
            <p className="text-orange-100 text-lg">Request a custom logistics proposal within 24 hours.</p>
          </div>
          <Link to="/contact" className="bg-white text-brand-orange hover:bg-orange-50 px-10 py-5 rounded-xl font-bold text-lg shadow-xl shrink-0 transition-transform hover:scale-105">
            Request Enterprise Quote
          </Link>
        </div>
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Ship className="absolute -bottom-20 -left-20 w-80 h-80 rotate-12" />
        </div>
      </section>
    </div>
  );
};

const StatItem = ({ label, value }: { label: string; value: string }) => (
  <div className="text-left">
    <p className="text-3xl md:text-5xl font-display font-black text-white mb-2 tracking-tighter uppercase">{value}</p>
    <p className="text-slate-500 text-[10px] uppercase tracking-[0.3em] font-bold">{label}</p>
  </div>
);

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="industrial-card group">
    <div className="w-12 h-12 bg-brand-slate flex items-center justify-center mb-8 group-hover:bg-brand-orange group-hover:text-white transition-all">
      {React.cloneElement(icon as React.ReactElement, { className: 'w-6 h-6' })}
    </div>
    <h3 className="text-xl font-display font-black mb-4 uppercase tracking-tight">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
  </div>
);

export default Home;
