import Hero from '../../components/Hero';
import Section from '../../components/Section';
import CustomTripBanner from '../../components/CustomTripBanner';
import { AlertTriangle, Thermometer, MapPin } from 'lucide-react';
import SafetySection from '../../components/SafetySection';
import FAQSection from '../../components/FAQSection';
import MainCTA from '../../components/MainCTA';

export default function SafetyHub() {
  return (
    <main className="bg-stone-50">
      <Hero 
        title="Safety & Health" 
        subtitle="Your Well-being is Our Priority"
        image="/safety.webp"
      />

      <SafetySection />

      <Section title="Quick Safety Tips" subtitle="Best Practices" className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="p-8 bg-stone-50 rounded-3xl space-y-4">
            <AlertTriangle className="w-10 h-10 text-amber-500" />
            <h4 className="text-xl font-bold">Acclimatization</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Never skip acclimatization days. Ascend slowly and listen to your body. 
              "Climb high, sleep low" is the golden rule.
            </p>
          </div>
          <div className="p-8 bg-stone-50 rounded-3xl space-y-4">
            <Thermometer className="w-10 h-10 text-blue-500" />
            <h4 className="text-xl font-bold">Hydration</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Drink at least 3-4 liters of water daily. Dehydration mimics and 
              exacerbates altitude sickness symptoms.
            </p>
          </div>
          <div className="p-8 bg-stone-50 rounded-3xl space-y-4">
            <MapPin className="w-10 h-10 text-brand-500" />
            <h4 className="text-xl font-bold">Guide & Porter</h4>
            <p className="text-stone-600 text-sm leading-relaxed">
              Hiring a local guide significantly increases your safety. They know 
              the terrain, weather patterns, and symptoms of AMS.
            </p>
          </div>
        </div>
      </Section>

      <FAQSection category="Safety" className="py-24 bg-stone-100" />

      <MainCTA />
    </main>
  );
}
