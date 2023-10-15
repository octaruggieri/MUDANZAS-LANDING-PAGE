const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOptions,
});

ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOptions,
  delay: 500,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOptions,
  interval: 500,
});

// price container
ScrollReveal().reveal(".price__card", {
  ...scrollRevealOptions,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});






var images = [
    "url('images/banner\ 2.png')",
    "url('images/banner\ 3.png')",
    "url('images/banner\ 4.png')"
    // Agrega más rutas de imágenes con el mismo formato
  ];
  
  var currentImageIndex = 0;
  var headerSlider = new Swiper('.header__slider', {
    loop: true, // Repetir el carrusel
    autoplay: {
      delay: 5000, // Cambia de slide cada 5 segundos
    },
    on: {
      slideChange: function () {
        headerSlider.realIndex = currentImageIndex;
      },
    },
  });
  
  function changeBackgroundImage() {
    headerSlider.realIndex = currentImageIndex;
    headerSlider.update();
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }
  
  // Cambia la imagen de fondo al cargar la página
  changeBackgroundImage();
  
  



  