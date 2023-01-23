/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        dark_1:"#1111",
        dark_2:"#414040",
        dark_3:"#707070",
        dark_4:"#A0A0A0",
        dark_5:"#CFCFCF",
        dark_6:"#E7E7E7",
        dark_7:"#F3F3F3",
        dark_8:"#FFFFFF",
        brown:"#B68C5A",
      },
      fontFamily:{
        gramound:["EB Garamond", "serif"],
        poppins:["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}