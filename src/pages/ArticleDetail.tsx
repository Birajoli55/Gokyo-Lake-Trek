import { useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Link as LinkIcon, MessageSquare } from 'lucide-react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import FAQSection from '../components/FAQSection';
import CustomTripBanner from '../components/CustomTripBanner';
import { BLOG_POSTS } from '../constants';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ArticleDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = useMemo(() => 
    BLOG_POSTS.find(p => p.slug === slug), 
  [slug]);

  const relatedPosts = useMemo(() => 
    BLOG_POSTS.filter(p => p.slug !== slug && (p.category === post?.category)).slice(0, 3),
  [slug, post]);

  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
    window.scrollTo(0, 0);
  }, [post, navigate]);

  if (!post) return null;

  return (
    <main className="bg-white min-h-screen">
      <div className="relative">
        <Hero 
          title={post.title} 
          subtitle={post.category}
          image={post.image}
          height="h-[70vh]"
        />
        
        {/* Back Button */}
        <div className="absolute top-8 left-8 z-30">
          <Link 
            to="/blog" 
            className="flex items-center gap-2 px-6 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full text-white font-bold transition-all border border-white/20"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Journal
          </Link>
        </div>
      </div>

      <Section className="py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          {/* Article Content */}
          <article className="lg:w-[65%] space-y-12">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
              className="flex items-center gap-6 py-8 border-y border-stone-100 mb-12"
            >
              <div className="flex items-center gap-2 text-stone-500 font-medium">
                <Calendar className="w-4 h-4" /> {post.date}
              </div>
              <div className="w-px h-6 bg-stone-100" />
              <div className="flex items-center gap-2 text-stone-500 font-medium">
                <User className="w-4 h-4" /> {post.author}
              </div>
              <div className="w-px h-6 bg-stone-100" />
              <div className="flex gap-2">
                <button className="p-2 hover:bg-stone-50 rounded-full transition-colors"><Share2 className="w-4 h-4 text-stone-400" /></button>
                <button className="p-2 hover:bg-stone-50 rounded-full transition-colors"><Facebook className="w-4 h-4 text-stone-400" /></button>
                <button className="p-2 hover:bg-stone-50 rounded-full transition-colors"><Twitter className="w-4 h-4 text-stone-400" /></button>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
              className="prose prose-stone prose-lg max-w-none prose-headings:font-bold prose-h3:text-3xl prose-h3:mt-12 prose-img:rounded-[32px] prose-p:text-stone-600 prose-p:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Section */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
              className="mt-20 p-10 bg-stone-50 rounded-[40px] flex flex-col md:flex-row items-center gap-8"
            >
              <div className="w-24 h-24 rounded-3xl overflow-hidden shrink-0">
                <img src={`https://ui-avatars.com/api/?name=${post.author}&background=0D8ABC&color=fff&size=128`} alt={post.author} />
              </div>
              <div className="space-y-2 text-center md:text-left">
                <h4 className="text-xl font-bold text-stone-900">{post.author}</h4>
                <p className="text-stone-500 leading-relaxed">
                  A high-altitude guide and passionate storyteller with over 15 years of experience leading treks to the Gokyo Lakes and Everest region.
                </p>
                <div className="pt-2 flex justify-center md:justify-start gap-4">
                   <button className="text-brand-800 font-bold text-sm hover:underline flex items-center gap-1.5"><MessageSquare className="w-4 h-4" /> Contact via WhatsApp</button>
                   <button className="text-brand-800 font-bold text-sm hover:underline flex items-center gap-1.5"><LinkIcon className="w-4 h-4" /> Author Profile</button>
                </div>
              </div>
            </motion.div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-[35%] space-y-12">
            <div className="sticky top-32 space-y-12">
              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="space-y-8">
                  <h4 className="text-2xl font-bold text-stone-900 border-l-4 border-brand-600 pl-4">Related Journal Entries</h4>
                  <div className="space-y-8">
                    {relatedPosts.map(related => (
                      <Link 
                        key={related.id} 
                        to={`/blog/${related.slug}`} 
                        className="group block space-y-4"
                      >
                        <div className="aspect-[16/9] rounded-3xl overflow-hidden relative">
                          <img 
                            src={related.image} 
                            alt={related.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="space-y-2">
                          <span className="text-brand-800 text-xs font-bold uppercase tracking-widest">{related.category}</span>
                          <h5 className="text-lg font-bold text-stone-900 group-hover:text-brand-800 transition-colors leading-tight">{related.title}</h5>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Newsletter Sub */}
              <div className="p-8 bg-brand-900 rounded-[40px] text-white space-y-6">
                <h4 className="text-xl font-bold">Never miss an update</h4>
                <p className="text-brand-200 text-sm leading-relaxed">
                  Join 2,500+ other trekkers and get the best guides and trail news delivered to your inbox weekly.
                </p>
                <div className="space-y-3">
                  <input type="email" id="article-newsletter-email" name="email" placeholder="email@address.com" className="w-full px-5 py-3.5 bg-white/10 rounded-2xl border border-white/10 text-white placeholder:text-brand-400 focus:outline-none focus:border-brand-400 text-sm" />
                  <button className="w-full py-4 bg-brand-500 text-white font-bold rounded-2xl hover:bg-brand-400 transition-colors shadow-lg">Subscribe Now</button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <FAQSection className="bg-stone-50 py-24" />

      <div className="bg-stone-50 py-10 md:py-16">
        <CustomTripBanner />
      </div>
    </main>
  );
}
