/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F1419',
        secondary: '#1A1F2E',
        accent: '#FF6B35',
        'accent-light': '#FFB347',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #0F1419 0%, #1A1F2E 100%)',
      },
    },
  },
  plugins: [],
}
