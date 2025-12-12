import React from 'react';
import { WHY_NOW_REASONS } from '../constants';
import WhatsAppButton from './ui/WhatsAppButton';
import { AlarmClock } from 'lucide-react';

const WhyUs: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-100 flex flex-col md:flex-row">
          
          <div className="md:w-2/5 bg-brand-600 p-8 md:p-12 text-white flex flex-col justify-center items-start">
            <AlarmClock className="w-12 h-12 mb-6 text-brand-200" />
            <h3 className="font-serif text-3xl font-bold mb-4">Por que agendar sua avaliação hoje?</h3>
            <p className="text-brand-100 mb-6">Não adie mais o sorriso que você merece. Nossa agenda é concorrida devido à qualidade e exclusividade do atendimento.</p>
            <div className="w-16 h-1 bg-brand-400 rounded-full"></div>
          </div>

          <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
             <ul className="space-y-4 mb-8">
               {WHY_NOW_REASONS.map((reason, idx) => (
                 <li key={idx} className="flex items-start gap-3">
                   <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-sm">
                     {idx + 1}
                   </span>
                   <span className="text-slate-700 font-medium">{reason}</span>
                 </li>
               ))}
             </ul>
             <WhatsAppButton text="Garantir meu horário agora" fullWidth />
             <p className="text-xs text-center text-slate-400 mt-4">Respostas em média em até 30 minutos.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;