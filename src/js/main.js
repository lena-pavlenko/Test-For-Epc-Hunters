window.onload = () => {
  
  const stepSlider = document.querySelector('.steps-slider')
  if (stepSlider && screen.width < 991) {
    const stepSwiper = new Swiper(stepSlider, {
      spaceBetween: 15,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.steps-slider__btn_next',
        prevEl: '.steps-slider__btn_prev',
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },

        767: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
      }
    });
  }

  

  // Управление меню
  const handlerMenu = (target) => {
    target.parentElement.classList.toggle('open')
    target.closest('.header').classList.toggle('open')
  }

  document.addEventListener('click', (e) => {
    if (e.target.closest('.js-menu')) {
      handlerMenu(e.target.closest('.js-menu'))
    }
  })
}