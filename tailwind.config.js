/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        customizing: {
          pink: '#d594b7',
          green: '#a6f1ac',
          blue: '#8fb2d0',
        }
      },
      fontFamily: {
        "kalam": ['Kalam', 'cursive']
      }
    },
  },
  plugins: [],
}

