// Dicionário de traduções pt/en. "pt" é a fonte de verdade (texto original
// do site); "en" segue a mesma estrutura, verificada por `satisfies`.

const pt = {
  nav: {
    links: [
      ["Início", "#top"],
      ["Serviços", "#services"],
      ["Sobre", "#about"],
      ["Diferenciais", "#diferenciais"],
      ["Galeria", "#galeria"],
      ["Contactos", "#contact"],
    ] as [string, string][],
    cta: "Solicitar Cotação",
    menuLabel: "Menu",
    langLabel: "Idioma",
  },
  hero: {
    eyebrow: "Operadora logística em Moçambique e SADC",
    titleLine1: '"Soluções inteligentes',
    titleLine2: 'para grandes operações"',
    subtitle: "Logística, Serviços Ferro-Portuários e Soluções Industriais.",
    ctaPrimary: "Solicitar Cotação",
    ctaSecondary: "Ver Serviços",
    stats: [
      ["13+", "Anos"],
      ["100+", "Projectos"],
      ["50+", "Especialistas"],
    ] as [string, string][],
    imageAlt: "Locomotiva a ser transportada em operação de carga especial",
  },
  marquee: {
    items: [
      "Segurança Operacional",
      "Eficiência & Qualidade",
      "Logística Integrada",
      "Soluções Sustentáveis",
      "Fornecimento Confiável",
      "Conformidade & Segurança",
      "Entrega no Prazo",
    ],
  },
  services: {
    badge: "Nossos Serviços",
    title: "Excelência em logística integrada",
    subtitle:
      "Do porto à última milha, oferecemos soluções completas em cada etapa da cadeia logística.",
    cardCta: "Saiba mais",
    items: {
      transport: {
        title: "Serviços de Transporte e Logística",
        desc: "Planeamento, coordenação e execução de operações de transporte e logística, assegurando o fluxo eficiente de mercadorias desde a origem até ao destino final. Atuamos com foco na otimização de rotas, cumprimento de prazos, segurança da carga e integração com operações portuárias, ferroviárias e industriais.",
        alt: "Guindaste a carregar sacos de carga num camião no porto",
      },
      railPort: {
        title: "Serviços Ferro-Portuários",
        desc: "Prestação de serviços especializados em ambientes ferro-portuários, apoiando operações ligadas à movimentação, organização e gestão de cargas entre portos, terminais ferroviários e áreas logísticas. Garantimos eficiência operacional, cumprimento de normas e integração entre diferentes modais de transporte.",
        alt: "Equipa da Highlighter em uniforme laranja a trabalhar numa via férrea",
      },
      cargoMinerals: {
        title: "Transporte de Cargas Gerais e Minérios",
        desc: "Garantimos transporte seguro e eficiente de cargas gerais e minérios, com foco na pontualidade, controlo operacional e redução de riscos logísticos.",
        alt: "Guindaste a movimentar vagão ferroviário num porto",
      },
      stevedoreStock: {
        title: "Serviços de Estiva e Gestão de Stock",
        desc: "Oferecemos soluções eficazes de estiva e gestão de stock, com foco na segurança, eficiência e otimização dos processos logísticos.",
        alt: "Camião com carga coberta pronto para transporte",
      },
      industrialSupport: {
        title: "Soluções e Apoio Industrial",
        desc: "Fornecimento de soluções de apoio a operações industriais, adaptadas às necessidades específicas de cada cliente. Atuamos em ambientes industriais complexos, garantindo suporte operacional, logística interna e assistência técnica para assegurar continuidade, eficiência e segurança dos processos produtivos.",
        alt: "Equipa de colaboradores da Highlighter em uniforme de trabalho",
      },
    },
  },
  stats: {
    items: [
      { n: 13, s: "+", l: "Anos" },
      { n: 100, s: "+", l: "Projectos" },
      { n: 50, s: "+", l: "Especialistas" },
    ],
  },
  about: {
    badge: "Sobre Nós",
    imageAlt:
      "Equipa da Highlighter em operação no terreno, com capacetes e coletes de segurança",
    floatingNumber: "+13",
    floatingText: "Anos a entregar logística inteligente em Moçambique e SADC",
    title: "Parceiro estratégico em operações industriais",
    paragraph:
      "A Highlighter Group é uma empresa com mais de 13 anos de experiência multidisciplinar dedicada a oferecer soluções estratégicas em transporte, logística e apoio industrial. Atuamos em ambientes operacionais exigentes, como portos, ferrovias e indústrias, contribuindo para a continuidade operacional, produtividade e crescimento sustentável dos nossos parceiros.",
    vision: {
      title: "Visão",
      text: "Ser uma referência no setor de transporte, logística e serviços industriais. E contribuir para o desenvolvimento de operações de grande escala.",
    },
    mission: {
      title: "Missão",
      text: "Desenvolver soluções inteligentes e integradas em transporte, logística, serviços ferro-portuários e apoio industrial, adaptadas às necessidades de grandes operações.",
    },
    values: {
      title: "Valores",
      text: "Garantir eficiência operacional, segurança e cumprimento rigoroso de normas, e assegurar a execução fiável e organizada de cada serviço prestado.",
    },
    skills: [
      { label: "Logística Integrada", value: 98 },
      { label: "Operações Ferroportuárias", value: 90 },
      { label: "Estiva & Gestão de Cargas", value: 85 },
    ],
  },
  differentials: {
    badge: "Nossos Serviços",
    title: "Compromisso com excelência e resultados",
    items: {
      experience: {
        title: "Experiência Comprovada",
        desc: "Mais de 13 anos de actuação no sector logístico.",
      },
      deadlines: {
        title: "Compromisso com Prazos",
        desc: "Rotas optimizadas e tecnologia de rastreio para pontualidade.",
      },
      transparency: {
        title: "Transparência Operacional",
        desc: "Comunicação clara e visibilidade total da operação.",
      },
      safety: {
        title: "Segurança & Conformidade",
        desc: "Elevados padrões reduzindo riscos e garantindo integridade.",
      },
      integrated: {
        title: "Soluções Integradas",
        desc: "Transporte, ferroportuário, estiva, stock e fornecimento.",
      },
      clientFocus: {
        title: "Foco no Cliente",
        desc: "Parcerias duradouras baseadas em proximidade e confiança.",
      },
    },
  },
  gallery: {
    badge: "Galeria de Projectos",
    featuredBadge: "Projecto em Destaque",
    otherProjectsTitle: "Outros Projectos",
    closeLabel: "Fechar",
    prevLabel: "Anterior",
    nextLabel: "Seguinte",
    defaultDialogTitle: "Galeria de projectos",
    featured: {
      title: "Operação MICD-001",
      paragraph1:
        "Temos o orgulho de partilhar o sucesso da Operação MICD-001, realizada no Porto de Maputo Cais 7, envolvendo a movimentação de 3.000 toneladas de sacos de arroz a partir do navio MV ES JASMINE. A operação foi conduzida com foco na segurança, eficiência e coordenação logística, reforçando o compromisso da Highlighter Group com a excelência operacional.",
      paragraph2:
        "Ao longo da operação, foram mobilizados 7 camiões, realizando 51 carregamentos, o equivalente ao transporte de 30.600 sacos de arroz de 50 kg, totalizando 1.530 toneladas movimentadas nesta fase da operação.",
      stats: [
        { value: "7", label: "Camiões mobilizados" },
        { value: "51", label: "Carregamentos" },
        { value: "30.600", label: "Sacos de arroz de 50 kg" },
        { value: "1.530", label: "Toneladas movimentadas" },
      ],
      photosAlt: [
        "Camião a ser carregado com sacos de arroz junto ao navio",
        "Carregamento de sacos de arroz no Porto de Maputo",
        "Carregamento nocturno de sacos de arroz",
        "Camiões da Highlighter Group no Porto de Maputo",
      ],
    },
    otherPhotosAlt: [
      "Grua a suspender uma locomotiva a bordo de um navio",
      "Locomotiva suspensa por grua de grande capacidade",
      "Equipa junto a uma locomotiva a ser içada",
      "Transporte de material ferroviário por camião",
      "Grua móvel junto a um navio graneleiro",
      "Detalhe de equipamento pesado de içamento",
      "Componente de grua transportado em camião plataforma",
      "Colaborador junto a um camião da Highlighter Group",
      "Carga coberta com lona durante a noite",
    ],
  },
  trackingTestimonial: {
    badge: "Cobertura nacional",
    title: "Presentes em todo o Moçambique",
    subtitle:
      "De Maputo a Pemba, ligamos portos, ferrovias e indústrias com operações coordenadas e visibilidade total em cada etapa.",
    cta: "Ver os nossos serviços",
    testimonial: {
      quote:
        "Liderar operações de grande escala exige visão estratégica, responsabilidade e um forte compromisso com a excelência operacional. Na Highlighter Group, acreditamos que o sucesso em transporte, logística, serviços ferro-portuários e soluções industriais está diretamente ligado à eficiência, segurança e capacidade de adaptação às necessidades de cada cliente. O nosso foco é oferecer soluções inteligentes, fiáveis e sustentáveis, contribuindo para operações mais organizadas, produtivas e orientadas para resultados. Trabalhamos todos os dias para construir parcerias sólidas e duradouras, baseadas na confiança e na entrega consistente de valor.",
      name: "Ednilton Madeira",
      role: "CEO",
    },
  },
  partners: {
    badge: "Parceiros",
    title: "Quem Confia em Nós",
    subtitle:
      "Trabalhamos lado a lado com operadoras, portos e indústrias de referência em Moçambique e na SADC.",
  },
  faq: {
    badge: "FAQ",
    title: "Perguntas Frequentes",
    subtitle:
      "Informações importantes sobre as nossas operações logísticas, envio, entrega e segurança.",
    items: [
      [
        "Quais serviços a Highlighter oferece?",
        "Actuamos em transporte de cargas gerais e minérios, serviços ferroportuários, estiva, gestão de stock, fornecimento de carvão mineral, aluguer de equipamentos e mão-de-obra especializada.",
      ],
      [
        "Como posso solicitar um serviço?",
        "Pode entrar em contacto pelo formulário, telefone ou e-mail. Após análise da necessidade, apresentamos proposta adequada à operação.",
      ],
      [
        "A empresa opera apenas a nível nacional?",
        "Actuamos principalmente em território nacional, com capacidade de apoio a operações regionais na SADC conforme o projecto.",
      ],
      [
        "Como é garantida a segurança das cargas?",
        "Adoptamos procedimentos rigorosos de segurança, controlo logístico e supervisão constante em todas as fases.",
      ],
      [
        "É possível acompanhar a operação?",
        "Sim. Mantemos comunicação contínua com o cliente e actualizações conforme a necessidade da operação.",
      ],
    ] as [string, string][],
  },
  cta: {
    titleLine1: "Precisa de uma operação",
    titleHighlight: "mais eficiente e segura?",
    paragraph:
      "A Highlighter Group oferece soluções inteligentes em transporte, logística e serviços ferro-portuários e industriais. Fale connosco e receba uma proposta feita à medida da sua operação.",
    emailCta: "Solicitar cotação",
  },
  footer: {
    description:
      "Empresa moçambicana com mais de 13 anos em logística integrada e inteligente.",
    servicesTitle: "Serviços",
    services: [
      "Operações Portuárias",
      "Estiva",
      "Agribusiness",
      "Logística Integrada",
      "Ferroportuário",
    ],
    companyTitle: "Empresa",
    companyLinks: [
      ["Início", "#top"],
      ["Sobre Nós", "#about"],
      ["Serviços", "#services"],
      ["Contactos", "#contact"],
    ] as [string, string][],
    contactsTitle: "Contactos",
    addressLine: "Rua 24 de Julho, Q 25, Nº131, Cidade da Matola",
    copyrightSuffix: "Logística, Excelência e Segurança",
  },
};

