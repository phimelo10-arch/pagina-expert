import React from 'react';
import { DOCTOR, WHATSAPP_LINK } from '../constants';
import { MapPin, Instagram, Facebook } from 'lucide-react';
import WhatsAppButton from './ui/WhatsAppButton';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <h2 className="font-serif text-2xl text-white font-bold mb-4">{DOCTOR.name}</h2>
            <p className="mb-6 text-sm leading-relaxed text-slate-400">
              Transformando vidas através de sorrisos saudáveis e esteticamente harmoniosos. Tecnologia de ponta e atendimento humanizado.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-brand-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-brand-400 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contato</h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 text-brand-400 shrink-0" />
                {DOCTOR.location}
              </p>
              <p>CRO: {DOCTOR.cro}</p>
              <p>WhatsApp: {DOCTOR.whatsapp}</p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="flex flex-col items-start">
             <h3 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Agende Sua Visita</h3>
             <p className="text-sm text-slate-400 mb-4">
               Restam poucas vagas para este mês. Garanta seu atendimento exclusivo.
             </p>
             <WhatsAppButton variant='primary' className='w-full md:w-auto text-sm py-3' text='Falar no WhatsApp' />
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {DOCTOR.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;