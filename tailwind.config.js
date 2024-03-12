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
      },
      backgroundImage:{
        'iPhone15_Pro' :"url('images/iPhone15_Pro.jpg')",
        'iPhone15' :"url('images/iPhone15.jpg')",

      },
      width:{
        'FullPage':'100vw'
      },
      height:{
        'i15Pro':'77vh',
        'i15':'74vh'
      }

    },
  },
  plugins: [],
}

