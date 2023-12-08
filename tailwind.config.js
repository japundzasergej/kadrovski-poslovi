/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        button: '#166AEA',
      },
      fontFamily: {
        tenor: 'Tenor Sans, sans-serif',
      },
    },
  },
  plugins: [],
};
