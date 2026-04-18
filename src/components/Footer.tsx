import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 border-t border-stone-200/10 pt-24 pb-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center group">
            <img 
              src="/logo.png" 
              alt="Gokyo Explorer Logo" 
              className="h-32 lg:h-48 w-auto object-contain transition-transform duration-300 group-hover:scale-105 brightness-110 drop-shadow-md" 
            />
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            Experience the majesty of the Himalayas with our expert-led treks to the pristine Gokyo Lakes. 
            Adventure, culture, and breathtaking views await.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 bg-stone-900 rounded-full hover:bg-stone-800 transition-colors">
              <Instagram className="w-5 h-5 text-stone-300" />
            </a>
            <a href="#" className="p-2 bg-stone-900 rounded-full hover:bg-stone-800 transition-colors">
              <Twitter className="w-5 h-5 text-stone-300" />
            </a>
            <a href="#" className="p-2 bg-stone-900 rounded-full hover:bg-stone-800 transition-colors">
              <Facebook className="w-5 h-5 text-stone-300" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-white">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { name: 'About Us', path: '/about' },
              { name: 'Ultimate Guide', path: '/gokyo-lake-trek' },
              { name: 'Trek Days', path: '/itineraries' },
              { name: 'Planning Hub', path: '/planning' },
              { name: 'Places & Stops', path: '/places' },
              { name: 'Gear Guide', path: '/gear' },
              { name: 'Safety & Health', path: '/safety' },
              { name: 'Contact Us', path: '/contact' },
            ].map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className="text-sm hover:text-brand-400 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-white">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm">
              <MapPin className="w-5 h-5 text-brand-500 shrink-0" />
              <span>Thamel, Kathmandu, Nepal</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <Phone className="w-5 h-5 text-brand-500 shrink-0" />
              <a href="tel:+9779748343015" className="hover:text-brand-400 transition-colors">+977-9748343015</a>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <Mail className="w-5 h-5 text-brand-500 shrink-0" />
              <a href="mailto:msm47374@gmail.com" className="hover:text-brand-400 transition-colors">msm47374@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-white">Newsletter</h4>
          <p className="text-sm">Subscribe for trekking tips and exclusive offers.</p>
          <form className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-500 transition-colors text-white"
            />
            <button className="bg-brand-600 text-white py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-700 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-24 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-stone-500 text-xs">© 2026 Gokyo Explorer. All rights reserved.</p>
        <div className="flex gap-8">
          <Link to="/privacy-policy" className="text-stone-500 text-xs hover:text-stone-300 transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-service" className="text-stone-500 text-xs hover:text-stone-300 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
