import React from 'react';
import { TESTIMONIALS, CASES, GOOGLE_REVIEWS } from '../constants';
import { Quote, Star, ArrowRight } from 'lucide-react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-3">Resultados Reais</h2>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Histórias de Sorrisos Transformados
          </h3>
        </div>

        {/* Mini Cases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {CASES.map((item) => (
            <div key={item.id} className="bg-slate-50 border border-slate-200 rounded-xl p-6 relative">
               <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                 CASE {item.id}
               </div>
               <h4 className="font-bold text-lg text-slate-900 mb-4 mt-2">{item.title}</h4>
               <div className="space-y-4">
                 <div>
                   <p className="text-xs font-bold text-red-500 uppercase mb-1">Antes:</p>
                   <p className="text-sm text-slate-600">{item.before}</p>
                 </div>
                 <div className="w-full h-px bg-slate-200"></div>
                 <div>
                   <p className="text-xs font-bold text-green-600 uppercase mb-1">Depois:</p>
                   <p className="text-sm text-slate-800 font-medium">{item.after}</p>
                 </div>
               </div>
            </div>
          ))}
        </div>

        {/* Testimonials Masonry-ish */}
        <div className="mb-20">
            <h4 className="text-center font-bold text-xl text-slate-900 mb-8">O que dizem nossos pacientes</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {TESTIMONIALS.map((t) => (
                    <div 
                        key={t.id} 
                        className={`bg-white p-6 rounded-xl shadow-md border border-slate-100 flex flex-col justify-between ${t.type === 'long' ? 'md:col-span-2 bg-brand-50/50' : ''}`}
                    >
                        <div>
                            <Quote className="text-brand-200 w-8 h-8 mb-3" />
                            <p className="text-slate-600 italic mb-4 text-sm leading-relaxed">"{t.text}"</p>
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                            <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-500">
                                {t.name.charAt(0)}
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                                <div className="flex text-gold-500">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Google Reviews */}
        <div className="bg-brand-900 rounded-3xl p-8 md:p-12 text-white">
           <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
               <div>
                   <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">Excelência Reconhecida</h3>
                   <p className="text-brand-200">Avaliação média de 5.0 estrelas no Google</p>
               </div>
               <div className="flex items-center gap-2 bg-white text-brand-900 px-6 py-3 rounded-full font-bold">
                   <span className="text-3xl">5.0</span>
                   <div className="flex flex-col text-gold-500 text-xs">
                       <div className="flex mb-1">
                         {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                       </div>
                       <span className="text-slate-400 font-normal">Baseado em avaliações reais</span>
                   </div>
               </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
               {GOOGLE_REVIEWS.map((review) => (
                   <div key={review.id} className="bg-brand-800/50 p-4 rounded-xl border border-brand-700 backdrop-blur-sm">
                       <div className="flex items-center justify-between mb-2">
                           <span className="font-bold text-sm truncate">{review.name}</span>
                           <span className="text-xs text-brand-300">{review.date}</span>
                       </div>
                       <div className="flex text-gold-500 mb-2">
                            {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                       </div>
                       <p className="text-xs text-brand-100 line-clamp-3">"{review.comment}"</p>
                   </div>
               ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;