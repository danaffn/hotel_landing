$(function () {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    centeredSlides: true,
    loop: true,
    grabCursor: true,
    mousewheel: true,
    spaceBetween: 24,
    slideToClickedSlide: true,
    slidesPerGroup: 1,
    slidesPerView: 'auto'
  });

  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  }, 0)

  $('.burger, .overlay').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
    $('.burger').toggleClass('burger--close')
  })
  setInterval(() => {
    if ($('.header__top').hasClass('header__top--open')) {
      $('.header__top-nav-list-item, .header__top-img, .header__top-socials-list-item, .header__top-button').on('click', function (e) {
        $('.header__top').removeClass('header__top--open')
        $('.overlay').removeClass('overlay--show')
        $('.burger').removeClass('burger--close')
      })
    }
  }, 0);

})