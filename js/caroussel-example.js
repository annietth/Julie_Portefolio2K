
var allCarousels = document.getElementsByClassName('carousel-container');


for(var i=0;i<allCarousels.length;i++) {	
	var carousel = { container: allCarousels[i] };
	carousel.figure = carousel.container.querySelector('figure');
	carousel.figureCont = carousel.figure.querySelector('ul');
	carousel.items = carousel.figureCont.children;
	carousel.buttons = {
		"prev": carousel.container.querySelector('button.carousel-previous'),
		"next": carousel.container.querySelector('button.carousel-advance')
	};
	carousel.currentItem = 0;
	(function(carousel){
		carousel.buttons.prev.addEventListener('click', function(e){ carouselPrev(carousel); });
		carousel.buttons.next.addEventListener('click', function(e){ carouselNext(carousel); });
		startCarouselTimeout(carousel);
	})(carousel);
}
/**
 * carouselNext
 * @param carousel Object The carousel object to use for cycling next
 */
function carouselNext(carousel) {
	carousel.currentItem++;
	if(carousel.currentItem >= carousel.items.length) {
		carousel.currentItem = 0;
	}
	displayCarouselItem(carousel);
}
/**
 * carouselPrev
 * @param carousel Object The carousel object to use for cycling prev
 */
function carouselPrev(carousel) {

	carousel.currentItem--;

	if(carousel.currentItem <= -1) {

		carousel.currentItem = carousel.items.length - 1;
	}

	displayCarouselItem(carousel);
}

/**
 * displayCarouselItem
 * @param carousel Object The carousel object to use for updating the carousel
 */
function displayCarouselItem(carousel) {
	startCarouselTimeout(carousel);
	carousel.figureCont.style.marginLeft = -1 * (carousel.currentItem * 256);
}
/**
 * startCarouselTimeout
 * @param carousel Object The carousel object to use for automatically cycling
 */
function startCarouselTimeout(carousel) {
	clearTimeout(carousel.interval);
	carousel.interval = setTimeout(function(){
		carouselNext(carousel);
	},3000);
}