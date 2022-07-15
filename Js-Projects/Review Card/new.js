const users = [
    {
        
        name:'Sai',
        job:'Developer',
        review:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam consequatur facere explicabo beatae libero, alias distinctio ex nulla sequi a? first'
    },
    {
        name:'Mani',
        job:'Lr',
        review:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam consequatur facere explicabo beatae libero, alias distinctio ex nulla sequi a? second'
    },
    {
        name:'Lucy',
        job:'Designer',
        review:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam consequatur facere explicabo beatae libero, alias distinctio ex nulla sequi a? third'
    },
    {
        name:'Devi',
        job:'Manager',
        review:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam consequatur facere explicabo beatae libero, alias distinctio ex nulla sequi a? fourth'
    }
];
console.log(users.length);
const author = document.body.querySelector('.name');
const job = document.body.querySelector('.job');
const review = document.body.querySelector('.review');
const next = document.body.querySelector('#next');
const prev = document.body.querySelector('#prev');
let i=0;
window.addEventListener("DOMContentLoaded",()=>{
    let item = users[i];
    author.textContent = item.name;
    job.textContent = item.job;
    review.textContent = item.review;
});
function showReview(currentItem){
    let item = users[currentItem];
    author.textContent = item.name;
    job.textContent = item.job;
    review.textContent = item.review;
}
next.addEventListener('click',()=>{
    console.log('next');
    i++;
    if (i>users.length-1) {
        i=0;
    }
    showReview(i);
})
prev.addEventListener('click',()=>{
    console.log('prev');
    i--;
    if (i<0) {
        i=users.length-1;
    }
    showReview(i);
})