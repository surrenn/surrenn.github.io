let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');
let menuItems = document.querySelectorAll('.menu_item');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
});

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    })
})