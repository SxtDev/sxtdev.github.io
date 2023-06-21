// menu toggle :
const burger = document.querySelector('.burger');
const menu = document.querySelector('menu');
const myQuery = window.matchMedia("(min-width: 900px)");

function letsToggle(){
    burger.classList.toggle('actif');
    menu.classList.toggle('actif');
};

burger.addEventListener('click', letsToggle);

myQuery.addEventListener('change', () => {
    if (burger.classList.contains('actif')){
        letsToggle();
    }
});
