import { Star, Play } from 'lucide-react';

export default function UserProofBadge() {
  const avatars = [
    'https://i.pravatar.cc/60?u=1',
    'https://i.pravatar.cc/60?u=2',
    'https://i.pravatar.cc/60?u=3',
    'https://i.pravatar.cc/60?u=4',
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 mt-2 mb-4">
      {/* Success Metric */}
      <div className="flex items-center gap-4">
        {/* Avatars Stacked */}
        <div className="flex -space-x-3.5">
          {avatars.map((url, i) => (
            <div key={i} className="relative group">
              <img 
                src={url} 
                className="w-11 h-11 rounded-full border-2 border-stone-950 shadow-xl object-cover ring-1 ring-white/10" 
                alt="Trekkers" 
              />
            </div>
          ))}
        </div>

        {/* Text & Rating */}
        <div className="flex flex-col items-start leading-none gap-2">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-sm" />
            ))}
          </div>
          <p className="text-white text-base font-black tracking-tight flex items-center gap-1.5">
            Trusted by <span className="text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">121,3k+</span> users
          </p>
        </div>
      </div>

      {/* Video Teaser Badge */}
      <div className="group relative cursor-pointer hidden sm:block">
        <div className="w-28 h-16 bg-stone-900/60 rounded-2xl overflow-hidden backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-2xl transition-all hover:scale-105 hover:border-brand-400/50">
           <img 
            src="/cgokyo.webp" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" 
            alt="Video testimonial"
           />
           <div className="absolute inset-0 bg-gradient-to-tr from-stone-950/20 to-transparent" />
           <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 relative z-10 transition-all group-hover:bg-brand-800 group-hover:border-brand-400">
              <Play className="w-4 h-4 text-white fill-white ml-0.5 transition-transform group-hover:scale-110" />
           </div>
           
           {/* Year Badge */}
           <div className="absolute bottom-1 right-1.5 bg-brand-500/90 text-[8px] font-black text-white px-1.5 py-0.5 rounded-md uppercase tracking-tighter">
              2024
           </div>
        </div>
      </div>
    </div>
  );
}
