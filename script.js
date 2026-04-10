/**
 * AmazÃ´.ia Showcase â€” V42
 * Script principal: i18n trilÃ­ngue, carrossel, accordion, FAQ, Pricing, Typebot Bubble, nav ativa
 */

/* ======================================================
   SISTEMA i18n â€” PT / EN / ES
   ====================================================== */
const translations = {
    pt: {
        // Nav
        "nav.inicio":        "InÃ­cio",
        "nav.beneficios":    "BenefÃ­cios",
        "nav.preco":         "PreÃ§os",
        "nav.metodologia":   "Metodologia",
        "nav.faq":           "FAQ",

        // Hero
        "hero.badge":        "CS Ativo â€” DisponÃ­vel Agora",
        "hero.title":        "ConheÃ§a a AmazÃ´",
        "hero.subtitle":     "A Concierge Digital que qualifica leads, apresenta o Encontro d'Ãgua e converte visitantes em clientes reais â€” com linguagem humana e acessÃ­vel, 24 horas por dia.",
        "hero.cta.primary":  "ðŸ’¬ Conversar com a AmazÃ´",
        "hero.cta.secondary":"ðŸš€ Ver Planos e PreÃ§os",
        "hero.note":         "PortfÃ³lio vivo â€” este Ã© um agente de IA real em produÃ§Ã£o.",
        "hero.card.role":    "SDR & Concierge Digital",
        "hero.card.status":  "Online",

        // Benefits
        "benefits.tag":      "Diferenciais",
        "benefits.title":    "Por que a AmazÃ´?",
        "benefits.desc":     "Mais do que um chatbot â€” uma estratÃ©gia de conversÃ£o inteligente.",
        "benefit.1.title":   "IA com Alma",
        "benefit.1.desc":    "Linguagem humanizada, contextual e adaptada Ã  identidade da sua marca â€” sem respostas robÃ³ticas.",
        "benefit.2.title":   "SDR 24/7",
        "benefit.2.desc":    "Qualifica leads, responde dÃºvidas e inicia o funil de vendas enquanto vocÃª descansa.",
        "benefit.3.title":   "ConversÃ£o Real",
        "benefit.3.desc":    "Leads capturados automaticamente e organizados no CRM, prontos para o time de vendas fechar.",
        "benefit.4.title":   "Identidade Exclusiva",
        "benefit.4.desc":    "Modo Concierge: personagem, tom de voz e regras de negÃ³cio 100% configurados para vocÃª.",
        "benefit.5.title":   "IntegraÃ§Ã£o Total",
        "benefit.5.desc":    "Conecta WhatsApp, CRM, Typebot e Supabase em um ecossistema de automaÃ§Ã£o coeso.",
        "benefit.6.title":   "ROI MensurÃ¡vel",
        "benefit.6.desc":    "Dashboard de performance com mÃ©tricas reais de conversÃ£o para provar o retorno do investimento.",

        // Pricing
        "pricing.tag":           "Oferta de LanÃ§amento",
        "pricing.title":         "A partir de R$ 80",
        "pricing.desc":          "Chatbots de recepÃ§Ã£o, SAC e FAQ para sites â€” sem mensalidades surpresa.",
        "pricing.from":          "A partir de",
        "pricing.period":        "/projeto",
        "pricing.custom":        "Sob consulta",
        "pricing.basic.name":    "Concierge Essencial",
        "pricing.basic.f1":      "âœ… Chatbot de recepÃ§Ã£o para site",
        "pricing.basic.f2":      "âœ… SAC automatizado 24/7",
        "pricing.basic.f3":      "âœ… FAQ interativo",
        "pricing.basic.f4":      "âœ… Identidade e tom de voz do seu negÃ³cio",
        "pricing.basic.f5":      "âœ… Entrega em 5 dias Ãºteis",
        "pricing.cta":           "Ver Planos Completos â†’",
        "pricing.advanced.name": "Concierge AvanÃ§ado",
        "pricing.advanced.f1":   "âœ… Tudo do Essencial",
        "pricing.advanced.f2":   "âš¡ WhatsApp Business integrado",
        "pricing.advanced.f3":   "âš¡ Agendamento automatizado",
        "pricing.advanced.f4":   "âš¡ CRM com pipeline de leads",
        "pricing.advanced.f5":   "âš¡ Multicanal (site + WhatsApp)",
        "pricing.cta.advanced":  "Consulta EstratÃ©gica â†’",
        "pricing.note":          "Funcionalidades avanÃ§adas (WhatsApp, Agendamento, Multicanal, IntegraÃ§Ã£o com CRM) sÃ£o negociadas Ã  parte, dependendo da demanda e complexidade de cada projeto. TransparÃªncia total â€” sem letras miÃºdas.",

        // Presentation
        "presentation.tag":             "EstratÃ©gia",
        "presentation.title":           "Briefing do Projeto",
        "presentation.challenge.title": "O Desafio EstratÃ©gico",
        "presentation.challenge.desc":  "Criar um portfÃ³lio vivo que demonstre a capacidade de automaÃ§Ã£o do Hub. A AmazÃ´ nÃ£o Ã© apenas um chatbot â€” Ã© uma SDR que qualifica leads, apresenta o Link d'Ãgua e converte interessados em clientes reais, usando linguagem humana e acessÃ­vel.",
        "presentation.amazo.title":     "Sobre a AmazÃ´",
        "presentation.amazo.desc":      "Inspirada na forÃ§a da floresta amazÃ´nica, a AmazÃ´ combina a acessibilidade da comunicaÃ§Ã£o popular com a precisÃ£o da tecnologia de ponta. Ela Ã© a ponte entre inovaÃ§Ã£o e humanidade.",
        "presentation.amazo.quote":     "\"Tecnologia que abraÃ§a, nÃ£o que intimida.\"",

        // QA
        "qa.tag":                 "TransparÃªncia",
        "qa.title":               "RelatÃ³rio de QA",
        "qa.desc":                "Resultados reais dos testes de homologaÃ§Ã£o antes do lanÃ§amento oficial.",
        "qa.approved.title":      "Itens Aprovados no Teste",
        "qa.approved.1":          "Identidade visual \"Tech AmazÃ´nico\" (Dark Mode) aplicada com sucesso.",
        "qa.approved.2":          "Fluxo de conversÃ£o (coleta de nome e interesse) 100% funcional.",
        "qa.approved.3":          "Redirecionamento para WhatsApp da CEO/SuperAdmin operacional.",
        "qa.approved.4":          "Bubble chatbot integrado com Ã­cone personalizado da AmazÃ´.",
        "qa.approved.5":          "Sistema multilÃ­ngue (PT/EN/ES) implementado e validado.",
        "qa.monitoring.title":    "Em Monitoramento ContÃ­nuo",
        "qa.monitoring.desc":     "Monitorar a base de conhecimento para incluir detalhes do GuÃA AmazÃ´nico assim que o banco de dados do Supabase for integrado Ã  memÃ³ria de longo prazo do agente.",
        "qa.monitoring.tag":      "ðŸ• PrÃ³xima Sprint â€” V43",
        "qa.tech.title":          "Detalhes TÃ©cnicos da ImplementaÃ§Ã£o",

        // Onboarding
        "onboarding.tag":          "Processo",
        "onboarding.title":        "Processo HeutagÃ³gico de 4 Etapas",
        "onboarding.desc":         "Da ideia ao lanÃ§amento, acompanhado em cada passo.",
        "onboarding.step1.title":  "DiagnÃ³stico e Briefing",
        "onboarding.step1.desc":   "Entendemos sua dor, mapeamos o tempo perdido e desenhamos a personalidade da sua IA â€” com vocÃª.",
        "onboarding.step2.title":  "ImplementaÃ§Ã£o",
        "onboarding.step2.desc":   "Arquitetura ponta a ponta no formato Concierge: IA + CRM + integraÃ§Ãµes configurados para vocÃª.",
        "onboarding.step3.title":  "Provad'Ã¡gua (QA)",
        "onboarding.step3.desc":   "VocÃª testa e valida o fluxo da IA diretamente no seu celular â€” antes do lanÃ§amento oficial.",
        "onboarding.step4.title":  "Showcase e Entrega",
        "onboarding.step4.desc":   "Entrega oficial da sua Concierge Digital + acompanhamento de ROI no primeiro mÃªs.",

        // CTA Final
        "cta.final.title": "Pronto para ter sua prÃ³pria AmazÃ´?",
        "cta.final.desc":  "Cada negÃ³cio merece uma IA com a sua cara. Vamos construir juntos.",
        "cta.final.btn":   "Ver Planos no Hub â†’",
        "cta.final.wa":    "ðŸ’¬ WhatsApp EstratÃ©gico",

        // FAQ
        "faq.title":              "Perguntas Frequentes",
        "faq.desc":               "Tudo que vocÃª precisa saber antes de comeÃ§ar.",
        "faq.pricing.q":          "Quanto custa? Existe plano bÃ¡sico?",
        "faq.pricing.a1":         "Sim! O plano Concierge Essencial comeÃ§a a partir de R$ 80 â€” inclui chatbot de recepÃ§Ã£o, SAC automatizado e FAQ para sites.",
        "faq.pricing.a2":         "Funcionalidades avanÃ§adas como WhatsApp Business, Agendamento, Multicanal e integraÃ§Ã£o com CRM sÃ£o negociadas Ã  parte, com orÃ§amento personalizado por complexidade e demanda. Sem letras miÃºdas.",
        "faq.pricing.link":       "â†’ Ver todos os planos no Hub",
        "faq.cycle.q":            "Como funciona o Ciclo de 5 dias?",
        "faq.cycle.intro":        "Da conversa ao lanÃ§amento em 5 dias Ãºteis. O ciclo Ã© dividido em:",
        "faq.niches.q":           "Quais nichos sÃ£o atendidos?",
        "faq.niches.intro":       "A AmazÃ´ foi arquitetada para 3 categorias estratÃ©gicas:",
        "faq.security.q":         "Como funciona a seguranÃ§a Multi-tenant?",
        "faq.security.intro":     "O sistema garante isolamento completo entre clientes:",
        "faq.security.guarantee": "Garantia: Nenhum dado de um cliente cruza para outro â€” nem via API, nem via interface.",

        // Footer
        "footer.tagline":             "Tecnologia com propÃ³sito. IA com alma.",
        "footer.copy":                "Todos os direitos reservados Â© 2026 | Desenvolvido com â¤ï¸ e biomiÐ¼Ã©tica",
    },

    en: {
        "nav.inicio":        "Home",
        "nav.beneficios":    "Benefits",
        "nav.preco":         "Pricing",
        "nav.metodologia":   "Methodology",
        "nav.faq":           "FAQ",

        "hero.badge":        "CS Active â€” Available Now",
        "hero.title":        "Meet AmazÃ´",
        "hero.subtitle":     "The Digital Concierge that qualifies leads, presents Encontro d'Ãgua and converts visitors into real clients â€” with human, accessible language, 24 hours a day.",
        "hero.cta.primary":  "ðŸ’¬ Chat with AmazÃ´",
        "hero.cta.secondary":"ðŸš€ See Plans & Pricing",
        "hero.note":         "Live portfolio â€” this is a real AI agent in production.",
        "hero.card.role":    "SDR & Digital Concierge",
        "hero.card.status":  "Online",

        "benefits.tag":      "Differentials",
        "benefits.title":    "Why AmazÃ´?",
        "benefits.desc":     "More than a chatbot â€” an intelligent conversion strategy.",
        "benefit.1.title":   "AI with Soul",
        "benefit.1.desc":    "Humanized, contextual language adapted to your brand identity â€” no robotic answers.",
        "benefit.2.title":   "SDR 24/7",
        "benefit.2.desc":    "Qualifies leads, answers questions and starts the sales funnel while you rest.",
        "benefit.3.title":   "Real Conversion",
        "benefit.3.desc":    "Leads automatically captured and organized in the CRM, ready for the sales team to close.",
        "benefit.4.title":   "Exclusive Identity",
        "benefit.4.desc":    "Concierge Mode: character, tone of voice and business rules 100% configured for you.",
        "benefit.5.title":   "Full Integration",
        "benefit.5.desc":    "Connects WhatsApp, CRM, Typebot and Supabase in a cohesive automation ecosystem.",
        "benefit.6.title":   "Measurable ROI",
        "benefit.6.desc":    "Performance dashboard with real conversion metrics to prove your return on investment.",

        "pricing.tag":           "Launch Offer",
        "pricing.title":         "Starting at R$ 80",
        "pricing.desc":          "Reception, support & FAQ chatbots for websites â€” no surprise monthly fees.",
        "pricing.from":          "Starting at",
        "pricing.period":        "/project",
        "pricing.custom":        "Custom quote",
        "pricing.basic.name":    "Essential Concierge",
        "pricing.basic.f1":      "âœ… Reception chatbot for website",
        "pricing.basic.f2":      "âœ… Automated 24/7 support",
        "pricing.basic.f3":      "âœ… Interactive FAQ",
        "pricing.basic.f4":      "âœ… Your brand identity & tone of voice",
        "pricing.basic.f5":      "âœ… Delivery in 5 business days",
        "pricing.cta":           "See Full Plans â†’",
        "pricing.advanced.name": "Advanced Concierge",
        "pricing.advanced.f1":   "âœ… Everything in Essential",
        "pricing.advanced.f2":   "âš¡ WhatsApp Business integrated",
        "pricing.advanced.f3":   "âš¡ Automated scheduling",
        "pricing.advanced.f4":   "âš¡ CRM with lead pipeline",
        "pricing.advanced.f5":   "âš¡ Multichannel (website + WhatsApp)",
        "pricing.cta.advanced":  "Strategic Consultation â†’",
        "pricing.note":          "Advanced features (WhatsApp, Scheduling, Multichannel, CRM Integration) are negotiated separately, depending on demand and project complexity. Full transparency â€” no fine print.",

        "presentation.tag":             "Strategy",
        "presentation.title":           "Project Briefing",
        "presentation.challenge.title": "The Strategic Challenge",
        "presentation.challenge.desc":  "Create a living portfolio that demonstrates the Hub's automation capability. AmazÃ´ is not just a chatbot â€” she is an SDR that qualifies leads, presents Link d'Ãgua and converts prospects into real clients, using human and accessible language.",
        "presentation.amazo.title":     "About AmazÃ´",
        "presentation.amazo.desc":      "Inspired by the strength of the Amazon rainforest, AmazÃ´ combines the accessibility of popular communication with the precision of cutting-edge technology. She is the bridge between innovation and humanity.",
        "presentation.amazo.quote":     "\"Technology that embraces, not intimidates.\"",

        "qa.tag":                 "Transparency",
        "qa.title":               "QA Report",
        "qa.desc":                "Real results from homologation tests before the official launch.",
        "qa.approved.title":      "Approved Items",
        "qa.approved.1":          "\"Tech AmazÃ´nico\" visual identity (Dark Mode) successfully applied.",
        "qa.approved.2":          "Conversion flow (name and interest collection) 100% functional.",
        "qa.approved.3":          "WhatsApp redirect to CEO/SuperAdmin operational.",
        "qa.approved.4":          "Bubble chatbot integrated with custom AmazÃ´ icon.",
        "qa.approved.5":          "Multilingual system (PT/EN/ES) implemented and validated.",
        "qa.monitoring.title":    "Continuous Monitoring",
        "qa.monitoring.desc":     "Monitor the knowledge base to include GuÃA AmazÃ´nico details once the Supabase database is integrated into the agent's long-term memory.",
        "qa.monitoring.tag":      "ðŸ• Next Sprint â€” V43",
        "qa.tech.title":          "Technical Implementation Details",

        "onboarding.tag":          "Process",
        "onboarding.title":        "4-Step Heutagogic Process",
        "onboarding.desc":         "From idea to launch, accompanied at every step.",
        "onboarding.step1.title":  "Diagnosis & Briefing",
        "onboarding.step1.desc":   "We understand your pain, map the time wasted and design your AI's personality â€” with you.",
        "onboarding.step2.title":  "Implementation",
        "onboarding.step2.desc":   "End-to-end architecture in Concierge format: AI + CRM + integrations configured for you.",
        "onboarding.step3.title":  "Provad'Ã¡gua (QA)",
        "onboarding.step3.desc":   "You test and validate the AI flow directly on your phone â€” before the official launch.",
        "onboarding.step4.title":  "Showcase & Delivery",
        "onboarding.step4.desc":   "Official delivery of your Digital Concierge + ROI monitoring for the first month.",

        "cta.final.title": "Ready to have your own AmazÃ´?",
        "cta.final.desc":  "Every business deserves an AI that looks like you. Let's build it together.",
        "cta.final.btn":   "See Plans on Hub â†’",
        "cta.final.wa":    "ðŸ’¬ Strategic WhatsApp",

        "faq.title":              "Frequently Asked Questions",
        "faq.desc":               "Everything you need to know before starting.",
        "faq.pricing.q":          "How much does it cost? Is there a basic plan?",
        "faq.pricing.a1":         "Yes! The Essential Concierge plan starts at R$ 80 â€” includes reception chatbot, automated 24/7 support and FAQ for websites.",
        "faq.pricing.a2":         "Advanced features like WhatsApp Business, Scheduling, Multichannel and CRM integration are negotiated separately, with custom quotes by complexity and demand. No fine print.",
        "faq.pricing.link":       "â†’ See all plans on Hub",
        "faq.cycle.q":            "How does the 5-day Cycle work?",
        "faq.cycle.intro":        "From conversation to launch in 5 business days. The cycle is divided into:",
        "faq.niches.q":           "Which niches are served?",
        "faq.niches.intro":       "AmazÃ´ was architected for 3 strategic categories:",
        "faq.security.q":         "How does Multi-tenant Security work?",
        "faq.security.intro":     "The system ensures complete isolation between clients:",
        "faq.security.guarantee": "Guarantee: No client's data crosses to another â€” neither via API nor interface.",

        "footer.tagline":  "Technology with purpose. AI with soul.",
        "footer.copy":     "All rights reserved Â© 2026 | Built with â¤ï¸ and biomimicry",
    },

    es: {
        "nav.inicio":        "Inicio",
        "nav.beneficios":    "Beneficios",
        "nav.preco":         "Precios",
        "nav.metodologia":   "MetodologÃ­a",
        "nav.faq":           "FAQ",

        "hero.badge":        "CS Activo â€” Disponible Ahora",
        "hero.title":        "Conoce a AmazÃ´",
        "hero.subtitle":     "La Concierge Digital que califica leads, presenta Encontro d'Ãgua y convierte visitantes en clientes reales â€” con lenguaje humano y accesible, 24 horas al dÃ­a.",
        "hero.cta.primary":  "ðŸ’¬ Hablar con AmazÃ´",
        "hero.cta.secondary":"ðŸš€ Ver Planes y Precios",
        "hero.note":         "Portafolio vivo â€” este es un agente de IA real en producciÃ³n.",
        "hero.card.role":    "SDR & Concierge Digital",
        "hero.card.status":  "En lÃ­nea",

        "benefits.tag":      "Diferenciales",
        "benefits.title":    "Â¿Por quÃ© AmazÃ´?",
        "benefits.desc":     "MÃ¡s que un chatbot â€” una estrategia de conversiÃ³n inteligente.",
        "benefit.1.title":   "IA con Alma",
        "benefit.1.desc":    "Lenguaje humanizado, contextual y adaptado a la identidad de tu marca â€” sin respuestas robÃ³ticas.",
        "benefit.2.title":   "SDR 24/7",
        "benefit.2.desc":    "Califica leads, responde preguntas e inicia el embudo de ventas mientras descansas.",
        "benefit.3.title":   "ConversiÃ³n Real",
        "benefit.3.desc":    "Leads capturados automÃ¡ticamente y organizados en el CRM, listos para que el equipo cierre.",
        "benefit.4.title":   "Identidad Exclusiva",
        "benefit.4.desc":    "Modo Concierge: personaje, tono de voz y reglas de negocio 100% configurados para ti.",
        "benefit.5.title":   "IntegraciÃ³n Total",
        "benefit.5.desc":    "Conecta WhatsApp, CRM, Typebot y Supabase en un ecosistema de automatizaciÃ³n cohesivo.",
        "benefit.6.title":   "ROI Medible",
        "benefit.6.desc":    "Dashboard de rendimiento con mÃ©tricas reales de conversiÃ³n para demostrar el retorno de inversiÃ³n.",

        "pricing.tag":           "Oferta de Lanzamiento",
        "pricing.title":         "Desde R$ 80",
        "pricing.desc":          "Chatbots de recepciÃ³n, SAC y FAQ para sitios web â€” sin mensualidades sorpresa.",
        "pricing.from":          "Desde",
        "pricing.period":        "/proyecto",
        "pricing.custom":        "Consultar precio",
        "pricing.basic.name":    "Concierge Esencial",
        "pricing.basic.f1":      "âœ… Chatbot de recepciÃ³n para web",
        "pricing.basic.f2":      "âœ… SAC automatizado 24/7",
        "pricing.basic.f3":      "âœ… FAQ interactivo",
        "pricing.basic.f4":      "âœ… Identidad y tono de voz de tu negocio",
        "pricing.basic.f5":      "âœ… Entrega en 5 dÃ­as hÃ¡biles",
        "pricing.cta":           "Ver Planes Completos â†’",
        "pricing.advanced.name": "Concierge Avanzado",
        "pricing.advanced.f1":   "âœ… Todo del Esencial",
        "pricing.advanced.f2":   "âš¡ WhatsApp Business integrado",
        "pricing.advanced.f3":   "âš¡ Agendamiento automatizado",
        "pricing.advanced.f4":   "âš¡ CRM con pipeline de leads",
        "pricing.advanced.f5":   "âš¡ Multicanal (web + WhatsApp)",
        "pricing.cta.advanced":  "Consulta EstratÃ©gica â†’",
        "pricing.note":          "Funcionalidades avanzadas (WhatsApp, Agendamiento, Multicanal, IntegraciÃ³n CRM) se negocian por separado segÃºn demanda y complejidad. Transparencia total â€” sin letra pequeÃ±a.",

        "presentation.tag":             "Estrategia",
        "presentation.title":           "Briefing del Proyecto",
        "presentation.challenge.title": "El DesafÃ­o EstratÃ©gico",
        "presentation.challenge.desc":  "Crear un portafolio vivo que demuestre la capacidad de automatizaciÃ³n del Hub. AmazÃ´ no es solo un chatbot â€” es una SDR que califica leads y convierte prospectos en clientes reales, usando lenguaje humano y accesible.",
        "presentation.amazo.title":     "Sobre AmazÃ´",
        "presentation.amazo.desc":      "Inspirada en la fuerza de la selva amazÃ³nica, AmazÃ´ combina la accesibilidad de la comunicaciÃ³n popular con la precisiÃ³n de la tecnologÃ­a de vanguardia.",
        "presentation.amazo.quote":     "\"TecnologÃ­a que abraza, no que intimida.\"",

        "qa.tag":                 "Transparencia",
        "qa.title":               "Informe de QA",
        "qa.desc":                "Resultados reales de las pruebas de homologaciÃ³n antes del lanzamiento oficial.",
        "qa.approved.title":      "Ãtems Aprobados",
        "qa.approved.1":          "Identidad visual \"Tech AmazÃ´nico\" (Modo Oscuro) aplicada con Ã©xito.",
        "qa.approved.2":          "Flujo de conversiÃ³n (recopilaciÃ³n de nombre e interÃ©s) 100% funcional.",
        "qa.approved.3":          "RedirecciÃ³n a WhatsApp del CEO/SuperAdmin operacional.",
        "qa.approved.4":          "Bubble chatbot integrado con Ã­cono personalizado de AmazÃ´.",
        "qa.approved.5":          "Sistema multilingÃ¼e (PT/EN/ES) implementado y validado.",
        "qa.monitoring.title":    "En Monitoreo Continuo",
        "qa.monitoring.desc":     "Monitorear la base de conocimiento para incluir detalles del GuÃA AmazÃ´nico una vez que la base de datos de Supabase se integre en la memoria a largo plazo del agente.",
        "qa.monitoring.tag":      "ðŸ• PrÃ³ximo Sprint â€” V43",
        "qa.tech.title":          "Detalles TÃ©cnicos de la ImplementaciÃ³n",

        "onboarding.tag":          "Proceso",
        "onboarding.title":        "Proceso HeutagÃ³gico de 4 Etapas",
        "onboarding.desc":         "De la idea al lanzamiento, acompaÃ±ado en cada paso.",
        "onboarding.step1.title":  "DiagnÃ³stico y Briefing",
        "onboarding.step1.desc":   "Entendemos tu dolor, mapeamos el tiempo perdido y diseÃ±amos la personalidad de tu IA â€” contigo.",
        "onboarding.step2.title":  "ImplementaciÃ³n",
        "onboarding.step2.desc":   "Arquitectura de punta a punta en formato Concierge: IA + CRM + integraciones configurados para ti.",
        "onboarding.step3.title":  "Provad'Ã¡gua (QA)",
        "onboarding.step3.desc":   "Pruebas y validas el flujo de IA directamente en tu telÃ©fono â€” antes del lanzamiento oficial.",
        "onboarding.step4.title":  "Showcase y Entrega",
        "onboarding.step4.desc":   "Entrega oficial de tu Concierge Digital + seguimiento de ROI durante el primer mes.",

        "cta.final.title": "Â¿Listo para tener tu propia AmazÃ´?",
        "cta.final.desc":  "Cada negocio merece una IA con tu cara. Construyamos juntos.",
        "cta.final.btn":   "Ver Planes en Hub â†’",
        "cta.final.wa":    "ðŸ’¬ WhatsApp EstratÃ©gico",

        "faq.title":              "Preguntas Frecuentes",
        "faq.desc":               "Todo lo que necesitas saber antes de comenzar.",
        "faq.pricing.q":          "Â¿CuÃ¡nto cuesta? Â¿Hay plan bÃ¡sico?",
        "faq.pricing.a1":         "Â¡SÃ­! El plan Concierge Esencial comienza desde R$ 80 â€” incluye chatbot de recepciÃ³n, SAC automatizado y FAQ para sitios web.",
        "faq.pricing.a2":         "Funcionalidades avanzadas como WhatsApp Business, Agendamiento, Multicanal e integraciÃ³n CRM se negocian por separado, con presupuesto personalizado. Sin letra pequeÃ±a.",
        "faq.pricing.link":       "â†’ Ver todos los planes en Hub",
        "faq.cycle.q":            "Â¿CÃ³mo funciona el Ciclo de 5 dÃ­as?",
        "faq.cycle.intro":        "De la conversaciÃ³n al lanzamiento en 5 dÃ­as hÃ¡biles. El ciclo se divide en:",
        "faq.niches.q":           "Â¿QuÃ© nichos se atienden?",
        "faq.niches.intro":       "AmazÃ´ fue arquitectada para 3 categorÃ­as estratÃ©gicas:",
        "faq.security.q":         "Â¿CÃ³mo funciona la seguridad Multi-tenant?",
        "faq.security.intro":     "El sistema garantiza aislamiento completo entre clientes:",
        "faq.security.guarantee": "GarantÃ­a: NingÃºn dato de un cliente cruza hacia otro â€” ni vÃ­a API ni interfaz.",

        "footer.tagline":  "TecnologÃ­a con propÃ³sito. IA con alma.",
        "footer.copy":     "Todos los derechos reservados Â© 2026 | Desarrollado con â¤ï¸ y biomimÃ©tica",
    }
};


