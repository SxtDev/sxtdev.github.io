// affichage selon menu
let contenu = document.querySelectorAll(".affiche");
let menu = document.getElementById("menu").querySelectorAll("li");

let contenuArr = Array.from(contenu);
let menuArr = Array.from(menu);

console.log(contenu);
console.log(contenuArr);
console.log(menu);
console.log(menuArr);

function afficher(index){
    contenuArr.forEach(sect => {
        if(sect.classList.contains('active')){
            sect.classList.remove('active');
        }
    });
    menuArr.forEach(li => {
        if(li.classList.contains('active')){
            li.classList.remove('active');
        }
    });
    contenuArr[index].classList.add('active');
    menuArr[index].classList.add('active');
};

afficher(0);

menuArr.forEach(el => {
    el.addEventListener('click', () => {afficher(menuArr.indexOf(el))})
});






//galerie réalisations
let galerie = document.getElementById("cards").querySelectorAll('a')
let indexActif = 0;

function move(index){
    if(index >= galerie.length){index = 0};
    if(index < 0){index = galerie.length - 1};

    galerie[indexActif].classList.toggle("active");
    galerie[index].classList.toggle("active");

    indexActif = index;
}

document.getElementById("gauche").addEventListener("click", () => {move(indexActif - 1)});

document.getElementById("droite").addEventListener("click", () => {move(indexActif + 1)});

// debug :
console.log(indexActif);
console.log(galerie);



