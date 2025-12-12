import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-brand-100 p-3 rounded-full">
               <HelpCircle className="text-brand-600 w-6 h-6" />
            </div>
          </div>
          <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">Perguntas Frequentes</h2>
          <p className="text-slate-600">Tire suas dúvidas sobre nossos tratamentos e atendimento.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={faq.id} 
              className={`border rounded-xl transition-all duration-300 ${openIndex === index ? 'border-brand-500 bg-brand-50/30 shadow-sm' : 'border-slate-200 hover:border-brand-300'}`}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-bold ${openIndex === index ? 'text-brand-700' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-transparent">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;