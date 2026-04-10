# 📖 USER GUIDE — Showcase: Agente Amazô | V38

**Arquiteta & Dev:** Lídi Moura — Arquiteta de Soluções & Dev, formada em Psicologia (UX/Estratégia)
**Versão:** V38 | **Data:** Abril 2026
**Status:** ✅ Ativo em Produção | 💾 Pronto para Migração de Hardware

---

## 👩‍💼 Sobre a Arquiteta

**Lídi Moura** é **Arquiteta de Soluções & Dev**, formada em **Psicologia com ênfase em UX e Estratégia Comportamental**, nascida em Manaus (AM). Sua formação em comportamento humano informa diretamente a arquitetura dos produtos — desde o fluxo de conversação da Amazô até o design de onboarding do Hub.

> *"Tecnologia que abraça, não que intimida."*

---

## 🎯 Públicos Atendidos — Categorias de Solução

A Amazô foi arquitetada para atender **3 categorias estratégicas de clientes**:

| # | Categoria | Exemplos de Público |
|---|---|---|
| **1** | **Profissionais da Saúde** | Médicos, Psicólogos, Terapeutas, Nutricionistas, Clínicas |
| **2** | **Empreendedores e Negócios Locais** | Comércios, Restaurantes, Salões, Serviços, Startups locais |
| **3** | **Profissionais Liberais e Autônomos** | Advogados, Contadores, Coaches, Consultores, Arquitetos |

Cada categoria recebe um **Modo Concierge personalizado**: identidade, tom de voz e base de conhecimento configurados para o nicho.

---

## 🔑 Lógica de Acesso ao Hub

O sistema possui **dois fluxos de entrada** distintos:

### Fluxo 1 — Chave VIP (Parceiros Estratégicos)

```
Usuário informa a chave: provadagua
→ Sistema valida
→ Login/Cadastro liberado diretamente
→ Acesso ao CRM / Trial imediato
```

### Fluxo 2 — Lead Orgânico (Entrada Pública)

```
Usuário acessa o Showcase
→ Preenche formulário de captação (nome, interesse, contato)
→ Dados capturados pela Amazô → Supabase
→ Equipe faz follow-up → Onboarding manual ou automático
```

> **Nota:** Leads orgânicos NÃO têm acesso direto ao CRM sem onboarding prévio. A chave VIP é exclusiva para parceiros homologados.

---

## 🔒 Segurança & Isolamento Multi-tenant

O sistema está arquitetado com **isolamento completo entre tenants**:

| Mecanismo | Implementação |
|---|---|
| **Row Level Security (RLS)** | Supabase PostgreSQL — cada tenant vê apenas seus próprios dados |
| **Namespace de leads** | Lead como **Amanda** (exemplo) opera em namespace 100% isolado |
| **Autenticação** | Supabase Auth com tokens JWT por sessão |
| **Edge Functions** | Validações server-side antes de qualquer acesso a dados |

**Garantia:** Nenhum dado de um tenant cruza para outro — nem via API, nem via UI.

---

## 🌿 Como Usar o Showcase

### Demonstração da Amazô

1. Acesse: [lidimoura.github.io/amazo.ia-showcase](https://lidimoura.github.io/amazo.ia-showcase/)
2. Clique em **"💬 Conversar com a Amazô"** no Hero ou no CTA Final
3. O bubble do Typebot abrirá no canto inferior direito
4. Interaja com a Amazô para ver o fluxo de conversação real

### Troca de Idioma

Use os botões no Header: `🇧🇷 PT` | `🇺🇸 EN` | `🇪🇸 ES`

O conteúdo muda dinamicamente sem recarregar a página.

---

## 🖥️ Checklist de Migração de Hardware

Para configurar o projeto no notebook novo, siga:

### ✅ Pré-requisitos

- [ ] Git instalado (`git --version`)
- [ ] Node.js instalado (opcional, sem dependências obrigatórias)
- [ ] Conta GitHub configurada com SSH ou HTTPS
- [ ] Editor de código (VS Code recomendado)

### ✅ Clonar o Repositório

```bash
git clone https://github.com/lidimoura/amazo.ia-showcase.git
cd amazo.ia-showcase
```

### ✅ Verificar Estrutura

```
amazo.ia-showcase/
├── index.html          → Showcase principal (PT/EN/ES)
├── style.css           → Glassmorphism, Dark Mode, paleta Tech Amazônico
├── script.js           → i18n, carrossel, Typebot Bubble, nav
├── README.md           → Documentação V38
├── DEVLOG.md           → Timeline e contexto técnico V38
├── USER_GUIDE.md       → Este arquivo
├── SETUP_GUIDE.md      → Guia de setup e deploy
└── assets/
    ├── amazo.jpeg      → Avatar principal
    └── mazo.jpeg       → Amazô closeup
```

### ✅ Testar Localmente

Abra `index.html` diretamente no navegador **ou** use um servidor local:

```bash
# Python (qualquer versão)
python -m http.server 8000

# Node.js (npx)
npx serve .
```

Acesse: `http://localhost:8000`

### ✅ Deploy

O deploy é **automático via GitHub Pages** a cada `git push main`.

URL produção: `https://lidimoura.github.io/amazo.ia-showcase/`

---

## ⚠️ Pendências Abertas (Próxima Sprint)

| Item | Prioridade | Responsável |
|------|-----------|-------------|
| **Integração Stripe** | 🔴 Alta | Lídi Moura |
| **Google Analytics GA4** | 🔴 Alta | Lídi Moura |
| **Supabase long-term memory** | 🟡 Média | Lídi Moura |
| **Dark/Light mode toggle** | 🟢 Baixa | Lídi Moura |

---

## 📊 Stack Técnico

| Camada | Tecnologia |
|---|---|
| **Frontend** | HTML5, CSS3, JavaScript Vanilla |
| **Design** | Glassmorphism, Dark Mode, paleta Tech Amazônico |
| **Chatbot** | Typebot (bubble) + GPT-4o |
| **CRM Backend** | Supabase (PostgreSQL + RLS + Edge Functions) |
| **Automação** | n8n (WhatsApp + e-mail) |
| **Deploy** | GitHub Pages (CI/CD via git push) |
| **i18n** | PT-BR / EN / ES (Vanilla JS) |

---

## 🔗 Links Estratégicos

| Destino | Link |
|---|---|
| 🌿 **Showcase** | [lidimoura.github.io/amazo.ia-showcase](https://lidimoura.github.io/amazo.ia-showcase/) |
| 🔗 **Vitrine** | [link.encontrodagua.com/vitrine](https://link.encontrodagua.com/vitrine) |
| 🌐 **Hub** | [hub.encontrodagua.com](https://hub.encontrodagua.com) |
| 🔬 **CRM QA** | [prova.encontrodagua.com/showcase](https://prova.encontrodagua.com/showcase) |
| 👩‍💻 **LinkedIn** | [linkedin.com/in/lidimoura](https://www.linkedin.com/in/lidimoura/) |
| 💻 **GitHub** | [github.com/lidimoura](https://github.com/lidimoura) |

---

*Todos os direitos reservados © 2026 — Encontro d'Água Hub*
*Desenvolvido com ❤️ e biomimética por Lídi Moura*
