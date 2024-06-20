//! ████████████████████████████████████  SWIPER

const swiper = new Swiper(".swiper", {
  // Optional parameters
  autoplay: {
    delay: 6500,
  },
  pagination: {
    el: "#swiper-1 .swiper-pagination",
    clickable: true,
  },
  lazyloading: true,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//! ████████████████████████████████████  VARIABLES fadeInOut
const x0 = document.getElementById("product-ua-foreground__0");
const x1 = document.getElementById("product-ua-foreground__1");
const x2 = document.getElementById("product-ua-foreground__2");
const x3 = document.getElementById("product-ua-foreground__3");
const FADE = 1000;
const STATIC = 4000;
var opacity__0 = 0;
var opacity__1 = 0;
var opacity__2 = 0;
var opacity__3 = 0;
// var element = document.querySelector('.product-ua-foreground');

//! ████████████████████████████████████  FUNCTIONS sleep, updateOpacities, tripleJuggler

// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// function fadeIn() {
// }
// function fadeOut() {

// }
// function shortInterval(){
// }
// function longInterval(){
// }

// function updateOpacities() {
// console.log(opacity__0, opacity__1, opacity__2, opacity__3);
//   x0.style.opacity = opacity__0;
//   x1.style.opacity = opacity__1;
//   x2.style.opacity = opacity__2;
//   x3.style.opacity = opacity__3;
// }

// function fadeOut(element) {

//   var op = 1;
//   var timer = setInterval(function (){
//     if (op <= 0.1) {
//       clearInterval(timer);
//       element.style.display = 'none';
//     }
//     element.style.opacity = op;
//     // element.style.filter = 'alpha(opacity=' + op * 100 + ')';
//     op -= op * 0.1;

//   },  50);

}

// function fadeIn(element) {

//   var op = 0.1;
//   element.style.display = 'block';
//   var timer = setInterval(function (){
//     if (op >= 1) {
//       clearInterval(timer);
      
//     }
//     element.style.opacity = op;
    // element.style.filter = 'alpha(opacity=' + op * 100 + ')';
//     op += op * 0.1;

//   },  10);
//   updateOpacities();

// }

// function fadeInOut() {
// sleep(4000);
  // setInterval(fadeIn(x2), 1000);
//  setInterval(fadeIn(x3), 10000);
  
//   setInterval(fadeIn(x1), 1000);
  // sleep(5000);
  // fadeIn(x3);
  // updateOpacities();

}



function main() {
  updateOpacities();
  fadeInOut();
  // fadeInOut(1, 0);
  // fadeInOut(2, 1);
  // fadeInOut(3, 2);
  // fadeInOut(0, 3);
}

main()
// for whichOne = 1; whichOne < 4; whichOne++ {
  
// }
// const x = document.getElementById("product-ua-foreground__1");

// if (x.style.display === "none") {
//   x.style.display = "block";
// } else {
//   x.style.opacity = 0.5;
// }

// function fadeOut(theElement) {
//   var opacity = 1; // Initial opacity
//  console.log(opacity);
// var interval = setInterval(function(){
//   if (opacity > 0) {

//   opacity -= 0.1;
// theElement.style.opacity = opacity;
//   } else {
//     clearInterval(interval);
//     theElement.style.display = 'none';
//   }
//   }, 50);

// fadeOut(element);
// console.log("hello2");
