/*==========Slide-in effect==========*/
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.slide-in');
hiddenElements.forEach((el) => observer.observe(el));


/*==========Mixitup Filter==========*/
let mixerProjects = mixitup('.projects__container', {
  selectors: {
      target: '.project__item',
  },
  animation: {
      duration: 300
  }
});

/*==========Hamburger menu==========*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const background = document.querySelector("main");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  background.classList.toggle("active");
});

document.querySelectorAll(".header-menu-item").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  background.classList.remove("active");
 }));

