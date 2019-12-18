var navMain = document.querySelector('.page-header__container');
var navButton = document.querySelector('.page-header__button');
navMain.classList.toggle('page-header__container--open');

navButton.addEventListener('click', function() {
  navMain.classList.toggle('page-header__container--open');
});

document.addEventListener('DOMContentLoaded', (event) => {
  var mainNavEl = document.querySelector('.main-nav');

  if (mainNavEl) {
    mainNavEl.classList.remove('main-nav--nojs');
  }
});
