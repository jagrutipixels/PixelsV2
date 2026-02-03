
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-brand-gold/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-[1.01] shrink-0">
            <Logo size="md" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className={`font-bold transition-all uppercase text-[10px] tracking-[0.3em] ${location.pathname === '/' ? 'text-brand-gold' : 'text-brand-green hover:text-brand-gold'}`}>Home</Link>
            <Link to="/products" className={`font-bold transition-all uppercase text-[10px] tracking-[0.3em] ${location.pathname === '/products' ? 'text-brand-gold' : 'text-brand-green hover:text-brand-gold'}`}>Season's Best</Link>
            <Link to="/about" className={`font-bold transition-all uppercase text-[10px] tracking-[0.3em] ${location.pathname === '/about' ? 'text-brand-gold' : 'text-brand-green hover:text-brand-gold'}`}>Our Story</Link>
            <Link to="/contact" className={`font-bold transition-all uppercase text-[10px] tracking-[0.3em] ${location.pathname === '/contact' ? 'text-brand-gold' : 'text-brand-green hover:text-brand-gold'}`}>Contact</Link>
            
            <div className="h-4 w-px bg-brand-gold/20 mx-2"></div>
            
            <Link to="/cart" className="relative p-2 text-brand-green hover:text-brand-gold transition-colors group">
              <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span className="absolute top-0 right-0 bg-brand-gold text-white text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold border border-white">0</span>
            </Link>
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative p-2 text-brand-green">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute top-0 right-0 bg-brand-gold text-white text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold border border-white">0</span>
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-green p-2 focus:outline-none" aria-label="Toggle Menu">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 top-20 bg-white z-40 transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="px-8 py-10 space-y-6 flex flex-col items-center text-center">
          <Link to="/" className="text-sm font-bold text-brand-green uppercase tracking-[0.4em] py-4 w-full border-b border-gray-50">Home</Link>
          <Link to="/products" className="text-sm font-bold text-brand-green uppercase tracking-[0.4em] py-4 w-full border-b border-gray-50">Season's Best</Link>
          <Link to="/about" className="text-sm font-bold text-brand-green uppercase tracking-[0.4em] py-4 w-full border-b border-gray-50">Our Story</Link>
          <Link to="/contact" className="text-sm font-bold text-brand-green uppercase tracking-[0.4em] py-4 w-full border-b border-gray-50">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
