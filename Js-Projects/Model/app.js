const open = document.querySelector('.open');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');
const main = document.querySelector('.main');
open.addEventListener('click',() => {
    modal.style.display = 'block'; 
    main.style.display = 'none'; 
});
close.addEventListener('click',() => {
    modal.style.display = 'none'; 
    main.style.display = 'block'; 

})

