// Navigation slide bar
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
        nav.style.transition = '';
      } else {
        nav.style.transition = 'transform 0.5s ease-in';
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    })
  });
};

// Logo movie text animation
const logoAnimation = () => {
  const logoMovie = document.querySelector('.logo-paragraph p');
  if (logoMovie) {
    logoMovie.style.animation = 'logoAnimation 2s ease forwards';
  };
}

// Text animation
const textAnimation = () => {
  const menuTitle = document.querySelector('.parallax p');
  if (menuTitle) {
    menuTitle.style.animation = 'titleAnimation 2s ease forwards';
  };
}

textAnimation();
logoAnimation();
navSlide();
