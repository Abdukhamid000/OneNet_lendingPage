const nextBtn = document.querySelector(".swiper-button-next");
const prevBtn = document.querySelector(".swiper-button-prev");
const mobileToggle = document.querySelector("#mobileToggle");
const mobileList = document.querySelector("#mobileList");
const hideList = document.querySelector("#hideList");

let swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

nextBtn.addEventListener("click", () => {
  swiper.slideNext();
});

prevBtn.addEventListener("click", () => {
  swiper.slidePrev();
});

mobileToggle.addEventListener("click", () => {
  mobileList.classList.replace("hidden", "block");
});

hideList.addEventListener("click", () => {
  mobileList.classList.replace("block", "hidden");
});
