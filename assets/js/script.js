$(window).ready(function () {
    // Preloader
    $('.loader').fadeOut();
    $('.loader-mask').delay(350).fadeOut('slow');
});

var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  mousewheel: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
     
    },
    576: {
      slidesPerView: "auto",
     
    },

  }
});
  



  
    // open class on click hamburger to toggle menu on mobile start ============

    const hamburger = document.getElementById("hamburger");
    const hamburgerIcon = hamburger.getElementsByTagName("i")[0];
    const customNav = document.querySelector(".nav-area");

    let timer;
    hamburger.addEventListener("click", () => {
      customNav.classList.toggle("open");

      // change icon
      if (customNav.classList.contains("open")) {
        hamburgerIcon.classList.remove("fa-bars");
        hamburgerIcon.classList.add("fa-times");
      } else {
        hamburgerIcon.classList.remove("fa-times");
        hamburgerIcon.classList.add("fa-bars");

        // hide overflow
        if (customNav.style.overflow == "auto") {
          // if auto found reutrn true else false
          customNav.style.overflow = "hidden";
        }
      }
      // clear timeout
      clearTimeout(timer);

      timer = setTimeout(() => {
        // add overflow
        if (customNav.classList.contains("open")) {
          customNav.style.overflow = "auto";
        }
      }, 3000);
    });
    // open class on click hamburger to toggle menu on mobile end ============
    // header sticky on scroll start ============

    // header sticky on scroll End ============



    const sections = document.getElementsByClassName("section");
    const elementIsInView = (el) => {
      const scroll = window.scrollY || window.pageYOffset;
      const boundsTop = el.getBoundingClientRect().top + scroll;

      const viewport = {
        top: scroll,
        bottom: scroll + window.innerHeight,
      };

      const bounds = {
        top: boundsTop,
        bottom: boundsTop + el.clientHeight,
      };

      return (
        (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
        (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
      );
    };

    window.onscroll = function () {
      // header sticky on scroll start
      var scroll = document.documentElement.scrollTop;
      console.log(scroll);
      if (scroll > 250) {
        document.getElementById("header").classList.add("sticky");
      } else {
        document.getElementById("header").classList.remove("sticky");
      }
      // header sticky on scroll end

      // menu active start when section in viewport
      Array.prototype.forEach.call(sections, (section) => {
        console.log("section id: " + section.id);
        if (elementIsInView(section)) {
          console.log("Viewport matched for id: " + section.id);
          const menuItems = document.getElementsByClassName("menu-item");
          Array.prototype.forEach.call(menuItems, (menuItem) => {
            menuItem.classList.remove("active");
            if (menuItem.getAttribute("data-menu") == section.id) {
              menuItem.classList.add("active");
            }
          });
        }
      });
    };

    