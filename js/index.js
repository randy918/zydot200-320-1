//>  ████████████████████████████████████  GLOBAL VARIABLES


//>  ████████████████████████████████████  QUERY SELECTORS


//>  ████████████████████████████████████  FUNCTIONS



const images = document.querySelectorAll('.carousel img');
const dots = document.querySelector('.carouselDots');
const desc = document.querySelector('.carouselDesc');

let speed = 3000;
let index = 0;
let intervalID;

function startInterval() {

  setInterval(() => {
    index++;
    updateContent();

  }, speed);

}

function updateContent() {

  images.forEach(item => item.classList.remove('active'));
  images[index].classList.add('active');

}

//>  ████████████████████████████████████  ACTUAL PROGRAM

startInterval()
updateContent()