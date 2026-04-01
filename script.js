/* ============================================================
   ENCONTRO D'ÁGUA HUB — Showcase Script
   i18n: PT 🇧🇷 | EN 🇺🇸 | ES 🇪🇸  +  Fade-in & UX
   ============================================================ */

/* ---------- TRANSLATIONS ---------- */
const T = {
  pt: {
    'nav.home':'Início','nav.briefing':'Briefing','nav.ecosystem':'Ecossistema',
    'nav.features':'Recursos','nav.methodology':'Metodologia','nav.ethics':'Ética',
    'hero.badge':'Certified Solution · Build Estável',
    'hero.tagline':'<em>O portfólio vivo do Encontro d\'Água Hub.</em> Conheça a Amazô, nossa IA-SDR que qualifica leads, apresenta o Link d\'Água e converte interessados em clientes — com linguagem humana, acessível e 100% personalizada.',
    'hero.sub':'Sistema trilíngue ativo: PT · EN · ES — Showcase global pronto para parceiros internacionais.',
    'hero.btn.chat':'🤖 Falar com a Amazô','hero.btn.catalog':'🌐 Catálogo do Hub','hero.btn.link':'🔗 Link d\'Água',
    'hero.architect':'👩‍💻 Arquitetado por',
    'briefing.h2':'🌿 Briefing Estratégico','briefing.h3':'O Desafio Estratégico',
    'briefing.p':'Criar um portfólio vivo que demonstre a capacidade de automação e IA do Hub. <strong>Lídi Moura</strong>, Dev e Arquiteta Manauara nascida em Manaus (AM), lidera este projeto inspirado na natureza amazônica: <em>abundância sem desperdício</em>. A Amazô não é um chatbot genérico — é uma <strong>SDR digital</strong> que qualifica leads, apresenta o Link d\'Água e converte interessados em clientes reais.',
    'bio.1.h4':'🌊 Abundância','bio.1.p':'Soluções completas, generosas e escaláveis — nada é entregue incompleto.',
    'bio.2.h4':'♻️ Zero Desperdício','bio.2.p':'Cada hora de trabalho vira produto, documentação e legado para o cliente.',
    'bio.3.h4':'🌱 Regeneração','bio.3.p':'Tecnologia que cresce junto com quem usa — o cliente evolui com a ferramenta.',
    'bio.4.h4':'🧠 Heutagogia','bio.4.p':'Aprendizado autodirigido. A própria Lídi é o produto mais fiel da metodologia.',
    'eco.h2':'🔗 Ecossistema Hub',
    'eco.ld.h3':'Link d\'Água — SaaS com QR Code Dinâmico e Permanente',
    'eco.ld.p':'O <strong>Link d\'Água</strong> oferece <strong>QR Code Dinâmico e Permanente</strong>: o código é impresso uma vez e vale para sempre — o destino pode ser atualizado a qualquer momento. <em>Infinitas Possibilidades</em> em um único QR.',
    'eco.ld.btn':'🔗 Acessar Link d\'Água',
    'eco.crm.h3':'CRM IA-First — Gestão Inteligente de Leads',
    'eco.crm.p1':'A Amazô é a <strong>fronteira de entrada</strong> do CRM IA-First do Hub. Tudo que ela captura alimenta o pipeline automaticamente — Kanban em tempo real, follow-up automático via WhatsApp e dados persistidos no Supabase.',
    'eco.crm.p2':'Acesse o ambiente de QA e validação do Showcase:',
    'eco.crm.btn':'🔬 Ambiente CRM (QA/Validação)',
    'eco.c1.h4':'📲 QR Code Dinâmico','eco.c1.p':'O QR nunca muda. O destino sim. Atualizável a qualquer momento sem reimprimir.',
    'eco.c2.h4':'♾️ Permanente & Escalável','eco.c2.p':'Impresso uma vez, válido para sempre. Infinitas possibilidades de uso.',
    'eco.c3.h4':'🤖 CRM IA-First','eco.c3.p':'Qualificação automática, Kanban, follow-up e analytics — tudo integrado.',
    'eco.c4.h4':'💬 WhatsApp Integrado','eco.c4.p':'CTA direto para conversão — da captura ao fechamento sem fricção.',
    'feat.h2':'✨ Recursos da Amazô',
    'feat.1.h4':'🤝 Integração Humano-IA','feat.1.p':'Transição suave da IA para o WhatsApp humano — sem atritos, sem frustração.',
    'feat.2.h4':'🧩 Compreensão Contextual','feat.2.p':'Agente adaptativo — entende o contexto real, não segue roteiro engessado.',
    'feat.3.h4':'🎩 Modo Concierge','feat.3.p':'Identidade, regras de negócio e tom de voz configurados 100% para a sua marca.',
    'feat.4.h4':'🕐 Recepção & SAC 24/7','feat.4.p':'Disponível a qualquer hora, em qualquer dispositivo, em qualquer idioma.',
    'feat.5.h4':'📈 SDR Digital','feat.5.p':'Qualifica o lead antes da passagem para o fechamento humano — ROI maximizado.',
    'feat.6.h4':'🎨 Design Tech Amazônico','feat.6.p':'Dark mode com paleta Rio Negro, Açaí Neon e Dourado Solimões — identidade única.',
    'prova.h2':'⏱️ Metodologia Prova d\'Água','prova.intro.h3':'Do Diagnóstico ao Showcase em 5 Dias',
    'prova.intro.p':'A <strong>Prova d\'Água</strong> é a metodologia proprietária do Hub: em <strong>5 dias</strong>, o cliente tem uma demo funcional entregue via Showcase Web para QA/Validação, antes de qualquer compromisso de longo prazo.',
    'prova.1.h4':'Dia 1 — Diagnóstico & Briefing','prova.1.p':'Entendemos sua dor, o tempo que você perde e mapeamos a personalidade da sua IA. Dor → Oportunidade.',
    'prova.2.h4':'Dia 2 — Implementação','prova.2.p':'Construímos a arquitetura de ponta a ponta no formato <strong>Modo Concierge</strong> (Feito para Você).',
    'prova.3.h4':'Dia 3 — Prova d\'Água (QA Interno)','prova.3.p':'Você testa e valida o fluxo da IA diretamente no seu celular. Nada vai ao ar sem aprovação.',
    'prova.4.h4':'Dia 4 — Showcase Web (Entrega)','prova.4.p':'Demo funcional entregue ao cliente/PO via <strong>Showcase Web</strong> — canal público de QA e validação.',
    'prova.5.h4':'Dia 5 — Deploy & ROI','prova.5.p':'Entrega oficial da sua Concierge Digital e início do acompanhamento de ROI.',
    'prova.h.h4':'🧠 Heutagogia em Ação','prova.h.p':'O cliente não apenas recebe o produto — ele <em>entende</em> o que foi construído, por quê funciona e como evoluir. Aprendizado autodirigido integrado à entrega.',
    'qa.h2':'✅ Análise de Qualidade (QA)','qa.main.h3':'✅ Resultado Geral: APROVADO — Prova d\'Água Concluída',
    'qa.main.p':'Os testes de homologação demonstram que a Amazô cumpre seu papel de SDR, capturando dados e conduzindo a venda com precisão. O Showcase entregue é a evidência pública e rastreável da qualidade.',
    'qa.ok.h4':'✅ Aprovado',
    'qa.li1':'Identidade visual "Tech Amazônico" (Dark Mode + Glassmorphism)','qa.li2':'Fluxo de conversão — captura de nome e interesse funcional',
    'qa.li3':'Redirecionamento para WhatsApp da CEO/SuperAdmin operacional','qa.li4':'Responsividade: desktop, tablet e mobile',
    'qa.li5':'Performance: Intersection Observer e lazy loading ativos','qa.li6':'Acessibilidade: ARIA labels e navegação por teclado',
    'qa.li7':'Internacionalização: PT/EN/ES com Language Switcher dinâmico',
    'qa.mon.h4':'🔄 Em Monitoramento','qa.mon.p':'Base de conhecimento Supabase em expansão contínua. Dashboard analytics em roadmap.',
    'etica.h2':'⚖️ Ética & Negócio',
    'etica.1.h4':'🤝 Sinal dos 50% — Troca Justa','etica.1.p':'O Hub opera sob o princípio da <strong>Troca Justa</strong>: o cliente recebe valor proporcional ao investimento. Sem exploração de nenhuma das partes. Negócio justo é negócio sustentável.',
    'etica.2.h4':'💚 Desconto Social — Até 60%','etica.2.p':'Para ONGs, projetos sociais e empreendedores periféricos, o Hub aplica <strong>desconto social de até 60%</strong>. Tecnologia que liberta não pode ser barrada por preço.',
    'etica.3.h4':'🕊️ Neutralidade Política & Ética','etica.3.p':'O Hub é <strong>politicamente neutro</strong> e eticamente comprometido. Não atende projetos que promovam discriminação ou desinformação. IA como aliada do humano — nunca como instrumento de controle.',
    'etica.4.h4':'🔍 Transparência Total','etica.4.p':'Código aberto no GitHub, metodologia documentada publicamente, preços e descontos declarados. Sem caixa-preta, sem promessas vazias.',
    'footer.note':'<strong>Nota de Transparência & Heutagogia:</strong> Este projeto foi idealizado, arquitetado e validado por <a href="https://www.linkedin.com/in/lidimoura/" target="_blank" rel="noopener noreferrer"><strong>Lídi Moura</strong></a>, Dev & Arquiteta Manauara. A IA foi utilizada como suporte de <em>pair programming</em> para acelerar o código, enquanto a gestão técnica, as integrações e o direcionamento estratégico permanecem sob meu aprendizado contínuo (<strong>Heutagogia</strong>) em Data Science e Automação.',
    'footer.copy':'Todos os direitos reservados © 2026 | Desenvolvido com ❤️ e biomimética',
  },
  en: {
    'nav.home':'Home','nav.briefing':'Briefing','nav.ecosystem':'Ecosystem',
    'nav.features':'Features','nav.methodology':'Methodology','nav.ethics':'Ethics',
    'hero.badge':'Certified Solution · Stable Build',
    'hero.tagline':'<em>The living portfolio of Encontro d\'Água Hub.</em> Meet Amazô, our AI-SDR that qualifies leads, presents Link d\'Água and converts prospects into real clients — with human, accessible, and 100% personalized language.',
    'hero.sub':'Full trilingual system active: PT · EN · ES — Global showcase ready for international partners.',
    'hero.btn.chat':'🤖 Talk to Amazô','hero.btn.catalog':'🌐 Hub Catalog','hero.btn.link':'🔗 Link d\'Água',
    'hero.architect':'👩‍💻 Architected by',
    'briefing.h2':'🌿 Strategic Briefing','briefing.h3':'The Strategic Challenge',
    'briefing.p':'Build a living portfolio demonstrating the Hub\'s AI and automation capabilities. <strong>Lídi Moura</strong>, developer and solutions architect born in Manaus (AM), heart of the Brazilian Amazon, leads this biomimetic project: <em>technology inspired by the forest — abundant, waste-free, regenerative</em>. Amazô is not a generic chatbot — she is a <strong>digital SDR</strong> that qualifies leads, presents Link d\'Água, and converts prospects into real clients.',
    'bio.1.h4':'🌊 Abundance','bio.1.p':'Complete, generous, and scalable solutions — nothing is delivered incomplete.',
    'bio.2.h4':'♻️ Zero Waste','bio.2.p':'Every working hour becomes a product, documentation, and legacy for the client.',
    'bio.3.h4':'🌱 Regeneration','bio.3.p':'Technology that grows with its users — the client evolves alongside the tool.',
    'bio.4.h4':'🧠 Heutagogy','bio.4.p':'Self-directed learning. Lídi herself is the most faithful product of this methodology.',
    'eco.h2':'🔗 Hub Ecosystem',
    'eco.ld.h3':'Link d\'Água — SaaS with Dynamic & Permanent QR Code',
    'eco.ld.p':'<strong>Link d\'Água</strong> offers a <strong>Dynamic and Permanent QR Code</strong>: print once, valid forever — the destination can be updated at any time. <em>Infinite Possibilities</em> in a single QR.',
    'eco.ld.btn':'🔗 Access Link d\'Água',
    'eco.crm.h3':'IA-First CRM — Intelligent Lead Management',
    'eco.crm.p1':'Amazô is the <strong>entry point</strong> of the Hub\'s IA-First CRM. Everything she captures automatically feeds the pipeline — real-time Kanban, automatic WhatsApp follow-up, and data persisted in Supabase.',
    'eco.crm.p2':'Access the Showcase QA and validation environment:',
    'eco.crm.btn':'🔬 CRM Environment (QA/Validation)',
    'eco.c1.h4':'📲 Dynamic QR Code','eco.c1.p':'The QR never changes. The destination does. Updatable anytime without reprinting.',
    'eco.c2.h4':'♾️ Permanent & Scalable','eco.c2.p':'Printed once, valid forever. Infinite possibilities of use.',
    'eco.c3.h4':'🤖 IA-First CRM','eco.c3.p':'Automatic qualification, Kanban, follow-up and analytics — all integrated.',
    'eco.c4.h4':'💬 WhatsApp Integrated','eco.c4.p':'Direct CTA for conversion — from capture to close with zero friction.',
    'feat.h2':'✨ Amazô Features',
    'feat.1.h4':'🤝 Human-AI Integration','feat.1.p':'Smooth transition from AI to human WhatsApp — no friction, no frustration.',
    'feat.2.h4':'🧩 Contextual Understanding','feat.2.p':'Adaptive agent — understands real context, doesn\'t follow a rigid script.',
    'feat.3.h4':'🎩 Concierge Mode','feat.3.p':'Identity, business rules, and tone of voice configured 100% for your brand.',
    'feat.4.h4':'🕐 Reception & Support 24/7','feat.4.p':'Available at any time, on any device, in any language.',
    'feat.5.h4':'📈 Digital SDR','feat.5.p':'Qualifies the lead before handoff to human closing — ROI maximized.',
    'feat.6.h4':'🎨 Amazonian Tech Design','feat.6.p':'Dark mode with Rio Negro, Açaí Neon and Solimões Gold palette — unique identity.',
    'prova.h2':'⏱️ Prova d\'Água Methodology','prova.intro.h3':'From Diagnosis to Showcase in 5 Days',
    'prova.intro.p':'<strong>Prova d\'Água</strong> is the Hub\'s proprietary methodology: in <strong>5 days</strong>, the client receives a functional demo delivered via Web Showcase for QA/Validation, before any long-term commitment.',
    'prova.1.h4':'Day 1 — Diagnosis & Briefing','prova.1.p':'We understand your pain, the time you lose, and map the personality of your AI. Pain → Opportunity.',
    'prova.2.h4':'Day 2 — Implementation','prova.2.p':'We build the end-to-end architecture in <strong>Concierge Mode</strong> format (Made for You).',
    'prova.3.h4':'Day 3 — Prova d\'Água (Internal QA)','prova.3.p':'You test and validate the AI flow directly on your phone. Nothing goes live without your approval.',
    'prova.4.h4':'Day 4 — Web Showcase (Delivery)','prova.4.p':'Functional demo delivered to the client/PO via <strong>Web Showcase</strong> — public QA and validation channel.',
    'prova.5.h4':'Day 5 — Deploy & ROI','prova.5.p':'Official delivery of your Digital Concierge and start of ROI tracking.',
    'prova.h.h4':'🧠 Heutagogy in Action','prova.h.p':'The client doesn\'t just receive the product — they <em>understand</em> what was built, why it works, and how to evolve it. Self-directed learning integrated into delivery.',
    'qa.h2':'✅ Quality Analysis (QA)','qa.main.h3':'✅ Overall Result: APPROVED — Prova d\'Água Complete',
    'qa.main.p':'Homologation tests demonstrate that Amazô fulfills her SDR role, capturing data and guiding the sale with precision. The delivered Showcase is the public and traceable evidence of quality.',
    'qa.ok.h4':'✅ Approved',
    'qa.li1':'"Amazonian Tech" visual identity (Dark Mode + Glassmorphism)','qa.li2':'Conversion flow — name and interest capture functional',
    'qa.li3':'Redirect to CEO/SuperAdmin WhatsApp operational','qa.li4':'Responsiveness: desktop, tablet and mobile',
    'qa.li5':'Performance: Intersection Observer and lazy loading active','qa.li6':'Accessibility: ARIA labels and keyboard navigation',
    'qa.li7':'Internationalization: PT/EN/ES with dynamic Language Switcher',
    'qa.mon.h4':'🔄 Under Monitoring','qa.mon.p':'Supabase knowledge base continuously expanding. Analytics dashboard on roadmap.',
    'etica.h2':'⚖️ Ethics & Business',
    'etica.1.h4':'🤝 The 50% Signal — Fair Trade','etica.1.p':'The Hub operates under <strong>Fair Trade</strong>: the client receives value proportional to investment. No exploitation on either side. A fair deal is a sustainable deal.',
    'etica.2.h4':'💚 Social Discount — Up to 60%','etica.2.p':'For NGOs, social projects, and peripheral entrepreneurs, the Hub applies a <strong>social discount of up to 60%</strong>. Technology that liberates cannot be blocked by price.',
    'etica.3.h4':'🕊️ Political & Ethical Neutrality','etica.3.p':'The Hub is <strong>politically neutral</strong> and ethically committed. Does not serve projects promoting discrimination or disinformation. AI as an ally of humans — never as a tool of control.',
    'etica.4.h4':'🔍 Total Transparency','etica.4.p':'Open source on GitHub, methodology publicly documented, prices and discounts declared. No black boxes, no empty promises.',
    'footer.note':'<strong>Transparency & Heutagogy Note:</strong> This project was conceived, architected, and validated by <a href="https://www.linkedin.com/in/lidimoura/" target="_blank" rel="noopener noreferrer"><strong>Lídi Moura</strong></a>, Dev & Manauara Solutions Architect. AI was used as <em>pair programming</em> support to accelerate code, while technical management, integrations, and strategic direction remain under my continuous learning (<strong>Heutagogy</strong>) in Data Science and Automation.',
    'footer.copy':'All rights reserved © 2026 | Built with ❤️ and biomimetics',
  },
  es: {
    'nav.home':'Inicio','nav.briefing':'Presentación','nav.ecosystem':'Ecosistema',
    'nav.features':'Funcionalidades','nav.methodology':'Metodología','nav.ethics':'Ética',
    'hero.badge':'Solución Certificada · Build Estable',
    'hero.tagline':'<em>El portafolio vivo del Encontro d\'Água Hub.</em> Conoce a Amazô, nuestra IA-SDR que califica leads, presenta el Link d\'Água y convierte prospectos en clientes reales — con lenguaje humano, accesible y 100% personalizado.',
    'hero.sub':'Sistema trilingüe activo: PT · EN · ES — Showcase global listo para socios internacionales.',
    'hero.btn.chat':'🤖 Hablar con Amazô','hero.btn.catalog':'🌐 Catálogo del Hub','hero.btn.link':'🔗 Link d\'Água',
    'hero.architect':'👩‍💻 Arquitectado por',
    'briefing.h2':'🌿 Presentación Estratégica','briefing.h3':'El Desafío Estratégico',
    'briefing.p':'Crear un portafolio vivo que demuestre la capacidad de automatización e IA del Hub. <strong>Lídi Moura</strong>, desarrolladora y arquitecta de soluciones nacida en Manaus (AM), corazón de la Amazonia brasileña, lidera este proyecto biomimético: <em>tecnología inspirada en el bosque — abundante, sin desperdicios, regenerativa</em>. Amazô no es un chatbot genérico — es una <strong>SDR digital</strong> que califica leads, presenta el Link d\'Água y convierte prospectos en clientes reales.',
    'bio.1.h4':'🌊 Abundancia','bio.1.p':'Soluciones completas, generosas y escalables — nada se entrega incompleto.',
    'bio.2.h4':'♻️ Cero Desperdicios','bio.2.p':'Cada hora de trabajo se convierte en producto, documentación y legado para el cliente.',
    'bio.3.h4':'🌱 Regeneración','bio.3.p':'Tecnología que crece con sus usuarios — el cliente evoluciona junto con la herramienta.',
    'bio.4.h4':'🧠 Heutagogía','bio.4.p':'Aprendizaje autodirigido. La propia Lídi es el producto más fiel de esta metodología.',
    'eco.h2':'🔗 Ecosistema Hub',
    'eco.ld.h3':'Link d\'Água — SaaS con QR Dinámico y Permanente',
    'eco.ld.p':'<strong>Link d\'Água</strong> ofrece <strong>QR Dinámico y Permanente</strong>: se imprime una vez y es válido para siempre — el destino puede actualizarse en cualquier momento. <em>Infinitas Posibilidades</em> en un solo QR.',
    'eco.ld.btn':'🔗 Acceder Link d\'Água',
    'eco.crm.h3':'CRM IA-First — Gestión de Leads',
    'eco.crm.p1':'Amazô es el <strong>punto de entrada</strong> del CRM IA-First del Hub. Todo lo que captura alimenta el pipeline automáticamente — Kanban en tiempo real, seguimiento automático vía WhatsApp y datos persistidos en Supabase.',
    'eco.crm.p2':'Accede al entorno de QA y validación del Showcase:',
    'eco.crm.btn':'🔬 Entorno CRM (QA/Validación)',
    'eco.c1.h4':'📲 QR Dinámico','eco.c1.p':'El QR nunca cambia. El destino sí. Actualizable en cualquier momento sin reimprimir.',
    'eco.c2.h4':'♾️ Permanente & Escalable','eco.c2.p':'Impreso una vez, válido para siempre. Infinitas posibilidades de uso.',
    'eco.c3.h4':'🤖 CRM IA-First','eco.c3.p':'Calificación automática, Kanban, seguimiento y analytics — todo integrado.',
    'eco.c4.h4':'💬 WhatsApp Integrado','eco.c4.p':'CTA directo para conversión — de la captura al cierre sin fricción.',
    'feat.h2':'✨ Funcionalidades de Amazô',
    'feat.1.h4':'🤝 Integración Humano-IA','feat.1.p':'Transición fluida de la IA al WhatsApp humano — sin fricción, sin frustración.',
    'feat.2.h4':'🧩 Comprensión Contextual','feat.2.p':'Agente adaptativo — entiende el contexto real, no sigue un guión rígido.',
    'feat.3.h4':'🎩 Modo Concierge','feat.3.p':'Identidad, reglas de negocio y tono de voz configurados 100% para tu marca.',
    'feat.4.h4':'🕐 Recepción & Soporte 24/7','feat.4.p':'Disponible en cualquier momento, en cualquier dispositivo, en cualquier idioma.',
    'feat.5.h4':'📈 SDR Digital','feat.5.p':'Califica el lead antes del traspaso al cierre humano — ROI maximizado.',
    'feat.6.h4':'🎨 Diseño Tech Amazónico','feat.6.p':'Modo oscuro con paleta Río Negro, Açaí Neón y Oro Solimões — identidad única.',
    'prova.h2':'⏱️ Metodología Prova d\'Água','prova.intro.h3':'Del Diagnóstico al Showcase en 5 Días',
    'prova.intro.p':'<strong>Prova d\'Água</strong> es la metodología propietaria del Hub: en <strong>5 días</strong>, el cliente recibe una demo funcional entregada vía Showcase Web para QA/Validación, antes de cualquier compromiso a largo plazo.',
    'prova.1.h4':'Día 1 — Diagnóstico & Briefing','prova.1.p':'Entendemos tu dolor, el tiempo que pierdes y mapeamos la personalidad de tu IA. Dolor → Oportunidad.',
    'prova.2.h4':'Día 2 — Implementación','prova.2.p':'Construimos la arquitectura de extremo a extremo en formato <strong>Modo Concierge</strong> (Hecho para Ti).',
    'prova.3.h4':'Día 3 — Prova d\'Água (QA Interno)','prova.3.p':'Tú pruebas y validas el flujo de la IA directamente en tu teléfono. Nada sale al aire sin aprobación.',
    'prova.4.h4':'Día 4 — Showcase Web (Entrega)','prova.4.p':'Demo funcional entregada al cliente/PO vía <strong>Showcase Web</strong> — canal público de QA y validación.',
    'prova.5.h4':'Día 5 — Deploy & ROI','prova.5.p':'Entrega oficial de tu Concierge Digital e inicio del seguimiento de ROI.',
    'prova.h.h4':'🧠 Heutagogía en Acción','prova.h.p':'El cliente no solo recibe el producto — <em>entiende</em> qué se construyó, por qué funciona y cómo evolucionar. Aprendizaje autodirigido integrado a la entrega.',
    'qa.h2':'✅ Análisis de Calidad (QA)','qa.main.h3':'✅ Resultado General: APROBADO — Prova d\'Água Completada',
    'qa.main.p':'Las pruebas de homologación demuestran que Amazô cumple su papel de SDR, capturando datos y conduciendo la venta con precisión. El Showcase entregado es la evidencia pública y rastreable de la calidad.',
    'qa.ok.h4':'✅ Aprobado',
    'qa.li1':'Identidad visual "Tech Amazónico" (Modo Oscuro + Glassmorphism)','qa.li2':'Flujo de conversión — captura de nombre e interés funcional',
    'qa.li3':'Redirección al WhatsApp de la CEO/SuperAdmin operacional','qa.li4':'Responsividad: escritorio, tablet y móvil',
    'qa.li5':'Rendimiento: Intersection Observer y lazy loading activos','qa.li6':'Accesibilidad: etiquetas ARIA y navegación por teclado',
    'qa.li7':'Internacionalización: PT/EN/ES con Language Switcher dinámico',
    'qa.mon.h4':'🔄 En Monitoreo','qa.mon.p':'Base de conocimiento Supabase en expansión continua. Dashboard de analytics en roadmap.',
    'etica.h2':'⚖️ Ética y Negocio',
    'etica.1.h4':'🤝 La Señal del 50% — Intercambio Justo','etica.1.p':'El Hub opera bajo el principio del <strong>Intercambio Justo</strong>: el cliente recibe valor proporcional a la inversión. Sin explotación de ninguna de las partes. Un negocio justo es un negocio sostenible.',
    'etica.2.h4':'💚 Descuento Social — Hasta 60%','etica.2.p':'Para ONGs, proyectos sociales y emprendedores periféricos, el Hub aplica <strong>descuento social de hasta 60%</strong>. La tecnología que libera no puede estar bloqueada por el precio.',
    'etica.3.h4':'🕊️ Neutralidad Política & Ética','etica.3.p':'El Hub es <strong>políticamente neutro</strong> y éticamente comprometido. No atiende proyectos que promuevan discriminación o desinformación. IA como aliada del humano — nunca como instrumento de control.',
    'etica.4.h4':'🔍 Transparencia Total','etica.4.p':'Código abierto en GitHub, metodología documentada públicamente, precios y descuentos declarados. Sin cajas negras, sin promesas vacías.',
    'footer.note':'<strong>Nota de Transparencia & Heutagogía:</strong> Este proyecto fue ideado, arquitectado y validado por <a href="https://www.linkedin.com/in/lidimoura/" target="_blank" rel="noopener noreferrer"><strong>Lídi Moura</strong></a>, Dev & Arquitecta de Soluciones Manauara. La IA fue utilizada como soporte de <em>pair programming</em> para acelerar el código, mientras que la gestión técnica, las integraciones y el direccionamiento estratégico permanecen bajo mi aprendizaje continuo (<strong>Heutagogía</strong>) en Ciencia de Datos y Automatización.',
    'footer.copy':'Todos los derechos reservados © 2026 | Desarrollado con ❤️ y biomimética',
  }
};

