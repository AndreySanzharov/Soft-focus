const swiperMain = new Swiper('.preview__slider.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
      delay: 7000,
    }
});


const swiperArticle = new Swiper('.article__slider.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
	spaceBetween: 12,
  centeredSlides: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 7000,
  }
});