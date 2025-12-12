import React from 'react';
import { SERVICES } from '../constants';
import { Sparkles, ScanFace, Sun, Anchor, Smile, ShieldCheck, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

// Icon mapping helper
const getIcon = (iconName: string) => {
  const icons: {[key: string]: React.ReactNode} = {
    Sparkles: <Sparkles className="w-8 h-8" />,
    ScanFace: <ScanFace className="w-8 h-8" />,
    Sun: <Sun className="w-8 h-8" />,
    Anchor: <Anchor className="w-8 h-8" />,
    Smile: <Smile className="w-8 h-8" />,
    ShieldCheck: <ShieldCheck className="w-8 h-8" />,
  };
  return icons[iconName] || <Sparkles className="w-8 h-8" />;
};

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50" id="servicos">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-3">Tratamentos</h2>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Tecnologia e Cuidado para o Seu Sorriso
          </h3>
          <p className="text-slate-600">
            Oferecemos uma gama completa de procedimentos estéticos e funcionais para garantir sua saúde e beleza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
              <div className="text-brand-500 mb-6 group-hover:scale-110 transition-transform duration-300 bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center">
                {getIcon(service.iconName)}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-500 mb-4 text-sm leading-relaxed min-h-[60px]">
                {service.description}
              </p>
              <div className="bg-green-50 px-4 py-3 rounded-lg mb-6 border-l-4 border-green-500">
                <p className="text-xs font-bold text-green-800 uppercase mb-1">Benefício:</p>
                <p className="text-sm text-green-700 font-medium">{service.benefit}</p>
              </div>
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-brand-600 font-bold hover:text-brand-800 transition-colors text-sm uppercase tracking-wide group-hover:translate-x-1 duration-300"
              >
                Agendar este serviço <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;