import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Plane, Mountain, Waves, Info, Activity, Navigation, Map as MapIcon } from 'lucide-react';

interface TrailStop {
  id: string;
  name: string;
  altitude: string;
  type: 'start' | 'stop' | 'acclimatization' | 'lake' | 'peak';
  icon: any;
  desc: string;
  lat: number;
  lng: number;
}

const TRAIL_STOPS: TrailStop[] = [
  { id: 'ktm', name: 'Kathmandu', altitude: '1,400m', type: 'start', icon: Plane, desc: 'Starting point for your Himalayan adventure.', lat: 27.7172, lng: 85.3240 },
  { id: 'lukla', name: 'Lukla', altitude: '2,860m', type: 'stop', icon: Plane, desc: 'Gateway to the Everest region and home to Tenzing-Hillary Airport.', lat: 27.6864, lng: 86.7314 },
  { id: 'phakding', name: 'Phakding', altitude: '2,610m', type: 'stop', icon: MapPin, desc: 'Riverside village on the banks of the Dudh Koshi.', lat: 27.7423, lng: 86.7111 },
  { id: 'namche', name: 'Namche Bazaar', altitude: '3,440m', type: 'acclimatization', icon: Activity, desc: 'Sherpa capital. Essential 2-night stop for acclimatization.', lat: 27.8069, lng: 86.7140 },
  { id: 'kyangjuma', name: 'Kyangjuma', altitude: '3,550m', type: 'stop', icon: MapPin, desc: 'Offers stunning views of Ama Dablam and Everest.', lat: 27.8180, lng: 86.7260 },
  { id: 'phortse-thanga', name: 'Phortse Thanga', altitude: '3,680m', type: 'stop', icon: MapPin, desc: 'Junction point for the Gokyo Valley and EBC trails.', lat: 27.8380, lng: 86.7260 },
  { id: 'dole', name: 'Dole', altitude: '4,110m', type: 'stop', icon: MapPin, desc: 'Beginning of the alpine landscape with rhododendron forests.', lat: 27.8650, lng: 86.7150 },
  { id: 'machhermo', name: 'Machhermo', altitude: '4,470m', type: 'stop', icon: MapPin, desc: 'Famous for reported Yeti sightings and home to a medical post.', lat: 27.9150, lng: 86.7000 },
  { id: 'gokyo-village', name: 'Gokyo Village', altitude: '4,750m', type: 'lake', icon: Waves, desc: 'Serene lakeside settlement beside the turquoise Dudh Pokhari.', lat: 27.9540, lng: 86.6940 },
  { id: 'gokyo-lakes', name: 'Gokyo Lakes', altitude: '4,700m-5,000m', type: 'lake', icon: Waves, desc: 'A series of six high-altitude glacial lakes (1st to 6th).', lat: 27.9740, lng: 86.6940 },
  { id: 'gokyo-ri', name: 'Gokyo Ri', altitude: '5,357m', type: 'peak', icon: Mountain, desc: 'Panoramic viewpoint for Everest, Lhotse, Makalu, and Cho Oyu.', lat: 27.9620, lng: 86.6830 },
];

export default function TrailMap() {
  const [activeStop, setActiveStop] = useState<string | null>(null);

  return (
    <div className="relative bg-stone-900 rounded-[48px] p-8 md:p-12 overflow-hidden shadow-2xl border border-white/5">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* Left: Google Maps Embed Iframe */}
        <div className="relative min-h-[600px] rounded-[40px] overflow-hidden border border-white/10 shadow-inner bg-stone-950 group">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26794.03888080866!2d86.65517638702931!3d27.975545215879613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e9a40258b311c7%3A0x8cea00ab1a1f785e!2sGokyo%20Lake!5e1!3m2!1sen!2snp!4v1776173816324!5m2!1sen!2snp"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full grayscale-[0.2] contrast-[1.1] opacity-90"
          ></iframe>
          
          {/* Legend Overlay */}
          <div className="absolute top-8 left-8 glass-dark p-5 rounded-2xl border border-white/10 space-y-4 z-20 shadow-xl pointer-events-none">
            <div className="flex items-center gap-4">
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-lg" />
              <span className="text-[10px] text-white font-black uppercase tracking-[0.2em]">Terrain Map</span>
            </div>
          </div>
        </div>

        {/* Right: Premium Information Display */}
        <div className="relative flex flex-col gap-8">
          {/* Stops Quick Select */}
          <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-11 gap-2">
            {TRAIL_STOPS.map((stop) => (
              <button
                key={stop.id}
                onClick={() => setActiveStop(stop.id)}
                className={`w-full aspect-square rounded-xl border flex items-center justify-center transition-all group ${
                  activeStop === stop.id 
                    ? 'bg-brand-500 border-brand-400 shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
                title={stop.name}
              >
                <stop.icon className={`w-5 h-5 ${activeStop === stop.id ? 'text-white' : 'text-stone-500 group-hover:text-stone-300'}`} />
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeStop ? (
              <motion.div
                key={activeStop}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                className="glass-dark p-12 rounded-[48px] border border-white/10 space-y-10 h-full flex flex-col justify-center shadow-2xl"
              >
                {(() => {
                  const stop = TRAIL_STOPS.find(s => s.id === activeStop)!;
                  return (
                    <>
                      <div className="flex items-start justify-between">
                        <div className="p-5 bg-brand-500/20 rounded-[24px] border border-brand-500/20 shadow-inner">
                          <stop.icon className="w-10 h-10 text-brand-400" />
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="text-brand-400 text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 bg-brand-400/10 rounded-full border border-brand-400/20">
                            {stop.type}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">{stop.name}</h3>
                        <div className="flex items-baseline gap-3">
                          <p className="text-3xl font-black text-brand-300 tracking-tight">{stop.altitude}</p>
                          <span className="text-stone-500 text-sm font-bold uppercase tracking-widest">elevation</span>
                        </div>
                      </div>

                      <p className="text-stone-400 text-xl leading-relaxed font-medium">
                        {stop.desc}
                      </p>

                      <div className="grid grid-cols-2 gap-6 pt-10 border-t border-white/5">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 text-stone-500 text-[10px] font-black uppercase tracking-[0.2em]">
                            <Navigation className="w-4 h-4 text-brand-400/60" /> Latitude
                          </div>
                          <span className="text-white text-lg font-bold tabular-nums">{stop.lat.toFixed(4)}°N</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 text-stone-500 text-[10px] font-black uppercase tracking-[0.2em]">
                            <Navigation className="w-4 h-4 text-brand-400/60 rotate-90" /> Longitude
                          </div>
                          <span className="text-white text-lg font-bold tabular-nums">{stop.lng.toFixed(4)}°E</span>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex flex-col justify-center items-center text-center p-12 space-y-10 glass-dark rounded-[48px] border border-white/10 shadow-2xl"
              >
                <div className="w-32 h-32 rounded-[40px] bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-brand-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <MapPin className="w-14 h-14 text-stone-600 group-hover:text-brand-400 transition-colors relative z-10" />
                </div>
                <div className="space-y-6">
                  <h3 className="text-4xl font-black text-white tracking-tight leading-tight">Explore the <br/><span className="text-brand-400">Gokyo Trail</span></h3>
                  <p className="text-stone-500 text-xl leading-relaxed max-w-sm mx-auto font-medium">
                    Use the interactive map to see the terrain, and select a trail stop above to view detailed location data.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

