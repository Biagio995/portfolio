# Portfolio - Biagio Carannante

![Vue.js](https://img.shields.io/badge/Vue.js-3.4-4FC08D?style=flat&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=flat&logo=typescript&logoColor=white)
![Vuetify](https://img.shields.io/badge/Vuetify-3.5-1867C0?style=flat&logo=vuetify&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?style=flat&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-Private-red?style=flat)

A professional portfolio website built with modern web technologies.

## Features

- 🎨 Modern UI with Vuetify Material Design
- 🌍 Multi-language support (English, Italian, Greek)
- 📱 Fully responsive design
- ⚡ Fast and optimized with Vite
- 🎭 Smooth animations and transitions
- 📝 TypeScript for type safety
- 🎯 Professional contact forms with WhatsApp and Viber integration

## Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe development
- **Vuetify 3** - Material Design component library
- **Vue Router** - Client-side routing
- **Vue I18n** - Internationalization
- **Pinia** - State management
- **Vite** - Next-generation build tool
- **Sass** - CSS preprocessor

## Project Setup

### Install dependencies
```bash
npm install
```

### Development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

### Lint code
```bash
npm run lint
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   └── layout/
│   │       ├── TheNavbar.vue
│   │       └── TheFooter.vue
│   ├── views/
│   │   ├── HomeView.vue
│   │   └── ContactsView.vue
│   ├── router/
│   │   └── index.ts
│   ├── plugins/
│   │   ├── vuetify.ts
│   │   └── i18n.ts
│   ├── locales/
│   │   ├── en.json
│   │   ├── it.json
│   │   └── el.json
│   ├── types/
│   │   └── index.ts
│   ├── styles/
│   │   └── main.scss
│   ├── App.vue
│   └── main.ts
├── public/
│   └── images/
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Customization

### Theme Colors

Edit `src/plugins/vuetify.ts` to customize the color scheme:

```typescript
colors: {
  primary: '#41BBA6',
  secondary: '#191654',
  // ... other colors
}
```

### Translations

Add or modify translations in `src/locales/`:
- `en.json` - English
- `it.json` - Italian
- `el.json` - Greek

### Contact Information

Update phone numbers in `src/views/ContactsView.vue`:
- WhatsApp: `phoneNumber` variable in `sendWhatsApp` function
- Viber: `phoneNumber` variable in `sendViber` function

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 - Biagio Carannante. All rights reserved.
