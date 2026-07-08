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
        'gh-green': '#3fb950',
        'gh-green-dark': '#238636',
        'gh-bg': '#0d1117',
        'gh-surface': '#161b22',
        'gh-border': '#30363d',
        'gh-text': '#e6edf3',
        'gh-muted': '#8b949e',
        'gh-accent': '#58a6ff',
        'gh-purple': '#7c3aed',
        'gh-orange': '#f97316',
        'gh-yellow': '#fbbf24',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Mona Sans', 'Segoe UI', 'sans-serif'],
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
      },
    },
  },
  plugins: [],
}
export default config
