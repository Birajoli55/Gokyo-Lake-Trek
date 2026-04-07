import Hero from '../../components/Hero';
import Section from '../../components/Section';
import { FileText, DollarSign, Calculator, Calendar, Activity, Plane, Home, Utensils, CreditCard, Wifi, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PLANNING_MODULES = [
  { 
    title: 'Permits & Fees', 
    icon: FileText, 
    desc: 'Everything you need to know about Khumbu and Sagarmatha permits.',
    link: '/planning/permits-fees'
  },
  { 
    title: 'Cost Breakdown', 
    icon: DollarSign, 
    desc: 'Detailed budgeting for flights, food, and accommodation.',
    link: '/planning/cost-breakdown'
  },
  { 
    title: 'Budget Calculator', 
    icon: Calculator, 
    desc: 'Interactive tool to estimate your total trek expenses.',
    link: '/planning/budget-calculator'
  },
  { 
    title: 'Best Time to Visit', 
    icon: Calendar, 
    desc: 'Monthly weather snapshots and visibility guides.',
    link: '/planning/best-time-to-visit'
  },
  { 
    title: 'Flights to Lukla', 
    icon: Plane, 
    desc: 'KTM vs Ramechhap, baggage limits, and delay plans.',
    link: '/planning/flights'
  },
  { 
    title: 'Food & Water', 
    icon: Utensils, 
    desc: 'Menu basics, costs, and water treatment strategies.',
    link: '/planning/food-water'
  },
  { 
    title: 'Insurance', 
    icon: Shield, 
    desc: 'Mandatory coverage for high-altitude trekking.',
    link: '/safety/travel-insurance'
  },
];

export default function PlanningHub() {
  return (
    <main className="bg-stone-50">
      <Hero 
        title="Plan Your Trek" 
        subtitle="The Logistics of Adventure"
        image="https://picsum.photos/seed/planning-hub/1920/1080"
      />

      <Section title="Planning Resources" subtitle="Step-by-Step Guide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PLANNING_MODULES.map((item) => (
            <Link 
              key={item.title} 
              to={item.link}
              className="p-10 bg-white rounded-[32px] border border-stone-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="p-4 bg-stone-50 rounded-2xl w-fit mb-6 group-hover:bg-brand-50 transition-colors">
                <item.icon className="w-8 h-8 text-brand-600" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">{item.title}</h3>
              <p className="text-stone-500 leading-relaxed mb-6">{item.desc}</p>
              <span className="text-brand-600 font-bold flex items-center gap-2">
                Explore <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

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
    </main>
  );
}
