/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'fira-mono': '"Fira Mono"',
      },
    },
    extend: {
      keyframes: {
        blink: {
          '0%, 49%, 100%': { opacity: 1 },
          '50%, 99%': { opacity: 0 },
        },
      },
      animation: {
        blink: 'blink 1s linear infinite',
      },
    },
  },
  plugins: [],
};
