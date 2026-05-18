/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#FAF8F5',
        'bg-secondary': '#FFFFFF',
        'bg-card': '#FFFFFF',
        'bg-light': '#F8F7F4',
        'accent': '#0062FF',
        'accent-cyan': '#FF0E68',
        'accent-hover': '#004ecc',
        'text-primary': '#0F172A',
        'text-secondary': '#475569',
        'text-muted': '#64748B',
        'text-dark': '#0F172A',
        'border-dark': '#E2E8F0',
        'border-light': '#F1F5F9',
        'success': '#10B981',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
