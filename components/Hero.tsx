import React from 'react';
import { HERO_CONTENT, DOCTOR } from '../constants';
import WhatsAppButton from './ui/WhatsAppButton';
import { Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=2000" 
          alt="Sorriso saudável e confiante" 
          className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative py-20">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 bg-brand-800/50 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 border border-brand-700">
            <div className="flex text-gold-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span className="text-xs font-semibold tracking-wide uppercase text-brand-100">Referência em {DOCTOR.location}</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6">
            {HERO_CONTENT.title}
          </h1>
          
          <p className="text-lg md:text-xl text-brand-50 mb-8 leading-relaxed opacity-90">
            {HERO_CONTENT.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <WhatsAppButton className="transform hover:scale-105" />
          </div>

          <p className="mt-6 text-sm text-brand-200 opacity-80 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Dra. {DOCTOR.name} está online agora
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;