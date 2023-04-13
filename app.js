let main = document.querySelectorAll("section");
let menu = document.getElementById("menu").querySelectorAll("li");

let mainArr = Array.from(main);
let menuArr = Array.from(menu);

function afficher(index){
    mainArr.forEach(sect => {
        if(sect.classList.contains('actif')){
            sect.classList.remove('actif');
        }
    });
    menuArr.forEach(li => {
        if(li.classList.contains('actif')){
            li.classList.remove('actif');
        }
    });
    mainArr[index].classList.add('actif');
    menuArr[index].classList.add('actif');
};

afficher(0);

menuArr.forEach(el => {
    el.addEventListener('click', () => {afficher(menuArr.indexOf(el))})
});



