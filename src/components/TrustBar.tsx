import { Star, ShieldCheck, Mountain, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const trustItems = [
  {
    icon: Star,
    value: '4.9/5',
    label: '500+ Verified Reviews',
    color: 'text-amber-400',
    bgColor: 'bg-amber-50',
  },
  {
    icon: ShieldCheck,
    value: 'Licensed',
    label: 'Government Registered',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: Mountain,
    value: '1,200+',
    label: 'Successful Summits',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Clock,
    value: '12+ Years',
    label: 'Himalayan Expertise',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
];

export default function TrustBar() {
  return (
    <div className="bg-[#f8fafc] border-y border-slate-200/60 py-8 lg:py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-y-10 gap-x-4 md:px-10">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-5 sm:min-w-[220px]"
            >
              <div className={`${item.bgColor} w-16 h-16 rounded-[22px] flex items-center justify-center shrink-0 shadow-sm border border-white/50`}>
                <item.icon className={`w-8 h-8 ${item.color} ${item.value === '4.9/5' ? 'fill-amber-400' : ''}`} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-slate-900 font-extrabold text-xl leading-none tracking-tight">
                  {item.value}
                </span>
                <span className="text-slate-500 text-[13px] font-semibold tracking-tight whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
