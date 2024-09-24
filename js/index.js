

//_ ████████████████████████████████████  VARIABLES

let i = 0;
let images = [];
let time = 3000;




//? ████████████████████████████████████  DATA

images[0] = '1-swiper-1';
images[1] = '1-swiper-2';
images[2] = '1-swiper-3';
images[3] = '1-swiper-4';
images[4] = '1-swiper-5';
images[5] = '1-swiper-6';
images[6] = '1-swiper-7';
images[7] = '1-swiper-8';

//< ████████████████████████████████████  FUNCTIONS

function changeImg() {

    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
setTimeout('changeImg()', time);

}

window.onload = changeImg;

//_$ ████████████████████████████████████  QUERY SELECTORS



//^  ████████████████████████████████████  EVENT LISTENERS

//>  ████████████████████████████████████  REAL PROGRAM

setInterval(showNextImage, 3000);

//!  ████████████████████████████████████  FILTER ARRAY 



