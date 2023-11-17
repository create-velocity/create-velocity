const { nextui } = require('@nextui-org/react');
const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './web/src/**/*.{js,ts,jsx,tsx}',
    path.join(
      __dirname,
      '..',
      'node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      defaultTheme: 'light',
      themes: {
        dark: {
          colors: {
            background: '#1f1f1f',
          },
        },
      },
    }),
  ],
};
