# Shopify AI Management Suite - Stack Context

## Project Overview

**Name:** Shopify AI Management Suite  
**Type:** Web-first application (Electron optional post-MVP)  
**Purpose:** Centralize Shopify store management with AI assistance

## Technology Stack

### Frontend
- **SvelteKit 4.0+** - Main framework
- **TailwindCSS** - Styling
- **shadcn-svelte** - UI components
- **TipTap** - Rich text/Liquid editor
- **Vite** - Build tool

### Backend
- **Convex** - Real-time database + serverless functions
- **Clerk** - Authentication
- **Upstash Redis** - Rate limiting

### AI Layer
- **Mastra** - Multi-agent orchestration
- **Claude 3.5 Sonnet** - Primary LLM
- **E2B Sandbox** - Safe code execution
- **MCP** - Tool integration protocol

### Integrations
- **Shopify CLI** - Theme management
- **Shopify Admin API** - GraphQL for data
- **Judge.me API** - Reviews
- **Google Analytics 4** - Analytics
- **Google Merchant Center** - Product feeds

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     SvelteKit App                        │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │   Routes     │  │  Components  │  │    Stores    │ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                    Mastra AI Layer                       │
│  ┌────────────┐  ┌────────────┐  ┌─────────────────┐  │
│  │   Agents   │  │ Workflows  │  │  MCP Tools      │  │
│  └────────────┘  └────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│                   Convex Backend                         │
│  ┌────────────┐  ┌────────────┐  ┌─────────────────┐  │
│  │  Database  │  │   Vector   │  │  Real-time      │  │
│  │  Tables    │  │   Store    │  │  Subscriptions  │  │
│  └────────────┘  └────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│              External Services                           │
│  ┌────────────┐  ┌────────────┐  ┌─────────────────┐  │
│  │  Shopify   │  │  E2B       │  │  Anthropic      │  │
│  │  Admin API │  │  Sandbox   │  │  Claude API     │  │
│  └────────────┘  └────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

## Key Features

### 1. Theme Editor
- Visual editor with TipTap
- AI chat for natural language modifications
- Live preview with Shopify CLI
- E2B sandbox testing before apply

### 2. Product Management
- Bulk CSV import/export
- AI-generated descriptions
- SEO optimization
- Multi-market translations

### 3. Email Marketing
- Shopify Email integration
- Automated flows (welcome, cart abandonment)
- AI copy generation
- Segmentation builder

### 4. SEO & Analytics
- Bulk meta tags editor
- Google Analytics 4 integration
- Performance insights
- Keyword research

### 5. Multi-Market
- Currency management
- AI translations
- Market-specific pricing
- Geo-routing

## Development Workflow

### Phase 1: Infrastructure (Week 1-2)
- Setup repo structure
- Configure Vercel deployment
- Initialize Convex database
- Setup Clerk authentication

### Phase 2: Core Features (Week 3-4)
- Implement 3 core agents (theme, CSV, SEO)
- Basic UI components
- Shopify API integration

### Phase 3: AI Workflows (Week 5-6)
- Multi-agent workflows
- Human-in-the-loop patterns
- E2B sandbox integration

### Phase 4: Advanced Features (Week 7-12)
- Email marketing
- Multi-market support
- Analytics dashboards

## Environment Variables

```bash
# Shopify
SHOPIFY_API_KEY=
SHOPIFY_API_SECRET=
SHOPIFY_STORE_DOMAIN=

# Anthropic
ANTHROPIC_API_KEY=

# Convex
CONVEX_DEPLOYMENT=
CONVEX_DEPLOY_KEY=

# Clerk
CLERK_SECRET_KEY=
PUBLIC_CLERK_PUBLISHABLE_KEY=

# E2B
E2B_API_KEY=
```

## Success Criteria

### Performance
- Page load: <2s
- Agent response: <3s
- Real-time updates: <100ms
- Lighthouse score: >90

### Reliability
- Uptime: >99.9%
- E2B test pass rate: >95%
- Zero data loss
- Error recovery: <1min

### Code Quality
- TypeScript strict mode
- Test coverage: >80%
- ESLint compliance: 100%
- Zero critical vulnerabilities

---

**Version:** 1.0.0  
**Last Updated:** 2026-02-04