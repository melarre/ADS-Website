export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#d12429', // Matching the red from the logo roughly
          dark: '#111827',
          gray: '#f3f4f6'
        }
      }
    },
  },
  plugins: [],
}
