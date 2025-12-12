import { DoctorProfile, FAQItem, GoogleReview, Service, Testimonial, TransformationCase } from './types';

// CONFIGURAÇÃO GERAL
export const DOCTOR: DoctorProfile = {
  name: "Dra. Helena Costa",
  cro: "SP-12345",
  location: "Jardins, São Paulo - SP",
  specialties: ["Odontologia Estética", "Lentes de Contato", "Invisalign", "Harmonização do Sorriso"],
  whatsapp: "5511999999999", // Exemplo
  experienceYears: 12,
  patientsCount: "+2.500"
};

export const WHATSAPP_LINK = `https://wa.me/${DOCTOR.whatsapp}?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20com%20a%20${DOCTOR.name}.`;

// HERO SECTION
export const HERO_CONTENT = {
  title: "Descubra o Poder de um Sorriso Confiante e Saudável",
  subtitle: "Especialista em transformar sorrisos com naturalidade, tecnologia e um atendimento humanizado que você merece.",
  cta: "Agendar Avaliação pelo WhatsApp"
};

// DEPOIMENTOS
export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Mariana S.", text: "A Dra. Helena mudou minha autoestima! As lentes ficaram super naturais.", type: "short" },
  { id: 2, name: "Carlos Eduardo", text: "Profissionalismo impecável e mão leve. Recomendo de olhos fechados.", type: "short" },
  { id: 3, name: "Fernanda Lima", text: "Eu tinha pavor de dentista, mas o atendimento humanizado da clínica me fez perder o medo. O resultado do clareamento foi incrível!", type: "medium" },
  { id: 4, name: "Roberto Alves", text: "Fiz todo meu tratamento ortodôntico e agora a manutenção. Ambiente limpo, organizado e pontualidade britânica.", type: "medium" },
  { id: 5, name: "Juliana Mendes", text: "Cheguei com vergonha de sorrir e saí renovada. A Dra. explicou cada detalhe do processo. O investimento valeu cada centavo.", type: "medium" },
  { id: 6, name: "Patrícia Gomes", text: "Incrível! Desde a recepção até o pós-atendimento. Me senti acolhida e o resultado estético superou minhas expectativas.", type: "short" },
  { id: 7, name: "Lucas Andrade", text: "Tecnologia de ponta. Fiz o escaneamento digital e vi meu sorriso antes mesmo de começar. Sensacional.", type: "short" },
  { id: 8, name: "Beatriz Nogueira", text: "Depois de anos insatisfeita com meu sorriso gengival e dentes amarelados, encontrei a Dra. Helena. Fizemos uma plástica gengival e facetas. Hoje sou outra pessoa, sorrio para fotos sem medo. Gratidão eterna!", type: "long" },
];

// CASOS DE SUCESSO
export const CASES: TransformationCase[] = [
  { 
    id: 1, 
    title: "Reabilitação Estética com Lentes", 
    before: "Paciente com dentes desgastados, amarelados e espaços (diastemas) que incomodavam esteticamente.", 
    after: "Aplicação de 10 lentes de contato dental, fechando espaços, devolvendo a cor branca natural e a anatomia jovem do sorriso." 
  },
  { 
    id: 2, 
    title: "Alinhamento Invisível", 
    before: "Mordida cruzada e dentes desalinhados, paciente não queria usar aparelho metálico fixo.", 
    after: "Tratamento de 14 meses com alinhadores transparentes. Sorriso perfeitamente alinhado sem comprometer a estética durante o processo." 
  },
  { 
    id: 3, 
    title: "Clareamento e Contorno", 
    before: "Sorriso com aspecto envelhecido e bordas irregulares.", 
    after: "Associação de clareamento supervisionado e recontorno estético em resina. Resultado imediato de rejuvenescimento do sorriso." 
  },
];

