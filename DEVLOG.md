# 📝 DEVLOG — Showcase: Agente Amazô | V38

**Arquiteta & Dev:** Lídi Moura — Arquiteta de Soluções & Dev, formada em Psicologia (UX/Estratégia)
**Pair Programming:** Claude Sonnet 4.6 (Thinking)
**Período:** Março – Abril 2026
**Status:** ✅ Ativo em Produção | 💾 Pronto para Migração de Hardware

---

## 🌿 Identidade do Projeto

> Nascido em Manaus, liderado por uma mulher da floresta. A Amazônia ensina: **abundância e zero desperdício** são o mesmo princípio. Este projeto é prova viva disso.

**Arquiteta:** Lídi Moura — Arquiteta de Soluções & Dev, formada em Psicologia (UX/Estratégia). Heutaóloga e arquiteta de soluções IA para pequeños negócios e parceiros sociais.

### 🎯 Categorias de Solução Atendidas

| # | Categoria | Público-Alvo |
|---|---|---|
| 1 | **Profissionais da Saúde** | Médicos, Terapeutas, Clínicas |
| 2 | **Empreendedores e Negócios Locais** | Comercáos, Serviços, Startups locais |
| 3 | **Profissionais Liberais e Autônomos** | Advogados, Contadores, Coaches, Consultores |

### 🔑 Lógica de Acesso (Hub)

| Fluxo | Comportamento |
|---|---|
| **Chave VIP** | Código `provadagua` libera Login/Cadastro direto no CRM |
| **Lead Orgânico** | Formulário de captação obrigatório antes do acesso |
| **Trial 7 dias** | Ativado após onboarding via Stripe |

### 🔒 Segurança Multi-tenant

O sistema possui isolamento completo entre leads e tenants. Cada usuário como **Amanda** (exemplo de lead orgânico) opera em namespace isolado via Supabase Row Level Security (RLS). Nenhum dado cruza entre tenants.

---

## 📅 Timeline de Desenvolvimento

### ✅ Fase 1: Planejamento & Estruturação

**Objetivo:** Estruturar base do projeto e repositório Git

**Deliverables:**
- Reorganização do diretório do projeto
- Inicialização Git e GitHub Pages
- Estrutura HTML5 / CSS3 / JS Vanilla base

---

### ✅ Fase 2: Design & Branding — "Tech Amazônico"

**Conceito:** Dark Mode inspirado no ecossistema amazônico

**Paleta de Cores:**

| Token | Hex | Referência Natural |
| --- | --- | --- |
| `--rio-negro` | `#0a0e27` | Rio Negro, Manaus |
| `--acai-neon` | `#c878ff` | Açaí — fruto sagrado |
| `--dourado-solimoes` | `#f0b864` | Solimões ao entardecer |

**Componentes:**
- Header fixo com navegação âncora
- Hero section responsivo (image + copy)
- Cards com glassmorphism (blur + transparência)
- Animações fade-in via Intersection Observer
- Mobile-first design com CSS Grid e Flexbox

---

### ✅ Fase 3: Conteúdo & Estrutura Semântica

**Seções Implementadas:**

1. **Hero** — Call-to-action imediato + imagem da Amazô
2. **Briefing** — Desafio estratégico e proposta de valor
3. **Features** — 4 recursos principais da SDR
4. **QA** — Matriz de testes e aprovação Prova d'Água
5. **Metodologia** — Processo Heutagógico de 4 Etapas
6. **Footer** — Transparência, créditos e links de conversão

---

### ✅ Fase 4: Linting & Correção de Código

**Erros identificados:** 17
**Erros após correção:** 0 ✅

**Correções aplicadas:**
- CSS: Adicionado `-webkit-backdrop-filter` para compatibilidade Safari
- Markdown: Removido HTML inline inválido
- README: Formatação e espaçamento de tabelas
- Links: URLs corrigidas e `rel="noopener noreferrer"` aplicado

---

### ✅ Fase 5: Integração do Chatbot Typebot

**Implementação:** Typebot via Modal Responsivo

