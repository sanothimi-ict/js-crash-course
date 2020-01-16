const images = ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg', './img/5.jpg', './img/6.jpg'];

const img = document.querySelector("img");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

next.addEventListener('click', handleNext);
prev.addEventListener('click', handlePrev);

let counter = 0;

function handleNext () {
  if (counter === images.length - 1) {
    counter = 0;
  }
  counter++;
  img.setAttribute('src', images[counter]);
}

function handlePrev () {
  counter--;
  img.setAttribute('src', images[counter]);
}
