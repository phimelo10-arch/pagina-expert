import React from 'react';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/ui/WhatsAppButton';
import { DOCTOR } from './constants';

function App() {
  return (
    <main className="min-h-screen font-sans text-slate-900 bg-slate-50">
      
      {/* Sticky Header for Mobile/Desktop Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-serif font-bold text-xl text-brand-800">
            {DOCTOR.name.split(' ')[0]}<span className="text-brand-500">.Odonto</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="#sobre" className="hover:text-brand-600 transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-brand-600 transition-colors">Tratamentos</a>
            <a href="#faq" className="hover:text-brand-600 transition-colors">Dúvidas</a>
          </nav>
          <WhatsAppButton text="Agendar" variant="primary" className="!py-2 !px-4 !text-sm md:!py-2 md:!px-6" />
        </div>
      </header>

      <Hero />
      <Stats />
      <About />
      
      {/* Intermediate CTA */}
      <section className="bg-brand-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-serif font-bold text-brand-900 mb-6">
            Pronto para transformar seu sorriso?
          </h3>
          <WhatsAppButton />
        </div>
      </section>

      <SocialProof />
      <Services />
      <WhyUs />
      <FAQ />
      <Footer />
      
      {/* Floating Action Button */}
      <WhatsAppButton variant="floating" text="Agendar Consulta" />
    </main>
  );
}

export default App;