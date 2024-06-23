//>  ████████████████████████████████████  GLOBAL VARIABLES

//>  ████████████████████████████████████  QUERY SELECTORS

//>  ████████████████████████████████████  FUNCTIONS

const images = document.querySelectorAll('.carousel img');
const dots = document.querySelector('.carouselDots');
const desc = document.querySelector('.carouselDesc');

let speed = 7000;
let index = 0;
let intervalID;

images.forEach((image, i) => {
  const span = document.createElement('span');
  span.className = 'dot';
  if (i === 0) span.classList.add('active');
  span.addEventListener('click', () => {
    index = i;
    startInterval()
updateContent()
  });
  dots.appendChild(span);

})

function startInterval() {
if (intervalID) clearInterval(intervalID);

  intervalID = setInterval(() => {
    index++;
    if (index === images.length) index = 0;

    updateContent();

  }, speed);

}

function updateContent() {

  images.forEach(item => item.classList.remove('active'));
  images[index].classList.add('active');

  const dots = document.querySelectorAll('.carouselDots');
  dots.forEach(item => item.classList.remove('active'));
  dots[index].classList.add('active');
  


}

//>  ████████████████████████████████████  ACTUAL PROGRAM

startInterval()
updateContent()