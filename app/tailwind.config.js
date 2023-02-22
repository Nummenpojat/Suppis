/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'partionsininen': '#253764',
        'mannynvihrea': '#008D37',
        'mansikanpunainen': '#DA2525',
        'iltaruskonpunainen': '#FF7364',
        'vaaleansininen': '#28AAE1',
        'varvunvihrea': '#44D537',
        'tausta': '#ece9e9',
        'leipateksti': '#133713'
      }
    },
    fontFamily: {
      passionOne: ["Passion One", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    }
  }
}