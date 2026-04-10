/**
 * Amazô.ia Showcase — V42
 * Script principal: i18n trilíngue, carrossel, accordion, FAQ, Pricing, Typebot Bubble, nav ativa
 */

/* ======================================================
   SISTEMA i18n — PT / EN / ES
   ====================================================== */
const translations = {
    pt: {
        // Nav
        "nav.inicio":        "Início",
        "nav.beneficios":    "Benefícios",
        "nav.preco":         "Preços",
        "nav.metodologia":   "Metodologia",
        "nav.faq":           "FAQ",

        // Hero
        "hero.badge":        "CS Ativo — Disponível Agora",
        "hero.title":        "Conheça a Amazô",
        "hero.subtitle":     "A Concierge Digital que qualifica leads, apresenta o Encontro d'Água e converte visitantes em clientes reais — com linguagem humana e acessível, 24 horas por dia.",
        "hero.cta.primary":  "💬 Conversar com a Amazô",
        "hero.cta.secondary":"🚀 Ver Planos e Preços",
        "hero.note":         "Portfólio vivo — este é um agente de IA real em produção.",
        "hero.card.role":    "SDR & Concierge Digital",
        "hero.card.status":  "Online",

        // Benefits
        "benefits.tag":      "Diferenciais",
        "benefits.title":    "Por que a Amazô?",
        "benefits.desc":     "Mais do que um chatbot — uma estratégia de conversão inteligente.",
        "benefit.1.title":   "IA com Alma",
        "benefit.1.desc":    "Linguagem humanizada, contextual e adaptada à identidade da sua marca — sem respostas robóticas.",
        "benefit.2.title":   "SDR 24/7",
        "benefit.2.desc":    "Qualifica leads, responde dúvidas e inicia o funil de vendas enquanto você descansa.",
        "benefit.3.title":   "Conversão Real",
        "benefit.3.desc":    "Leads capturados automaticamente e organizados no CRM, prontos para o time de vendas fechar.",
        "benefit.4.title":   "Identidade Exclusiva",
        "benefit.4.desc":    "Modo Concierge: personagem, tom de voz e regras de negócio 100% configurados para você.",
        "benefit.5.title":   "Integração Total",
        "benefit.5.desc":    "Conecta WhatsApp, CRM, Typebot e Supabase em um ecossistema de automação coeso.",
        "benefit.6.title":   "ROI Mensurável",
        "benefit.6.desc":    "Dashboard de performance com métricas reais de conversão para provar o retorno do investimento.",

        // Pricing
        "pricing.tag":           "Oferta de Lançamento",
        "pricing.title":         "A partir de R$ 80",
        "pricing.desc":          "Chatbots de recepção, SAC e FAQ para sites — sem mensalidades surpresa.",
        "pricing.from":          "A partir de",
        "pricing.period":        "/projeto",
        "pricing.custom":        "Sob consulta",
        "pricing.basic.name":    "Concierge Essencial",
        "pricing.basic.f1":      "✅ Chatbot de recepção para site",
        "pricing.basic.f2":      "✅ SAC automatizado 24/7",
        "pricing.basic.f3":      "✅ FAQ interativo",
        "pricing.basic.f4":      "✅ Identidade e tom de voz do seu negócio",
        "pricing.basic.f5":      "✅ Entrega em 5 dias úteis",
        "pricing.cta":           "Ver Planos Completos →",
        "pricing.advanced.name": "Concierge Avançado",
        "pricing.advanced.f1":   "✅ Tudo do Essencial",
        "pricing.advanced.f2":   "⚡ WhatsApp Business integrado",
        "pricing.advanced.f3":   "⚡ Agendamento automatizado",
        "pricing.advanced.f4":   "⚡ CRM com pipeline de leads",
        "pricing.advanced.f5":   "⚡ Multicanal (site + WhatsApp)",
        "pricing.cta.advanced":  "Consulta Estratégica →",
        "pricing.note":          "Funcionalidades avançadas (WhatsApp, Agendamento, Multicanal, Integração com CRM) são negociadas à parte, dependendo da demanda e complexidade de cada projeto. Transparência total — sem letras miúdas.",

        // Presentation
        "presentation.tag":             "Estratégia",
        "presentation.title":           "Briefing do Projeto",
        "presentation.challenge.title": "O Desafio Estratégico",
        "presentation.challenge.desc":  "Criar um portfólio vivo que demonstre a capacidade de automação do Hub. A Amazô não é apenas um chatbot — é uma SDR que qualifica leads, apresenta o Link d'Água e converte interessados em clientes reais, usando linguagem humana e acessível.",
        "presentation.amazo.title":     "Sobre a Amazô",
        "presentation.amazo.desc":      "Inspirada na força da floresta amazônica, a Amazô combina a acessibilidade da comunicação popular com a precisão da tecnologia de ponta. Ela é a ponte entre inovação e humanidade.",
        "presentation.amazo.quote":     "\"Tecnologia que abraça, não que intimida.\"",

        // QA
        "qa.tag":                 "Transparência",
        "qa.title":               "Relatório de QA",
        "qa.desc":                "Resultados reais dos testes de homologação antes do lançamento oficial.",
        "qa.approved.title":      "Itens Aprovados no Teste",
        "qa.approved.1":          "Identidade visual \"Tech Amazônico\" (Dark Mode) aplicada com sucesso.",
        "qa.approved.2":          "Fluxo de conversão (coleta de nome e interesse) 100% funcional.",
        "qa.approved.3":          "Redirecionamento para WhatsApp da CEO/SuperAdmin operacional.",
        "qa.approved.4":          "Bubble chatbot integrado com ícone personalizado da Amazô.",
        "qa.approved.5":          "Sistema multilíngue (PT/EN/ES) implementado e validado.",
        "qa.monitoring.title":    "Em Monitoramento Contínuo",
        "qa.monitoring.desc":     "Monitorar a base de conhecimento para incluir detalhes do GuÍA Amazônico assim que o banco de dados do Supabase for integrado à memória de longo prazo do agente.",
        "qa.monitoring.tag":      "🕐 Próxima Sprint — V43",
        "qa.tech.title":          "Detalhes Técnicos da Implementação",

        // Onboarding
        "onboarding.tag":          "Processo",
        "onboarding.title":        "Processo Heutagógico de 4 Etapas",
        "onboarding.desc":         "Da ideia ao lançamento, acompanhado em cada passo.",
        "onboarding.step1.title":  "Diagnóstico e Briefing",
        "onboarding.step1.desc":   "Entendemos sua dor, mapeamos o tempo perdido e desenhamos a personalidade da sua IA — com você.",
        "onboarding.step2.title":  "Implementação",
        "onboarding.step2.desc":   "Arquitetura ponta a ponta no formato Concierge: IA + CRM + integrações configurados para você.",
        "onboarding.step3.title":  "Provad'água (QA)",
        "onboarding.step3.desc":   "Você testa e valida o fluxo da IA diretamente no seu celular — antes do lançamento oficial.",
        "onboarding.step4.title":  "Showcase e Entrega",
        "onboarding.step4.desc":   "Entrega oficial da sua Concierge Digital + acompanhamento de ROI no primeiro mês.",

        // CTA Final
        "cta.final.title": "Pronto para ter sua própria Amazô?",
        "cta.final.desc":  "Cada negócio merece uma IA com a sua cara. Vamos construir juntos.",
        "cta.final.btn":   "Ver Planos no Hub →",
        "cta.final.wa":    "💬 WhatsApp Estratégico",

        // FAQ
        "faq.title":              "Perguntas Frequentes",
        "faq.desc":               "Tudo que você precisa saber antes de começar.",
        "faq.pricing.q":          "Quanto custa? Existe plano básico?",
        "faq.pricing.a1":         "Sim! O plano Concierge Essencial começa a partir de R$ 80 — inclui chatbot de recepção, SAC automatizado e FAQ para sites.",
        "faq.pricing.a2":         "Funcionalidades avançadas como WhatsApp Business, Agendamento, Multicanal e integração com CRM são negociadas à parte, com orçamento personalizado por complexidade e demanda. Sem letras miúdas.",
        "faq.pricing.link":       "→ Ver todos os planos no Hub",
        "faq.cycle.q":            "Como funciona o Ciclo de 5 dias?",
        "faq.cycle.intro":        "Da conversa ao lançamento em 5 dias úteis. O ciclo é dividido em:",
        "faq.niches.q":           "Quais nichos são atendidos?",
        "faq.niches.intro":       "A Amazô foi arquitetada para 3 categorias estratégicas:",
        "faq.security.q":         "Como funciona a segurança Multi-tenant?",
        "faq.security.intro":     "O sistema garante isolamento completo entre clientes:",
        "faq.security.guarantee": "Garantia: Nenhum dado de um cliente cruza para outro — nem via API, nem via interface.",

        // Footer
        "footer.tagline":             "Tecnologia com propósito. IA com alma.",
        "footer.copy":                "Todos os direitos reservados © 2026 | Desenvolvido com ❤️ e biomimética",
    },

    en: {
        "nav.inicio":        "Home",
        "nav.beneficios":    "Benefits",
        "nav.preco":         "Pricing",
        "nav.metodologia":   "Methodology",
        "nav.faq":           "FAQ",

        "hero.badge":        "CS Active — Available Now",
        "hero.title":        "Meet Amazô",
        "hero.subtitle":     "The Digital Concierge that qualifies leads, presents Encontro d'Água and converts visitors into real clients — with human, accessible language, 24 hours a day.",
        "hero.cta.primary":  "💬 Chat with Amazô",
        "hero.cta.secondary":"🚀 See Plans & Pricing",
        "hero.note":         "Live portfolio — this is a real AI agent in production.",
        "hero.card.role":    "SDR & Digital Concierge",
        "hero.card.status":  "Online",

        "benefits.tag":      "Differentials",
        "benefits.title":    "Why Amazô?",
        "benefits.desc":     "More than a chatbot — an intelligent conversion strategy.",
        "benefit.1.title":   "AI with Soul",
        "benefit.1.desc":    "Humanized, contextual language adapted to your brand identity — no robotic answers.",
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
        "pricing.desc":          "Reception, support & FAQ chatbots for websites — no surprise monthly fees.",
        "pricing.from":          "Starting at",
        "pricing.period":        "/project",
        "pricing.custom":        "Custom quote",
        "pricing.basic.name":    "Essential Concierge",
        "pricing.basic.f1":      "✅ Reception chatbot for website",
        "pricing.basic.f2":      "✅ Automated 24/7 support",
        "pricing.basic.f3":      "✅ Interactive FAQ",
        "pricing.basic.f4":      "✅ Your brand identity & tone of voice",
        "pricing.basic.f5":      "✅ Delivery in 5 business days",
        "pricing.cta":           "See Full Plans →",
        "pricing.advanced.name": "Advanced Concierge",
        "pricing.advanced.f1":   "✅ Everything in Essential",
        "pricing.advanced.f2":   "⚡ WhatsApp Business integrated",
        "pricing.advanced.f3":   "⚡ Automated scheduling",
        "pricing.advanced.f4":   "⚡ CRM with lead pipeline",
        "pricing.advanced.f5":   "⚡ Multichannel (website + WhatsApp)",
        "pricing.cta.advanced":  "Strategic Consultation →",
        "pricing.note":          "Advanced features (WhatsApp, Scheduling, Multichannel, CRM Integration) are negotiated separately, depending on demand and project complexity. Full transparency — no fine print.",

        "presentation.tag":             "Strategy",
        "presentation.title":           "Project Briefing",
        "presentation.challenge.title": "The Strategic Challenge",
        "presentation.challenge.desc":  "Create a living portfolio that demonstrates the Hub's automation capability. Amazô is not just a chatbot — she is an SDR that qualifies leads, presents Link d'Água and converts prospects into real clients, using human and accessible language.",
        "presentation.amazo.title":     "About Amazô",
        "presentation.amazo.desc":      "Inspired by the strength of the Amazon rainforest, Amazô combines the accessibility of popular communication with the precision of cutting-edge technology. She is the bridge between innovation and humanity.",
        "presentation.amazo.quote":     "\"Technology that embraces, not intimidates.\"",

        "qa.tag":                 "Transparency",
        "qa.title":               "QA Report",
        "qa.desc":                "Real results from homologation tests before the official launch.",
        "qa.approved.title":      "Approved Items",
        "qa.approved.1":          "\"Tech Amazônico\" visual identity (Dark Mode) successfully applied.",
        "qa.approved.2":          "Conversion flow (name and interest collection) 100% functional.",
        "qa.approved.3":          "WhatsApp redirect to CEO/SuperAdmin operational.",
        "qa.approved.4":          "Bubble chatbot integrated with custom Amazô icon.",
        "qa.approved.5":          "Multilingual system (PT/EN/ES) implemented and validated.",
        "qa.monitoring.title":    "Continuous Monitoring",
        "qa.monitoring.desc":     "Monitor the knowledge base to include GuÍA Amazônico details once the Supabase database is integrated into the agent's long-term memory.",
        "qa.monitoring.tag":      "🕐 Next Sprint — V43",
        "qa.tech.title":          "Technical Implementation Details",

        "onboarding.tag":          "Process",
        "onboarding.title":        "4-Step Heutagogic Process",
        "onboarding.desc":         "From idea to launch, accompanied at every step.",
        "onboarding.step1.title":  "Diagnosis & Briefing",
        "onboarding.step1.desc":   "We understand your pain, map the time wasted and design your AI's personality — with you.",
        "onboarding.step2.title":  "Implementation",
        "onboarding.step2.desc":   "End-to-end architecture in Concierge format: AI + CRM + integrations configured for you.",
        "onboarding.step3.title":  "Provad'água (QA)",
        "onboarding.step3.desc":   "You test and validate the AI flow directly on your phone — before the official launch.",
        "onboarding.step4.title":  "Showcase & Delivery",
        "onboarding.step4.desc":   "Official delivery of your Digital Concierge + ROI monitoring for the first month.",

        "cta.final.title": "Ready to have your own Amazô?",
        "cta.final.desc":  "Every business deserves an AI that looks like you. Let's build it together.",
        "cta.final.btn":   "See Plans on Hub →",
        "cta.final.wa":    "💬 Strategic WhatsApp",

        "faq.title":              "Frequently Asked Questions",
        "faq.desc":               "Everything you need to know before starting.",
        "faq.pricing.q":          "How much does it cost? Is there a basic plan?",
        "faq.pricing.a1":         "Yes! The Essential Concierge plan starts at R$ 80 — includes reception chatbot, automated 24/7 support and FAQ for websites.",
        "faq.pricing.a2":         "Advanced features like WhatsApp Business, Scheduling, Multichannel and CRM integration are negotiated separately, with custom quotes by complexity and demand. No fine print.",
        "faq.pricing.link":       "→ See all plans on Hub",
        "faq.cycle.q":            "How does the 5-day Cycle work?",
        "faq.cycle.intro":        "From conversation to launch in 5 business days. The cycle is divided into:",
        "faq.niches.q":           "Which niches are served?",
        "faq.niches.intro":       "Amazô was architected for 3 strategic categories:",
        "faq.security.q":         "How does Multi-tenant Security work?",
        "faq.security.intro":     "The system ensures complete isolation between clients:",
        "faq.security.guarantee": "Guarantee: No client's data crosses to another — neither via API nor interface.",

        "footer.tagline":  "Technology with purpose. AI with soul.",
        "footer.copy":     "All rights reserved © 2026 | Built with ❤️ and biomimicry",
    },

    es: {
        "nav.inicio":        "Inicio",
        "nav.beneficios":    "Beneficios",
        "nav.preco":         "Precios",
        "nav.metodologia":   "Metodología",
        "nav.faq":           "FAQ",

        "hero.badge":        "CS Activo — Disponible Ahora",
        "hero.title":        "Conoce a Amazô",
        "hero.subtitle":     "La Concierge Digital que califica leads, presenta Encontro d'Água y convierte visitantes en clientes reales — con lenguaje humano y accesible, 24 horas al día.",
        "hero.cta.primary":  "💬 Hablar con Amazô",
        "hero.cta.secondary":"🚀 Ver Planes y Precios",
        "hero.note":         "Portafolio vivo — este es un agente de IA real en producción.",
        "hero.card.role":    "SDR & Concierge Digital",
        "hero.card.status":  "En línea",

        "benefits.tag":      "Diferenciales",
        "benefits.title":    "¿Por qué Amazô?",
        "benefits.desc":     "Más que un chatbot — una estrategia de conversión inteligente.",
        "benefit.1.title":   "IA con Alma",
        "benefit.1.desc":    "Lenguaje humanizado, contextual y adaptado a la identidad de tu marca — sin respuestas robóticas.",
        "benefit.2.title":   "SDR 24/7",
        "benefit.2.desc":    "Califica leads, responde preguntas e inicia el embudo de ventas mientras descansas.",
        "benefit.3.title":   "Conversión Real",
        "benefit.3.desc":    "Leads capturados automáticamente y organizados en el CRM, listos para que el equipo cierre.",
        "benefit.4.title":   "Identidad Exclusiva",
        "benefit.4.desc":    "Modo Concierge: personaje, tono de voz y reglas de negocio 100% configurados para ti.",
        "benefit.5.title":   "Integración Total",
        "benefit.5.desc":    "Conecta WhatsApp, CRM, Typebot y Supabase en un ecosistema de automatización cohesivo.",
        "benefit.6.title":   "ROI Medible",
        "benefit.6.desc":    "Dashboard de rendimiento con métricas reales de conversión para demostrar el retorno de inversión.",

        "pricing.tag":           "Oferta de Lanzamiento",
        "pricing.title":         "Desde R$ 80",
        "pricing.desc":          "Chatbots de recepción, SAC y FAQ para sitios web — sin mensualidades sorpresa.",
        "pricing.from":          "Desde",
        "pricing.period":        "/proyecto",
        "pricing.custom":        "Consultar precio",
        "pricing.basic.name":    "Concierge Esencial",
        "pricing.basic.f1":      "✅ Chatbot de recepción para web",
        "pricing.basic.f2":      "✅ SAC automatizado 24/7",
        "pricing.basic.f3":      "✅ FAQ interactivo",
        "pricing.basic.f4":      "✅ Identidad y tono de voz de tu negocio",
        "pricing.basic.f5":      "✅ Entrega en 5 días hábiles",
        "pricing.cta":           "Ver Planes Completos →",
        "pricing.advanced.name": "Concierge Avanzado",
        "pricing.advanced.f1":   "✅ Todo del Esencial",
        "pricing.advanced.f2":   "⚡ WhatsApp Business integrado",
        "pricing.advanced.f3":   "⚡ Agendamiento automatizado",
        "pricing.advanced.f4":   "⚡ CRM con pipeline de leads",
        "pricing.advanced.f5":   "⚡ Multicanal (web + WhatsApp)",
        "pricing.cta.advanced":  "Consulta Estratégica →",
        "pricing.note":          "Funcionalidades avanzadas (WhatsApp, Agendamiento, Multicanal, Integración CRM) se negocian por separado según demanda y complejidad. Transparencia total — sin letra pequeña.",

        "presentation.tag":             "Estrategia",
        "presentation.title":           "Briefing del Proyecto",
        "presentation.challenge.title": "El Desafío Estratégico",
        "presentation.challenge.desc":  "Crear un portafolio vivo que demuestre la capacidad de automatización del Hub. Amazô no es solo un chatbot — es una SDR que califica leads y convierte prospectos en clientes reales, usando lenguaje humano y accesible.",
        "presentation.amazo.title":     "Sobre Amazô",
        "presentation.amazo.desc":      "Inspirada en la fuerza de la selva amazónica, Amazô combina la accesibilidad de la comunicación popular con la precisión de la tecnología de vanguardia.",
        "presentation.amazo.quote":     "\"Tecnología que abraza, no que intimida.\"",

        "qa.tag":                 "Transparencia",
        "qa.title":               "Informe de QA",
        "qa.desc":                "Resultados reales de las pruebas de homologación antes del lanzamiento oficial.",
        "qa.approved.title":      "Ítems Aprobados",
        "qa.approved.1":          "Identidad visual \"Tech Amazônico\" (Modo Oscuro) aplicada con éxito.",
        "qa.approved.2":          "Flujo de conversión (recopilación de nombre e interés) 100% funcional.",
        "qa.approved.3":          "Redirección a WhatsApp del CEO/SuperAdmin operacional.",
        "qa.approved.4":          "Bubble chatbot integrado con ícono personalizado de Amazô.",
        "qa.approved.5":          "Sistema multilingüe (PT/EN/ES) implementado y validado.",
        "qa.monitoring.title":    "En Monitoreo Continuo",
        "qa.monitoring.desc":     "Monitorear la base de conocimiento para incluir detalles del GuÍA Amazônico una vez que la base de datos de Supabase se integre en la memoria a largo plazo del agente.",
        "qa.monitoring.tag":      "🕐 Próximo Sprint — V43",
        "qa.tech.title":          "Detalles Técnicos de la Implementación",

        "onboarding.tag":          "Proceso",
        "onboarding.title":        "Proceso Heutagógico de 4 Etapas",
        "onboarding.desc":         "De la idea al lanzamiento, acompañado en cada paso.",
        "onboarding.step1.title":  "Diagnóstico y Briefing",
        "onboarding.step1.desc":   "Entendemos tu dolor, mapeamos el tiempo perdido y diseñamos la personalidad de tu IA — contigo.",
        "onboarding.step2.title":  "Implementación",
        "onboarding.step2.desc":   "Arquitectura de punta a punta en formato Concierge: IA + CRM + integraciones configurados para ti.",
        "onboarding.step3.title":  "Provad'água (QA)",
        "onboarding.step3.desc":   "Pruebas y validas el flujo de IA directamente en tu teléfono — antes del lanzamiento oficial.",
        "onboarding.step4.title":  "Showcase y Entrega",
        "onboarding.step4.desc":   "Entrega oficial de tu Concierge Digital + seguimiento de ROI durante el primer mes.",

        "cta.final.title": "¿Listo para tener tu propia Amazô?",
        "cta.final.desc":  "Cada negocio merece una IA con tu cara. Construyamos juntos.",
        "cta.final.btn":   "Ver Planes en Hub →",
        "cta.final.wa":    "💬 WhatsApp Estratégico",

        "faq.title":              "Preguntas Frecuentes",
        "faq.desc":               "Todo lo que necesitas saber antes de comenzar.",
        "faq.pricing.q":          "¿Cuánto cuesta? ¿Hay plan básico?",
        "faq.pricing.a1":         "¡Sí! El plan Concierge Esencial comienza desde R$ 80 — incluye chatbot de recepción, SAC automatizado y FAQ para sitios web.",
        "faq.pricing.a2":         "Funcionalidades avanzadas como WhatsApp Business, Agendamiento, Multicanal e integración CRM se negocian por separado, con presupuesto personalizado. Sin letra pequeña.",
        "faq.pricing.link":       "→ Ver todos los planes en Hub",
        "faq.cycle.q":            "¿Cómo funciona el Ciclo de 5 días?",
        "faq.cycle.intro":        "De la conversación al lanzamiento en 5 días hábiles. El ciclo se divide en:",
        "faq.niches.q":           "¿Qué nichos se atienden?",
        "faq.niches.intro":       "Amazô fue arquitectada para 3 categorías estratégicas:",
        "faq.security.q":         "¿Cómo funciona la seguridad Multi-tenant?",
        "faq.security.intro":     "El sistema garantiza aislamiento completo entre clientes:",
        "faq.security.guarantee": "Garantía: Ningún dato de un cliente cruza hacia otro — ni vía API ni interfaz.",

        "footer.tagline":  "Tecnología con propósito. IA con alma.",
        "footer.copy":     "Todos los derechos reservados © 2026 | Desarrollado con ❤️ y biomimética",
    }
};

