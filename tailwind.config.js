/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        header_bg:'#121212',
        color_links:'#ffffffcc'

      },
      container:{
        center:true,
        padding:'2rem'
      }
    },
  },
  plugins: [],
}

