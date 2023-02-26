/** @type {import('tailwindcss').Config} */
module.exports = {
  node : "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  purge : ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode : 'class',
  theme: {
    extend: {
      container : {
        center : true,
        padding : '2rem',
      },
      colors : {
        cart : "#f1f3fa",
      }
    },
  },
  plugins: [],
}
