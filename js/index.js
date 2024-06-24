//>  ████████████████████████████████████  GLOBAL VARIABLES

//>  ████████████████████████████████████  QUERY SELECTORS

//_  ████████████████████████████████████  CAROUSEL 1 NO DOTS 

const images = document.querySelectorAll('#carousel img');
const dots = document.querySelector('#dots');
const desc = document.querySelector('#desc');

let speed = 7500;
let index = 0;
let intervalID;

startInterval();

function startInterval() {

    if (intervalID) clearInterval(intervalID);

    intervalID = setInterval(() => {
        index++;
        if (index === images.length) index = 0;
        updateContent();
    }, speed);

}

updateContent();

function updateContent() {

    images.forEach(item => item.classList.remove('active'));
    images[index].classList.add('active');

}

//>  ████████████████████████████████████  ACTUAL PROGRAM

// startInterval()
