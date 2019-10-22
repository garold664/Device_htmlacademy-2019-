document.body.classList.remove('no-js');


// services Slider
var servicesNav = document.querySelector('.services__nav');
var servicesSlides = document.querySelector('.services__slides');
var activeSlideClass = 'services__slide--active';


servicesNav.addEventListener('click', function (evt) {
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
var form = popup.querySelector('.popup__form');
var userName = form.querySelector('[name=user-name');
var userEmail = form.querySelector('[name=user-email');
var closePopupBtn = popup.querySelector('.popup__close-btn');


var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('user-name');
} catch (err) {
  isStorageSupport = false;
}

var closePopupHandler = function() {
  if (popup.classList.contains('popup--show')) {
    popup.classList.remove('popup--show');
  }
};

openPopupBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('popup--show');

  if (storage) {
    userName.value = storage;
    userEmail.focus();
  } else {
    userName.focus();
  }
});

popup.addEventListener('click', function (evt) {
  if ((evt.target.classList.contains('popup__close-btn')) ||
     (evt.target.classList.contains('popup__overlay')))  {

    evt.preventDefault();
    closePopupHandler();
  }

});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27)  {
    evt.preventDefault();
    closePopupHandler();
  }
});

form.addEventListener('submit', function (evt) {
  console.log('submit');
  if (!userName.value || !userEmail.value) {
    evt.preventDefault();
    console.log('Нужно ввести имя и email');
  } else if (isStorageSupport) {
    localStorage.setItem('user-name', userName.value)
  }
});

