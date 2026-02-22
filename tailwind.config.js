/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pak-green': '#22c55e',
        'pak-dark': '#2d2d2d',
        'pak-light-green': '#d1fae5',
      },
    },
  },
  plugins: [],
}

