/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        header_bg:'#121212bf',
        color_links:'#ffffffcc',
        footer_background:'#f5f5f9',
        footer_border_color:'#00000029',
        footer_text_color:'#0000008f',
        footer_link_color:'#000000b8'





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

        'swiper-1':"url('images/1_swiper.jpg')",
        'swiper-2':"url('images/2_swiper.jpg')",
        'swiper-3':"url('images/3_swiper.jpg')",
        'swiper-4':"url('images/4_swiper.jpg')",
        'swiper-5':"url('images/5_swiper.jpg')",
        'swiper-6':"url('images/6_swiper.jpg')",
        'swiper-7':"url('images/7_swiper.jpg')",
        'swiper-8':"url('images/8_swiper.jpg')",
        'swiper-9':"url('images/9_swiper.jpg')",
        'swiper-10':"url('images/10_swiper.jpg')",

      },
      minWidth:{
        'new_product-w':'702px'
      },
      minHeight:{
        'new_product-h':'580px'
      },
      height:{
        'i15Pro':'46rem',
        'i15':'45rem',
      },
      gradientColorStops: {
        "theme-gradient": ["#bf8bff", "#4b0082","#0000FF","#00FF00","#FFFF00","#FFA500"],
      },
      transitionProperty: {
        'height': 'height',
      }
    },
  },
  plugins: [],
}

