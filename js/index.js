

//_ ████████████████████████████████████  VARIABLES






//? ████████████████████████████████████  DATA



//< ████████████████████████████████████  VARIABLES

let imageBackgrounds = document.querySelectorAll(".image__image");
let imageIndex = 0;

//< ████████████████████████████████████  FUNCTIONS

function changeBackground() {

imageBackgrounds[imageIndex].classList.remove("showing");
imageIndex++;
if (imageIndex >= imageBackgrounds.length) {
    imageIndex = 0;
}
imageBackgrounds[imageIndex].classList.add("showing");
console.log(imageIndex);

};

//_$ ████████████████████████████████████  QUERY SELECTORS



//^  ████████████████████████████████████  EVENT LISTENERS

//>  ████████████████████████████████████  REAL PROGRAM

setInterval(changeBackground, 3000);

//!  ████████████████████████████████████  FILTER ARRAY 



