// Swiper 8.4.7
import Swiper from './vendor/swiper';
import './vendor/focus-visible-polyfill';

const isMobile = () => {
  return /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone|Opera Mini/i.test(navigator.userAgent);
};

const isTouchDevice = () => {
  return !!('ontouchstart' in window);
};

export const heroSlider = new Swiper('.hero__slider', {
  allowTouchMove: isMobile() && isTouchDevice(),
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: '.hero__pagination',
    clickable: true,
    renderBullet: (index, className) => {
      return `<button class="hero__pagination-button ${className}" type="button" aria-label="Перейти к ${index + 1} слайду"></button>`;
    },
  },
});

export const programsSlider = new Swiper('.programs__slider', {
  allowTouchMove: isMobile() && isTouchDevice(),
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
  scrollbar: {
    el: '.programs__scrollbar',
  },
  navigation: {
    nextEl: '.programs__next',
    prevEl: '.programs__prev',
  },
});
