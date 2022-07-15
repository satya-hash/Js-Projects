const icon = document.querySelector('.icon');
const navMenu = document.querySelector('.nav-menu');
icon.addEventListener('click',() => {
    const bar = document.querySelector('.fa-bars');
    bar.classList.toggle("fa-x");
    navMenu.classList.toggle("active");
})