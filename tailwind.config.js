/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '600px',
      md: '991px',
      lg: '1250px',
    },
    extend: {
      colors: {
        brown: '#895f5f',
      },
    },
  },
  plugins: [],
  important: true,
};