const en = {
  nav: {
    links: [
      ["Home", "#top"],
      ["Services", "#services"],
      ["About", "#about"],
      ["Differentials", "#diferenciais"],
      ["Gallery", "#galeria"],
      ["Contact", "#contact"],
    ] as [string, string][],
    cta: "Request a Quote",
    menuLabel: "Menu",
    langLabel: "Language",
  },
  hero: {
    eyebrow: "Logistics operator in Mozambique and the SADC region",
    titleLine1: '"Smart solutions',
    titleLine2: 'for major operations"',
    subtitle: "Logistics, Rail-Port Services and Industrial Solutions.",
    ctaPrimary: "Request a Quote",
    ctaSecondary: "View Services",
    stats: [
      ["13+", "Years"],
      ["100+", "Projects"],
      ["50+", "Specialists"],
    ] as [string, string][],
    imageAlt: "Locomotive being transported in a special cargo operation",
  },
  marquee: {
    items: [
      "Operational Safety",
      "Efficiency & Quality",
      "Integrated Logistics",
      "Sustainable Solutions",
      "Reliable Supply",
      "Compliance & Safety",
      "On-Time Delivery",
    ],
  },
  services: {
    badge: "Our Services",
    title: "Excellence in integrated logistics",
    subtitle:
      "From port to last mile, we offer complete solutions at every stage of the logistics chain.",
    cardCta: "Learn more",
    items: {
      transport: {
        title: "Transport and Logistics Services",
        desc: "Planning, coordination and execution of transport and logistics operations, ensuring the efficient flow of goods from origin to final destination. We focus on route optimisation, on-time delivery, cargo security and integration with port, rail and industrial operations.",
        alt: "Crane loading cargo sacks onto a truck at the port",
      },
      railPort: {
        title: "Rail-Port Services",
        desc: "Specialised services in rail-port environments, supporting operations related to the handling, organisation and management of cargo between ports, rail terminals and logistics areas. We ensure operational efficiency, regulatory compliance and integration between different transport modes.",
        alt: "Highlighter team in orange uniforms working on a railway",
      },
      cargoMinerals: {
        title: "Transport of General Cargo and Minerals",
        desc: "We guarantee safe and efficient transport of general cargo and minerals, focused on punctuality, operational control and reduced logistics risk.",
        alt: "Crane moving a railway wagon at a port",
      },
      stevedoreStock: {
        title: "Stevedoring and Stock Management Services",
        desc: "We offer effective stevedoring and stock management solutions, focused on safety, efficiency and the optimisation of logistics processes.",
        alt: "Truck with covered cargo ready for transport",
      },
      industrialSupport: {
        title: "Industrial Solutions and Support",
        desc: "Support solutions for industrial operations, tailored to each client's specific needs. We operate in complex industrial environments, providing operational support, internal logistics and technical assistance to ensure the continuity, efficiency and safety of production processes.",
        alt: "Team of Highlighter workers in work uniforms",
      },
    },
  },
  stats: {
    items: [
      { n: 13, s: "+", l: "Years" },
      { n: 100, s: "+", l: "Projects" },
      { n: 50, s: "+", l: "Specialists" },
    ],
  },
  about: {
    badge: "About Us",
    imageAlt:
      "Highlighter team working on-site, wearing helmets and safety vests",
    floatingNumber: "+13",
    floatingText: "Years delivering smart logistics in Mozambique and SADC",
    title: "Strategic partner in industrial operations",
    paragraph:
      "Highlighter Group is a company with over 13 years of multidisciplinary experience dedicated to delivering strategic solutions in transport, logistics and industrial support. We operate in demanding operational environments such as ports, railways and industries, contributing to the operational continuity, productivity and sustainable growth of our partners.",
    vision: {
      title: "Vision",
      text: "To be a reference in the transport, logistics and industrial services sector, and to contribute to the development of large-scale operations.",
    },
    mission: {
      title: "Mission",
      text: "To develop smart, integrated solutions in transport, logistics, rail-port services and industrial support, tailored to the needs of major operations.",
    },
    values: {
      title: "Values",
      text: "Ensuring operational efficiency, safety and strict compliance with standards, and guaranteeing the reliable, organised execution of every service delivered.",
    },
    skills: [
      { label: "Integrated Logistics", value: 98 },
      { label: "Rail-Port Operations", value: 90 },
      { label: "Stevedoring & Cargo Management", value: 85 },
    ],
  },
  differentials: {
    badge: "Our Services",
    title: "Committed to excellence and results",
    items: {
      experience: {
        title: "Proven Experience",
        desc: "Over 13 years operating in the logistics sector.",
      },
      deadlines: {
        title: "Commitment to Deadlines",
        desc: "Optimised routes and tracking technology for punctuality.",
      },
      transparency: {
        title: "Operational Transparency",
        desc: "Clear communication and full visibility of the operation.",
      },
      safety: {
        title: "Safety & Compliance",
        desc: "High standards reducing risk and ensuring integrity.",
      },
      integrated: {
        title: "Integrated Solutions",
        desc: "Transport, rail-port, stevedoring, stock and supply.",
      },
      clientFocus: {
        title: "Client Focus",
        desc: "Lasting partnerships built on closeness and trust.",
      },
    },
  },
  gallery: {
    badge: "Project Gallery",
    featuredBadge: "Featured Project",
    otherProjectsTitle: "Other Projects",
    closeLabel: "Close",
    prevLabel: "Previous",
    nextLabel: "Next",
    defaultDialogTitle: "Project gallery",
    featured: {
      title: "Operation MICD-001",
      paragraph1:
        "We are proud to share the success of Operation MICD-001, carried out at Maputo Port Berth 7, involving the handling of 3,000 tonnes of rice sacks from the vessel MV ES JASMINE. The operation was conducted with a focus on safety, efficiency and logistics coordination, reinforcing Highlighter Group's commitment to operational excellence.",
      paragraph2:
        "Throughout the operation, 7 trucks were mobilised, carrying out 51 loads, equivalent to the transport of 30,600 sacks of 50 kg rice, totalling 1,530 tonnes moved in this phase of the operation.",
      stats: [
        { value: "7", label: "Trucks mobilised" },
        { value: "51", label: "Loads" },
        { value: "30,600", label: "50 kg rice sacks" },
        { value: "1,530", label: "Tonnes moved" },
      ],
      photosAlt: [
        "Truck being loaded with rice sacks next to the vessel",
        "Loading rice sacks at the Port of Maputo",
        "Night-time loading of rice sacks",
        "Highlighter Group trucks at the Port of Maputo",
      ],
    },
    otherPhotosAlt: [
      "Crane lifting a locomotive aboard a vessel",
      "Locomotive suspended by a heavy-lift crane",
      "Team next to a locomotive being lifted",
      "Rail material transported by truck",
      "Mobile crane next to a bulk carrier",
      "Detail of heavy lifting equipment",
      "Crane component transported on a flatbed truck",
      "Worker next to a Highlighter Group truck",
      "Cargo covered with a tarpaulin at night",
    ],
  },
  trackingTestimonial: {
    badge: "Nationwide coverage",
    title: "Present throughout Mozambique",
    subtitle:
      "From Maputo to Pemba, we connect ports, railways and industries with coordinated operations and full visibility at every stage.",
    cta: "View our services",
    testimonial: {
      quote:
        "Leading large-scale operations requires strategic vision, responsibility and a strong commitment to operational excellence. At Highlighter Group, we believe that success in transport, logistics, rail-port services and industrial solutions is directly linked to efficiency, safety and the ability to adapt to each client's needs. Our focus is to offer smart, reliable and sustainable solutions, contributing to more organised, productive and results-driven operations. We work every day to build solid, lasting partnerships based on trust and the consistent delivery of value.",
      name: "Ednilton Madeira",
      role: "CEO",
    },
  },
  partners: {
    badge: "Partners",
    title: "Who Trusts Us",
    subtitle:
      "We work side by side with leading operators, ports and industries in Mozambique and the SADC region.",
  },
  faq: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    subtitle:
      "Important information about our logistics operations, shipping, delivery and safety.",
    items: [
      [
        "What services does Highlighter offer?",
        "We operate in the transport of general cargo and minerals, rail-port services, stevedoring, stock management, mineral coal supply, equipment rental and specialised labour.",
      ],
      [
        "How can I request a service?",
        "You can contact us via the form, phone or email. After reviewing your needs, we present a proposal tailored to the operation.",
      ],
      [
        "Does the company operate only nationally?",
        "We operate mainly within the country, with the capacity to support regional operations in the SADC region depending on the project.",
      ],
      [
        "How is cargo safety ensured?",
        "We follow strict safety procedures, logistics control and constant supervision at every stage.",
      ],
      [
        "Is it possible to track the operation?",
        "Yes. We maintain continuous communication with the client and provide updates as the operation requires.",
      ],
    ] as [string, string][],
  },
  cta: {
    titleLine1: "Need a more efficient",
    titleHighlight: "and safer operation?",
    paragraph:
      "Highlighter Group offers smart solutions in transport, logistics, and rail-port and industrial services. Talk to us and get a proposal tailored to your operation.",
    emailCta: "Request a quote",
  },
  footer: {
    description:
      "A Mozambican company with over 13 years in integrated, smart logistics.",
    servicesTitle: "Services",
    services: [
      "Port Operations",
      "Stevedoring",
      "Agribusiness",
      "Integrated Logistics",
      "Rail-Port",
    ],
    companyTitle: "Company",
    companyLinks: [
      ["Home", "#top"],
      ["About Us", "#about"],
      ["Services", "#services"],
      ["Contact", "#contact"],
    ] as [string, string][],
    contactsTitle: "Contact",
    addressLine: "Rua 24 de Julho, Q 25, Nº131, Matola City, Mozambique",
    copyrightSuffix: "Logistics, Excellence and Security",
  },
} satisfies typeof pt;

export const translations = { pt, en };
export type Lang = keyof typeof translations;
