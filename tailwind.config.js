/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1A237E',
          dark: '#12175A',
          light: '#2A3599',
        },
        lime: {
          DEFAULT: '#8DC63F',
          dark: '#74A82F',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
