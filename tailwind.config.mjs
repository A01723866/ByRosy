/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'off-white': '#FAFAFA',
        'warm-gray': '#8B7355',
        'deep-charcoal': '#2C2C2C',
        'gold-accent': '#D4AF37',
        'soft-cream': '#F7F5F3',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        tempting: ['Tempting', 'cursive'],
      },
    },
  },
  plugins: [],
}; 