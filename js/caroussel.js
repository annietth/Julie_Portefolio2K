let position = 0;

const $leftArrow = document.querySelector('.left');
const $rightArrow = document.querySelector('.right');
const $slides = document.querySelector('.slides'); 
const sliderLength = document.querySelectorAll('.slide').length; 
const sliderWidth = document.querySelectorAll('.sliders')

$leftArrow.addEventListener('click', left);
$rightArrow.addEventListener('click', right);

function left() {

  if (position == 0) {
    position = sliderLength - 1; 
    start(); 
  } else {
    position --;
    move();
  }
}

function right() {
  position++;
  move();
  if (position == sliderLength - 1) {
    setTimeout(function() {
      position = 0;
      start();
    }, 300);
  }
}
function move() {
    $slides.style.transform = 'translateX(' + (position * sliderWidth * -1) + 'px)';
  }
function start(){
    $slides.style.transform='none';

}
