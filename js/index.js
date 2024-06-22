//>  ████████████████████████████████████  GLOBAL VARIABLES

let speed = 3000;
let index = 0;
let intervalID;

//>  ████████████████████████████████████  FUNCTIONS

function startInterval() {

  setInterval(() => {
    index++;
    if (index === images.length) index = 0;
    updateContent();
  }, speed);

}

function updateContent() {

  images.forEach(item => item.classList.remove('active'));
  images[index].classList.add('active');

}

//>  ████████████████████████████████████  QUERY SELECTORS

const images = document.querySelectorAll('.carousel img');
const dots = document.querySelector('.carousel Dots');
const desc = document.querySelector('.carouselDesc');

//>  ████████████████████████████████████  ACTUAL PROGRAM