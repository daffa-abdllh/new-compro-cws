/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-md': '493px', // Tambahkan breakpoint kustom
        'custom-sm': '442px', // Tambahkan breakpoint kustom
      },
    },
  },
  plugins: [],
}