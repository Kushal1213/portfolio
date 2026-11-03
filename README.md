# Kushal Choudhary portfolio

A recruiter-focused engineering portfolio for AI products, data platforms, backend systems, and open-source work. The experience prioritizes current products, measurable proof, detailed case studies, and a fast path to the latest resume.

## Technology

- Next.js 14 App Router and TypeScript
- Tailwind CSS with an Outfit and IBM Plex Mono type system
- GSAP ScrollTrigger and Framer Motion
- Phosphor icons
- Static metadata, JSON-LD, sitemap, robots, and a reproducible Open Graph image
- Automated monthly health checks for public project links

## Experience structure

- Recruiter snapshot with role fit, scale, graduation, and contribution proof
- Five current priority projects
- Measurable project evidence carousel
- Five in-depth case studies with walkthrough videos where available
- Experience, open source, capabilities, education, credentials, and direct contact
- Expandable archive of all public repositories
- Reduced-motion support, keyboard focus states, semantic landmarks, and responsive layouts

## Local development

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

# Verify public project links
npm run check:links

# Regenerate the social preview image
npm run render:og
```

## Deployment

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

## Project structure

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

## Customization

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
