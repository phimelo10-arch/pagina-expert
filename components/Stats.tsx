import React from 'react';
import { DOCTOR } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-200">
          
          <div className="p-4">
            <p className="text-3xl md:text-5xl font-bold text-brand-600 mb-2">{DOCTOR.patientsCount}</p>
            <p className="text-sm md:text-base text-slate-600 font-medium uppercase tracking-wide">Sorrisos Atendidos</p>
          </div>

          <div className="p-4">
            <p className="text-3xl md:text-5xl font-bold text-brand-600 mb-2">{DOCTOR.experienceYears}</p>
            <p className="text-sm md:text-base text-slate-600 font-medium uppercase tracking-wide">Anos de História</p>
          </div>

          <div className="p-4">
            <p className="text-3xl md:text-5xl font-bold text-brand-600 mb-2">100%</p>
            <p className="text-sm md:text-base text-slate-600 font-medium uppercase tracking-wide">Satisfação</p>
          </div>

          <div className="p-4">
            <p className="text-3xl md:text-5xl font-bold text-brand-600 mb-2">TOP 5</p>
            <p className="text-sm md:text-base text-slate-600 font-medium uppercase tracking-wide">Clínicas da Região</p>
          </div>

        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Mock Logos for Trust Badges */}
          {['Invisalign Doctor', 'SBOE Membro', 'Odontologia Digital', 'Biossegurança Certificada'].map((badge, i) => (
             <div key={i} className="border-2 border-slate-300 rounded-lg px-4 py-2 font-bold text-slate-400 text-sm md:text-lg select-none">
                {badge}
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;