/* â”€â”€ Estado atual do idioma â”€â”€ */
        "benefits.title":    "Por que a AmazÃ´?",
        "benefits.desc":     "Mais do que um chatbot â€” uma estratÃ©gia de conversÃ£o inteligente.",
        "benefit.1.title":   "IA com Alma",
        "benefit.1.desc":    "Linguagem humanizada, contextual e adaptada Ã  identidade da sua marca â€” sem respostas robÃ³ticas.",
        "benefit.2.title":   "SDR 24/7",
        "benefit.2.desc":    "Qualifica leads, responde dÃºvidas e inicia o funil de vendas enquanto vocÃª descansa.",
        "benefit.3.title":   "ConversÃ£o Real",
        "benefit.3.desc":    "Leads capturados automaticamente e organizados no CRM, prontos para o time de vendas fechar.",
        "benefit.4.title":   "Identidade Exclusiva",
        "benefit.4.desc":    "Modo Concierge: personagem, tom de voz e regras de negÃ³cio 100% configurados para vocÃª.",
        "benefit.5.title":   "IntegraÃ§Ã£o Total",
        "benefit.5.desc":    "Conecta WhatsApp, CRM, Typebot e Supabase em um ecossistema de automaÃ§Ã£o coeso.",
        "benefit.6.title":   "ROI MensurÃ¡vel",
        "benefit.6.desc":    "Dashboard de performance com mÃ©tricas reais de conversÃ£o para provar o retorno do investimento.",

        // Presentation
        "presentation.tag":             "EstratÃ©gia",
        "presentation.title":           "Briefing do Projeto",
        "presentation.challenge.title": "O Desafio EstratÃ©gico",
        "presentation.challenge.desc":  "Criar um portfÃ³lio vivo que demonstre a capacidade de automaÃ§Ã£o do Hub. A AmazÃ´ nÃ£o Ã© apenas um chatbot â€” Ã© uma SDR que qualifica leads, apresenta o Link d'Ãgua e converte interessados em clientes reais, usando linguagem humana e acessÃ­vel.",
        "presentation.amazo.title":     "Sobre a AmazÃ´",
        "presentation.amazo.desc":      "Inspirada na forÃ§a da floresta amazÃ´nica, a AmazÃ´ combina a acessibilidade da comunicaÃ§Ã£o popular com a precisÃ£o da tecnologia de ponta. Ela Ã© a ponte entre inovaÃ§Ã£o e humanidade.",
        "presentation.amazo.quote":     "\"Tecnologia que abraÃ§a, nÃ£o que intimida.\"",

        // QA
        "qa.tag":                 "TransparÃªncia",
        "qa.title":               "RelatÃ³rio de QA",
        "qa.desc":                "Resultados reais dos testes de homologaÃ§Ã£o antes do lanÃ§amento oficial.",
        "qa.approved.title":      "Itens Aprovados no Teste",
        "qa.approved.1":          "Identidade visual \"Tech AmazÃ´nico\" (Dark Mode) aplicada com sucesso.",
        "qa.approved.2":          "Fluxo de conversÃ£o (coleta de nome e interesse) 100% funcional.",
        "qa.approved.3":          "Redirecionamento para WhatsApp da CEO/SuperAdmin operacional.",
        "qa.approved.4":          "Bubble chatbot integrado com Ã­cone personalizado da AmazÃ´.",
        "qa.approved.5":          "Sistema multilÃ­ngue (PT/EN/ES) implementado e validado.",
        "qa.monitoring.title":    "Em Monitoramento ContÃ­nuo",
        "qa.monitoring.desc":     "Monitorar a base de conhecimento para incluir detalhes do GuIA AmazÃ´nico assim que o banco de dados do Supabase for integrado Ã  memÃ³ria de longo prazo do agente.",
        "qa.monitoring.tag":      "ðŸ• PrÃ³xima Sprint â€” V35",
        "qa.tech.title":          "Detalhes TÃ©cnicos da ImplementaÃ§Ã£o",

        // Onboarding
        "onboarding.tag":          "Processo",
        "onboarding.title":        "Processo HeutagÃ³gico de 4 Etapas",
        "onboarding.desc":         "Da ideia ao lanÃ§amento, acompanhado em cada passo.",
        "onboarding.step1.title":  "DiagnÃ³stico e Briefing",
        "onboarding.step1.desc":   "Entendemos sua dor, mapeamos o tempo perdido e desenhamos a personalidade da sua IA â€” com vocÃª.",
        "onboarding.step2.title":  "ImplementaÃ§Ã£o",
        "onboarding.step2.desc":   "Arquitetura ponta a ponta no formato Concierge: IA + CRM + integraÃ§Ãµes configurados para vocÃª.",
        "onboarding.step3.title":  "Provad'Ã¡gua (QA)",
        "onboarding.step3.desc":   "VocÃª testa e valida o fluxo da IA diretamente no seu celular â€” antes do lanÃ§amento oficial.",
        "onboarding.step4.title":  "Showcase e Entrega",
        "onboarding.step4.desc":   "Entrega oficial da sua Concierge Digital + acompanhamento de ROI no primeiro mÃªs.",

        // CTA Final
        "cta.final.title": "Pronto para ter sua prÃ³pria AmazÃ´?",
        "cta.final.desc":  "Cada negÃ³cio merece uma IA com a sua cara. Vamos construir juntos.",
        "cta.final.btn":   "Iniciar meu Projeto â†’",

        // Footer
        "footer.tagline":             "Tecnologia com propÃ³sito. IA com alma.",
        "footer.transparency.label":  "Nota de TransparÃªncia:",
        "footer.transparency.text":   "Este projeto foi idealizado, arquitetado e validado por LÃ­di Moura. A IA foi utilizada como suporte de pair programming para acelerar o cÃ³digo, enquanto a gestÃ£o tÃ©cnica e as integraÃ§Ãµes permanecem sob aprendizado contÃ­nuo (Heutagogia) em Data Science.",
    },

    en: {
        "nav.inicio":        "Home",
        "nav.beneficios":    "Benefits",
        "nav.briefing":      "Briefing",
        "nav.qa":            "QA",
        "nav.metodologia":   "Methodology",

        "hero.badge":        "CS Active â€” Available Now",
        "hero.title":        "Meet AmazÃ´",
        "hero.subtitle":     "The Digital Concierge that qualifies leads, presents Encontro d'Ãgua and converts visitors into real clients â€” with human, accessible language, 24 hours a day.",
        "hero.cta.primary":  "ðŸ’¬ Chat with AmazÃ´",
        "hero.cta.secondary":"ðŸ“‹ Service Catalog",
        "hero.note":         "Live portfolio â€” this is a real AI agent in production.",
        "hero.card.role":    "SDR & Digital Concierge",
        "hero.card.status":  "Online",

        "benefits.tag":      "Differentials",
        "benefits.title":    "Why AmazÃ´?",
        "benefits.desc":     "More than a chatbot â€” an intelligent conversion strategy.",
        "benefit.1.title":   "AI with Soul",
        "benefit.1.desc":    "Humanized, contextual language adapted to your brand identity â€” no robotic answers.",
        "benefit.2.title":   "SDR 24/7",
        "benefit.2.desc":    "Qualifies leads, answers questions and starts the sales funnel while you rest.",
        "benefit.3.title":   "Real Conversion",
        "benefit.3.desc":    "Leads automatically captured and organized in the CRM, ready for the sales team to close.",
        "benefit.4.title":   "Exclusive Identity",
        "benefit.4.desc":    "Concierge Mode: character, tone of voice and business rules 100% configured for you.",
        "benefit.5.title":   "Full Integration",
        "benefit.5.desc":    "Connects WhatsApp, CRM, Typebot and Supabase in a cohesive automation ecosystem.",
        "benefit.6.title":   "Measurable ROI",
        "benefit.6.desc":    "Performance dashboard with real conversion metrics to prove your return on investment.",

        "presentation.tag":             "Strategy",
        "presentation.title":           "Project Briefing",
        "presentation.challenge.title": "The Strategic Challenge",
        "presentation.challenge.desc":  "Create a living portfolio that demonstrates the Hub's automation capability. AmazÃ´ is not just a chatbot â€” she is an SDR that qualifies leads, presents Link d'Ãgua and converts prospects into real clients, using human and accessible language.",
        "presentation.amazo.title":     "About AmazÃ´",
        "presentation.amazo.desc":      "Inspired by the strength of the Amazon rainforest, AmazÃ´ combines the accessibility of popular communication with the precision of cutting-edge technology. She is the bridge between innovation and humanity.",
        "presentation.amazo.quote":     "\"Technology that embraces, not intimidates.\"",

        "qa.tag":                 "Transparency",
        "qa.title":               "QA Report",
        "qa.desc":                "Real results from homologation tests before the official launch.",
        "qa.approved.title":      "Approved Items",
        "qa.approved.1":          "\"Tech AmazÃ´nico\" visual identity (Dark Mode) successfully applied.",
        "qa.approved.2":          "Conversion flow (name and interest collection) 100% functional.",
        "qa.approved.3":          "WhatsApp redirect to CEO/SuperAdmin operational.",
        "qa.approved.4":          "Bubble chatbot integrated with custom AmazÃ´ icon.",
        "qa.approved.5":          "Multilingual system (PT/EN/ES) implemented and validated.",
        "qa.monitoring.title":    "Continuous Monitoring",
        "qa.monitoring.desc":     "Monitor the knowledge base to include GuIA AmazÃ´nico details once the Supabase database is integrated into the agent's long-term memory.",
        "qa.monitoring.tag":      "ðŸ• Next Sprint â€” V35",
        "qa.tech.title":          "Technical Implementation Details",

        "onboarding.tag":          "Process",
        "onboarding.title":        "4-Step Heutagogic Process",
        "onboarding.desc":         "From idea to launch, accompanied at every step.",
        "onboarding.step1.title":  "Diagnosis & Briefing",
        "onboarding.step1.desc":   "We understand your pain, map the time wasted and design your AI's personality â€” with you.",
        "onboarding.step2.title":  "Implementation",
        "onboarding.step2.desc":   "End-to-end architecture in Concierge format: AI + CRM + integrations configured for you.",
        "onboarding.step3.title":  "Provad'Ã¡gua (QA)",
        "onboarding.step3.desc":   "You test and validate the AI flow directly on your phone â€” before the official launch.",
        "onboarding.step4.title":  "Showcase & Delivery",
        "onboarding.step4.desc":   "Official delivery of your Digital Concierge + ROI monitoring for the first month.",

        "cta.final.title": "Ready to have your own AmazÃ´?",
        "cta.final.desc":  "Every business deserves an AI that looks like you. Let's build it together.",
        "cta.final.btn":   "Start my Project â†’",

        "footer.tagline":             "Technology with purpose. AI with soul.",
        "footer.transparency.label":  "Transparency Note:",
        "footer.transparency.text":   "This project was idealized, architected and validated by LÃ­di Moura. AI was used as pair programming support to accelerate the code, while technical management and integrations remain under continuous learning (Heutagogy) in Data Science.",
    },

    es: {
        "nav.inicio":        "Inicio",
        "nav.beneficios":    "Beneficios",
        "nav.briefing":      "Briefing",
        "nav.qa":            "QA",
        "nav.metodologia":   "MetodologÃ­a",

        "hero.badge":        "CS Activo â€” Disponible Ahora",
        "hero.title":        "Conoce a AmazÃ´",
        "hero.subtitle":     "La Concierge Digital que califica leads, presenta Encontro d'Ãgua y convierte visitantes en clientes reales â€” con lenguaje humano y accesible, 24 horas al dÃ­a.",
        "hero.cta.primary":  "ðŸ’¬ Hablar con AmazÃ´",
        "hero.cta.secondary":"ðŸ“‹ CatÃ¡logo de Servicios",
        "hero.note":         "Portafolio vivo â€” este es un agente de IA real en producciÃ³n.",
        "hero.card.role":    "SDR & Concierge Digital",
        "hero.card.status":  "En lÃ­nea",

        "benefits.tag":      "Diferenciales",
        "benefits.title":    "Â¿Por quÃ© AmazÃ´?",
        "benefits.desc":     "MÃ¡s que un chatbot â€” una estrategia de conversiÃ³n inteligente.",
        "benefit.1.title":   "IA con Alma",
        "benefit.1.desc":    "Lenguaje humanizado, contextual y adaptado a la identidad de tu marca â€” sin respuestas robÃ³ticas.",
        "benefit.2.title":   "SDR 24/7",
        "benefit.2.desc":    "Califica leads, responde preguntas e inicia el embudo de ventas mientras descansas.",
        "benefit.3.title":   "ConversiÃ³n Real",
        "benefit.3.desc":    "Leads capturados automÃ¡ticamente y organizados en el CRM, listos para que el equipo cierre.",
        "benefit.4.title":   "Identidad Exclusiva",
        "benefit.4.desc":    "Modo Concierge: personaje, tono de voz y reglas de negocio 100% configurados para ti.",
        "benefit.5.title":   "IntegraciÃ³n Total",
        "benefit.5.desc":    "Conecta WhatsApp, CRM, Typebot y Supabase en un ecosistema de automatizaciÃ³n cohesivo.",
        "benefit.6.title":   "ROI Medible",
        "benefit.6.desc":    "Dashboard de rendimiento con mÃ©tricas reales de conversiÃ³n para demostrar el retorno de inversiÃ³n.",

        "presentation.tag":             "Estrategia",
        "presentation.title":           "Briefing del Proyecto",
        "presentation.challenge.title": "El DesafÃ­o EstratÃ©gico",
        "presentation.challenge.desc":  "Crear un portafolio vivo que demuestre la capacidad de automatizaciÃ³n del Hub. AmazÃ´ no es solo un chatbot â€” es una SDR que califica leads y convierte prospectos en clientes reales, usando lenguaje humano y accesible.",
        "presentation.amazo.title":     "Sobre AmazÃ´",
        "presentation.amazo.desc":      "Inspirada en la fuerza de la selva amazÃ³nica, AmazÃ´ combina la accesibilidad de la comunicaciÃ³n popular con la precisiÃ³n de la tecnologÃ­a de vanguardia.",
        "presentation.amazo.quote":     "\"TecnologÃ­a que abraza, no que intimida.\"",

        "qa.tag":                 "Transparencia",
        "qa.title":               "Informe de QA",
        "qa.desc":                "Resultados reales de las pruebas de homologaciÃ³n antes del lanzamiento oficial.",
        "qa.approved.title":      "Ãtems Aprobados",
        "qa.approved.1":          "Identidad visual \"Tech AmazÃ´nico\" (Modo Oscuro) aplicada con Ã©xito.",
        "qa.approved.2":          "Flujo de conversiÃ³n (recopilaciÃ³n de nombre e interÃ©s) 100% funcional.",
        "qa.approved.3":          "RedirecciÃ³n a WhatsApp del CEO/SuperAdmin operacional.",
        "qa.approved.4":          "Bubble chatbot integrado con Ã­cono personalizado de AmazÃ´.",
        "qa.approved.5":          "Sistema multilingÃ¼e (PT/EN/ES) implementado y validado.",
        "qa.monitoring.title":    "En Monitoreo Continuo",
        "qa.monitoring.desc":     "Monitorear la base de conocimiento para incluir detalles del GuIA AmazÃ´nico una vez que la base de datos de Supabase se integre en la memoria a largo plazo del agente.",
        "qa.monitoring.tag":      "ðŸ• PrÃ³ximo Sprint â€” V35",
        "qa.tech.title":          "Detalles TÃ©cnicos de la ImplementaciÃ³n",

        "onboarding.tag":          "Proceso",
        "onboarding.title":        "Proceso HeutagÃ³gico de 4 Etapas",
        "onboarding.desc":         "De la idea al lanzamiento, acompaÃ±ado en cada paso.",
        "onboarding.step1.title":  "DiagnÃ³stico y Briefing",
        "onboarding.step1.desc":   "Entendemos tu dolor, mapeamos el tiempo perdido y diseÃ±amos la personalidad de tu IA â€” contigo.",
        "onboarding.step2.title":  "ImplementaciÃ³n",
        "onboarding.step2.desc":   "Arquitectura de punta a punta en formato Concierge: IA + CRM + integraciones configurados para ti.",
        "onboarding.step3.title":  "Provad'Ã¡gua (QA)",
        "onboarding.step3.desc":   "Pruebas y validas el flujo de IA directamente en tu telÃ©fono â€” antes del lanzamiento oficial.",
        "onboarding.step4.title":  "Showcase y Entrega",
        "onboarding.step4.desc":   "Entrega oficial de tu Concierge Digital + seguimiento de ROI durante el primer mes.",

        "cta.final.title": "Â¿Listo para tener tu propia AmazÃ´?",
        "cta.final.desc":  "Cada negocio merece una IA con tu cara. Construyamos juntos.",
        "cta.final.btn":   "Iniciar mi Proyecto â†’",

        "footer.tagline":             "TecnologÃ­a con propÃ³sito. IA con alma.",
        "footer.transparency.label":  "Nota de Transparencia:",
        "footer.transparency.text":   "Este proyecto fue ideado, arquitectado y validado por LÃ­di Moura. La IA fue utilizada como soporte de pair programming para acelerar el cÃ³digo, mientras la gestiÃ³n tÃ©cnica y las integraciones permanecen bajo aprendizaje continuo (HeutagogÃ­a) en Data Science.",
    }
};

