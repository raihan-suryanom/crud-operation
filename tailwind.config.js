/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/common/components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        dark: '#121212',
        primary: '#FECC1B',
        light: '#F2F2F2',
      },
    },
  },
  plugins: [],
};
