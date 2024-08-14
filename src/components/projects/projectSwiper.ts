import Swiper from "swiper";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";

export const swiper = new Swiper(".projestsSwiper", {
  modules: [Navigation, Pagination, EffectCoverflow],
  grabCursor: true,
  centeredSlides: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 4,
    slideShadows: false,
  },
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: {
    enabled: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 0.5,
    },
    520: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 2.5,
    },
    1150: {
      slidesPerView: 3,
    },
  },
});
