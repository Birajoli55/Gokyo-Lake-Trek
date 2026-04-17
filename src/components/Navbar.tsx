import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useBooking } from '../context/BookingContext';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Guide',
    path: '/ultimate-guide',
    subLinks: [
      { name: 'Itineraries', path: '/itineraries' },
      { name: 'Planning', path: '/planning' },
      { name: 'Safety', path: '/safety' },
      { name: 'Places', path: '/places' },
      { name: 'Gear', path: '/gear' },
    ]
  },
  { name: 'Trek', path: '/trek' },
  { name: 'Departures', path: '/departures' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileTrekOpen, setMobileTrekOpen] = useState(false);
  const location = useLocation();
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);

    setActiveDropdown(null);
    setMobileTrekOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-[-10px] left-0 right-0 z-50 transition-all duration-500 ease-out py-0 ${scrolled ? 'h-14' : 'h-20'}`}
    >
      <div className={`mx-auto transition-all duration-500 ${scrolled ? 'container max-w-6xl px-4' : 'container px-6'}`}>
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'glass rounded-full px-6 py-1 shadow-lg border border-brand-200/20' : 'bg-transparent'
          }`}>
          <Link to="/" className="flex items-center group z-50 relative">
            <img 
              src="/logo.png" 
              alt="Gokyo Explorer Logo" 
              className={`transition-all duration-300 ${scrolled ? 'h-14 lg:h-20 my-[-6px]' : 'h-32 lg:h-44 my-[-20px] lg:my-[-28px]'} w-auto object-contain drop-shadow-md brightness-110`}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const hasSubLinks = !!link.subLinks;
              const isActive = link.path ? location.pathname === link.path : link.subLinks?.some(sub => location.pathname === sub.path);

              if (hasSubLinks) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={link.path || '#'}
                      className={`flex items-center gap-1 relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors group ${scrolled
                        ? (isActive ? 'text-brand-600' : 'text-stone-600 hover:text-brand-600')
                        : (isActive ? 'text-white' : 'text-white/80 hover:text-white')
                        }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />

                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${scrolled ? 'bg-brand-600' : 'bg-white'}`}
                          transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                        />
                      )}
                      {!isActive && (
                        <div className={`absolute bottom-0 left-0 w-full h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full ${scrolled ? 'bg-brand-200' : 'bg-white/40'
                          }`} />
                      )}
                    </Link>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 glass rounded-2xl shadow-xl border border-white/20 overflow-hidden py-2"
                        >
                          {link.subLinks.map((subLink) => (
                            <Link
                              key={subLink.path}
                              to={subLink.path}
                              className={`block px-4 py-3 text-sm font-bold uppercase tracking-widest transition-colors ${location.pathname === subLink.path
                                ? 'text-brand-600 bg-brand-50/50'
                                : 'text-stone-600 hover:text-brand-600 hover:bg-stone-50/80'
                                }`}
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path!}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors group ${scrolled
                    ? (isActive ? 'text-brand-600' : 'text-stone-600 hover:text-brand-600')
                    : (isActive ? 'text-white' : 'text-white/80 hover:text-white')
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${scrolled ? 'bg-brand-600' : 'bg-white'}`}
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  {!isActive && (
                    <div className={`absolute bottom-0 left-0 w-full h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full ${scrolled ? 'bg-brand-200' : 'bg-white/40'
                      }`} />
                  )}
                </Link>
              );
            })}
            <button
              onClick={() => openBooking()}
              className={`ml-4 px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-full transition-all duration-300 hover:scale-105 ${scrolled ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-md shadow-brand-600/20' : 'bg-white text-stone-900 hover:bg-brand-50'
                }`}
            >
              Book Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className={`lg:hidden p-2.5 z-50 relative rounded-xl transition-all ${isOpen ? 'bg-white/10 text-white' : (!scrolled ? 'text-white' : 'text-stone-900 hover:bg-stone-100')}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-40 bg-stone-950 lg:hidden flex flex-col overflow-y-auto"
          >
            {/* Header bar inside mobile menu */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/10">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center">
                <img
                  src="/logo.png"
                  alt="Gokyo Explorer Logo"
                  className="h-16 w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-1 w-full px-4 py-6 flex-grow">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ delay: i * 0.04, type: 'spring', stiffness: 300, damping: 25 }}
                  className="w-full"
                >
                  {link.subLinks ? (
                    <div className="w-full">
                      <button
                        onClick={() => setMobileTrekOpen(!mobileTrekOpen)}
                        className={`w-full flex items-center justify-between px-4 py-4 rounded-2xl text-lg font-bold uppercase tracking-widest transition-colors ${location.pathname.startsWith('/itineraries') || location.pathname.startsWith('/planning') || location.pathname.startsWith('/safety') || location.pathname.startsWith('/places') || location.pathname.startsWith('/gear')
                          ? 'text-brand-300 bg-brand-500/10'
                          : 'text-white hover:bg-white/5'
                          }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileTrekOpen ? 'rotate-180 text-brand-400' : 'text-stone-500'}`} />
                      </button>
                      <AnimatePresence>
                        {mobileTrekOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden pl-4 pb-2"
                          >
                            <div className="flex flex-wrap gap-2 pt-2 pb-1">
                              {link.subLinks.map(subLink => (
                                <Link
                                  key={subLink.path}
                                  to={subLink.path}
                                  onClick={() => setIsOpen(false)}
                                  className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-colors ${location.pathname === subLink.path
                                    ? 'bg-brand-600 text-white'
                                    : 'bg-white/10 text-stone-300 hover:bg-white/20'
                                    }`}
                                >
                                  {subLink.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={link.path!}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-4 rounded-2xl text-lg font-bold uppercase tracking-widest transition-colors ${location.pathname === link.path
                        ? 'text-brand-300 bg-brand-500/10'
                        : 'text-white hover:bg-white/5'
                        }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="px-6 pb-8 pt-4 border-t border-white/10">
              <button
                onClick={() => openBooking()}
                className="block w-full py-4 bg-gradient-to-r from-brand-600 to-brand-500 text-white text-center font-bold uppercase tracking-widest rounded-2xl shadow-xl shadow-brand-600/30 hover:shadow-brand-600/50 transition-shadow"
              >
                Book Your Trek Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
