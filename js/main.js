// header start

const header = document.querySelector("header");
const headerHeight = header.offsetHeight;
const menuItems = document.querySelectorAll(".main-menu .nav-link");

function scrollWindow() {
  const scrollTop = window.scrollY;

  if (scrollTop > 0) {
    header.classList.add("minimize");
  } else {
    header.classList.remove("minimize");
  }
}

const navbarActive = () => {
  let position = window.scrollY + headerHeight;
  menuItems.forEach((link) => {
    if (!link.hash) return;
    const section = document.querySelector(link.hash);
    if (!section) return;
    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }

    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      const targetPosition = targetSection.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });
};

window.addEventListener("load", navbarActive);
window.addEventListener("scroll", navbarActive);

window.addEventListener("load", scrollWindow);
window.addEventListener("scroll", scrollWindow);

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
