//>  ████████████████████████████████████  GLOBAL VARIABLES

let speed = 3000;
let index = 0;
let intervalID;

//>  ████████████████████████████████████  QUERY SELECTORS

const images = document.querySelectorAll('.carousel img');
const dots = document.querySelector('.carousel Dots');
const desc = document.querySelector('.carouselDesc');

images.forEach((image, i) => {
  const span = document.createElement('span');
  span.className = 'dot';
  if (i === 0) span.classList.add('active');
  span.addEventListener('click', () =>  {

    index = i;
    startInterval();
    updateContent();

  });
  dots.appendChild(span);

})

//>  ████████████████████████████████████  FUNCTIONS

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

  const dots = document.querySelectorAll('.dot');
  dots.forEach(item => item.classList.remove('active'))
  dots[index].classList.add('active');

}

//>  ████████████████████████████████████  ACTUAL PROGRAM