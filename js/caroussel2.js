let position = 0;

const $leftArrow = document.querySelector('.slider__arrow--left');
const $rightArrow = document.querySelector('.slider__arrow--right');
const $slides = document.querySelector('.slider__slides');
const sliderWidth = document.querySelector('.slider').offsetWidth;

$slides.appendChild(document.querySelector('.slider__slide').cloneNode()); // Duplication de la première slide, clone placé à la fin par appendChild
const sliderLength = document.querySelectorAll('.slider__slide').length; // Nombre de slides

$leftArrow.addEventListener('click', left);
$rightArrow.addEventListener('click', right);

function left() {
  // Si on essaie d'aller à gauche alors qu'on est à la première slide
  if (position === 0) {
    position = sliderLength - 1; // On passe à la fin du slider
    jump(left); // On passe la fonction left elle-même à jump(), pour qu'elle soit rappelée quand le saut sera fini (et cette fois elle passera dans le else)
  } else {
    position --;
    move();
  }
}

function right() {
  position++;
  move();

  // Si après le mouvement on est à la fin, on passe au début
  if (position === sliderLength - 1) {
    setTimeout(function() {
      position = 0;
      jump();
    }, 300);
  }
}

function move() {
  $slides.style.transform = 'translateX(' + (position * sliderWidth * -1) + 'px)';
}

// Pour sauter, on enlève la transition, on move(), et on remet la transition
// requestAnimationFrame est nécessaire pour attendre que le navigateur prenne en compte le changement de CSS (la transition)
function jump(callback) {
  $slides.style.transition = 'none';
  window.requestAnimationFrame(function() {
    move();
    
    window.requestAnimationFrame(function() {
      $slides.style.transition = 'transform 0.3s';
      
      // Si un callback a été passé, on l'utilise
      if (callback) {
        callback();      
      }
    });
  });
}