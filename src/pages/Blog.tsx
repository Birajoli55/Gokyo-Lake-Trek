import Hero from '../components/Hero';
import Section from '../components/Section';
import { BLOG_POSTS, FAQS } from '../constants';
import { Link } from 'react-router-dom';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Blog() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-stone-50">
      <Hero 
        title="Travel Tips & Blog" 
        subtitle="The Trail Journal"
        image="https://picsum.photos/seed/blog/1920/1080"
      />

      <Section title="Latest Stories" subtitle="Journal">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link key={post.id} to={`/tips/${post.slug}`} className="group block space-y-6">
              <div className="overflow-hidden rounded-[32px] aspect-video shadow-lg">
                <img 
                  src={post.image} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-2">
                <span className="text-stone-500 text-xs font-bold uppercase tracking-widest">{post.date}</span>
                <h3 className="text-2xl font-bold text-stone-900 group-hover:text-brand-600 transition-colors">{post.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Frequently Asked Questions" subtitle="FAQ" dark>
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="glass-dark rounded-3xl overflow-hidden">
              <button 
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="text-lg font-bold text-white">{faq.question}</span>
                {openFaq === index ? <Minus className="w-5 h-5 text-brand-300" /> : <Plus className="w-5 h-5 text-brand-300" />}
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-stone-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Trekking Tips" subtitle="Advice">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-stone-900">Acclimatization</h3>
              <p className="text-stone-600 leading-relaxed">
                Walk slowly, drink at least 4 liters of water a day, and never skip an acclimatization day. 
                If you feel symptoms of AMS, inform your guide immediately.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-stone-900">Hydration</h3>
              <p className="text-stone-600 leading-relaxed">
                Dehydration can mimic altitude sickness. 
                Carry a reusable water bottle and use purification tablets or a portable filter.
              </p>
            </div>
          </div>
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-stone-900">Photography</h3>
              <p className="text-stone-600 leading-relaxed">
                Batteries drain quickly in the cold. 
                Keep your camera batteries in your sleeping bag at night and bring a high-capacity power bank.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-stone-900">Cultural Respect</h3>
              <p className="text-stone-600 leading-relaxed">
                Always walk to the left of Mani stones and prayer wheels. 
                Ask for permission before taking photos of people or religious sites.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
