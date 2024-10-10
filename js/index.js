

//_ ████████████████████████████████████  VARIABLES






//? ████████████████████████████████████  DATA



//< ████████████████████████████████████  VARIABLES


//_$ ████████████████████████████████████  QUERY SELECTORS

const images = document.querySelectorAll('.image__image')
console.log(images.length);

//< ████████████████████████████████████  FUNCTIONS

function fadeIn(image) {
    let opacity = 0;
    const interval = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(interval);
        }
        image.style.opacity = opacity;
        opacity += 0.01;
    }, 10);
}

function fadeOut(image) {
    let opacity = 1;
    const interval = setInterval(() => {
        if (opacity <= 0) {
            clearInterval(interval);
        }
        image.style.opacity = opacity;
        opacity -= 0.01;
    }, 10);
}

function cycleImages()  {
let currentImageIndex = 0;

setInterval(() => {

fadeOut(images[currentImageIndex]);
currentImageIndex = (currentImageIndex + 1) % images.length;
fadeIn(images[currentImageIndex]);

}, 6000);
}

//^  ████████████████████████████████████  EVENT LISTENERS

//>  ████████████████████████████████████  REAL PROGRAM

cycleImages();

//!  ████████████████████████████████████  FILTER ARRAY 

const flexLink3 = document.querySelector('.header__flex-item3');
    flexLink3.addEventListener('click', () => {
      window.location.href = "/faq.html";
    });

