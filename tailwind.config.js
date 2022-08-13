/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/common/components/**/*.jsx',
    './src/features/**/*.jsx',
    './src/pages/**/*.jsx',
  ],
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
