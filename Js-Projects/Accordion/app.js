const acc = document.querySelectorAll('.acc');
// console.log(acc);
acc.forEach(
  acchead=>{  
    acchead.addEventListener('click',event=>{
        acchead.classList.toggle("active"); 
        const panel = acchead.nextElementSibling;
        if (acchead.classList.contains("active")) {
            panel.style.maxHeight = panel.scrollHeight+'px';

        }else{
            panel.style.maxHeight = 0;
        }
    })
  }
);