/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {

      colors: {
        primary: '#047857',
        secondary: '#EFEFEF',
        dark: '#27272A',
        nude: '#FFFBF6',
        transparent: 'transparent',
        current: 'currentColor',
        happy: '#FEFCE8',
        happyDark: '#FEF08A',
        sad: '#EFF6FF',
        sadDark: 'BFDBFE',
        fearful: '#FFF7ED',
        fearfulDark: '#FED7AA',
        disgusted: '#F0FDF4',
        disgustedDark: '#BBF7D0',
        angry: '#FAF5FF',
        angryDark: '#E9D5FF',
        surprised: '#FDF2F8',
        surprisedDark: '#FBCFE8',
        positive: '#FEF2F2',
        positiveDark: '#FECDD3',
        neutral: '#FAFAFA',
        neutralDark: '#E4E4E7',
        negative: '#F3F4F6',
        negativeDark: '#E5E7EB',
      },
      fontFamily: {
        'sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: []
}
