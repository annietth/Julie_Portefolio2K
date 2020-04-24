const navSlide=() => {
  const burger = document.querySelector('.burger');
  const nav= document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('nav-links li')


  burger.addEvenLister('click', ()=>{
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation =''
        
      } else {
        llink.style.animation = 'navLinkFade 0.5s ease forwards ${index/7 +2 }s';
      }
  
    });

    burger.classList.toggle('toggle');
  });


}

navSlide()