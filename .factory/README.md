# Factory.ai Droids Setup - Shopify Mastra App

## Overview

Sistema di AI agents specializzati per lo sviluppo coordinato del Shopify AI Management Suite. Separazione netta tra **CLI Droids** (dev-time) e **Production Agents** (runtime).

## Struttura Directory

```
.factory/
├── droids/                    # CLI Droids (dev-time specialists)
│   ├── mastra-expert.md      # Mastra framework specialist
│   ├── convex-expert.md      # Convex backend specialist
│   ├── svelte-expert.md      # SvelteKit frontend specialist
│   ├── shopify-expert.md     # Shopify API/CLI specialist
│   ├── devops-expert.md      # CI/CD & deployment
│   └── testing-expert.md     # QA & E2B sandbox testing
├── agents/                    # Production Agents (runtime specs)
│   └── specs/
│       ├── theme-editor-agent.md
│       ├── seo-optimizer-agent.md
│       ├── csv-validator-agent.md
│       ├── email-copy-agent.md
│       └── product-description-agent.md
├── templates/                 # Boilerplate templates
│   ├── agent-template.ts     # Mastra agent boilerplate
│   ├── mcp-tool-template.ts  # MCP tool template
│   └── workflow-template.ts  # Multi-agent workflow
└── knowledge/                 # Shared knowledge base
    ├── shopify-stack-context.md
    ├── mastra-official-docs.md
    ├── convex-patterns.md
    └── deployment-guide.md
```

## Key Concepts

### Layer 1: CLI Droids (Development Time)

**Chi:** Esperti specializzati che COSTRUISCONO l'app  
**Quando:** Durante lo sviluppo  
**Tecnologia:** Droid CLI, Claude Code, Kilocode  
**Output:** Codice dell'applicazione

**Droids disponibili:**
- `@mastra` - Mastra AI framework expert
- `@convex` - Convex backend expert
- `@svelte` - SvelteKit frontend expert
- `@shopify` - Shopify API/CLI expert
- `@devops` - CI/CD & deployment expert
- `@testing` - QA & testing expert

### Layer 2: Production Agents (Runtime)

