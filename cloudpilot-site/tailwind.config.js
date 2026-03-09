/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
      },
      colors: {
        background: '#ffffff',
        card: '#f9fafb',
        border: '#e5e7eb',
        foreground: '#1f2937',
        muted: '#6b7280',
        primary: '#0066cc',
        'primary-foreground': '#ffffff',
        accent: '#000000',
        subtle: '#d1d5db',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out both',
        'slide-in': 'slideIn 0.4s ease-out both',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-8px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
