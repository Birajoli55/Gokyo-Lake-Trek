import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import Hero from '../components/Hero';
import Section from '../components/Section';
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';
import { useEffect } from 'react';

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  useEffect(() => {
    if (!post) {
      navigate('/tips');
    }
  }, [post, navigate]);

  if (!post) return null;

  return (
    <main className="bg-stone-50">
      <Hero 
        title={post.title} 
        subtitle={post.category || 'Article'}
        image={post.image}
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/tips" 
            className="inline-flex items-center gap-2 text-brand-600 font-bold mb-12 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Blog
          </Link>

          <div className="bg-white p-8 md:p-16 rounded-[48px] border border-stone-100 shadow-sm space-y-12">
            {/* Meta */}
            <div className="flex flex-wrap gap-8 pb-12 border-b border-stone-50">
              <div className="flex items-center gap-3 text-stone-500">
                <Calendar className="w-5 h-5 text-brand-600" />
                <span className="text-sm font-medium">{post.date}</span>
              </div>
              <div className="flex items-center gap-3 text-stone-500">
                <User className="w-5 h-5 text-brand-600" />
                <span className="text-sm font-medium">{post.author || 'Admin'}</span>
              </div>
              <div className="flex items-center gap-3 text-stone-500">
                <Tag className="w-5 h-5 text-brand-600" />
                <span className="text-sm font-medium">{post.category || 'General'}</span>
              </div>
            </div>

            {/* Content */}
            <div 
              className="prose prose-stone prose-lg max-w-none 
                prose-headings:text-stone-900 prose-headings:font-bold 
                prose-p:text-stone-600 prose-p:leading-relaxed
                prose-strong:text-brand-700
                prose-img:rounded-[32px] prose-img:shadow-xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Footer */}
            <div className="pt-12 border-t border-stone-50 flex flex-wrap items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 font-bold">
                  {post.author?.[0] || 'A'}
                </div>
                <div>
                  <p className="text-stone-900 font-bold">{post.author || 'Admin'}</p>
                  <p className="text-stone-500 text-xs">Trekking Expert & Guide</p>
                </div>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-stone-50 text-stone-600 rounded-2xl font-bold hover:bg-stone-100 transition-colors">
                <Share2 className="w-5 h-5" /> Share Article
              </button>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-24 space-y-12">
            <h3 className="text-3xl font-bold text-stone-900">More from the Trail</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2).map((related) => (
                <Link key={related.id} to={`/tips/${related.slug}`} className="group block space-y-6">
                  <div className="overflow-hidden rounded-[32px] aspect-video shadow-lg">
                    <img 
                      src={related.image} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-stone-900 group-hover:text-brand-600 transition-colors">{related.title}</h4>
                    <p className="text-stone-500 text-sm line-clamp-2">{related.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
