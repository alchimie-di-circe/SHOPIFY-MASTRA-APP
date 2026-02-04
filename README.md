# Shopify AI Management Suite

**Shopify AI-Powered Management Web App**

Centralizza la gestione completa del tuo Shopify store con AI assistants, bulk operations, e workflow automation.

## 🚀 Stack Tecnologico

### Frontend
- **SvelteKit 4.0+** - Framework principale
- **TailwindCSS** - Styling utility-first
- **Shadcn-Svelte** - UI components
- **TipTap** - WYSIWYG editor
- **Vite** - Build tool

### AI Layer
- **Mastra** - Multi-agent orchestration
- **E2B Sandbox** - Safe code execution
- **Shopify MCP** - Tool integration
- **Claude 3.5 Sonnet** - Primary LLM

### Backend & Database
- **Convex** - Real-time database + functions
- **Clerk** - Authentication
- **Upstash Redis** - Rate limiting

### Integrations
- **Shopify CLI** - Theme management
- **Shopify Admin API** - Products, orders, customers
- **Judge.me API** - Reviews management
- **Google Analytics 4** - Analytics
- **Google Merchant Center** - Product feeds

## 📁 Struttura Progetto

```
SHOPIFY-MASTRA-APP/
├── .devcontainer/          # GitHub Codespaces config
├── .factory/               # Factory.ai droids & templates
│   ├── droids/            # CLI droids (dev-time)
│   ├── agents/            # Production agents (runtime)
│   ├── templates/         # Reusable templates
│   └── knowledge/         # Knowledge base
├── .github/
│   └── workflows/         # CI/CD pipelines
├── src/
│   ├── routes/            # SvelteKit routes
│   ├── lib/
│   │   ├── agents/        # Mastra agents
│   │   ├── tools/         # MCP tools
│   │   ├── sandbox/       # E2B integrations
│   │   └── components/    # Svelte components
│   └── convex/            # Convex schema & functions
├── docs/                  # Documentation
│   ├── prd.md            # Product Requirements
│   ├── architecture.md    # System architecture
│   └── api/              # API documentation
└── tests/                 # Test suites
```

## 🎯 Feature Set

### 1. Theme Editor
- Visual editor con live preview
- AI chat assistant per modifiche naturali
- Shopify CLI integration
- E2B sandbox testing

### 2. Product Management
- Bulk operations via CSV
- AI-powered descriptions & SEO
- Multi-market translations
- Image optimization

### 3. Email Marketing
- Shopify Email integration
- Automated flows (welcome, abandoned cart)
- AI copy generation
- Segmentation builder

### 4. Multi-Market
- Currency & pricing management
- AI translations
- Geo-based routing
- Market-specific content

### 5. SEO & Analytics
- Meta tags bulk editor
- Google Analytics 4 integration
- Google Merchant Center
- Performance insights

## 🚦 Quick Start

### Prerequisites
- Node.js 20+
- Shopify Partner account
- Anthropic API key (Claude)

### Development Setup

1. **Clone & Install**
```bash
git clone https://github.com/alchimie-di-circe/SHOPIFY-MASTRA-APP.git
cd SHOPIFY-MASTRA-APP
npm install
```

2. **Environment Variables**
```bash
cp .env.example .env
# Edit .env with your keys
```

3. **Shopify CLI Login**
```bash
shopify login
shopify theme dev --store=your-dev-store.myshopify.com
```

4. **Start Development**
```bash
npm run dev
```

### Using GitHub Codespaces

1. Click "Code" → "Create codespace on start-setup"
2. Codespace will auto-setup con devcontainer
3. Run `npm run dev`
4. Access via forwarded ports

## 📖 Documentation

- [Product Requirements (PRD)](./docs/prd.md)
- [System Architecture](./docs/architecture.md)
- [API Documentation](./docs/api/)
- [Factory.ai Droids](./.factory/README.md)

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run test         # Run tests
npm run lint         # Lint code
npm run type-check   # TypeScript checks
```

### Factory.ai CLI Droids

Il progetto usa Factory.ai per coordinare CLI droids specializzati durante lo sviluppo:

**CLI Droids (Dev-Time):**
- `@mastra` - Mastra AI framework expert
- `@convex` - Convex backend expert
- `@svelte` - SvelteKit frontend expert
- `@shopify` - Shopify API/CLI expert
- `@devops` - CI/CD & deployment expert
- `@testing` - QA & E2B sandbox testing expert

**Production Agents (Runtime):**
- `themeEditorAgent` - Modifica temi Shopify
- `seoOptimizerAgent` - Ottimizza SEO
- `csvValidatorAgent` - Valida CSV bulk
- `emailCopyAgent` - Genera email copy
- `productDescriptionAgent` - Crea descrizioni

Vedi [Factory.ai Documentation](./.factory/README.md)

## 🚀 Deployment

### Web App (Vercel)
```bash
vercel deploy
```

GitHub Actions deploy automaticamente su:
- **Staging:** Push su `develop` branch
- **Production:** Push su `main` branch

<!-- 
### Desktop App (Future - Post-MVP)
Electron packaging sarà aggiunto nella Phase 5 (Week 13-14)
-->

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

MIT License - vedi [LICENSE](./LICENSE)

## 🙏 Acknowledgments

- [Mastra](https://mastra.ai) - AI orchestration framework
- [E2B](https://e2b.dev) - Code execution sandboxes
- [Convex](https://convex.dev) - Real-time database
- [SvelteKit](https://kit.svelte.dev) - Web framework

---

**Built with ❤️ by [Alex Tombollillo](https://github.com/alchimie-di-circe)**