**Features técnicas:**
- Modal `position: fixed` com `z-index: 2000`
- Responsivo: `90vw × 90vh`, `max-width: 900px`
- ESC para fechar
- Click outside para fechar
- Scroll bloqueado ao abrir

```javascript
window.openChatbot = function() {
    chatbotModal.classList.add('active');
    document.body.style.overflow = 'hidden';
};
```

---

### ✅ Fase 6: Documentação Profissional V1

- README.md com briefing executivo, tabelas QA, stack e links
- DEVLOG.md com timeline, arquitetura e decisões técnicas
- Zero dependências npm — projeto ultra-leve e portátil

---

### ✅ Fase 7 (V33): Atualização Estratégica — Identidade Global

**Data:** 31 de Março / 1° de Abril de 2026
**Ciclo:** Prova d'Água 5 dias (Demo funcional → Showcase → QA/Validação)

**O que foi registrado e implementado nesta versão:**

#### 🌿 Identidade Manauara & Biomimética
- Explicitado que Lídi Moura é Dev & Arquiteta Manauara
- Filosofia biomimérica documentada: abundância + zero desperdício
- Projeto posicionado como prova viva da metodologia heutagógica

#### ⏱️ Metodologia Prova d'Água
- Ciclo de 5 dias formalmente documentado no README e Showcase
- Showcase Web como canal oficial de entrega para QA/Validação
- Heutagogia como diferencial pedagógico explícito

#### 🔗 Ecossistema Hub — Link d'Água & CRM IA-First
- Link d'Água (SaaS): QR Code Dinâmico e Permanente — Infinitas Possibilidades
- CRM IA-First integrado ao fluxo da Amazô (Supabase + n8n)
- Showcase como porta de entrada QA: `prova.encontrodagua.com/showcase`

#### 🌐 Internacionalização PT / EN / ES
- README traduzido em 3 idiomas para mercado global
- index.html preparado para suportar chaveamento de idioma
- Posicionamento: Brasil, EUA, Europa, América Latina

#### 🔑 Links de Conversão Estratégicos
| Link | Destino |
| --- | --- |
| `link.encontrodagua.com/vitrine` | Vitrine de Serviços |
| `hub.encontrodagua.com` | Hub Ecossistema |
| `prova.encontrodagua.com/showcase` | CRM IA-First QA |
| LinkedIn Lídi Moura | Conexão profissional |
| GitHub lidimoura | Código-fonte público |

#### ⚖️ Ética e Negócio
- **Sinal dos 50% (Troca Justa)** documentado como princípio comercial
- **Desconto Social até 60%** para ONGs e projetos periféricos
- **Neutralidade política e ética** formalmente declarada

---

## 🏗️ Arquitetura Atual

### Stack

| Camada | Tecnologia |
| --- | --- |
| Frontend | HTML5, CSS3, JavaScript Vanilla |
| Chatbot | Typebot (SaaS) via Modal |
| CRM | Supabase (PostgreSQL + Edge Functions) |
| Automação | n8n (WhatsApp + e-mail) |
| Deploy | GitHub Pages (CI/CD automático) |
| Versionamento | Git & GitHub |

### Estrutura de Arquivos

```text
amazo.ia-showcase/
├── index.html          → Showcase principal (PT/EN/ES)
├── style.css           → Glassmorphism + Dark mode + paleta Tech Amazônico
├── script.js           → Smooth scroll + Typebot Bubble + Intersection Observer
├── README.md           → Documentação principal (V33 — trilingue)
├── DEVLOG.md           → Este arquivo
├── SETUP_GUIDE.md      → Guia de configuração e deploy
└── assets/
    ├── amazo.jpeg      → Avatar principal da Amazô
    └── mazo.jpeg       → Amazô Closeup (seção QA/Onboarding)
```

---

## 🛠️ Decisões Técnicas

### Por que Vanilla JS?
- Zero dependências — carregamento sub-segundo
- Performance máxima no GitHub Pages
- Fácil manutenção e auditoria de código

### Por que Typebot?
- SaaS pronto para usar, sem back-end próprio
- Integração via iframe com fallback gracioso
- Escalável — substitui sem re-deploy da página

