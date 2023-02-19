/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      fira: 'Fira Code',
    },
    extend: {
      keyframes: {
        blink: {
          '0%, 49%, 100%': { opacity: 1 },
          '50%, 99%': { opacity: 0 },
        },
        'fade-in': {
          '0%': { opacity: 0, scale: 0 },
          '100%': { opacity: 1, scale: 1 },
        },
      },
      animation: {
        blink: 'blink 1s linear infinite',
        'fade-in': 'fade-in 0.5s ease-in-out',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
