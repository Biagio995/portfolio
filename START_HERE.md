# 🚀 START HERE - Quick Start Guide

Welcome to your newly refactored Vue.js portfolio! This guide will get you up and running in minutes.

## ⚡ Quick Start (3 Steps)

### 1. Install Dependencies

Open your terminal in this directory and run:

```bash
npm install
```

**Wait for installation to complete** (this may take 2-3 minutes)

### 2. Start Development Server

```bash
npm run dev
```

Your browser should automatically open to `http://localhost:3000`

### 3. Start Coding! 🎉

The app will automatically reload when you make changes.

## 📁 What You Need to Know

### Important Files

- **`src/views/HomeView.vue`** - Your home page
- **`src/views/ContactsView.vue`** - Contact form page
- **`src/locales/*.json`** - Translations (English, Italian, Greek)
- **`src/plugins/vuetify.ts`** - Theme colors and settings

### Project Structure

```
src/
├── views/          ← Your pages go here
├── components/     ← Reusable components
├── locales/        ← Translations
├── router/         ← URL routing
└── plugins/        ← Vuetify and i18n setup
```

## 🎨 Customization

### Change Your Contact Information

Edit `src/views/ContactsView.vue`:

Find these lines and update with your information:

```typescript
const email = 'csarannabiagio@gmail.com'  // Email address
const phoneNumber = '393688046394'        // WhatsApp
const phoneNumber = '306943464283'        // Viber
```

Or use environment variables (create a `.env` file):

```env
VITE_EMAIL_ADDRESS="your-email@example.com"
VITE_WHATSAPP_NUMBER="393688046394"
VITE_VIBER_NUMBER="306943464283"
```

### Change Colors

Edit `src/plugins/vuetify.ts`:

```typescript
colors: {
  primary: '#41BBA6',    // Your main color
  secondary: '#191654',  // Background color
}
```

### Add Projects

Edit `src/views/HomeView.vue`:

```typescript
const projects: Project[] = [
  {
    id: 1,
    name: 'Your Project Name',
    url: 'https://github.com/yourusername/project'
  },
  // Add more here...
]
```

### Update Your Info

Edit `src/locales/en.json` (and it.json, el.json):

```json
{
  "home": {
    "whoAmI": {
      "text": "Your custom description here"
    }
  }
}
```

## 🔧 Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check and fix code issues
```

## 📚 Documentation

Need more details? Check these files:

1. **`SETUP.md`** - Detailed setup instructions
2. **`DEPLOY.md`** - How to deploy to production
3. **`CHECKLIST.md`** - Pre-deployment checklist
4. **`README.md`** - Full project documentation
5. **`MIGRATION_SUMMARY.md`** - What changed from old version

## 🎯 Next Steps

### Immediate (Today)

1. ✅ Install dependencies
2. ✅ Run dev server
3. ✅ Update contact information
4. ✅ Add your projects
5. ✅ Update "About Me" text

### Short-term (This Week)

1. ✅ Customize colors to match your brand
2. ✅ Add more projects to portfolio
3. ✅ Update translations in all languages
4. ✅ Test on mobile devices
5. ✅ Run through CHECKLIST.md

### Before Launch

1. ✅ Build project (`npm run build`)
2. ✅ Preview build (`npm run preview`)
3. ✅ Test all features
4. ✅ Choose hosting platform (see DEPLOY.md)
5. ✅ Deploy!

## ❓ Common Questions

### Q: How do I add a new page?

1. Create a new file in `src/views/` (e.g., `AboutView.vue`)
2. Add route in `src/router/index.ts`
3. Add link in `src/components/layout/TheNavbar.vue`

### Q: How do I change the language?

Click the language dropdown in the navbar (EN / IT / EL)

### Q: How do I add a new language?

1. Create `src/locales/fr.json` (for example)
2. Update `src/plugins/i18n.ts` to import it
3. Add 'fr' to `availableLocales` in `src/composables/useLocale.ts`

### Q: Where are the styles?

- Global styles: `src/styles/main.scss`
- Component styles: Inside each `.vue` file's `<style>` section
- Theme colors: `src/plugins/vuetify.ts`

### Q: How do I deploy?

See `DEPLOY.md` for detailed instructions. Quick options:

- **Vercel** (easiest): Connect GitHub repo, auto-deploy
- **Netlify**: Same as Vercel
- **GitHub Pages**: Free static hosting

## 🆘 Troubleshooting

### Port 3000 already in use
Vite will automatically use another port (3001, 3002, etc.)

### Installation fails
```bash
# Clear cache and try again
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Code isn't updating
- Save the file (Ctrl+S / Cmd+S)
- Check terminal for errors
- Restart dev server (Ctrl+C, then `npm run dev`)

### Build fails
```bash
# Make sure dependencies are installed
npm install

# Check for TypeScript errors
npm run build
```

## 💡 Tips

- **Save often** - Changes auto-reload
- **Check console** - Browser console shows errors
- **Use VSCode** - Recommended editor with great Vue support
- **Install extensions** - VSCode will prompt for recommended extensions
- **Read docs** - All guides in this folder
- **Commit often** - Use git to track changes

## 🎉 You're Ready!

Your portfolio is now powered by:

- ⚡ **Vue 3** - Modern reactive framework
- 🔷 **TypeScript** - Type-safe code
- 🎨 **Vuetify** - Beautiful Material Design
- 🚀 **Vite** - Lightning-fast development

**Start developing:**
```bash
npm run dev
```

**Questions?** Check the documentation files in this folder.

**Happy coding!** 🚀

---

## 📞 Quick Reference Card

| Task | File to Edit |
|------|-------------|
| Update your info | `src/locales/*.json` |
| Change colors | `src/plugins/vuetify.ts` |
| Add projects | `src/views/HomeView.vue` |
| Update contact numbers | `src/views/ContactsView.vue` |
| Add new page | Create in `src/views/` + update router |
| Change navbar | `src/components/layout/TheNavbar.vue` |
| Update footer | `src/components/layout/TheFooter.vue` |
| Global styles | `src/styles/main.scss` |

## 🔗 Useful Links

- [Vue 3 Docs](https://vuejs.org/)
- [Vuetify Docs](https://vuetifyjs.com/)
- [TypeScript Docs](https://www.typescriptlang.org/)
- [Vite Docs](https://vitejs.dev/)

---

**Remember:** This is YOUR portfolio. Customize it, experiment, and make it unique! 🎨
