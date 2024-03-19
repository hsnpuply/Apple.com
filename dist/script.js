const full_menu_preview = document.querySelector('.full-menu-preview');
const full_menu = document.querySelector('.full-menu');
const navbar_links = document.querySelectorAll('.navbar_links li a');
const search_svg = document.querySelector('#search-svg');
const shopping_svg = document.querySelector('#shopping-svg');
const main = document.querySelector('.main');
const body_content = document.querySelector('.body-content');
const full_menu_preview_container = document.querySelector('.full-menu-preview-container');


// Add classes for sub menu Ui
function menuClasses(){
        full_menu_preview.classList.add('active');
        full_menu.classList.add('active');
        main.classList.add('active');
        body_content.classList.add('turn_of_scroll')
}

navbar_links.forEach((e,i)=>{
    e.addEventListener('mouseover',()=>{
        menuClasses()
        switch(i){
            case 0:
            store();
            break;

            case 1:
            mac();
            break;

            case 2:
            store();
            break;

            case 3:
            mac();
            break;

            case 4:
            store();
            break;

            case 5:
            mac();
            break;

            case 6:
            store();
            break;

            case 7:
            mac();
            break;

            case 8:
            store();
            break;

            case 9:
            mac();
            break;

            case 10:
            store();
            break;

            // case 11:
            // mac();
            // break;





        }
        // alert('Click on ' + e.innerHTML + 'to' + i)
    })

})

search_svg.addEventListener('mouseover',()=>{
        menuClasses()
});


shopping_svg.addEventListener('mouseover',()=>{
        menuClasses()
});


full_menu_preview.addEventListener('mouseleave',()=>{
    full_menu_preview.classList.remove('active');
    full_menu.classList.remove('active');
    main.classList.remove('active');
    body_content.classList.remove('turn_of_scroll')
})

// 0st of array nav menu
function store(){
    return(
        full_menu_preview_container.innerHTML =
        `
        <div class="store-sub-menu flex gap-28">
        <!-- shopping -->
        <div class="shopping flex flex-col gap-2">
            <h3 class="text-lg text-gray-600">Shop</h3>
            <div class="shop-sub-menu">
                <ul class="text-2xl flex  flex-col gap-2 font-bold">
                    <li><a href="#">Shop the Latest</a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">iPhone</a></li>
                    <li><a href="#">Apple Watch</a></li>
                    <li><a href="#">Apple Vision Pro</a></li>
                    <li><a href="#">Accessories</a></li>
                </ul>
            </div>

        </div>
        <!--  quick-links -->
        <div class="quick-links flex flex-col gap-2">
            <h3 class="text-lg text-gray-600">Quick Links</h3>
            <div class="quickLinks-sub-menu">
                <ul class="text-xl flex  flex-col gap-2 font-bold">
                    <li><a href="#">Find a Store</a></li>
                    <li><a href="#">Order Status</a></li>
                    <li><a href="#">Apple Trade In</a></li>
                    <li><a href="#">Financing</a></li>
                </ul>
            </div>
        </div>
        <!-- Shop Special Stores -->
        <div class="shop-special-stores flex flex-col gap-2">
            <h3 class="text-lg text-gray-600">Shop Special Stores</h3>
            <div class="shop-sub-menu">
                <ul class="text-xl flex  flex-col gap-2 font-bold">
                    <li><a href="#">Certified Refurbished</a></li>
                    <li><a href="#">Education</a></li>
                    <li><a href="#">Business</a></li>
                    <li><a href="#">Veterans and Military</a></li>
                    <li><a href="#"> Goverment</a></li>
                </ul>
            </div>
        </div>
    </div>
        `
    )
}
// 1st of array nav menu

function mac(){
    return(
        full_menu_preview_container.innerHTML =
        `
        <div class="mac-sub-menu flex gap-28">
        <!-- Explore Mac -->
        <div class="explore-mac flex flex-col gap-2">
            <h3 class="text-lg text-gray-600">Explore Mac</h3>
            <div class="explore-sub-menu">
                <ul class="text-2xl flex  flex-col gap-2 font-bold">
                    <li><a href="#">Explore All Mac</a></li>
                    <li><a href="#">MacBook Air</a></li>
                    <li><a href="#">MacBook Pro</a></li>
                    <li><a href="#">iMac</a></li>
                    <li><a href="#">Mac mini</a></li>
                    <li><a href="#">Mac Pro</a></li>
                    <li><a href="#">Displays</a></li>
                </ul>
            </div>

        </div>
        <!--  Shop Mac -->
        <div class="shop-mac flex flex-col gap-2">
            <h3 class="text-lg text-gray-600">Shop Mac</h3>
            <div class="shop-mac-sub-menu">
                <ul class="text-xl flex  flex-col gap-2 font-bold">
                    <li><a href="#">Shop Mac</a></li>
                    <li><a href="#">Mac Accessories</a></li>
                    <li><a href="#">Apple Trade In</a></li>
                    <li><a href="#">Financing</a></li>
                </ul>
            </div>
        </div>
        <!-- More from Mac -->
        <div class="more-from-mac flex flex-col gap-2">
            <h3 class="text-lg text-gray-600">More from Mac</h3>
            <div class="shop-sub-menu">
                <ul class="text-xl flex  flex-col gap-2 font-bold">
                    <li><a href="#">Mac Support </a></li>
                    <li><a href="#">AppleCare+ for Mac</a></li>
                    <li><a href="#">Apps by Apple</a></li>
                    <li><a href="#">Continuity</a></li>
                    <li><a href="#">iCloud+</a></li>
                    <li><a href="#">Mac for Business</a></li>
                    <li><a href="#">Eductaion</a></li>
                </ul>
            </div>
        </div>
    </div>
        `
    )
}

// 2st of array nav menu

function iPad(){
    return(
        full_menu_preview_container.innerHTML =
        `

        `
    )
}

// 3st of array nav menu

function iPhone(){
    return(
        full_menu_preview_container.innerHTML =
        `

        `
    )
}


// 4st of array nav menu

function iPhone(){
    return(
        full_menu_preview_container.innerHTML =
        `

        `
    )
}

// 5st of array nav menu

function watch(){
    return(
        full_menu_preview_container.innerHTML =
        `

        `
    )
}

// 6st of array nav menu

function watch(){
    return(
        full_menu_preview_container.innerHTML =
        `

        `
    )
}