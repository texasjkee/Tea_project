const menuButton = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close-btn');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu--close');

menuButton.addEventListener('click', () => {
    menuList.classList.toggle('menu__list-open');
    menuShadow.classList.toggle('menu-open');
})

menuClose.addEventListener('click', () => {
    menuList.classList.remove('menu__list-open');
    menuShadow.classList.remove('menu-open');
})