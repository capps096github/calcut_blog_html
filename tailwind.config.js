/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "calcut-navy": "#000525",
        "calcut-white": "#FFFFFF",
        "calcut-bg": "#e25eee",
        "calcut-blue": "#2563eb",
      },
    },
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
}



