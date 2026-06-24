/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B3A5C',
        accent:  '#2E7D9F',
        dark:    '#0D1B2A',
        surface: '#F7F9FB',
        text:    '#1A1A2E',
        muted:   '#64748B',
      },
      fontFamily: {
        sora:  ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        marquee:  'marquee 30s linear infinite',
        marquee2: 'marquee2 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%':   { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}