/* â”€â”€ Estado atual do idioma â”€â”€ */
let currentLang = localStorage.getItem('amazo-lang') || detectBrowserLang();

function detectBrowserLang() {
    const nav = navigator.language || 'pt';
    if (nav.startsWith('es')) return 'es';
    if (nav.startsWith('en')) return 'en';
    return 'pt';
}

function setLang(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem('amazo-lang', lang);

    // Atualizar atributo html
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-BR' : lang);
    document.documentElement.setAttribute('data-lang', lang);

    // Aplicar traduÃ§Ãµes
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key] !== undefined) {
            el.textContent = translations[lang][key];
        }
    });

    // Atualizar botÃµes de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

/* ======================================================
   CARROSSEL
   ====================================================== */
function initCarousel() {
    const track       = document.getElementById('carouselTrack');
    const dotsWrapper = document.getElementById('carouselDots');
    const prevBtn     = document.getElementById('prevBtn');
    const nextBtn     = document.getElementById('nextBtn');
    if (!track) return;

    const slides      = track.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    let current       = 0;
    let autoId        = null;
    let touchStartX   = 0;
    let visibles      = getVisible();

    function getVisible() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    }

    /* Criar dots */
    function buildDots() {
        dotsWrapper.innerHTML = '';
        const pages = Math.ceil(totalSlides / visibles);
        for (let i = 0; i < pages; i++) {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', `Slide ${i + 1}`);
            dot.addEventListener('click', () => goTo(i * visibles));
            dotsWrapper.appendChild(dot);
        }
    }

    function updateDots() {
        const dots  = dotsWrapper.querySelectorAll('.carousel-dot');
        const page  = Math.floor(current / visibles);
        dots.forEach((d, i) => d.classList.toggle('active', i === page));
    }

    function goTo(index) {
        const max = totalSlides - visibles;
        current = Math.max(0, Math.min(index, max));
        const slideW  = slides[0].getBoundingClientRect().width;
        const gap     = parseFloat(getComputedStyle(track).gap) || 24;
        const offset  = current * (slideW + gap);
        track.style.transform = `translateX(-${offset}px)`;
        updateDots();
        prevBtn.disabled = current === 0;
        nextBtn.disabled = current >= max;
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startAuto() {
        stopAuto();
        autoId = setInterval(() => {
            if (current >= totalSlides - visibles) goTo(0);
            else next();
        }, 5000);
    }
    function stopAuto() { clearInterval(autoId); }

    prevBtn.addEventListener('click', () => { prev(); stopAuto(); startAuto(); });
    nextBtn.addEventListener('click', () => { next(); stopAuto(); startAuto(); });

    /* Touch / Swipe */
    track.parentElement.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
        stopAuto();
    }, { passive: true });
    track.parentElement.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
        startAuto();
    });

    /* Keyboard */
    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') { prev(); stopAuto(); startAuto(); }
        if (e.key === 'ArrowRight') { next(); stopAuto(); startAuto(); }
    });

    /* Resize */
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const newVis = getVisible();
            if (newVis !== visibles) {
                visibles = newVis;
                buildDots();
                goTo(0);
            }
        }, 200);
    });

    buildDots();
    goTo(0);
    startAuto();

    /* Pause on hover */
    document.querySelector('.carousel-container')?.addEventListener('mouseenter', stopAuto);
    document.querySelector('.carousel-container')?.addEventListener('mouseleave', startAuto);
}

