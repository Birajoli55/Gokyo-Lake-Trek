import { useState } from 'react';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import FAQSection from '../../components/FAQSection';
import CustomTripBanner from '../../components/CustomTripBanner';
import { DollarSign, PieChart, Wallet, CreditCard, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ReviewBadge from '../../components/ReviewBadge';
import UserProofBadge from '../../components/UserProofBadge';

const COST_CATEGORIES = [
  {
    title: 'Permits & Fees',
    amount: '$37 - $50',
    details: 'Includes Khumbu Municipality and Sagarmatha National Park permits.',
    icon: Wallet
  },
  {
    title: 'Flights (KTM-LUK)',
    amount: '$360 - $400',
    details: 'Round trip flights from Kathmandu or Ramechhap to Lukla.',
    icon: CreditCard
  },
  {
    title: 'Accommodation',
    amount: '$10 - $25',
    details: 'Per night in standard teahouses. Prices increase with altitude.',
    icon: CreditCard
  },
  {
    title: 'Food & Drinks',
    amount: '$30 - $50',
    details: 'Per day for three meals and hot drinks.',
    icon: CreditCard
  },
  {
    title: 'Guide & Porter',
    amount: '$25 - $45',
    details: 'Per day. Includes their food, accommodation, and insurance.',
    icon: CreditCard
  },
  {
    title: 'Gear & Equipment',
    amount: '$200 - $500',
    details: 'Initial investment or rental costs for essential trekking gear.',
    icon: CreditCard
  },
];

export default function CostBreakdown() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="bg-stone-50">
      <Hero
        title="Cost Breakdown"
        subtitle="Budgeting for Your Adventure"
        image="/HimalayanPanorama-opt.webp"
        height="h-[100vh]"
        topContent={<ReviewBadge />}
      >
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p className="text-stone-200 text-lg md:text-xl leading-relaxed text-balance font-medium drop-shadow-md">
            Understanding the financial landscape of a Himalayan expedition is the first step toward a stress-free adventure.
            <span className={`transition-all duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 w-0 pointer-events-none inline-block overflow-hidden'}`}>
              {" "}From mandatory permits and scenic mountain flights to daily teahouse expenses and porter fees, our comprehensive breakdown helps you navigate the costs of exploring the Gokyo region with clarity.
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
            href="#costs"
            className="px-8 py-4 bg-brand-600 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-brand-800 transition-colors shadow-lg shadow-brand-600/30"
          >
            Detailed Breakdown
          </a>
          <Link
            to="/planning/budget-calculator"
            className="px-8 py-4 bg-transparent border-2 border-white/60 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-stone-900 transition-all shadow-lg text-center"
          >
            Calculate Budget
          </Link>
        </div>
      </Hero>

      <div id="costs" className="scroll-mt-20">

        <Section title="Estimated Trekking Costs" subtitle="Financial Planning">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <p className="text-stone-600 text-lg leading-relaxed">
                Trekking in the Everest region can vary significantly in cost depending on your
                style of travel. From budget-conscious solo trekkers to those seeking more
                comfortable lodge experiences, here is a detailed breakdown.
              </p>
              <div className="space-y-6">
                {COST_CATEGORIES.map((item) => (
                  <div key={item.title} className="p-8 bg-white rounded-[32px] border border-stone-100 shadow-sm flex items-start gap-6">
                    <div className="p-4 bg-stone-50 rounded-2xl">
                      <item.icon className="w-6 h-6 text-brand-800" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-stone-900">{item.title}</h3>
                        <span className="text-brand-800 font-bold">{item.amount}</span>
                      </div>
                      <p className="text-stone-500 text-sm leading-relaxed">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="sticky top-32 space-y-8">
              <div className="p-10 bg-brand-900 rounded-[40px] text-white space-y-8">
                <div className="flex items-center gap-4">
                  <PieChart className="w-10 h-10 text-brand-400" />
                  <h3 className="text-2xl font-bold">Budget Scenarios</h3>
                </div>
                <div className="space-y-6">
                  {[
                    { label: 'Budget (Solo)', value: '$1,200 - $1,500', desc: 'Basic teahouses, no porter, local food.' },
                    { label: 'Standard (Guided)', value: '$1,800 - $2,200', desc: 'Guide, shared porter, better lodges.' },
                    { label: 'Premium', value: '$2,500+', desc: 'Luxury lodges, private guide, all inclusive.' },
                  ].map((scenario) => (
                    <div key={scenario.label} className="p-6 bg-white/5 rounded-2xl border border-white/10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-brand-300 font-bold uppercase tracking-widest text-xs">{scenario.label}</span>
                        <span className="text-xl font-bold">{scenario.value}</span>
                      </div>
                      <p className="text-stone-400 text-sm">{scenario.desc}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to="/planning/budget-calculator"
                  className="block w-full py-5 bg-brand-500 text-white rounded-2xl font-bold text-center hover:bg-brand-400 transition-colors"
                >
                  Use Budget Calculator
                </Link>
              </div>
              <div className="p-8 bg-stone-100 rounded-[32px] border border-stone-200 flex items-start gap-4">
                <Info className="w-6 h-6 text-stone-400 shrink-0" />
                <p className="text-stone-500 text-sm leading-relaxed">
                  Prices are estimates and can fluctuate based on season, exchange rates, and personal spending habits.
                  Always carry 15-20% extra as a contingency fund.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <FAQSection category="Preparation" className="py-24 bg-stone-50" />

          </div>
      <CustomTripBanner />
    </main>
  );
}
