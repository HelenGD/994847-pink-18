var navMain = document.querySelector('.main-nav__container');
var navButton = document.querySelector('.page-header__button');
navMain.classList.toggle('main-nav--open');

navButton.addEventListener('click', function() {
  navMain.classList.toggle('main-nav--open');
});
