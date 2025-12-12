import React from 'react';
import { DOCTOR } from '../constants';
import { CheckCircle2, Award, GraduationCap, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="sobre">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Photo Column */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
                alt={`Foto da ${DOCTOR.name}`} 
                className="w-full h-auto object-cover aspect-[3/4]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <p className="font-serif text-2xl font-bold">{DOCTOR.name}</p>
                <p className="text-sm opacity-90">CRO: {DOCTOR.cro}</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-brand-50 rounded-2xl -z-10"></div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-3">Autoridade e Confiança</h2>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Mais de uma década devolvendo a autoestima através do sorriso
            </h3>
            
            <p className="text-slate-600 mb-6 leading-relaxed">
              Formada pelas melhores instituições do país, a {DOCTOR.name} dedica sua vida a unir ciência, arte e tecnologia. 
              Sua filosofia é baseada no atendimento humanizado: aqui, você não é apenas um número, é um paciente com sonhos e necessidades únicas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-6 h-6 text-brand-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Formação de Excelência</h4>
                  <p className="text-sm text-slate-500">Especialista em Ortodontia e Dentística Restauradora.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-brand-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">{DOCTOR.experienceYears} Anos de Experiência</h4>
                  <p className="text-sm text-slate-500">Dedicação contínua e atualização constante.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-brand-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Certificação Internacional</h4>
                  <p className="text-sm text-slate-500">Membro da Sociedade Brasileira de Odontologia Estética.</p>
                </div>
              </div>
            </div>

            <div className="bg-brand-50 p-6 rounded-xl border border-brand-100 mb-8">
              <h4 className="font-bold text-brand-800 mb-3">Especialidades:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {DOCTOR.specialties.map((spec, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-700 text-sm">
                    <CheckCircle2 size={16} className="text-green-500" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;