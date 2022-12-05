/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors:{
        green:{
          "dark": "#015F43",
          "normal": "#00875F",
          "light": "#00B37E"
        }
      }
    },
  },
  plugins: [],
}
