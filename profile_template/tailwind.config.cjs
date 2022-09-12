/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arg: ["all_gothic_rounded", "sans-serif"],
      },
      animation: {
        switch: 'switch 0.2s ease-in-out 1 normal forwards',
        switchBack: 'switchBack 0.2s ease-in-out 1 normal forwards'
      },
      keyframes: {
        switch: {
          '0%': { left: '6px' },
          '50%': { width: '30%' },
          '100%': { left: 'calc(100% - 12px)' },
        },
        switchBack: {
          '0%': { right: '6px' },
          '50%': { width: '30%' },
          '100%': { right: 'calc(100% - 12px)' },
        },
      }
    },
  },
  plugins: [],
}
