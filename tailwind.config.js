/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#7bf1a8',
        dark: '#0f172a',
        secondary: '#c1fba4'
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}

