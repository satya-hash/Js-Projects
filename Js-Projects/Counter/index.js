let Num = document.querySelector('span');
let num = 0;
let decBtn = document.querySelector('#dec');
decBtn.addEventListener('click',function(){
    Num.innerHTML = --num;
    if (num<0) {
        Num.style.color = 'red';
    }
});
let incBtn = document.querySelector('#inc');
incBtn.addEventListener('click',function(){
    Num.innerHTML = ++num;
    if (num>0) {
        Num.style.color = 'green';
    }
        
});
let reBtn = document.querySelector('#reset');
reBtn.addEventListener('click',function(){
    num = 0;
    Num.innerHTML = num;
    if (num===0) {
        Num.style.color = 'black';
    }
    
});
