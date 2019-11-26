let hambuVars = {
  body: $('body'),
  mobileBtn: $('.mobile__btn'),
  openBtn: $('.mobile__hambu'),
  hambuCloseBtn: $('.mobile__close'),
  mobileNavCloseBtn: $('.mobile-nav__close'),
  nav: $('.header__navbar'),
  content: $('.page-content'),
  overlay: $('.overlay')
};

// functions
function showMenu() {
  hambuVars.body.addClass('body-hidden');
  hambuVars.overlay.addClass('overlay--active');
  hambuVars.mobileBtn.addClass('mobile__btn--active');
  hambuVars.nav.addClass('mobile-nav--active');
  hambuVars.content.addClass('page-content--active');
}

function closeMenu() {
  hambuVars.body.removeClass('body-hidden');
  hambuVars.overlay.removeClass('overlay--active');
  hambuVars.mobileBtn.removeClass('mobile__btn--active');
  hambuVars.nav.removeClass('mobile-nav--active');
  hambuVars.content.removeClass('page-content--active');
}

// events
hambuVars.openBtn.click(function () {
  showMenu();
});

hambuVars.hambuCloseBtn.click(function () {
  closeMenu();
});

hambuVars.mobileNavCloseBtn.click(function () {
  closeMenu();
});

hambuVars.body.on('keydown', function (e) {
  if (e.keyCode === 27) {
    closeMenu();
  }
});