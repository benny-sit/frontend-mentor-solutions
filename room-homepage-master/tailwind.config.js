/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'league': 'League Spartan',
      },
      colors: {
        'dark-gray': {
          100: 'hsl(0, 0%, 63%)',
          200: 'hsl(0, 0%, 27%)'
        }
      },
    },
  },
  plugins: [],
}

