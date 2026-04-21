import { motion } from 'motion/react';
import { Camera } from 'lucide-react';
import Section from './Section';
import { GALLERY_IMAGES } from '../constants';

export default function GallerySection() {
  return (
    <Section title="Visions of Gokyo" subtitle="A Visual Journey" className="py-24 bg-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-[1200px] md:h-[800px]">
        {GALLERY_IMAGES.map((image, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.8, 
              delay: i * 0.1, 
              ease: [0.21, 0.47, 0.32, 0.98] 
            }}
            className={`group relative overflow-hidden rounded-[40px] ${image.className} shadow-2xl shadow-stone-900/10`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Cinematic Glass Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-10">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                className="space-y-2"
              >
                <div className="glass-dark inline-flex p-2 rounded-xl border border-white/10 backdrop-blur-md mb-2">
                  <Camera className="w-4 h-4 text-brand-400" />
                </div>
                <p className="text-white font-black text-2xl tracking-tight leading-tight">
                  {image.caption}
                </p>
                <p className="text-white/60 text-xs font-bold uppercase tracking-widest">
                  {image.alt}
                </p>
              </motion.div>
            </div>
            
            {/* Subtle border for premium feel */}
            <div className="absolute inset-0 border border-white/5 rounded-[40px] pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
