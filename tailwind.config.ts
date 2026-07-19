import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium color palette inspired by Linear, Vercel, Stripe
        'primary': '#6366f1',
        'primary-dark': '#4f46e5',
        'primary-light': '#818cf8',
        'secondary': '#8b5cf6',
        'accent': '#06b6d4',
        'success': '#10b981',
        'warning': '#f59e0b',
        'error': '#ef4444',
        
        // Dark theme colors
        'bg-primary': '#09090b',
        'bg-secondary': '#0c0c0e',
        'bg-tertiary': '#121214',
        'surface': '#18181b',
        'surface-hover': '#1f1f23',
        'border': '#27272a',
        'border-light': '#3f3f46',
        
        // Text colors
        'text-primary': '#fafafa',
        'text-secondary': '#a1a1aa',
        'text-tertiary': '#71717a',
        
        // Gradient colors
        'gradient-1': '#6366f1',
        'gradient-2': '#8b5cf6',
        'gradient-3': '#06b6d4',
        
        // Legacy colors for compatibility
        'gh-green': '#10b981',
        'gh-green-dark': '#059669',
        'gh-bg': '#09090b',
        'gh-surface': '#18181b',
        'gh-border': '#27272a',
        'gh-text': '#fafafa',
        'gh-muted': '#a1a1aa',
        'gh-accent': '#6366f1',
        'gh-purple': '#8b5cf6',
        'gh-orange': '#f59e0b',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'bounce': 'bounce 1.5s infinite',
        'pulse-arrow': 'pulseArrow 1.5s infinite',
        'glow-scan': 'glowScan 3s ease-in-out infinite',
        'grow-up': 'growUp 1s ease-out forwards',
        'grow-right': 'growRight 1.2s ease-out forwards',
        'blink': 'blink 1.5s infinite',
        'ticker': 'ticker 25s linear infinite',
        'gauge': 'gaugeAnim 1.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'gradient-x': 'gradientX 3s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%,100%': { transform: 'rotate(45deg) translateY(-4px)' },
          '50%': { transform: 'rotate(45deg) translateY(4px)' },
        },
        pulseArrow: {
          '0%,100%': { opacity: '0.4', transform: 'translateX(0)' },
          '50%': { opacity: '1', transform: 'translateX(4px)' },
        },
        glowScan: {
          '0%,100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        growUp: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        growRight: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gaugeAnim: {
          '0%': { strokeDashoffset: '251.2' },
          '100%': { strokeDashoffset: '63' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