/* ======================================================
   HAMBURGER MENU
   ====================================================== */
function initHamburger() {
    const btn = document.getElementById('hamburger');
    const nav = document.getElementById('main-nav');
    if (!btn || !nav) return;

    btn.addEventListener('click', () => {
        const open = nav.classList.toggle('open');
        btn.classList.toggle('open', open);
        btn.setAttribute('aria-expanded', open);
    });

    // Fechar ao clicar no link
    nav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            nav.classList.remove('open');
            btn.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        });
    });

    // Fechar ao clicar fora
    document.addEventListener('click', e => {
        if (!btn.contains(e.target) && !nav.contains(e.target)) {
            nav.classList.remove('open');
            btn.classList.remove('open');
        }
    });
}

/* ======================================================
   FADE-IN COM INTERSECTION OBSERVER
   ====================================================== */
function initFadeIn() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { root: null, threshold: 0.08 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

/* ======================================================
   HEADER SCROLLED STATE
   ====================================================== */
function initScrollHeader() {
    const header = document.querySelector('.main-header');
    if (!header) return;
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

/* ======================================================
   NAV ATIVA (SCROLL SPY)
   ====================================================== */
function initNavSpy() {
    const navLinks = document.querySelectorAll('#main-nav a');
    const sections = [...navLinks]
        .map(a => document.querySelector(a.getAttribute('href')))
        .filter(Boolean);

    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(a => {
                    a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { root: null, rootMargin: `-${60}px 0px -40% 0px` });

    sections.forEach(s => obs.observe(s));
}

/* ======================================================
   SMOOTH SCROLL (LINKS DE NAV)
   ====================================================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = document.querySelector('.main-header')?.offsetHeight || 70;
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.scrollY - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ======================================================
   TYPEBOT BUBBLE (CS ATIVO) â€” FIX V39
   ====================================================== */
function initTypebotBubble() {
    // Injetar CSS de visibilidade forÃ§ada antes mesmo do script carregar
    const forceStyle = document.createElement('style');
    forceStyle.id = 'typebot-force-visible';
    forceStyle.textContent = [
        'typebot-bubble,',
        'typebot-bubble > *,',
        'typebot-bubble::part(bubble-button),',
        '#typebot-bubble-button,',
        '.typebot-button {',
        '    z-index: 2147483647 !important;',
        '    display: block !important;',
        '    opacity: 1 !important;',
        '    visibility: visible !important;',
        '    pointer-events: auto !important;',
        '}'
    ].join('\n');
    document.head.appendChild(forceStyle);

    // Carregar o Typebot como mÃ³dulo ES
    const script = document.createElement('script');
    script.type = 'module';
    script.textContent = `
import Typebot from 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0/dist/web.js';

Typebot.initBubble({
  typebot: "template-chatbot-amazo-landigpage",
  theme: {
    button: {
      backgroundColor: "#c878ff",
      customIconSrc: "https://s3.typebot.io/public/workspaces/cmcppn5am0002jx04z0h8go9a/typebots/al5llo2evf2ahjg5u4valfnc/bubble-icon?v=1774872970028",
    },
    chatWindow: { backgroundColor: "#F8F8F8" },
  },
  previewMessage: {
    message: "OlÃ¡! Sou a AmazÃ´ ðŸŒ¿ Posso te ajudar?",
    autoShowDelay: 4000,
    avatarUrl: "./assets/amazo.jpeg",
  },
});

// Expor instÃ¢ncia no window para os CTAs poderem abrir
window.__TypebotInstance = Typebot;
`;
    document.body.appendChild(script);

    // BotÃ£o Hero: abrir bubble
    document.getElementById('btnChat')?.addEventListener('click', () => {
        // Tentar via instÃ¢ncia exposta ou via elemento DOM nativo
        if (window.__TypebotInstance?.open) {
            window.__TypebotInstance.open();
        } else {
            // Fallback: simular clique no botÃ£o nativo do Typebot
            const bubble = document.querySelector('typebot-bubble');
            const btn = bubble?.shadowRoot?.querySelector('button') ||
                        document.querySelector('#typebot-bubble-button') ||
                        document.querySelector('.typebot-button');
            btn?.click();
        }
    });
    // btnChatFinal agora Ã© um <a> para WhatsApp â€” nenhuma acao necessÃ¡ria aqui
}

/* ======================================================
   INIT PRINCIPAL
   ====================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // i18n: aplicar idioma inicial
    setLang(currentLang);

    // Seletor de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
    });

    // MÃ³dulos
    initFadeIn();
    initHamburger();
    initScrollHeader();
    initNavSpy();
    initSmoothScroll();
    initCarousel();
    initTypebotBubble();
});
