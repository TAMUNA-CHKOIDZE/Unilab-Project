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




let newsList = document.querySelector('.news_list');

newsList && fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(response => dataList(response) );

const dataList = (data) =>{
    data.map(item=>{
        let newsItem = document.createElement("div");
        let itemTitle = document.createElement("h1");
        let itemDesc = document.createElement("p");
        newsList.appendChild(newsItem);
        newsItem.appendChild(itemTitle);
        newsItem.appendChild(itemDesc);

        itemTitle.innerText = item.title;
        itemDesc.innerText = item.body;

        newsItem.classList.add('news_item');
        itemTitle.classList.add('news_title');
        itemDesc.classList.add('news_desc');

    })
}