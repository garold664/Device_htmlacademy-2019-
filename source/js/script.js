document.body.classList.remove('no-js');


// services Slider
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


// Popup

var openPopupBtn = document.querySelector('#open-popup');
var popup = document.querySelector('#popup');
var closePopupBtn = popup.querySelector('.popup__close-btn');
var firstInput = popup.querySelector('input:first-of-type');

var closePopupHandler = function() {
  if (popup.classList.contains('popup--show')) {
    popup.classList.remove('popup--show');
  }
};

openPopupBtn.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('popup--show');
  firstInput.focus();
});

popup.addEventListener('click', function(evt) {
  evt.preventDefault();
  if ((evt.target.classList.contains('popup__close-btn')) ||
     (evt.target.classList.contains('popup__overlay')))  {
    closePopupHandler();
  }

});

document.addEventListener('keydown', function(evt) {
  evt.preventDefault();
  if (evt.keyCode === 27)  {
    closePopupHandler();
  }
});
