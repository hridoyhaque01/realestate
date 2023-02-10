const container1 = document.querySelector(".filter-contents");
const mixer1 = mixitup(container1, {
  selectors: {
    target: ".mix",
    control: ".filter-btn1",
  },
});

const container2 = document.querySelector(".filter-contents2");
const mixer2 = mixitup(container2, {
  selectors: {
    target: ".mix",
    control: ".filter-btn2",
  },
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
});
