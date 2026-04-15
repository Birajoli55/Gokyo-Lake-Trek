import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Calendar, ClipboardList, ShieldCheck, FileText, LifeBuoy } from 'lucide-react';
import { FAQS } from '../constants';
import Section from './Section';

// Category mapping with icons
const CATEGORIES = [
  { id: 'Common', label: 'Common Questions', icon: LifeBuoy },
  { id: 'Booking', label: 'Booking', icon: Calendar },
  { id: 'Preparation', label: 'Preparation', icon: ClipboardList },
  { id: 'Safety', label: 'Safety', icon: ShieldCheck },
  { id: 'Permits', label: 'Permits', icon: FileText },
] as const;

type CategoryId = typeof CATEGORIES[number]['id'];

interface FAQSectionProps {
  category?: Exclude<CategoryId, 'Common'>;
  className?: string;
}

export default function FAQSection({ 
  category: initialCategory, 
  className = "" 
}: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryId>(initialCategory || 'Common');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Filter FAQS based on activeCategory
  const filteredFaqs = FAQS.filter(faq => faq.category === activeCategory);

  const getCategoryIcon = (cat: string) => {
    const found = CATEGORIES.find(c => c.id === cat);
    return found ? found.icon : HelpCircle;
  };

  return (
    <Section className={className}>
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-2 rounded-full border border-brand-200 bg-brand-50/30 text-brand-700 text-xs font-black uppercase tracking-[0.2em]"
          >
            Got Questions?
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-stone-900"
          >
            Frequently Asked <span className="text-brand-600">Questions</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-500 text-lg max-w-2xl mx-auto"
          >
            Everything you need to know before you hit the trail
          </motion.p>
        </div>

        {/* Categories Tabs */}
        {!initialCategory && (
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setOpenIndex(0); // Reset accordion when switching tabs
                  }}
                  className={`px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-300 ${
                    isActive 
                      ? 'bg-brand-600 text-white shadow-xl shadow-brand-600/20 translate-y-[-2px]' 
                      : 'bg-white text-stone-500 border border-stone-100 hover:border-brand-200 hover:text-stone-900 shadow-sm'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const Icon = getCategoryIcon(faq.category);
                
                return (
                  <div 
                    key={faq.question}
                    className={`group border rounded-[28px] overflow-hidden transition-all duration-300 ${
                      isOpen 
                        ? 'border-brand-100 bg-white shadow-xl shadow-brand-500/5 ring-1 ring-brand-50' 
                        : 'border-stone-100 bg-white/50 hover:border-brand-200 hover:bg-white'
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-6">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          isOpen ? 'bg-brand-50 text-brand-600' : 'bg-brand-50/30 text-brand-500 group-hover:bg-brand-50'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="text-lg md:text-xl font-bold text-stone-900 leading-tight">
                          {faq.question}
                        </h4>
                      </div>
                      <div className={`p-2 rounded-full transition-all duration-300 ${
                        isOpen ? 'bg-stone-50 text-stone-900 rotate-180' : 'bg-stone-50/50 text-stone-400 group-hover:bg-stone-100'
                      }`}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-6 md:px-8 pb-8 pt-0 ml-16 md:ml-[72px]">
                            <p className="text-stone-500 leading-relaxed max-w-2xl">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}

// Fallback icon for missing categories
function HelpCircle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}
