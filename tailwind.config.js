/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-2xl': '1460px',
        'custom-lg': '880px',
        'custom-md': '493px',
        'custom-sm': '442px',
        'custom-sm2': '423px',
        'custom-sm3': '500px',
      },
    },
  },
  plugins: [],
}