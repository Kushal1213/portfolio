# Kushal Choudhary — Portfolio Website

A modern, production-ready portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features advanced animations, custom cursor effects, and a fully responsive design.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel/Netlify ready

## ✨ Features

- **Custom Cursor**: Smooth animated cursor with hover effects
- **Particle Background**: Animated starfield background
- **Scroll Animations**: Reveal animations on scroll
- **Responsive Design**: Mobile-first approach
- **Dark Theme**: GitHub-inspired dark theme
- **SEO Optimized**: Meta tags and proper structure
- **Performance**: Optimized images and code splitting

## 📦 Installation

```bash
# Navigate to portfolio directory
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with default settings

### Netlify

1. Push your code to GitHub
2. Import project in [Netlify](https://netlify.com)
3. Use these build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Install command: `npm install`

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── OpenSource.tsx
│   │   ├── ParticleBackground.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   └── lib/
│       └── utils.ts
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── postcss.config.js
└── vercel.json
```

## 🎨 Customization

### Update Content

Edit the component files to update your information:

- **Hero**: `src/components/Hero.tsx` - Name, badges, CTAs
- **About**: `src/components/About.tsx` - Bio, stats
- **Open Source**: `src/components/OpenSource.tsx` - PRs, contributions
- **Projects**: `src/components/Projects.tsx` - Project details
- **Experience**: `src/components/Experience.tsx` - Work history
- **Skills**: `src/components/Skills.tsx` - Skill categories
- **Certifications**: `src/components/Certifications.tsx` - Certificates
- **Contact**: `src/components/Contact.tsx` - Contact links

### Update Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  'gh-green': '#3fb950',
  'gh-accent': '#58a6ff',
  'gh-purple': '#7c3aed',
  // ... more colors
}
```

## 🔧 Configuration

### Environment Variables

No environment variables are required for basic functionality. Add any needed variables to `.env.local`:

```env
# Example for analytics
NEXT_PUBLIC_GA_ID=your-ga-id
```

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Kushal Choudhary**
- GitHub: [@Kushal1213](https://github.com/Kushal1213)
- Email: kushalchoudhary1213@gmail.com

---

Built with ❤️ using Next.js and modern web technologies.