**Chi:** AI agents Mastra che ESEGUONO nell'app  
**Quando:** A runtime, quando l'utente usa l'app  
**Tecnologia:** Mastra AI framework (https://mastra.ai/docs)  
**Output:** Operazioni nell'app (modifica temi, genera SEO, etc.)

**Agents disponibili:**
- `themeEditorAgent` - Modifica sezioni Liquid Shopify
- `seoOptimizerAgent` - Ottimizza meta tags e content
- `csvValidatorAgent` - Valida e trasforma CSV bulk
- `emailCopyAgent` - Genera copy per email campaigns
- `productDescriptionAgent` - Crea descrizioni prodotti

---

## CLI Droids Overview

### 1. Mastra Expert (`@mastra`)
**Specialist in:** Mastra AI framework (https://mastra.ai/docs)

**Responsabilità:**
- Implementare Production Agents seguendo doc ufficiale
- Configurare workflows (sequential, parallel, conditional)
- Setup agent memory (RAG with Convex vector store)
- MCP tools integration
- Human-in-the-loop patterns

**Output:**
- `/src/lib/agents/*.ts` - Production agents
- `/src/lib/workflows/*.ts` - Multi-agent workflows
- `/src/lib/tools/*.ts` - MCP tools

**Knowledge:** `.factory/knowledge/mastra-official-docs.md`

---

### 2. Convex Expert (`@convex`)
**Specialist in:** Convex backend (https://docs.convex.dev)

**Responsabilità:**
- Database schema design
- Mutations/queries implementation
- Real-time subscriptions
- File storage
- Vector search per agent memory

**Output:**
- `/convex/*.ts` - Backend functions
- `/convex/schema.ts` - Database schema
- `/convex/vector.ts` - Vector store

**Knowledge:** `.factory/knowledge/convex-patterns.md`

---

### 3. SvelteKit Expert (`@svelte`)
**Specialist in:** SvelteKit + shadcn-svelte

**Responsabilità:**
- Routes structure
- UI components
- TipTap editor integration
- Real-time UI updates
- Forms validation

**Output:**
- `/src/routes/` - Pages
- `/src/lib/components/` - Components
- `/src/lib/stores/` - State management

---

### 4. Shopify Expert (`@shopify`)
**Specialist in:** Shopify API, CLI, Liquid

**Responsabilità:**
- Admin API integration (GraphQL)
- Shopify CLI setup
- Liquid best practices
- Webhook handling

**Output:**
- `/src/lib/shopify/` - API clients
- `/src/lib/shopify/types.ts` - TypeScript types

**Knowledge:** `.factory/knowledge/shopify-api-guide.md`

---

### 5. DevOps Expert (`@devops`)
**Specialist in:** CI/CD, deployment

**Responsabilità:**
- GitHub Actions workflows
- Vercel deployment
- Environment variables
- E2B sandbox setup
- Monitoring

**Output:**
- `.github/workflows/` - CI/CD
- `vercel.json` - Config

**Knowledge:** `.factory/knowledge/deployment-guide.md`

---

### 6. Testing Expert (`@testing`)
**Specialist in:** QA, E2B sandbox testing

**Responsabilità:**
- Unit tests per agents
- Integration tests
- E2B sandbox validation
- UI testing (Playwright)

**Output:**
- `/tests/` - Test suites
- E2B test runners

---

## Production Agents Specs

Location: `.factory/agents/specs/`

Ogni agent runtime ha una spec che definisce:
- **Purpose:** Cosa fa l'agent
- **Tools:** MCP tools disponibili
- **Instructions:** System prompt
- **Memory:** RAG configuration
- **HITL:** Quando richiedere approval umana

Il droid `@mastra` implementa questi agents seguendo https://mastra.ai/docs

---

## Communication Patterns

### Dev-Time (CLI Droids)
```
@mastra implement the theme editor agent following official docs
@convex create schema for products with vector search
@svelte build the visual editor UI with TipTap
@shopify setup CLI integration for theme pull/push
@testing validate theme editor agent in E2B sandbox
@devops deploy to Vercel staging
```

### Runtime (Production Agents)
```typescript
// User interacts with agents through app UI
const result = await themeEditorAgent.generate(
  'Change hero button to "Shop Now" and make it teal',
  { stream: true }
);
```

---

## Development Workflow

### Phase 1: Infrastructure (Week 1-2)
- `@devops`: Setup repo, Vercel, GitHub Actions
- `@convex`: Database schema design
- `@svelte`: Base SvelteKit structure + shadcn-svelte

### Phase 2: Core Agents (Week 3-4)
- `@mastra`: Implement 3 core agents (theme, CSV, SEO)
- `@shopify`: Shopify API integration
- `@testing`: E2B sandbox tests

### Phase 3: Workflows (Week 5-6)
- `@mastra`: Multi-agent workflows
- `@convex`: Real-time subscriptions
- `@svelte`: Agent interaction UI

### Phase 4: Advanced Features (Week 7-12)
- All: Iterate on features per roadmap

---

## Success Criteria

### CLI Droids (Dev)
- ✅ Code follows Mastra official patterns
- ✅ TypeScript strict mode
- ✅ All agents have E2B sandbox tests
- ✅ Documentation up-to-date

### Production Agents (Runtime)
- ✅ Agents execute reliably
- ✅ Human approval <20% of requests
- ✅ E2B tests pass >95%
- ✅ Response time <3s

---

## Getting Started

### For CLI Droids (Development)
1. Read your droid spec in `.factory/droids/`
2. Study relevant knowledge in `.factory/knowledge/`
3. Check `.factory/templates/` for boilerplate
4. Collaborate with other droids

### Adding New Production Agent
1. **Spec Phase**: Write `.factory/agents/specs/new-agent.md`
2. **Dev Phase**: `@mastra` implements following https://mastra.ai/docs
3. **Test Phase**: `@testing` validates in E2B
4. **Deploy Phase**: `@devops` deploys to production

---

## Key Differences Summary

| Aspect | CLI Droids (Dev) | Production Agents (Runtime) |
|--------|------------------|----------------------------|
| **When** | Development time | App runtime |
| **Who builds** | Factory.ai system | CLI Droids (`@mastra`) |
| **Purpose** | Build the app | Execute in the app |
| **Technology** | Droid CLI, Claude, Kilocode | Mastra AI framework |
| **Examples** | `@mastra`, `@convex`, `@svelte` | `themeEditorAgent`, `seoAgent` |
| **Docs** | Internal specs | https://mastra.ai/docs |

---

**Version:** 2.0.0  
**Last Updated:** 2026-02-04  
**Maintained by:** Factory.ai System
