let album = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");
let indexActif = 0;

function move(index){
    if(index >= album.length){index = 0};
    if(index < 0){index = album.length - 1};

    album[indexActif].classList.toggle("active");
    dots[indexActif].classList.toggle("active");
    album[index].classList.toggle("active");
    dots[index].classList.toggle("active");

    // AUTRE METHODE A TESTER :
    // let toDo = [
    // album[indexActif],
    // dots[indexActif],
    // album[index],
    // dots[index]
    // ]

    // for(let item of toDo){
    //     item.classList.toggle("active");
    // }

    indexActif = index;
}

document.getElementById("preced").addEventListener("click", () => {move(indexActif - 1)});

document.getElementById("suiv").addEventListener("click", () => {move(indexActif + 1)});

// pourquoi pas possible avec syntaxe : dots.array.forEach ?
document.querySelectorAll('.dot').forEach((dot, dotIdex) => {
    dot.addEventListener('click', () => {
        if (indexActif !== dotIdex){move(dotIdex)}}
    )
});

// debug :
console.log(indexActif);
console.log(album);
console.log(dots);
console.log(dots[indexActif]);

