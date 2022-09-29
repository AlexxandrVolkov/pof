let page = document.querySelectorAll('.page');

VanillaTilt.init(page, {
    max: 15,  // Максимальный угол поворота карточки
    glare: false,  // Включаем эффект блика
    'max-glare': 0.1,  // Регулируем интенсивность блика
    
});


let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 410;
    if (offset > 1300) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 410;
    if (offset < 0) {
        offset = 1270;
    }
    sliderLine.style.left = -offset + 'px';
});

let mmenu = document.querySelector(".m-menu"); 
let ssilka = document.querySelector(".ssilka"); 
let ssilka2 = document.querySelector(".ssilka2"); 
let ssilka3 = document.querySelector(".ssilka3"); 
let ssilka4 = document.querySelector(".ssilka4"); 
let ssilka5 = document.querySelector(".ssilka5"); 
let menuOpen = false;

document.querySelector('.burger').addEventListener('click', function(){
    if ( menuOpen == false){
        mmenu.style.display = "block";
        menuOpen = true;
    } else {
        mmenu.style.display = "none";
        menuOpen = false;
    }
});

ssilka.addEventListener('click', function(){
    if ( menuOpen == false){
        mmenu.style.display = "block";
        menuOpen = true;
    } else {
        mmenu.style.display = "none";
        menuOpen = false;
    }
});

ssilka2.addEventListener('click', function(){
    if ( menuOpen == false){
        mmenu.style.display = "block";
        menuOpen = true;
    } else {
        mmenu.style.display = "none";
        menuOpen = false;
    }
});

ssilka3.addEventListener('click', function(){
    if ( menuOpen == false){
        mmenu.style.display = "block";
        menuOpen = true;
    } else {
        mmenu.style.display = "none";
        menuOpen = false;
    }
});

ssilka4.addEventListener('click', function(){
    if ( menuOpen == false){
        mmenu.style.display = "block";
        menuOpen = true;
    } else {
        mmenu.style.display = "none";
        menuOpen = false;
    }
});

ssilka5.addEventListener('click', function(){
    if ( menuOpen == false){
        mmenu.style.display = "block";
        menuOpen = true;
    } else {
        mmenu.style.display = "none";
        menuOpen = false;
    }
});