/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary-100': '#415A77',
        'primary-70': '#778DA9',
        'neutral-100': '#E0E1DD',
        'neutral-400': '#1B263B',
        'neutral-500': '#0D1B2A',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

