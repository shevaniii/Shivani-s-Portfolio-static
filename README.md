# Shivani Giri - Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer and Graphics Lead.

## 🚀 Built With
- React 18
- Vite
- Tailwind CSS
- Lucide React Icons

## 📱 Features
- Fully responsive design
- Smooth scrolling navigation
- Modern glassmorphism UI
- Mobile-first approach
- Optimized performance

## 🛠️ Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

🌐 Live Demo https://shivani-s-portfolio-static.vercel.app
View Portfolio

📞 Contact

Email: shivani.goswami212005@gmail.com
GitHub: @shevaniii
LinkedIn: Shivani Giri


© 2024 Shivani Giri. All rights reserved.

#### .gitignore
Dependencies
node_modules/
/.pnp
.pnp.js
Production build
/dist
/build
Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
Runtime data
pids
*.pid
*.seed
*.pid.lock
IDE
.vscode/
.idea/
*.swp
*.swo
OS
.DS_Store
Thumbs.db

## 🚀 Deployment Options

### Option 1: Netlify (Recommended)
1. Create new repository on GitHub
2. Push your code
3. Connect GitHub repo to Netlify
4. Set build command: `npm run build`
5. Set publish directory: `dist`

### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts

### Option 3: GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts:
   ```json
   "homepage": "https://shevaniii.github.io/shivani-portfolio",
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"

Run npm run deploy

📊 Performance Benefits

Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
Bundle Size: Optimized with Vite
Loading Speed: < 2 seconds first contentful paint
Mobile Performance: Excellent responsive design

🎨 Customization Tips

Update colors in Tailwind config
Add your own images to src/assets/
Modify sections in Portfolio.jsx
Add new components in src/components/
