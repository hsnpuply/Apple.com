const full_menu_preview = document.querySelector('.full-menu-preview');
const full_menu = document.querySelector('.full-menu');
const navbar_links = document.querySelectorAll('.navbar_links li a');
const search_svg = document.querySelector('#search-svg');
const shopping_svg = document.querySelector('#shopping-svg');
const main = document.querySelector('.main');
const body_content = document.querySelector('.body-content');

navbar_links.forEach((e)=>{
    e.addEventListener('mouseover',()=>{
        full_menu_preview.classList.add('active');
        full_menu.classList.add('active');
        main.classList.add('active');
        body_content.classList.add('turn_of_scroll')
    })

    // e.addEventListener('mouseleave',()=>{
    //     full_menu_preview.classList.remove('active');
    //     full_menu.classList.remove('active');
    // })

})

search_svg.addEventListener('mouseover',(e)=>{
    full_menu_preview.classList.add('active');
    full_menu.classList.add('active');
    main.classList.add('active');

});

// search_svg.addEventListener('mouseleave',(e)=>{
//     full_menu_preview.classList.remove('active');
//     full_menu.classList.remove('active');
// });

shopping_svg.addEventListener('mouseover',(e)=>{
    full_menu_preview.classList.add('active');
    full_menu.classList.add('active');
    main.classList.add('active');

});
// shopping_svg.addEventListener('mouseleave',(e)=>{
//     full_menu_preview.classList.remove('active');
//     full_menu.classList.remove('active');
// });

full_menu_preview.addEventListener('mouseleave',()=>{
    full_menu_preview.classList.remove('active');
    full_menu.classList.remove('active');
    main.classList.remove('active');

})