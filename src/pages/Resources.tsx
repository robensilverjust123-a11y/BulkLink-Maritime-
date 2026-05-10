import React from 'react';
import { motion } from 'motion/react';
import { Download, FileText, ShieldCheck, BookOpen, HardHat, ChevronRight } from 'lucide-react';

const RESOURCES = [
  { title: 'Global Capability Brochure', type: 'PDF', size: '2.4 MB', icon: <FileText /> },
  { title: 'Maritime Safety Standards 2024', type: 'PDF', size: '1.2 MB', icon: <ShieldCheck /> },
  { title: 'Bulk Cement Logistics Guide', type: 'EPUB', size: '4.8 MB', icon: <BookOpen /> },
  { title: 'Vessel Compliance Certificates', type: 'ZIP', size: '15.6 MB', icon: <HardHat /> },
];

const Resources = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <h1 className="text-6xl font-display font-bold tracking-tighter mb-6">Knowledge <span className="text-brand-orange">Center.</span></h1>
           <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">
             Access our library of technical documentation, safety standards, and logistical planning resources to support your enterprise decision-making.
           </p>
        </div>
        <Download className="absolute top-0 right-0 w-96 h-96 text-white/5 -rotate-12 translate-x-1/3" />
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {RESOURCES.map((res, i) => (
                <div key={i} className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all border-b-4 hover:border-b-brand-orange">
                   <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-navy shadow-sm mb-8 group-hover:scale-110 transition-transform">
                      {React.cloneElement(res.icon as React.ReactElement, { className: 'w-6 h-6' })}
                   </div>
                   <h3 className="text-xl font-display font-bold mb-2">{res.title}</h3>
                   <div className="flex items-center gap-3 text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">
                      <span>{res.type}</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full" />
                      <span>{res.size}</span>
                   </div>
                   <button className="flex items-center gap-2 text-brand-orange font-bold hover:gap-3 transition-all">
                      Download Now <Download className="w-4 h-4" />
                   </button>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
           <div className="bg-white rounded--[3rem] p-12 md:p-20 shadow-xl grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-4xl font-display font-bold mb-6">Technical Logistics Support</h2>
                 <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                   Need specialized documentation for your bidding process or regulatory compliance? Our technical team provides on-demand data suites for complex global operations.
                 </p>
                 <button className="bg-brand-navy text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-brand-orange transition-colors">
                    Request Custom Data Package <ChevronRight />
                 </button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                 <FeatureMini icon={<ShieldCheck />} label="Verified" />
                 <FeatureMini icon={<BookOpen />} label="Detailed" />
                 <FeatureMini icon={<FileText />} label="Compliant" />
                 <FeatureMini icon={<Download />} label="Fast" />
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

const FeatureMini = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="p-6 bg-slate-50 rounded-2xl text-center space-y-4">
    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-orange mx-auto shadow-sm">
       {React.cloneElement(icon as React.ReactElement, { className: 'w-5 h-5' })}
    </div>
    <span className="text-xs font-black uppercase tracking-widest text-slate-400">{label}</span>
  </div>
);

export default Resources;
