const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  // darkMode: media,
  theme: {
    extend: {
      fontSize: {
        'xxxs': '.4rem',
        'xxs': '.6rem',
      },
      colors: {
        primary: '#0073E5',
        primaryLHue: '#0099E5',
        primaryDHue: '#004DE5',
        secondary: '#151515',
        accent: '#40C000',
        highlight: '#FF4D4D',
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