/* ── Estado atual do idioma ── */
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

    // Aplicar traduções
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key] !== undefined) {
            el.textContent = translations[lang][key];
        }
    });

    // Atualizar botões de idioma
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
   TYPEBOT BUBBLE (CS ATIVO) — FIX V39
   ====================================================== */
function initTypebotBubble() {
    // Injetar CSS de visibilidade forçada antes mesmo do script carregar
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

    // Carregar o Typebot como módulo ES
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
    message: "Olá! Sou a Amazô 🌿 Posso te ajudar?",
    autoShowDelay: 4000,
    avatarUrl: "./assets/amazo.jpeg",
  },
});

// Expor instância no window para os CTAs poderem abrir
window.__TypebotInstance = Typebot;
`;
    document.body.appendChild(script);

    // Botão Hero: abrir bubble
    document.getElementById('btnChat')?.addEventListener('click', () => {
        // Tentar via instância exposta ou via elemento DOM nativo
        if (window.__TypebotInstance?.open) {
            window.__TypebotInstance.open();
        } else {
            // Fallback: simular clique no botão nativo do Typebot
            const bubble = document.querySelector('typebot-bubble');
            const btn = bubble?.shadowRoot?.querySelector('button') ||
                        document.querySelector('#typebot-bubble-button') ||
                        document.querySelector('.typebot-button');
            btn?.click();
        }
    });
    // btnChatFinal agora é um <a> para WhatsApp — nenhuma acao necessária aqui
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

    // Módulos
    initFadeIn();
    initHamburger();
    initScrollHeader();
    initNavSpy();
    initSmoothScroll();
    initCarousel();
    initTypebotBubble();
});
