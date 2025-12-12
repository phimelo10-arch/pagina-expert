import React from 'react';
import { Phone } from 'lucide-react';
import { WHATSAPP_LINK } from '../../constants';

interface WhatsAppButtonProps {
  text?: string;
  className?: string;
  variant?: 'primary' | 'outline' | 'floating';
  fullWidth?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  text = "Agendar agora pelo WhatsApp", 
  className = "", 
  variant = 'primary',
  fullWidth = false
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-full gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500";
  
  const variants = {
    primary: "bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-green-500/30 py-4 px-8 text-lg uppercase tracking-wide",
    outline: "bg-transparent border-2 border-green-600 text-green-700 hover:bg-green-50 py-3 px-6 text-base",
    floating: "fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white shadow-2xl p-4 md:px-6 md:py-3 rounded-full animate-bounce-slow"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <a 
      href={WHATSAPP_LINK} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      aria-label="Agendar consulta via WhatsApp"
    >
      <Phone className={variant === 'floating' ? "w-6 h-6 md:w-5 md:h-5" : "w-5 h-5"} />
      <span className={variant === 'floating' ? "hidden md:inline" : ""}>{text}</span>
    </a>
  );
};

export default WhatsAppButton;