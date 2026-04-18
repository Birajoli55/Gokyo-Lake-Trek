import Hero from '../../components/Hero';
import Section from '../../components/Section';
import CustomTripBanner from '../../components/CustomTripBanner';
import { DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import PlanningSection from '../../components/PlanningSection';
import FAQSection from '../../components/FAQSection';
import MainCTA from '../../components/MainCTA';

export default function PlanningHub() {
  return (
    <main className="bg-stone-50">
      <Hero 
        title="Plan Your Trek" 
        subtitle="The Logistics of Adventure"
        image="/hero-lakes.webp"
      />

      <PlanningSection />

      <Section title="Interactive Budget Calculator" subtitle="Budgeting" dark>
        <div className="bg-white/5 p-12 rounded-[48px] border border-white/10 text-center space-y-8">
          <DollarSign className="w-16 h-16 text-brand-300 mx-auto" />
          <h3 className="text-3xl font-bold text-white">Estimate Your Costs</h3>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Use our interactive tool to calculate your total trek cost based on duration, 
            group size, and service level.
          </p>
          <Link 
            to="/planning/budget-calculator"
            className="inline-block px-12 py-5 bg-brand-500 text-white rounded-2xl font-bold text-lg hover:bg-brand-400 transition-colors"
          >
            Open Calculator
          </Link>
        </div>
      </Section>

      <FAQSection category="Preparation" className="py-24" />

      <MainCTA />
    </main>
  );
}
