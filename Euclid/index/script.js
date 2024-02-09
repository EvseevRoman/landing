// --------------------------------------------------------------------------swiper

const swiper = new Swiper('.js-preview-swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
});

let stagesBtn = document.querySelectorAll('.stages__btn');

let stagesContainerInterior = document.querySelectorAll('.stages__container-interior');

stagesBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    stagesContainerInterior.forEach(function (element) {
      element.classList.remove('stages__container-interior--active')
    });

    document.querySelector(`[data-target = "${path}"]`).
      classList.add('stages__container-interior--active');
  });
});

// -----------------------------------------------------------------accordion

new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});

// -----------------------------------------------------------------burger

let burger = document.querySelector('.burger');

let menu = document.querySelector('.header__list');

let menuLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__list--active');
  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (element) {
  element.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__list--active');
    document.body.classList.remove('stop-scroll');
  })
})

// --------------------------------------------------------------search

let search = document.querySelector('.header__btn--search');

let form = document.querySelector('.header__form');

let exit = document.querySelector('.header__btn--close');

search.addEventListener('click', function () {
  form.classList.toggle('header__form--active');
})

exit.addEventListener('click', function () {
  event.preventDefault();
  form.classList.remove('header__form--active');
})