### Por que GitHub Pages?
- Deploy automático via `git push`
- HTTPS gratuito e automático
- CI/CD nativo para protótipos e portfólios

### Por que documentar em 3 idiomas?
- Posicionamento global desde o MVP
- Demonstra capacidade de internacionalização para parceiros internacionais
- Heutagogia: Lidi documenta para aprender, não apenas para entregar

---

## 📊 Performance

| Métrica | Status |
| --- | --- |
| Intersection Observer (lazy loading) | ✅ |
| Google Fonts preconnect | ✅ |
| Sem bloqueadores de render | ✅ |
| rel="noopener noreferrer" em links externos | ✅ |
| ARIA labels e navegação por teclado | ✅ |

---

## 🔒 Segurança

- HTTPS automático via GitHub Pages
- `rel="noopener noreferrer"` em todos os links externos
- Sem dados sensíveis no repositório público
- Sem bibliotecas de terceiros com superfície de ataque

---

## 🚀 Roadmap

| Prioridade | Feature | Status |
| --- | --- | --- |
| Alta | Chaveamento dinâmico PT/EN/ES (JS) | 🔄 Planejado |
| Alta | Google Analytics / Plausible | 🔄 Planejado |
| Média | Dark/Light mode toggle | 🔄 Planejado |
| Média | Supabase integration (leads direto) | 🔄 Planejado |
| Baixa | Dashboard admin básico | 🔄 Futuro |

---

## 💡 Lições Aprendidas (V33)

1. **Documentação é produto**: o README e o Showcase são tão importantes quanto o código
2. **Biomimética como diferencial**: posicionamento de nicho com raiz geográfica e filosófica real
3. **Heutagogia funciona**: aprender enquanto entrega encurta o caminho entre teoria e produção
4. **IA como parceira, não substituta**: pair programming com IA elevou a velocidade sem ceder o controle estratégico

---

## 🚀 V38 — Cleanup UI, Docs & Hardware Migration Sync

**Data:** 10 de Abril de 2026
**Tipo:** Manutenção, UI Cleanup, Sincro de Documentação

### O que foi feito nesta versão:

- ✅ **Footer consolidado**: removida duplicidade; mantido apenas o footer profissional © 2026
- ✅ **Typebot Bubble**: garantido carregamento do script + `z-index: 9999` no CSS e inline override para visibilidade acima do glassmorphism
- ✅ **Autoridade documentada**: Lídi Moura é Arquiteta de Soluções & Dev, formada em Psicologia (UX/Estratégia)
- ✅ **Categorias de solução mapeadas**: Saúde, Negócios Locais, Profissionais Liberais
- ✅ **Lógica de acesso documentada**: Chave VIP `provadagua` vs. formulário orgânico
- ✅ **Segurança Multi-tenant validada**: isolamento RLS entre leads (ex: Amanda) confirmado
- ✅ **Docs atualizados**: README.md, DEVLOG.md, USER_GUIDE.md

### ⚠️ Pendências Registradas para próxima sprint:

| Item | Status | Notas |
|------|--------|-------|
| **Integração Stripe** | 🔴 Pendente | Checkout do Trial/Plano ainda não conectado |
| **Google Analytics (GA4)** | 🔴 Pendente | Tracking de conversão e eventos não implementados |

---

## ✅ Créditos

**Arquiteta & Dev:** [Lídi Moura](https://www.linkedin.com/in/lidimoura/) — Arquiteta de Soluções & Dev, Psicologia (UX/Estratégia)
**Pair Programming IA:** Claude Sonnet 4.6 (Thinking)
**Hub:** [hub.encontrodagua.com](https://hub.encontrodagua.com)
**Vitrine:** [link.encontrodagua.com/vitrine](https://link.encontrodagua.com/vitrine)

---

**Última atualização:** 10 de Abril de 2026
**Deploy:** [GitHub Pages](https://lidimoura.github.io/amazo.ia-showcase/)
**Versão:** V38 — UI Cleanup & Hardware Migration Sync
