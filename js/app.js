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
