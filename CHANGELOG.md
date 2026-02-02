# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2025-02-02

### 🎉 Complete Refactor

Complete rewrite from vanilla HTML/CSS/JS to modern Vue.js stack.

### ✨ Added

- **Vue 3** with Composition API
- **TypeScript** for type safety
- **Vuetify 3** Material Design component library
- **Vue Router** for SPA navigation
- **Vue I18n** for internationalization (English, Italian, Greek)
- **Pinia** for state management (future use)
- **Vite** as build tool for fast development
- **ESLint + Prettier** for code quality
- Reusable composables (`useTypewriter`, `useLocale`)
- Professional component structure
- Comprehensive documentation (README, SETUP, DEPLOY)
- Docker support
- GitHub Actions CI/CD
- Deployment configurations (Vercel, Netlify, Docker)

### 🎨 Improved

- Modern, responsive UI with Vuetify
- Smooth page transitions
- Better mobile navigation with drawer
- Enhanced accessibility
- Optimized performance
- Professional code organization
- Type-safe development with TypeScript

### 🔧 Technical

- Sass for styling with variables
- Path aliases (`@/`)
- Environment variable support
- Production-ready build configuration
- SEO-friendly routing
- Modern gradient backgrounds
- Custom Vuetify theme matching original colors

### 📝 Documentation

- Comprehensive README
- Detailed setup guide
- Deployment guide for multiple platforms
- Inline code comments
- TypeScript type definitions

### 🗑️ Removed

- Legacy HTML files (contatti.html)
- Old CSS files (index.css, contatti.css)
- Vanilla JavaScript files (index.js, contatti.js, common.js)
- Bootstrap dependency

### 🔄 Migrated

- Home page → `HomeView.vue`
- Contact page → `ContactsView.vue`
- Navbar → `TheNavbar.vue` component
- Footer → `TheFooter.vue` component
- Translations → JSON files with i18n
- Styling → Vuetify theme + Sass

## [1.0.0] - 2025-01-XX

### Initial Release

- Basic portfolio with HTML/CSS/JS
- Bootstrap styling
- Multi-language support with vanilla JS
- Contact form with WhatsApp/Viber integration
- Typewriter effect
- Projects section
