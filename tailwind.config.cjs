/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: 'Roboto, sans-serif',
      mono: ['Roboto Mono, monospace'],
    },
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 24,
      mega: 160,
    },
    colors: {
      transparent: 'transparent',
      'black': '#000000',
      'white': '#FFFFFF',

      green: {
        800: '#015F43',
        500: '#00875F',
        300: '#00B37E',
      },
      gray: {
        900: '#121214',
        800: '#202024',
        700: '#29292E',
        600: '#323238',
        500: '#7C7C8A',
        300: '#8D8D99',
        200: '#C4C4CC',
        100: '#E1E1E6',
      },
      red: {
        900: '#7A1921',
        500: '#AB222E',
      },
    },
  },
  extend: {
  },
  plugins: [],
}
