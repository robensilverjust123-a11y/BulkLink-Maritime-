import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Anchor, Menu, X, Ship, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Fleet', path: '/fleet' },
  { name: 'Routes', path: '/routes' },
  { name: 'Industries', path: '/industries' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Resources', path: '/resources' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-6 border-b',
        scrolled 
          ? 'bg-brand-navy/95 backdrop-blur-md border-brand-slate py-4 shadow-2xl' 
          : 'bg-transparent border-white/5'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-orange flex items-center justify-center font-black italic group-hover:rotate-6 transition-transform">
            <span className="text-white text-xl">B</span>
          </div>
          <span className="text-2xl font-display font-black tracking-tighter uppercase text-white">
            BULKLINK<span className="text-brand-orange italic">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-[11px] font-black uppercase tracking-[0.2em] transition-colors hover:text-brand-orange relative group',
                location.pathname === link.path ? 'text-brand-orange' : 'text-slate-400'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-3 rounded-none text-xs font-black uppercase tracking-tighter transition-all flex items-center gap-2"
          >
            Request Quote <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? 'text-brand-navy' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-brand-navy' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl p-6 lg:hidden flex flex-col gap-4 border-t"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-lg font-medium text-brand-navy hover:text-brand-orange transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-brand-orange text-white px-6 py-4 rounded-xl text-center font-bold"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
