# Deployment Guide

This guide covers multiple deployment options for your Vue.js portfolio.

## Prerequisites

- Your project is built and working locally
- You have a Git repository (recommended)
- Project passes all linting checks: `npm run lint`

## Option 1: Vercel (Recommended - Easiest)

Vercel offers automatic deployments, edge caching, and great performance.

### Steps:

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Deploy via Web**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub, GitLab, or Bitbucket
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

3. **Deploy via CLI**:
   ```bash
   vercel
   ```
   Follow the prompts. Your site will be live in seconds!

4. **Custom Domain** (optional):
   - Go to your project settings on Vercel
   - Add your custom domain
   - Update DNS records as instructed

### Configuration

The project includes `vercel.json` for proper SPA routing.

## Option 2: Netlify

Netlify provides similar features to Vercel with an intuitive interface.

### Steps:

1. **Deploy via Web**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Build settings (auto-detected):
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

2. **Deploy via Drag & Drop**:
   - Build locally: `npm run build`
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag the `dist` folder onto the page

3. **Deploy via CLI**:
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

### Configuration

The project includes `netlify.toml` for build settings and redirects.

## Option 3: GitHub Pages

Free hosting directly from your GitHub repository.

### Steps:

1. **Install gh-pages**:
   ```bash
   npm install -D gh-pages
   ```

2. **Update package.json**:
   Add these scripts:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. **Update vite.config.ts**:
   Add base URL:
   ```typescript
   export default defineConfig({
     base: '/Portfolio/', // Your repo name
     // ... rest of config
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Configure GitHub**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Save

Your site will be at: `https://yourusername.github.io/Portfolio/`

## Option 4: Firebase Hosting

Google's hosting solution with CDN and SSL.

### Steps:

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**:
   ```bash
   firebase login
   ```

3. **Initialize Firebase**:
   ```bash
   firebase init hosting
   ```
   - Choose or create a project
   - Public directory: `dist`
   - Single-page app: `Yes`
   - GitHub auto-deploy: `Optional`

4. **Build & Deploy**:
   ```bash
   npm run build
   firebase deploy
   ```

Your site will be at: `https://your-project.web.app`

## Option 5: Docker + Any Cloud Provider

Deploy using Docker to AWS, DigitalOcean, Google Cloud, etc.

### Steps:

1. **Build Docker Image**:
   ```bash
   docker build -t portfolio .
   ```

2. **Test Locally**:
   ```bash
   docker run -p 8080:80 portfolio
   ```
   Visit `http://localhost:8080`

3. **Deploy to Cloud**:

   **DigitalOcean App Platform**:
   - Push to GitHub
   - Create new app from GitHub repo
   - DigitalOcean auto-detects Dockerfile
   - Deploy

   **AWS ECS/Fargate**:
   - Push image to ECR
   - Create ECS task definition
   - Deploy service

   **Google Cloud Run**:
   ```bash
   gcloud run deploy portfolio --source .
   ```

## Option 6: Traditional Hosting (cPanel/FTP)

For traditional web hosting services.

### Steps:

1. **Build the Project**:
   ```bash
   npm run build
   ```

2. **Upload Files**:
   - Connect via FTP/SFTP
   - Upload contents of `dist/` folder to `public_html` or `www`

3. **Configure .htaccess** (for Apache):
   Create `.htaccess` in your upload directory:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

## Environment Variables

### Production Environment Variables

Most platforms support environment variables:

**Vercel/Netlify**:
- Go to project settings
- Add environment variables
- Prefix with `VITE_` (e.g., `VITE_WHATSAPP_NUMBER`)

**GitHub Actions**:
- Go to Settings → Secrets
- Add repository secrets

**Docker**:
```bash
docker run -p 8080:80 -e VITE_WHATSAPP_NUMBER=123456 portfolio
```

## Custom Domain Setup

### 1. Purchase Domain
Buy from Namecheap, Google Domains, Cloudflare, etc.

### 2. Configure DNS

**For Vercel/Netlify**:
- Add domain in platform settings
- Update DNS records:
  ```
  Type: A
  Name: @
  Value: (provided by platform)

  Type: CNAME
  Name: www
  Value: (provided by platform)
  ```

**For GitHub Pages**:
- Create `CNAME` file in `public/` folder with your domain
- Update DNS A records to GitHub's IPs

### 3. SSL Certificate
Most platforms (Vercel, Netlify, Cloudflare) provide free SSL automatically.

## Performance Optimization

### Before Deployment:

1. **Optimize Images**:
   - Compress images
   - Use WebP format
   - Use appropriate sizes

2. **Enable Compression**:
   Most platforms enable this automatically.

3. **Check Bundle Size**:
   ```bash
   npm run build
   ```
   Review build output for large chunks.

4. **Lighthouse Audit**:
   - Build and preview: `npm run preview`
   - Run Lighthouse in Chrome DevTools
   - Fix any issues

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages are accessible
- [ ] Navigation works
- [ ] Forms work (WhatsApp/Viber links)
- [ ] Language switching works
- [ ] Mobile responsive
- [ ] SSL certificate is active (HTTPS)
- [ ] Custom domain configured (if applicable)
- [ ] Analytics setup (optional)

## Continuous Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

This automatically deploys on every push to main.

## Troubleshooting

### Blank Page After Deploy
- Check browser console for errors
- Verify `base` URL in `vite.config.ts`
- Check routing configuration

### 404 on Refresh
- Verify SPA redirect configuration
- Check `.htaccess` or platform redirect rules

### Environment Variables Not Working
- Ensure variables are prefixed with `VITE_`
- Rebuild after adding variables
- Check platform documentation

## Monitoring & Analytics

### Add Analytics:

1. **Google Analytics**:
   - Add to `index.html` or use Vue plugin

2. **Plausible/Fathom** (Privacy-friendly):
   - Add script to `index.html`

3. **Performance Monitoring**:
   - Use platform's built-in analytics
   - Set up error tracking (Sentry, LogRocket)

## Cost Estimates

- **Vercel/Netlify**: Free for personal projects
- **GitHub Pages**: Free
- **Firebase**: Free tier (generous limits)
- **DigitalOcean**: ~$5/month
- **AWS/GCP**: ~$5-20/month depending on traffic
- **Traditional Hosting**: $3-10/month

## Recommended Choice

For this portfolio, **Vercel** or **Netlify** are recommended:
- ✅ Free
- ✅ Automatic SSL
- ✅ Global CDN
- ✅ Automatic deployments from Git
- ✅ Easy custom domains
- ✅ Great performance
- ✅ No configuration needed

Simply connect your Git repository and you're done!

## Support

If you encounter deployment issues:
1. Check platform documentation
2. Verify build succeeds locally
3. Check platform logs/console
4. Ensure all dependencies are in `package.json`

Happy deploying! 🚀