/* ---------- i18n ENGINE ---------- */
function applyTranslations(lang) {
  const tr = T[lang];
  if (!tr) return;

  // textContent elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = tr[el.dataset.i18n];
    if (val !== undefined) el.textContent = val;
  });

  // innerHTML elements (rich text with HTML tags)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = tr[el.dataset.i18nHtml];
    if (val !== undefined) el.innerHTML = val;
  });

  // HTML lang attribute
  const langMap = { pt: 'pt-BR', en: 'en', es: 'es' };
  document.documentElement.lang = langMap[lang] || lang;
}

function setLanguage(lang) {
  // Smooth fade transition
  document.body.classList.add('lang-transitioning');

  setTimeout(() => {
    applyTranslations(lang);
    document.body.classList.remove('lang-transitioning');

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
      btn.setAttribute('aria-pressed', btn.dataset.lang === lang);
    });

    // Persist preference
    localStorage.setItem('hub-lang', lang);
  }, 160);
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // Language switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Restore saved language (default: pt)
  const savedLang = localStorage.getItem('hub-lang') || 'pt';
  applyTranslations(savedLang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === savedLang);
    btn.setAttribute('aria-pressed', btn.dataset.lang === savedLang);
  });

  // Fade-in on scroll (Intersection Observer)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
