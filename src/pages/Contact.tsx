import { useState } from 'react';
import { motion } from 'motion/react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import FAQSection from '../components/FAQSection';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, MessageCircle, ClipboardCheck, Mountain, ArrowRight, CheckCircle2 } from 'lucide-react';
import BookingForm from '../components/BookingForm';
import ReviewBadge from '../components/ReviewBadge';
import UserProofBadge from '../components/UserProofBadge';
import { Link } from 'react-router-dom';
import { mailService } from '../utils/mailService';

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'booking' | 'inquiry'>('booking');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await mailService.sendEmail({
        subject: 'General Inquiry: Gokyo Explorer',
        name: inquiryData.name,
        email: inquiryData.email,
        message: inquiryData.message
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Inquiry failed:', error);
      alert('Failed to send inquiry. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-stone-50">
      <Hero
        title="Get in Touch"
        subtitle="Start Your Adventure Today"
        image="/cgokyo.jpg"
        height="h-[100vh]"
        topContent={<ReviewBadge />}
      >
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p className="text-stone-200 text-lg md:text-xl leading-relaxed text-balance font-medium drop-shadow-md">
            Have questions about the trail, altitude, or gear? Our local experts are standing by to help you plan the ultimate Himalayan journey.
            <span className={`transition-all duration-700 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 w-0 pointer-events-none inline-block overflow-hidden'}`}>
              {" "}Whether you need assistance with booking, have technical gear questions, or want a custom itinerary for your group, we are here to ensure your trek is safe, comfortable, and unforgettable.
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
            href="#interaction-area"
            className="px-8 py-4 bg-brand-600 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-brand-500 transition-colors shadow-lg shadow-brand-600/30"
          >
            Send Message
          </a>
          <Link
            to="/trek"
            className="px-8 py-4 bg-transparent border-2 border-white/60 text-white text-sm font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-stone-900 transition-all shadow-lg flex items-center gap-2"
          >
            Explore Trek <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Hero>

      <div id="interaction-area">
        <Section className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Main Interaction Area */}
          <div className="lg:col-span-8 space-y-12">

            {/* Form Toggles */}
            <div className="flex bg-stone-100 p-1.5 rounded-2xl w-fit">
              <button
                onClick={() => setActiveTab('booking')}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'booking'
                  ? 'bg-white text-brand-600 shadow-md translate-y-0'
                  : 'text-stone-500 hover:text-stone-700'
                  }`}
              >
                <ClipboardCheck className="w-4 h-4" /> Book a Trek
              </button>
              <button
                onClick={() => setActiveTab('inquiry')}
                className={`flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'inquiry'
                  ? 'bg-white text-brand-600 shadow-md translate-y-0'
                  : 'text-stone-500 hover:text-stone-700'
                  }`}
              >
                <MessageCircle className="w-4 h-4" /> General Inquiry
              </button>
            </div>

            {activeTab === 'booking' ? (
              <BookingForm />
            ) : isSubmitted ? (
               <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-12 rounded-[40px] text-center space-y-8 shadow-xl border border-emerald-100"
              >
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-stone-900">Message Sent!</h3>
                  <p className="text-stone-500 leading-relaxed max-w-sm mx-auto">
                    We've received your inquiry. One of our experts will get back to you at {inquiryData.email} within 4 hours.
                  </p>
                </div>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-brand-600 font-bold uppercase tracking-widest text-sm hover:text-brand-700 transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <div className="glass p-12 rounded-[40px] space-y-8 shadow-xl">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-stone-900">Send a Message</h3>
                  <p className="text-stone-500 text-sm">Have specific questions? We usually respond within 4 hours.</p>
                </div>
                <form onSubmit={handleInquirySubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                      required
                      type="text" 
                      placeholder="Name" 
                      value={inquiryData.name}
                      onChange={e => setInquiryData({...inquiryData, name: e.target.value})}
                      className="bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-500 shadow-sm" 
                    />
                    <input 
                      required
                      type="email" 
                      placeholder="Email" 
                      value={inquiryData.email}
                      onChange={e => setInquiryData({...inquiryData, email: e.target.value})}
                      className="bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-500 shadow-sm" 
                    />
                  </div>
                  <textarea 
                    required
                    rows={6} 
                    placeholder="How can we help?" 
                    value={inquiryData.message}
                    onChange={e => setInquiryData({...inquiryData, message: e.target.value})}
                    className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-500 resize-none shadow-sm" 
                  />
                  <button 
                    disabled={isSubmitting}
                    className="px-10 py-5 bg-brand-600 text-white font-bold uppercase tracking-widest rounded-2xl hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-600/20 disabled:opacity-70 flex items-center gap-2"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Contact Details sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-10">
              <h3 className="text-2xl font-bold text-stone-900">Expert Support</h3>

              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-stone-900 mb-1 text-sm">Kathmandu HQ</h5>
                    <p className="text-stone-500 text-sm leading-relaxed">Thamel Marg 12,<br />Kathmandu 44600, Nepal</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-stone-900 mb-1 text-sm">Direct Line</h5>
                    <a href="tel:+9779748343015" className="text-stone-500 text-sm hover:text-brand-600 transition-colors">+977-9748343015</a>
                    <p className="text-brand-600 text-xs font-bold mt-1 uppercase tracking-widest">Available 24/7</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-stone-100 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-stone-900 mb-1 text-sm">Email Support</h5>
                    <a href="mailto:msm47374@gmail.com" className="text-stone-500 text-sm hover:text-brand-600 transition-colors">msm47374@gmail.com</a>
                  </div>
                </div>
              </div>

              <hr className="border-stone-200" />

              <div className="space-y-6">
                <h5 className="font-bold text-stone-900 text-sm">Connect with us</h5>
                <div className="flex gap-4">
                  {[Instagram, Twitter, Facebook].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 bg-white border border-stone-100 rounded-lg flex items-center justify-center hover:bg-brand-50 hover:border-brand-100 transition-all shadow-sm group">
                      <Icon className="w-5 h-5 text-stone-400 group-hover:text-brand-600" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-brand-600 p-8 rounded-[40px] text-white space-y-4 shadow-xl shadow-brand-600/20">
              <h4 className="font-bold text-lg">Instant Help</h4>
              <p className="text-brand-100 text-sm leading-relaxed">Chat with our Sherpa guides on WhatsApp for immediate trail updates.</p>
              <a 
                href="https://wa.me/9779748343015" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-brand-600 px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-stone-50 transition-colors w-fit"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

        </div>
      </Section>
      </div>

      <FAQSection className="bg-stone-100 py-24" />
    </main>
  );
}
