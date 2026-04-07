import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mountain } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Ultimate Guide', path: '/gokyo-lake-trek' },
  { name: 'Itineraries', path: '/itineraries' },
  { name: 'Planning', path: '/planning' },
  { name: 'Safety', path: '/safety' },
  { name: 'Places', path: '/places' },
  { name: 'Gear', path: '/gear' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Mountain className={`w-8 h-8 transition-colors ${scrolled ? 'text-brand-600' : 'text-white'}`} />
          <span className={`text-xl font-bold tracking-tighter uppercase ${scrolled ? 'text-stone-900' : 'text-white'}`}>Gokyo Explorer</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-brand-600 ${
                scrolled 
                  ? (location.pathname === link.path ? 'text-brand-600' : 'text-stone-600')
                  : (location.pathname === link.path ? 'text-brand-300' : 'text-white')
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className={`px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-all ${
              scrolled ? 'bg-brand-600 text-white hover:bg-brand-700' : 'bg-white text-stone-900 hover:bg-brand-50'
            }`}
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-stone-900' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 glass border-t-0 p-6 flex flex-col gap-4"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium tracking-wide uppercase ${
                  location.pathname === link.path ? 'text-brand-600' : 'text-stone-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 w-full py-4 bg-brand-600 text-white text-center font-bold uppercase tracking-widest rounded-xl"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
