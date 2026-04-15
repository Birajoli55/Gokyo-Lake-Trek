import { useState, useEffect, FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Calendar, Users, Mountain, ArrowRight } from 'lucide-react';
import { ITINERARY_CARDS } from '../constants';
import { apiClient } from '../utils/apiClient';


type FormStep = 'details' | 'success';

interface BookingFormProps {
  defaultTrek?: string;
  onCancel?: () => void;
}

export default function BookingForm({ defaultTrek, onCancel }: BookingFormProps) {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState<FormStep>('details');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    trek: defaultTrek || '',
    date: '',
    people: '1',
    message: ''
  });

  // Pre-fill trek from URL parameter if defaultTrek isn't provided
  useEffect(() => {
    if (defaultTrek) {
      setFormData(prev => ({ ...prev, trek: defaultTrek }));
      return;
    }
    const trekId = searchParams.get('trek');
    const departureId = searchParams.get('departure');
    
    if (trekId) {
      const matchedTrek = ITINERARY_CARDS.find(t => t.link.includes(trekId));
      if (matchedTrek) setFormData(prev => ({ ...prev, trek: matchedTrek.title }));
    } else if (departureId) {
       // Typically you'd look up the departure data here, 
       // for now let's just mark it in the message or handle specifically
       setFormData(prev => ({ ...prev, message: `Inquiry for departure ID: ${departureId}` }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        trek: formData.trek,
        preferredDate: formData.date,
        numberOfPeople: parseInt(formData.people),
        message: formData.message
      };

      await apiClient.bookings.create(payload);
      setStep('success');
    } catch (error) {
      console.error('Booking failed:', error);
      alert('Failed to send booking request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (step === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-[40px] text-center space-y-8 shadow-2xl border border-emerald-100"
      >
        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10 text-emerald-500" />
        </div>
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-stone-900">Request Received!</h3>
          <p className="text-stone-500 leading-relaxed max-w-sm mx-auto">
            Thank you for choosing Gokyo Explorer. Our team will review your booking request and contact you within 24 hours to finalize details.
          </p>
        </div>
        <button 
          onClick={() => setStep('details')}
          className="text-brand-600 font-bold uppercase tracking-widest text-sm hover:text-brand-700 transition-colors"
        >
          Send Another Request
        </button>
      </motion.div>
    );
  }

  return (
    <div className="glass p-8 md:p-12 rounded-[40px] shadow-xl border border-white/20 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-100/30 rounded-full blur-3xl pointer-events-none" />

      <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
        <div className="space-y-2">
          <h3 className="text-3xl font-bold text-stone-900 leading-tight">Book Your Expedition</h3>
          <p className="text-stone-500 text-sm">Fill in the details below to start your Himalayan journey.</p>
        </div>

        <div className="space-y-6">
          {/* Personal Info Group */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-stone-400 text-[10px] font-black uppercase tracking-[0.2em]">Full Name</label>
              <input 
                required
                type="text" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                placeholder="John Doe" 
                className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-500 transition-all text-stone-900 placeholder:text-stone-300 shadow-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-stone-400 text-[10px] font-black uppercase tracking-[0.2em]">Email Address</label>
              <input 
                required
                type="email" 
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                placeholder="john@example.com" 
                className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-500 transition-all text-stone-900 placeholder:text-stone-300 shadow-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-stone-400 text-[10px] font-black uppercase tracking-[0.2em]">Phone Number</label>
              <input 
                type="tel" 
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
                placeholder="+1 234 567 890" 
                className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-500 transition-all text-stone-900 placeholder:text-stone-300 shadow-sm"
              />
            </div>
            <div className="space-y-2">
              <label className="text-stone-400 text-[10px] font-black uppercase tracking-[0.2em]">Select Package</label>
              <div className="relative">
                <select 
                  required
                  value={formData.trek}
                  onChange={e => setFormData({...formData, trek: e.target.value})}
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-500 transition-all appearance-none text-stone-900 shadow-sm"
                >
                  <option value="">Select an Itinerary</option>
                  {ITINERARY_CARDS.map(t => (
                    <option key={t.title} value={t.title}>{t.title} ({t.days} Days)</option>
                  ))}
                  <option value="Custom">Custom / Private Trek</option>
                </select>
                <Mountain className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-300 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-stone-400 text-[10px] font-black uppercase tracking-[0.2em]">Preferred Date</label>
              <div className="relative">
                <input 
                  type="date" 
                  value={formData.date}
                  onChange={e => setFormData({...formData, date: e.target.value})}
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-500 transition-all text-stone-900 shadow-sm"
                />
                <Calendar className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-300 pointer-events-none" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-stone-400 text-[10px] font-black uppercase tracking-[0.2em]">Number of People</label>
              <div className="relative">
                <input 
                  type="number" 
                  min="1" 
                  max="20"
                  value={formData.people}
                  onChange={e => setFormData({...formData, people: e.target.value})}
                  className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-500 transition-all text-stone-900 shadow-sm"
                />
                <Users className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-300 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-stone-400 text-[10px] font-black uppercase tracking-[0.2em]">Additional Message</label>
            <textarea 
              rows={4} 
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
              placeholder="Experience level, dietaries, or special requests..." 
              className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-500 transition-all resize-none text-stone-900 placeholder:text-stone-300 shadow-sm"
            />
          </div>
        </div>

        <button 
          disabled={isSubmitting}
          className="w-full py-6 bg-brand-600 text-white font-bold uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 hover:bg-brand-700 transition-all hover:shadow-xl hover:shadow-brand-600/20 disabled:opacity-70 disabled:cursor-not-allowed group"
        >
          {isSubmitting ? (
             <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              Confirm Booking Request <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>

        <p className="text-center text-stone-400 text-[10px] uppercase font-bold tracking-widest">
          No payment required at this stage
        </p>
      </form>
    </div>
  );
}
