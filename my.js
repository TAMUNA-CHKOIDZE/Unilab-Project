let mobileMenu = document.querySelector('.menu');
let burgerMenu = document.querySelector('.header_menu_btn');
let closeMenu = document.querySelector('.menu_close');
let footer = document.querySelector('.footer')
burgerMenu.addEventListener('click', function(){
    mobileMenu.classList.add('active');
    footer.classList.add('active');
})


closeMenu.addEventListener('click', function(){
    mobileMenu.classList.remove('active');
    footer.classList.remove('active');
})