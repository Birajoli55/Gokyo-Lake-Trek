import Hero from '../components/Hero';
import Section from '../components/Section';
import CustomTripBanner from '../components/CustomTripBanner';
import { CheckCircle2 } from 'lucide-react';
import GearSection from '../components/GearSection';
import FAQSection from '../components/FAQSection';

export default function Gear() {
  return (
    <main className="bg-stone-50">
      <Hero
        title="Gear Guide"
        subtitle="Packing for Success"
        image="/gear.png"
      />

      <GearSection />

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
