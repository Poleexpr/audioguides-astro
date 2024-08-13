import Swiper from "swiper";

import "swiper/css";

export const companySwiper = new Swiper(".companiesSwiper", {
  effect: "slide",
  speed: 900,
  slidesPerView: 4,
  spaceBetween: 80,
  freeMode: true,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 80,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 80,
    },
    1536: {
      slidesPerView: 5,
      spaceBetween: 80,
    },
  },
});
