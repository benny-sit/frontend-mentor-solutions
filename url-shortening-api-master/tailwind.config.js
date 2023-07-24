/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins']
      },
      colors: {
        'url-cyan': 'hsl(180, 66%, 49%)',
        'url-dark-violet': 'hsl(257, 27%, 26%)',
        'url-red': 'hsl(0, 87%, 67%)',
        'url-gray': 'hsl(0, 0%, 75%)',
        'url-gray-violet' :'hsl(257, 7%, 63%)',
        'url-very-dark-blue' :'hsl(255, 11%, 22%)',
        'url-very-dark-violet': 'hsl(260, 8%, 14%)',
      },
      backgroundImage: {
        'shorten': "url('/images/bg-shorten-desktop.svg')",
        'shorten-mobile': "url('/images/bg-shorten-mobile.svg')",
        'boost': "url('/images/bg-boost-desktop.svg')",
        'boost-mobile': "url('/images/bg-boost-mobile.svg')",
      }
    },
  },
  plugins: [],
}

