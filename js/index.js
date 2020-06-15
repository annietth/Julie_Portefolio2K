//menu burger
const menu = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

menu.addEventListener('click',function () {
  nav.classList.toggle("nav-active");
});
//masonry
var container = document.querySelector('#container');
var containerWidth = container.offsetWidth;
var msnry = new Masonry( container, {
  // options
  columnWidth: containerWidth / 3,
  itemSelector: '.flex-item'
});