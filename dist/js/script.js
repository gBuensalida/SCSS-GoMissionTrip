const burgerBTn = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");
const bannerFaq = document.querySelector(".banner__faq");
burgerBTn.addEventListener("click", () => {
     burgerBTn.classList.toggle("open")
     headerNav.classList.toggle("open")
     bannerFaq.classList.toggle("open")
})