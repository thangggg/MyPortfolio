const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

let showMenu = false;

menuBtn.addEventListener("click", function(){
    if (!showMenu){
        menuBtn.classList.add('rotate');
        menu.classList.add('show');
        showMenu = true;
    }
    else {
        menuBtn.classList.remove('rotate');
        menu.classList.remove('show');
        showMenu = false;
    }
});