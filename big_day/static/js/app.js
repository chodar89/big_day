// Navbar color on scroll
const navColor = () => {
  // Get all elements
  const navBar = document.querySelector('#navbar'),
    logoBigDay = document.querySelector('.logo h4'),
    logoMovies = document.querySelector('.logo p'),
    navLinks = document.querySelectorAll('.nav-links a'),
    burgerLines = document.querySelectorAll('.burger div'),
    heroHeading = document.querySelector('.hero-heading');

  // On scroll function, navbar change color with the content
  window.onscroll = () => {
    let top = window.scrollY;
    if (top >= 110) {
      navBar.classList.add('active');
      logoBigDay.classList.add('black-text');
      logoMovies.classList.add('black-text');
      navLinks.forEach(function (link) {
        link.classList.add('black-text');
      });
      burgerLines.forEach(function (line) {
        line.style.backgroundColor = "var(--main-black)";
      });
    } else {
      navBar.classList.remove('active');
      logoBigDay.classList.remove('black-text');
      logoMovies.classList.remove('black-text');
      heroHeading.style.opacity = "1";
      navLinks.forEach(function (link) {
        link.classList.remove('black-text');
      });
      burgerLines.forEach(function (line) {
        line.style.backgroundColor = "var(--main-white)";
      });
    }
    if (top >= 160) {
      heroHeading.style.opacity = "0";
    } else {
      heroHeading.style.opacity = "1";
    }
  }
}

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
navColor();
