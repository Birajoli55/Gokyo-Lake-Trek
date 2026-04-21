import { Star } from 'lucide-react';

export default function ReviewBadge() {
  return (
    <div className="glass-dark px-4 py-2 rounded-xl flex items-center gap-4 backdrop-blur-md shadow-2xl mb-6">
      {/* Left side: Google Branding */}
      <div className="flex items-center gap-2.5">
        <div className="bg-white p-0.5 rounded-sm shrink-0">
          <svg viewBox="0 0 24 24" className="w-4 h-4">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
        </div>
        <div className="flex flex-col items-start leading-none">
          <div className="flex gap-0.5 mb-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-2 h-2 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-white text-[9px] font-bold uppercase tracking-widest opacity-80">Reviews</span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-8 w-px bg-white/20" />

      {/* Right side: Stats */}
      <div className="flex flex-col items-start">
        <p className="text-white text-xs font-bold tracking-tight">
          Excellent <span className="text-amber-400">4.7</span> <span className="opacity-60 font-medium text-[9px] uppercase ml-1">out of 5</span>
        </p>
        <div className="flex gap-0.5 mt-1">
          {[1, 2, 3, 4].map((i) => (
            <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
          ))}
          <div className="relative w-2.5 h-2.5">
             <Star className="w-2.5 h-2.5 text-amber-400/40" />
             <div className="absolute inset-0 overflow-hidden w-[70%]">
                <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
