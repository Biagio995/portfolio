# Setup Guide - Portfolio Project

This guide will help you set up and run the portfolio project on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A code editor (VS Code recommended)

## Installation Steps

### 1. Clone or Download the Project

If you haven't already, navigate to the project directory:

```bash
cd Portfolio
```

### 2. Install Dependencies

Run the following command to install all required packages:

```bash
npm install
```

This will install:
- Vue 3
- TypeScript
- Vuetify
- Vue Router
- Vue I18n
- Vite
- And all other dependencies

**Note:** This may take a few minutes depending on your internet connection.

### 3. Configure Environment Variables (Optional)

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Then edit the `.env` file to customize your settings if needed.

### 4. Run Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

The browser should open automatically. If not, manually navigate to the URL shown in the terminal.

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Lint and fix code issues

### Project Structure

```
src/
├── components/       # Reusable Vue components
│   └── layout/      # Layout components (Navbar, Footer)
├── views/           # Page components (Home, Contacts)
├── router/          # Vue Router configuration
├── plugins/         # Vue plugins (Vuetify, i18n)
├── locales/         # Translation files (en, it, el)
├── composables/     # Reusable composition functions
├── types/           # TypeScript type definitions
├── styles/          # Global styles
├── App.vue          # Root component
└── main.ts          # Application entry point
```

### Making Changes

1. **Edit Components**: Modify `.vue` files in `src/components/` or `src/views/`
2. **Update Translations**: Edit JSON files in `src/locales/`
3. **Change Theme**: Edit `src/plugins/vuetify.ts`
4. **Add Routes**: Edit `src/router/index.ts`

Changes will hot-reload automatically in the browser.

## Building for Production

### 1. Build the Project

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### 2. Preview Production Build

```bash
npm run preview
```

This serves the production build locally for testing.

### 3. Deploy

Upload the contents of the `dist/` directory to your web hosting service.

Popular hosting options:
- **Vercel** - Automatic deployments from Git
- **Netlify** - Simple drag-and-drop or Git integration
- **GitHub Pages** - Free hosting for static sites
- **Firebase Hosting** - Google's hosting solution

## Customization

### Update Contact Information

Edit `src/views/ContactsView.vue`:

```typescript
// Email
const email = 'YOUR_EMAIL@example.com'

// WhatsApp
const phoneNumber = 'YOUR_WHATSAPP_NUMBER'

// Viber
const phoneNumber = 'YOUR_VIBER_NUMBER'
```

Or create a `.env` file:

```env
VITE_EMAIL_ADDRESS="your-email@example.com"
VITE_WHATSAPP_NUMBER="393688046394"
VITE_VIBER_NUMBER="306943464283"
```

### Change Colors

Edit `src/plugins/vuetify.ts`:

```typescript
colors: {
  primary: '#41BBA6',    // Main accent color
  secondary: '#191654',   // Background color
  // ... add more colors
}
```

### Add New Language

1. Create a new JSON file in `src/locales/` (e.g., `fr.json`)
2. Add translations following the existing structure
3. Update `src/plugins/i18n.ts` to import the new language
4. Add the language code to `availableLocales` in `src/composables/useLocale.ts`

### Add Projects

Edit `src/views/HomeView.vue`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    name: 'Project Name',
    url: 'https://github.com/username/project'
  },
  // Add more projects...
]
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, Vite will automatically try the next available port.

To specify a different port, edit `vite.config.ts`:

```typescript
server: {
  port: 3001  // Change to your preferred port
}
```

### Dependencies Installation Issues

Try clearing npm cache:

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

Make sure all dependencies are installed:

```bash
npm install
```

Check that you're using Node.js v18 or higher:

```bash
node --version
```

### ESLint Errors

Fix linting issues automatically:

```bash
npm run lint
```

## VS Code Setup

### Recommended Extensions

Install these extensions for the best development experience:

1. **Volar** - Vue 3 language support
2. **TypeScript Vue Plugin** - TypeScript integration
3. **ESLint** - Code linting
4. **Prettier** - Code formatting

VS Code will prompt you to install recommended extensions when you open the project.

### Settings

The project includes VS Code settings for:
- Auto-formatting on save
- ESLint auto-fix
- Proper TypeScript integration

## Support

If you encounter any issues:

1. Check that all dependencies are installed correctly
2. Ensure you're using a compatible Node.js version
3. Try deleting `node_modules` and reinstalling
4. Check the browser console for errors

## Next Steps

- Customize the content and styling
- Add more projects to your portfolio
- Deploy to production
- Set up a custom domain

Enjoy building your portfolio! 🚀
