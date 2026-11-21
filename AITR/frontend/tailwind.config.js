/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amu: {
          dark: '#0f172a',
          primary: '#1e3a8a',
          emerald: '#059669',
        }
      }
    },
  },
  plugins: [],
}
