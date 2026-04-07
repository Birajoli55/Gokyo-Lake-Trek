import { Link } from 'react-router-dom';
import { Map, FileText, ShoppingBag, Calendar, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import Section from '../components/Section';

const GUIDE_CATEGORIES = [
  {
    title: 'Itineraries',
    subtitle: 'Plan Your Route',
    icon: Map,
    path: '/itineraries',
    desc: 'Explore our classic 12-day route and challenging variations like the Cho La Pass loop.',
    image: 'https://picsum.photos/seed/guide-map/800/600'
  },
  {
    title: 'Permits & Costs',
    subtitle: 'Budgeting & Logistics',
    icon: FileText,
    path: '/permits',
    desc: 'Everything you need to know about required permits, daily budgets, and insurance.',
    image: 'https://picsum.photos/seed/guide-permits/800/600'
  },
  {
    title: 'Gear Guide',
    subtitle: 'Packing Essentials',
    icon: ShoppingBag,
    path: '/gear',
    desc: 'A comprehensive list of clothing, equipment, and expert tips for high-altitude trekking.',
    image: 'https://picsum.photos/seed/guide-gear/800/600'
  },
  {
    title: 'Best Time to Visit',
    subtitle: 'Seasonal Planning',
    icon: Calendar,
    path: '/best-time',
    desc: 'Understand the seasons, temperatures, and visibility to choose your perfect window.',
    image: 'https://picsum.photos/seed/guide-seasons/800/600'
  }
];

export default function Guide() {
  return (
    <main className="bg-stone-50">
      <Hero 
        title="Trekker's Guide" 
        subtitle="Everything You Need to Know"
        image="https://picsum.photos/seed/guide-hero/1920/1080"
      />

      <Section title="Planning Your Adventure" subtitle="The Essentials">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GUIDE_CATEGORIES.map((category) => (
            <Link 
              key={category.title} 
              to={category.path}
              className="group relative overflow-hidden rounded-[48px] aspect-[16/11] shadow-2xl bg-stone-900"
            >
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-between">
                <div className="flex items-center gap-5">
                  <div className="p-3.5 bg-brand-600 rounded-2xl shadow-xl shrink-0 transform group-hover:scale-110 transition-transform duration-500">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-brand-400 text-[10px] font-bold uppercase tracking-[0.2em]">{category.subtitle}</span>
                    <h3 className="text-2xl font-serif font-bold text-white leading-tight">{category.title}</h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-stone-300 text-xs leading-relaxed max-w-[260px] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    {category.desc}
                  </p>
                  <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[10px] border-b border-white/20 pb-2 w-fit">
                    Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Expert Support" subtitle="Preparation" dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-white leading-tight">We're here to help you every step of the way.</h3>
            <p className="text-stone-400 text-lg leading-relaxed">
              Trekking in the Himalayas is a life-changing experience, but it requires careful preparation. 
              Our guides are designed to give you the confidence and knowledge you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-brand-600 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-brand-700 transition-colors text-center">
                Ask a Question
              </Link>
              <Link to="/tips" className="px-8 py-4 glass-dark text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white/10 transition-colors text-center">
                Read Trail Tips
              </Link>
            </div>
          </div>
          <div className="glass-dark p-12 rounded-[40px] space-y-8">
            <h4 className="text-2xl font-bold text-white">Quick Checklist</h4>
            <ul className="space-y-4">
              {[
                'Check permit requirements and costs',
                'Review the 12-day classic itinerary',
                'Download the essential gear list',
                'Verify the best trekking window',
                'Book your flights to Lukla'
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 text-stone-400">
                  <div className="w-2 h-2 rounded-full bg-brand-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </main>
  );
}
