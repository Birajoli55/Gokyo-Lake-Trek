import { useState } from 'react';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import FAQSection from '../../components/FAQSection';
import CustomTripBanner from '../../components/CustomTripBanner';
import { MapPin, Camera, Home, Mountain, Info, ArrowRight, CheckCircle2, ShoppingBag, Coffee, Utensils } from 'lucide-react';
import ReviewBadge from '../../components/ReviewBadge';
import UserProofBadge from '../../components/UserProofBadge';

const HIGHLIGHTS = [
  { title: 'Sherpa Museum', icon: Info, desc: 'Learn about Sherpa history, culture, and mountaineering achievements.' },
  { title: 'Everest View Hotel', icon: Mountain, desc: 'A short hike for your first panoramic view of Everest and Lhotse.' },
  { title: 'Local Markets', icon: ShoppingBag, desc: 'Vibrant markets selling everything from trekking gear to local crafts.' },
  { title: 'Cafes & Bakeries', icon: Coffee, desc: 'Enjoy high-altitude coffee and famous apple pie at various bakeries.' },
];

export default function NamcheBazaar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="bg-stone-50">
      <Hero
        title="Namche Bazaar"
        subtitle="The Sherpa Capital of the Everest Region"
        image="/namchebzar.webp"
        height="h-[100vh]"
        topContent={<ReviewBadge />}
      >
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p className="text-stone-200 text-lg md:text-xl leading-relaxed text-balance font-medium drop-shadow-md">
            Namche Bazaar (3,440m) is the vibrant, horseshoe-shaped heart of the Khumbu region and the primary trading hub for both locals and trekkers.
            <span className={`transition-all duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 w-0 pointer-events-none inline-block overflow-hidden'}`}>
              {" "}This bustling Sherpa capital offers an incredible mix of traditional culture and modern amenities, featuring world-class gear shops, cozy bakeries, and even the world's highest Irish pub.
            </span>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="ml-2 text-brand-400 font-bold hover:text-white transition-colors underline decoration-brand-400/30 underline-offset-4 text-base inline-flex items-center gap-1 group/more focus:outline-none"
            >
              {isExpanded ? 'See Less' : 'See More'} <ArrowRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-[-90deg]' : ''}`} />
            </button>
          </p>
        </div>

        <UserProofBadge />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <a
            href="#explore"
            className="px-8 py-4 bg-brand-600 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-brand-800 transition-colors shadow-lg shadow-brand-600/30"
          >
            Explore Village
          </a>
          <button
            className="px-8 py-4 bg-transparent border-2 border-white/60 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-stone-900 transition-all shadow-lg"
          >
            View Gallery
          </button>
        </div>
      </Hero>

      <div id="explore" className="scroll-mt-20">

        <Section title="Explore Namche" subtitle="Places & Stops">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <p className="text-stone-600 text-lg leading-relaxed">
                Namche Bazaar (3,440m) is a horseshoe-shaped village and the primary trading hub
                of the Khumbu region. It's a vibrant town with modern amenities, including
                Wi-Fi, ATMs, and even an Irish pub.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {HIGHLIGHTS.map((item) => (
                  <div key={item.title} className="p-8 bg-white rounded-[32px] border border-stone-100 shadow-sm space-y-4">
                    <div className="p-3 bg-stone-50 rounded-xl w-fit">
                      <item.icon className="w-6 h-6 text-brand-800" />
                    </div>
                    <h4 className="text-xl font-bold text-stone-900">{item.title}</h4>
                    <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="p-10 bg-brand-50 rounded-[40px] border border-brand-100 space-y-8">
                <h3 className="text-2xl font-bold text-brand-900">Acclimatization Tips</h3>
                <p className="text-brand-800 text-lg leading-relaxed">
                  Most trekkers spend two nights in Namche to acclimatize. Use your rest day
                  to hike to higher altitudes (like Everest View Hotel) and return to Namche
                  to sleep.
                </p>
              </div>
            </div>
            <div className="sticky top-32 space-y-8">
              <div className="p-10 bg-brand-900 rounded-[40px] text-white space-y-8">
                <h3 className="text-2xl font-bold">Quick Info</h3>
                <div className="space-y-6">
                  {[
                    { label: 'Altitude', value: '3,440m' },
                    { label: 'Accommodation', value: 'Wide range (Budget to Luxury)' },
                    { label: 'Amenities', value: 'ATMs, Wi-Fi, Shops, Cafes' },
                    { label: 'Best Viewpoint', value: 'Everest View Hotel' },
                  ].map((info) => (
                    <div key={info.label} className="flex justify-between items-center border-b border-white/10 pb-4">
                      <span className="text-brand-300 text-sm">{info.label}</span>
                      <span className="font-bold">{info.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-video bg-stone-100 rounded-[32px] overflow-hidden border border-stone-200">
                <img
                  src="/NamcheBazaarr.webp"
                  alt="Namche View"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </Section>

        <FAQSection className="py-24 bg-stone-50" />

          </div>
      <CustomTripBanner />
    </main>
  );
}
