import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag, Search, Clock, ChevronRight, Sparkles } from 'lucide-react';
import Section from '../components/Section';
import FAQSection from '../components/FAQSection';
import CustomTripBanner from '../components/CustomTripBanner';
import Hero from '../components/Hero';
import ReviewBadge from '../components/ReviewBadge';
import UserProofBadge from '../components/UserProofBadge';
import { BLOG_POSTS } from '../constants';
import { CustomItemVariants } from '../types';
import { Mountain } from 'lucide-react';

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: CustomItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.21, 0.45, 0.32, 0.9] } }
};

const CATEGORY_COLORS: Record<string, string> = {
  Comparison: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  Safety: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  Gear: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Guide: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = ['All', ...new Set(BLOG_POSTS.map(post => post.category).filter(Boolean) as string[])];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts[0];
  const restPosts = filteredPosts.slice(1);

  return (
    <main className="bg-stone-50 min-h-screen">
      <Hero
        title="Stories from the Peak."
        subtitle="The Gokyo Journal"
        image="/gblog.webp"
        height="h-[100vh]"
        topContent={<ReviewBadge />}
      >
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p className="text-stone-200 text-lg md:text-xl leading-relaxed text-balance font-medium drop-shadow-md">
            Insights, guides, and firsthand accounts from the heart of the Khumbu region. Your journey begins with knowledge.
            <span className={`transition-all duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 w-0 pointer-events-none inline-block overflow-hidden'}`}>
              {" "}Discover expert advice on altitude safety, packing essentials, and cultural etiquette to make your Himalayan adventure truly unforgettable.
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
            href="#journal"
            className="px-8 py-4 bg-brand-600 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-brand-800 transition-colors shadow-lg shadow-brand-600/30"
          >
            Start Reading
          </a>
          <Link
            to="/trek"
            className="px-8 py-4 bg-transparent border-2 border-white/60 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-stone-900 transition-all shadow-lg"
          >
            Find a Trek
          </Link>
        </div>
      </Hero>

      {/* Modern Sticky Filter Bar */}
      <section className="top-16 z-40 py-6 glass border-b border-stone-200/50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-shrink-0 px-6 py-2.5 rounded-2xl text-[11px] font-bold uppercase tracking-[0.1em] transition-all duration-300 ${activeCategory === category
                  ? 'bg-stone-900 text-white shadow-xl shadow-stone-900/10'
                  : 'bg-white text-stone-500 hover:bg-stone-100 border border-stone-100'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              id="blog-search"
              name="search"
              placeholder="Search the journal..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3 bg-white border border-stone-200 rounded-[20px] text-sm focus:outline-none focus:ring-4 focus:ring-brand-500/5 focus:border-brand-500 transition-all placeholder:text-stone-300"
            />
          </div>
        </div>
      </section>

      <Section id="journal" className="py-20">
        <AnimatePresence mode="wait">
          {filteredPosts.length > 0 ? (
            <div className="space-y-24">
              {featuredPost && (
                <motion.div
                  key={`featured-${featuredPost?.id || 'none'}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7 }}
                >
                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="group relative grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-[48px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-stone-100"
                  >
                    <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto overflow-hidden relative">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="lg:col-span-5 p-10 lg:p-16 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-8">
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${CATEGORY_COLORS[featuredPost.category ?? ''] ?? 'bg-stone-100 text-stone-600'}`}>
                          {featuredPost.category}
                        </span>
                        <span className="text-stone-300 font-bold text-[10px] uppercase tracking-widest">Featured Post</span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-[1.1] mb-6 group-hover:text-brand-800 transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-stone-500 text-lg leading-relaxed mb-8">{featuredPost.excerpt}</p>
                      <div className="mt-auto flex items-center gap-4">
                        <div className="flex items-center gap-2 text-stone-400 text-xs">
                          <Clock className="w-4 h-4" /> 5 min read
                        </div>
                        <div className="w-8 h-px bg-stone-200" />
                        <div className="flex items-center gap-2 text-brand-800 font-bold text-sm tracking-tight group-hover:gap-6 transition-all">
                          Read Full Journal <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* Grid of Articles */}
              {restPosts.length > 0 && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={listVariants}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                  {restPosts.map((post) => (
                    <motion.div key={post.id} variants={itemVariants} className="h-full">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="group flex flex-col bg-white rounded-[40px] overflow-hidden hover:shadow-xl transition-all duration-500 border border-stone-100 h-full pb-8"
                      >
                        <div className="aspect-[4/3] overflow-hidden relative mb-6">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <span className={`absolute top-6 left-6 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest glass-white border border-white/20 text-stone-900`}>
                            {post.category}
                          </span>
                        </div>
                        <div className="px-8 space-y-4 flex-grow flex flex-col">
                          <div className="flex items-center gap-4 text-stone-400 text-[11px] font-bold uppercase tracking-widest">
                            <span>{post.date}</span>
                            <span className="w-1 h-1 bg-stone-300 rounded-full" />
                            <span>5 min read</span>
                          </div>
                          <h3 className="text-2xl font-bold text-stone-900 leading-tight group-hover:text-brand-800 transition-colors flex-grow">
                            {post.title}
                          </h3>
                          <p className="text-stone-500/80 text-sm leading-relaxed line-clamp-3 mb-6">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center gap-2 text-brand-800 text-sm font-bold opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all mt-auto">
                            Read Article <ChevronRight className="w-5 h-5" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-32 text-center"
            >
              <div className="w-24 h-24 bg-stone-100 rounded-[32px] flex items-center justify-center mx-auto mb-8 animate-pulse">
                <Search className="w-10 h-10 text-stone-300" />
              </div>
              <h3 className="text-3xl font-bold text-stone-900 mb-3">No trail reports found.</h3>
              <p className="text-stone-500 text-lg max-w-md mx-auto">Try adjusting your category or searching for the Gokyo lakes.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </Section>

      <FAQSection className="bg-stone-50 py-24" />

      <div className="bg-stone-100 py-12 md:py-20">
        <CustomTripBanner />
      </div>

    </main>
  );
}
