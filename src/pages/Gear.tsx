import Hero from '../components/Hero';
import Section from '../components/Section';
import CustomTripBanner from '../components/CustomTripBanner';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import GearSection from '../components/GearSection';
import FAQSection from '../components/FAQSection';
import ReviewBadge from '../components/ReviewBadge';
import UserProofBadge from '../components/UserProofBadge';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Gear() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="bg-stone-50">
      <Hero
        title="Gear Guide"
        subtitle="Packing for Success"
        image="/gear.png"
        height="h-[100vh]"
        topContent={<ReviewBadge />}
      >
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p className="text-stone-200 text-lg md:text-xl leading-relaxed text-balance font-medium drop-shadow-md">
            The right equipment is the foundation of a safe and comfortable trek. From technical layering to broken-in boots, our comprehensive guide ensures you are prepared for every Himalayan condition.
            <span className={`transition-all duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 w-0 pointer-events-none inline-block overflow-hidden'}`}>
              {" "}We provide detailed checklists for every season, along with expert advice on what to buy, what to rent in Kathmandu, and how to pack efficiently for the high-altitude environment.
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
            href="#gear-section"
            className="px-8 py-4 bg-brand-600 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-brand-500 transition-colors shadow-lg shadow-brand-600/30"
          >
            See Checklist
          </a>
          <Link
            to="/contact"
            className="px-8 py-4 bg-transparent border-2 border-white/60 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-stone-900 transition-all shadow-lg"
          >
            Gear Questions
          </Link>
        </div>
      </Hero>

      <div id="gear-section">
        <GearSection />
      </div>

      <Section title="Key Gear Insights" subtitle="Expert Tips" dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Layering is Key</h3>
              <p className="text-stone-400 leading-relaxed">
                The temperature can vary significantly between day and night.
                A three-layer system (base, mid, and outer) is the most effective way to regulate your body temperature.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Invest in Boots</h3>
              <p className="text-stone-400 leading-relaxed">
                Your boots are your most important piece of gear.
                Make sure they are waterproof, have good ankle support, and are well-broken-in before your trek.
              </p>
            </div>
          </div>
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Sleeping Bag</h3>
              <p className="text-stone-400 leading-relaxed">
                Even in teahouses, the nights can be freezing.
                A high-quality down sleeping bag rated for -20°C is essential for a good night's sleep.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Water Purification</h3>
              <p className="text-stone-400 leading-relaxed">
                Plastic water bottles are banned in many parts of the Everest region.
                Bring a reusable bottle and water purification tablets or a portable filter.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Rent or Buy?" subtitle="Preparation">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <p className="text-stone-600 text-lg leading-relaxed">
              If you're not a regular trekker, you might consider renting some of your gear in Kathmandu.
              Thamel is full of shops where you can rent high-quality down jackets, sleeping bags, and trekking poles for a fraction of the cost of buying them.
            </p>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-stone-900">What to Rent</h3>
              <ul className="space-y-3">
                {['Down Jacket', 'Sleeping Bag', 'Trekking Poles', 'Gaiters'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-stone-500 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative">
            <img
              src="/Geari.webp"
              alt="Gear Shop in Kathmandu"
              className="rounded-[40px] w-full aspect-[4/5] object-cover object-center shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Section>

      <FAQSection category="Preparation" className="py-24" />

      <CustomTripBanner />
    </main>
  );
}