// GOOGLE REVIEWS
export const GOOGLE_REVIEWS: GoogleReview[] = [
  { id: 1, name: "Ana Paula", rating: 5, comment: "Melhor dentista de SP! Atenciosa e técnica impecável.", date: "há 2 semanas" },
  { id: 2, name: "Ricardo T.", rating: 5, comment: "Estrutura fantástica e atendimento nota 10.", date: "há 1 mês" },
  { id: 3, name: "Sofia M.", rating: 5, comment: "Mãos de fada. Não senti dor nenhuma durante o procedimento.", date: "há 3 dias" },
  { id: 4, name: "Marcos V.", rating: 5, comment: "Resolveu um problema que outros dentistas não conseguiram.", date: "há 2 meses" },
  { id: 5, name: "Clara D.", rating: 5, comment: "Excelente profissional. O consultório é lindo e aconchegante.", date: "há 1 semana" },
];

// SERVIÇOS
export const SERVICES: Service[] = [
  { id: 1, title: "Lentes de Contato Dental", description: "Lâminas ultrafinas de porcelana para corrigir cor e formato.", benefit: "Sorriso de capa de revista com durabilidade e naturalidade.", iconName: "Sparkles" },
  { id: 2, title: "Ortodontia Invisível", description: "Alinhadores transparentes e removíveis.", benefit: "Corrija seus dentes de forma discreta, confortável e previsível.", iconName: "ScanFace" },
  { id: 3, title: "Clareamento Dental", description: "Técnicas combinadas (laser e caseiro) para máxima eficácia.", benefit: "Dentes até 4 tons mais brancos com segurança para o esmalte.", iconName: "Sun" },
  { id: 4, title: "Implantes Dentários", description: "Reposição de dentes perdidos com raízes artificiais de titânio.", benefit: "Recupere a segurança para mastigar e sorrir sem medo.", iconName: "Anchor" }, // Metaphorical icon
  { id: 5, title: "Harmonização Orofacial", description: "Procedimentos para equilibrar traços do rosto e sorriso.", benefit: "Rejuvenescimento e simetria que valorizam sua beleza natural.", iconName: "Smile" },
  { id: 6, title: "Clínica Geral & Prevenção", description: "Limpeza profunda, check-up digital e restaurações.", benefit: "Saúde bucal em dia para evitar dores e problemas futuros.", iconName: "ShieldCheck" },
];

// FAQ
export const FAQS: FAQItem[] = [
  { id: 1, question: "Aceita convênios?", answer: "Trabalhamos focados na qualidade e personalização, por isso atendemos na modalidade particular. Porém, emitimos nota fiscal e laudos para solicitação de reembolso junto ao seu convênio." },
  { id: 2, question: "Qual o valor da consulta?", answer: "Cada sorriso é único. Realizamos uma avaliação inicial detalhada para entender suas necessidades e propor o plano ideal. Entre em contato pelo WhatsApp para consultar valores vigentes." },
  { id: 3, question: "O clareamento dental causa sensibilidade?", answer: "Utilizamos as técnicas e produtos mais modernos do mercado que minimizam drasticamente a sensibilidade. Além disso, aplicamos dessensibilizantes antes e depois do procedimento." },
  { id: 4, question: "Quanto tempo dura a lente de contato dental?", answer: "Com os cuidados adequados e manutenção periódica, as lentes de porcelana podem durar de 15 a 20 anos, mantendo a cor e o brilho." },
  { id: 5, question: "Atendem urgências?", answer: "Sim! Entendemos que dor de dente não espera. Entre em contato imediatamente pelo WhatsApp e faremos o possível para encaixar seu atendimento." },
  { id: 6, question: "Onde fica o consultório?", answer: `Estamos localizados no coração de ${DOCTOR.location}, com estacionamento no local e fácil acesso.` },
  { id: 7, question: "Quais são as formas de pagamento?", answer: "Aceitamos cartões de crédito, débito, PIX e oferecemos parcelamento facilitado para tratamentos estéticos." },
  { id: 8, question: "Preciso agendar com antecedência?", answer: "Sim, nossa agenda costuma ser preenchida rapidamente. Recomendamos entrar em contato o quanto antes para garantir seu horário preferido." },
];

// MOTIVOS URGÊNCIA
export const WHY_NOW_REASONS = [
  "Agenda do mês com poucas vagas disponíveis.",
  "Condições especiais de parcelamento por tempo limitado.",
  "Avaliação completa com câmera intraoral inclusa.",
  "Atendimento exclusivo: apenas um paciente por horário."
];