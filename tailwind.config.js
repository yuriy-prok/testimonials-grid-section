/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          moderateViolet: 'hsl(263, 55%, 52%)',
          veryDarkGrayishBlue: 'hsl(217, 19%, 35%)',
          veryDarkBlackishBlue: 'hsl(219, 29%, 14%)',
          white: 'hsl(0, 0%, 100%)',
        },
        neutral: {
          lightGray: 'hsl(0, 0%, 81%)',
          lightGrayishBlue: 'hsl(210, 46%, 95%)',
        },
      },
      fontFamily: {
        body: ['"Barlow Semi Condensed"', 'sans-serif'],
      },
      fontSize: {
        easy: '13px',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/bg-pattern-quotation.svg')"
      },
    },
  },
  plugins: [],
}

