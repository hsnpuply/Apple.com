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
        'watch_bg':"url('images/appleWatchHero.jpg')",
        'produc_item-1':"url('images/visionPro.jpg')",
        'produc_item-2':"url('images/macbook.jpg')",
        'produc_item-3':"url('images/iPad.jpg')",
        'produc_item-4':"url('images/iPadPro.jpg')",
        'produc_item-5':"url('images/card.jpg')",
        'produc_item-6':"url('images/tradein.jpg')",

      },
      minWidth:{
        'new_product-w':'702px'
      },
      minHeight:{
        'new_product-h':'580px'
      },
      height:{
        'i15Pro':'77vh',
        'i15':'74vh',
      }

    },
  },
  plugins: [],
}

