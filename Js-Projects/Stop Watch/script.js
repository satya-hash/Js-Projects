let startTimer = document.querySelector('.startTimer');
let stopTimer = document.querySelector('.stopTimer');
let resetTimer = document.querySelector('.resetTimer');

let displayTimer = document.querySelector('.displayTimer');
let int = null;
let [ seconds, minutes, hours] = [ 0, 0, 0];

startTimer.addEventListener('click', () => {
    
     int = setInterval(displayTime, 1000);
});

stopTimer.addEventListener('click', () => {
     clearInterval(int);
});
resetTimer.addEventListener('click', () => {
     clearInterval(int);
     [seconds, minutes, hours] = [0, 0, 0];
     displayTimer.innerHTML = '0 : 0 : 0 ';
})

function displayTime() {
     seconds++;
     displayTimer.innerHTML = `${hours} : ${minutes} : ${seconds} `
     if (seconds == 60) {
          seconds = 0;
          minutes++;
          if (minutes == 60) {
               minutes = 0;
               hours++;
               if (hours == 24) {
                    displayTimer.innerHTML = 'One day has completed. So please Refresh the page';
               }
          }
     }
}


