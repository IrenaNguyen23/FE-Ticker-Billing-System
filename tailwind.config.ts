import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          900: '#0c4a6e',
        },
        dark: {
          950: '#020917',
          900: '#0d1526',
          800: '#162038',
          700: '#1e2d4a',
          600: '#263554',
        },
        neon: {
          blue: '#00d4ff',
          green: '#00ff87',
          amber: '#ffb800',
        },
        success: '#22c55e',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        card: '1.25rem',
        badge: '0.5rem',
        input: '0.75rem',
        pill: '9999px',
      },
      boxShadow: {
        card: '0 0 0 1px rgba(255,255,255,0.05), 0 4px 24px rgba(0,0,0,0.4)',
        'glow-blue': '0 0 20px rgba(0, 212, 255, 0.3)',
        'glow-green': '0 0 20px rgba(0, 255, 135, 0.3)',
        inner: 'inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(0,255,135,0.2)' },
          '50%': { boxShadow: '0 0 35px rgba(0,255,135,0.5)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'border-pulse': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'float-up': {
          '0%': { transform: 'translateY(8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'glow-pulse': 'glow-pulse 2.2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 12s ease infinite',
        'border-pulse': 'border-pulse 1.6s ease-in-out infinite',
        shimmer: 'shimmer 1.6s linear infinite',
        'float-up': 'float-up 0.6s ease-out',
      },
    },
  },
  plugins: [forms],
  darkMode: ['class', '.dark'],
}

export default config
