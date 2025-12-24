/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'xenteck-blue': '#0066FF',
        'xenteck-dark': '#0a0a0a',
        'xenteck-gray': '#1a1a1a',
      },
    },
  },
  plugins: [],
}