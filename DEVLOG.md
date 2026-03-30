# 📝 DEVLOG - Projeto Showcase: Agente Amazô

**Desenvolvedor:** Lídi Moura  
**Período:** Março 2026  
**Status:** ✅ Ativo em Produção  

---

## 📅 Timeline de Desenvolvimento

### Fase 1: Planejamento & Estruturação ✅

**Objetivo:** Estruturar base do projeto e repositório Git

**Deliverables:**

- Reorganização de pastas
- Inicialização Git e GitHub Pages
- Estrutura HTML/CSS/JS base

---

### Fase 2: Design & Branding ✅

**Conceito:** Tech Amazônico (Dark Mode)

**Cores Implementadas:**

- Rio Negro: `#0a0e27`
- Açaí Neon: `#c878ff`
- Dourado Solimões: `#f0b864`

**Componentes:**

- Header fixo com navegação
- Hero section responsivo
- Cards com glassmorphism
- Animações fade-in
- Mobile-first design

---

### Fase 3: Conteúdo & Estrutura ✅

**Seções Criadas:**

1. Hero - Call-to-action imediato
2. Presentation - Briefing estratégico
3. Features - 6 recursos principais
4. QA - Matriz de testes
5. Onboarding - Processo de 4 etapas
6. Footer - Transparência e créditos

---

### Fase 4: Linting & Correção ✅

**Erros Identificados:** 17

**Status:** ✅ Zero erros

**Correções:**

- CSS: Adicionado -webkit-backdrop-filter
- Markdown: Removido HTML inline
- README: Formatação e espaçamento
- Links: URLs corrigidas

---

### Fase 5: Integração do Chatbot ✅

**Implementação:** Typebot via Modal

**Features:**

- Modal responsivo 90vw x 90vh
- Typebot integrado sem dependências
- Botão fechar (X)
- ESC para fechar
- Click outside para fechar
- Scroll bloqueado ao abrir

**JavaScript Adicionado:**

```javascript
window.openChatbot = function() {
    chatbotModal.classList.add('active');
    document.body.style.overflow = 'hidden';
};
```

**CSS Adicionado:**

```css
.chatbot-modal { position: fixed; z-index: 2000; }
.chatbot-container { max-width: 900px; height: 90vh; }
```

---

### Fase 6: Documentação Profissional ✅

**README.md Atualizado:**

- Briefing executivo
- Tabelas de funcionalidades
- Matriz QA com status
- Stack tecnológico
- Links profissionais

**DEVLOG.md Criado:**

- Timeline completa
- Decisões técnicas
- Arquitetura do projeto
- Roadmap futuro
- Lições aprendidas

---

## 🏗️ Arquitetura

### Stack

- Frontend: HTML5, CSS3, JavaScript (Vanilla)
- Chatbot: Typebot (SaaS)
- Deploy: GitHub Pages
- Versionamento: Git

### Componentes

```text
index.html      → Estrutura semântica
style.css       → Glassmorphism + Dark mode
script.js       → Smooth scroll + Typebot Bubble
README.md       → Documentação principal
DEVLOG.md       → Este arquivo
```

---

## 🛠️ Decisões de Design

**Por que Vanilla JS?**

- Zero dependências
- Performance máxima
- Fácil manutenção

**Por que Typebot?**

- SaaS pronto para usar
- Sem complexidade back-end
- Integração via iframe
- Escalável

---

## 📊 Performance

### Otimizações

- Intersection Observer para lazy loading
- CSS minificado
- Google Fonts preconnect
- Sem bloqueadores de render

---

## 🔒 Segurança

- rel="noopener noreferrer" em links
- ARIA labels para acessibilidade
- Sem dados sensíveis
- HTTPS automático via GitHub Pages

---

## 🚀 Roadmap

**Próximas Melhorias:**

- Google Analytics
- Dark/Light mode toggle
- Multilíngue (PT/EN)
- Supabase integration
- Dashboard administrativo

---

## 💡 Metodologia

**Heutagogia:** Auto-educação com IA  
**Vibe Coding:** Fluxo criativo sem bloqueios  
**Pair Programming:** Desenvolvimento colaborativo

---

## ✍️ Créditos

**Desenvolvido por:** Lídi Moura  
[LinkedIn](https://www.linkedin.com/in/lidimoura/)

**Pair Programming:** Claude Haiku 4.5

---

**Última atualização:** 30 de Março de 2026  
**Deploy:** [GitHub Pages](https://lidimoura.github.io/amazo.ia-showcase/)
