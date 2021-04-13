const menuBtn = document.querySelector('.menu-btn');
const btnLine = document.querySelectorAll('.btn-line');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

let showMenu =false;
menuBtn.addEventListener('click',toggleClass);

function toggleClass(){
    showMenu?showMenu=false:showMenu=true;   
    menuBtn.classList.toggle('close');
    menu.classList.toggle('show');
    menuBranding.classList.toggle('show');
    menuNav.classList.toggle('show');
    navItems.forEach(item=>item.classList.toggle('show'));
    console.log(showMenu)
}