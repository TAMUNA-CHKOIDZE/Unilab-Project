let mobileMenu = document.querySelector('.menu');
let burgerMenu = document.querySelector('.header_menu_btn');
let closeMenu = document.querySelector('.menu_close');
let footer = document.querySelector('.footer');
let backBtn = document.querySelector('.news_header_text_arrow');

backBtn && backBtn.addEventListener('click', function () {
    window.location.href = "./index.html"
})

burgerMenu && burgerMenu.addEventListener('click', function () {
    mobileMenu.classList.add('active');
    footer.classList.add('active');
})

closeMenu && closeMenu.addEventListener('click', function () {
    mobileMenu.classList.remove('active');
    footer.classList.remove('active');
})


