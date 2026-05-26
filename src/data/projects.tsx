export type Project = {
  id: number;
  title: string;
  niche: string;
  nicheColor: string;
  description: string;
  image: string;
  demoUrl: string;
  technologies: string[];
  status: "Finalizado" | "Em desenvolvimento";
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Monarca Jóias",
    niche: "Mercado Premium",
    nicheColor: "gold",
    description:
      "Landing page premium com identidade visual exclusiva, suporte a 3 idiomas (PT/EN/ES) e animações sofisticadas para transmitir luxo e confiança.",
    image: "/projects/monarca.png",
    demoUrl: "https://monarcajoias.com.br",
    technologies: ["Landing Page", "Design Premium", "Multilíngue"],
    status: "Finalizado",
  },
  {
    id: 2,
    title: "Marcele Nutri",
    niche: "Saúde & Bem-Estar",
    nicheColor: "rose",
    description:
      "Landing page com planos de consulta, toggle PIX/Cartão, avaliação antropométrica e conformidade total com a LGPD.",
    image: "/projects/marceleasevedo.png",
    demoUrl: "https://marceleasevedonutri.vercel.app/",
    technologies: ["Landing Page", "Planos e Pagamentos", "LGPD"],
    status: "Finalizado",
  },
  {
    id: 3,
    title: "Silva Advogados",
    niche: "Jurídico",
    nicheColor: "slate",
    description:
      "One-page institucional para escritório de advocacia com foco em SEO, autoridade de marca e CTAs estratégicos.",
    image: "/projects/adv.png",
    demoUrl: "https://adv-silva.vercel.app/",
    technologies: ["Site Institucional", "SEO", "Design Corporativo"],
    status: "Finalizado",
  },
  {
    id: 4,
    title: "Quiroclínica",
    niche: "Saúde & Bem-Estar",
    nicheColor: "green",
    description:
      "Site institucional de alta conversão focado em credibilidade e agendamentos, com suporte a múltiplos idiomas via i18n.",
    image: "/projects/quiroclinica-preview.png",
    demoUrl: "https://quiroclinica.com.br/",
    technologies: ["Site Institucional", "Multilíngue", "Agendamento"],
    status: "Finalizado",
  },
  {
    id: 5,
    title: "MR. Sauce",
    niche: "Alimentação & E-commerce",
    nicheColor: "yellow",
    description:
      "E-commerce para marca artesanal de molhos gourmet premium. Site com cardápio digital, loja integrada e identidade visual sofisticada para converter visitantes em compradores.",
    image: "/projects/mrsauce.png",
    demoUrl: "https://mrsauce.com.br/",
    technologies: ["Loja Virtual", "Design Premium", "SEO"],
    status: "Finalizado" as const,
  },
  {
    id: 6,
    title: "Kerotur",
    niche: "Turismo & Viagens",
    nicheColor: "blue",
    description:
      "Site moderno para agência de turismo com internacionalização, animações suaves e experiência visual premium.",
    image: "/projects/kerotur.png",
    demoUrl: "https://site-kerotur-jxe8.vercel.app/",
    technologies: ["Site Institucional", "Multilíngue", "Design Premium"],
    status: "Finalizado",
  },
  {
    id: 7,
    title: "Dra. Letícia Garcia",
    niche: "Estética & Harmonização",
    nicheColor: "rose",
    description:
      "Landing page de alta conversão para farmacêutica especialista em harmonização facial. Design elegante e feminino focado em agendamentos rápidos e transmissão de confiança e naturalidade.",
    image: "/projects/dra-leticia.png",
    demoUrl: "https://draleticiagarciahoff.com.br/",
    technologies: ["Landing Page", "Design Premium", "SEO Local"],
    status: "Finalizado" as const,
  },
  {
    id: 8,
    title: "Napoles Pizzaria",
    niche: "Alimentação & Delivery",
    nicheColor: "yellow",
    description:
      "Site fullstack para pizzaria com cardápio digital e pagamento integrado via Stripe.",
    image: "/projects/pizzaria.png",
    demoUrl: "https://napoles-pizzaria.vercel.app/",
    technologies: ["Loja Virtual", "Pagamento Online", "Design"],
    status: "Finalizado",
  },
  {
    id: 9,
    title: "Construcom Engenharia",
    niche: "Engenharia & B2B",
    nicheColor: "slate",
    description:
      "Site institucional para empresa de engenharia e telecomunicações com atuação nacional. Design sólido e profissional para transmitir autoridade técnica e captar novos contratos.",
    image: "/projects/construcom.png",
    demoUrl: "https://construcomengenharia.com.br/",
    technologies: ["Site Institucional", "Design Corporativo", "SEO"],
    status: "Finalizado" as const,
  },
  {
    id: 10,
    title: "Dra. Tamires Fraga",
    niche: "Saúde & Medicina",
    nicheColor: "blue",
    description:
      "Site institucional para cirurgiã especialista em cabeça e pescoço. Focado em transmitir credibilidade médica, destacar especializações e converter visitantes em consultas via WhatsApp.",
    image: "/projects/dra-tamires.png",
    demoUrl: "https://dratamiresfraga.com.br/",
    technologies: ["Site Institucional", "Design Premium", "SEO Local"],
    status: "Finalizado" as const,
  },
  {
    id: 11,
    title: "Auto Brilho",
    niche: "Estética Automotiva",
    nicheColor: "red",
    description:
      "Site para loja de higienização automotiva com foco em velocidade de carregamento, SEO local e geração de contatos.",
    image: "/projects/auto_shine.png",
    demoUrl: "https://site-auto-brilho.vercel.app/",
    technologies: ["Landing Page", "SEO Local", "Design"],
    status: "Finalizado",
  },
  {
    id: 12,
    title: "New Gym",
    niche: "Fitness & Saúde",
    nicheColor: "green",
    description:
      "Site para academia com design moderno, responsivo e foco em captação de novos alunos.",
    image: "/projects/newgym-preview.png",
    demoUrl: "https://new-gym-three.vercel.app/",
    technologies: ["Site Institucional", "Design", "SEO Local"],
    status: "Finalizado",
  },
  {
    id: 13,
    title: "PetShop Page",
    niche: "Pet & Serviços",
    nicheColor: "yellow",
    description:
      "Site moderno e responsivo para petshop com interface otimizada para conversão e experiência do usuário.",
    image: "/projects/petshop.png",
    demoUrl: "https://petshop-ts-next.vercel.app/",
    technologies: ["Site Institucional", "Design Premium", "SEO"],
    status: "Finalizado",
  },

  {
    id: 14,
    title: "Aconchego Canastra Hotel",
    niche: "Turismo & Hotelaria",
    nicheColor: "green",
    description:
      "Site para hotel ecológico na Serra da Canastra com galeria de acomodações, gastronomia e integração direta com WhatsApp para reservas. Design acolhedor que transmite a experiência do lugar.",
    image: "/projects/canastra-hotel.png",
    demoUrl: "https://aconchegocanastrahotel.com.br/",
    technologies: [
      "Site Hoteleiro",
      "Galeria de Fotos",
      "Reservas via WhatsApp",
    ],
    status: "Finalizado" as const,
  },
  {
    id: 15,
    title: "Dev Store",
    niche: "E-commerce",
    nicheColor: "slate",
    description:
      "E-commerce moderno com arquitetura escalável, gerenciamento de estado e carrinho de compras funcional.",
    image: "/projects/dev-store.png",
    demoUrl: "https://newdev-store.vercel.app/",
    technologies: ["E-commerce", "Carrinho de Compras", "Design Premium"],
    status: "Em desenvolvimento",
  },
  {
    id: 16,
    title: "SaaS Clínicas",
    niche: "SaaS & Produto",
    nicheColor: "blue",
    description:
      "Plataforma de gestão de consultas com agendamento em tempo real, arquitetura escalável e foco em performance.",
    image: "/projects/page_clinic.png",
    demoUrl: "",
    technologies: ["Plataforma SaaS", "Agendamento Online", "Dashboard"],
    status: "Em desenvolvimento",
  },
  {
  id: 17,
  title: "TaskFlow App",
  niche: "Tecnologia & Produto",
  nicheColor: "green",
  description:
    "Landing page para app de produtividade com seções de benefícios, depoimentos e CTA de download. Design moderno focado em conversão.",
  image: "/projects/taskflow.png",
  demoUrl: "https://interactive-page-brown.vercel.app/",
  technologies: ["Landing Page", "Design Premium", "Conversão"],
  status: "Finalizado" as const,
},
{
  id: 18,
  title: "Barbearia Kings",
  niche: "Barbearia & Estilo",
  nicheColor: "gold",
  description:
    "Landing page premium para barbearia masculina com agendamento online via WhatsApp, galeria de cortes, depoimentos e localização integrada. Design moderno focado em atrair novos clientes.",
  image: "/projects/barber.png",
  demoUrl: "",
  technologies: ["Landing Page", "Agendamento Online", "SEO Local"],
  status: "Em desenvolvimento" as const,
},
];
