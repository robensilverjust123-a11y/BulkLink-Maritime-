import React from 'react';
import { Link } from 'react-router-dom';
import { Ship, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white pt-24 pb-12 px-6 border-t border-brand-slate">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
        <div className="space-y-8">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-brand-orange flex items-center justify-center font-black italic">
              <span className="text-white text-xl">B</span>
            </div>
            <span className="text-2xl font-display font-black tracking-tighter uppercase">
              BULKLINK<span className="text-brand-orange">.</span>
            </span>
          </Link>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-medium">
            Enterprise-grade maritime supply chain solutions. Delivering global reach and industrial precision.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-brand-slate flex items-center justify-center hover:bg-brand-orange transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 bg-brand-slate flex items-center justify-center hover:bg-brand-orange transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-black text-xs uppercase tracking-[0.3em] text-slate-500 mb-8">Navigation</h4>
          <ul className="space-y-4 text-slate-400 text-[11px] font-bold uppercase tracking-widest">
            <li><Link to="/about" className="hover:text-white transition-colors">Origins</Link></li>
            <li><Link to="/fleet" className="hover:text-white transition-colors">The Fleet</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Solutions</Link></li>
            <li><Link to="/routes" className="hover:text-white transition-colors">Global Network</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-black text-xs uppercase tracking-[0.3em] text-slate-500 mb-8">Compliance</h4>
          <ul className="space-y-4 text-slate-400 text-[11px] font-bold uppercase tracking-widest">
            <li><a href="#" className="hover:text-white transition-colors">ISO CERTIFIED</a></li>
            <li><a href="#" className="hover:text-white transition-colors">IMO REGISTERED</a></li>
            <li><a href="#" className="hover:text-white transition-colors">MARPOL STANDARDS</a></li>
            <li><a href="#" className="hover:text-white transition-colors">SAFETY PROTOCOLS</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-black text-xs uppercase tracking-[0.3em] text-slate-500 mb-8">Headquarters</h4>
          <div className="space-y-6 text-white text-xs font-black uppercase tracking-tighter">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brand-orange shrink-0" />
              <span>1200 Maritime Blvd, Suite 400<br />Singapore 018981</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brand-orange shrink-0" />
              <span>logistics@bulklink.ma</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-brand-slate flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
        <p>© 2024 BulkLink Maritime. Global Enterprise Operations.</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-white transition-colors">Legal</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
};
