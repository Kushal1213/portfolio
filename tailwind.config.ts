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
        primary: '#b6d85c',
        'primary-dark': '#95b83d',
        'primary-light': '#d0ea87',
        secondary: '#b6d85c',
        accent: '#b6d85c',
        success: '#b6d85c',
        warning: '#d8b75e',
        error: '#d96d61',
        'bg-primary': '#11130f',
        'bg-secondary': '#171a14',
        'bg-tertiary': '#1d2119',
        surface: '#1d2119',
        'surface-hover': '#292e24',
        border: '#343b2e',
        'border-light': '#48513f',
        'text-primary': '#f0f2e9',
        'text-secondary': '#b4b9ab',
        'text-tertiary': '#7f8879',
      },
      fontFamily: {
        mono: ['var(--font-ibm-plex-mono)', 'ui-monospace', 'monospace'],
        sans: ['var(--font-manrope)', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        panel: '1rem',
        control: '0.5rem',
      },
    },
  },
  plugins: [],
}

export default config
