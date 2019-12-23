var navMain = document.querySelector('.page-header__container');
var navButton = document.querySelector('.page-header__button');
navMain.classList.toggle('page-header__container--open');

navButton.addEventListener('click', function() {
  navMain.classList.toggle('page-header__container--open');
});

document.addEventListener('DOMContentLoaded', function() {
  var nojsClasses = ['main-nav--nojs', 'page-header__button--nojs'];
  nojsClasses.forEach(function (className) {
    var mainNavEl = document.querySelector('.' + className);

    if (mainNavEl) {
      mainNavEl.classList.remove(className);
    }
  });
});
