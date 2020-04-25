//menu burger
const menu = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

menu.addEventListener('click',function () {
  nav.classList.toggle("nav-active");
});
