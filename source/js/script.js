document.body.classList.remove('no-js');
var servicesNav = document.querySelector('.services__nav');
var servicesSlides = document.querySelector('.services__slides');
var activeSlideClass = 'services__slide--active';


servicesNav.addEventListener('click', function(evt) {
  var target = evt.target;
  var linkClass = 'services__nav-link';
  var linkActiveClass = 'services__nav-link--active';
  if (target.classList.contains(linkClass)) {
    evt.preventDefault();
    console.log('currentTarget = ', evt.currentTarget);
    console.log('Target = ', target);

    servicesNav.querySelector('.' + linkActiveClass).classList.remove(linkActiveClass);
    target.classList.add(linkActiveClass);

  var hrefVal = target.getAttribute('href');
  var curActiveSlide = servicesSlides.querySelector('.' + activeSlideClass);
  var activeSlide = servicesSlides.querySelector(hrefVal);
  curActiveSlide.classList.remove(activeSlideClass);
  activeSlide.classList.add(activeSlideClass);

  }



});
