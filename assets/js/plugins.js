// owl carowsel init
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin:20,
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    lazyLoad: true,
    slideTransition: "linear",
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});

  $("#owl-testi").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    navText: [
      "<i <i class='fa-solid fa-arrow-left'></i>",
      "<i <i class='fa-solid fa-arrow-right'></i>", 
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });


// START SCROLL TOP
let scrollTop = document.getElementById("scroll");

scrollTop.addEventListener("click", function () {
  scroll({
    top: 0,
    behavior: "smooth",
  });
});

this.addEventListener("scroll", function () {
  if (scrollY >= 400) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
});
// END SCROLL TOP

let loading = document.getElementById("loading");

this.addEventListener("load", function () {
  loading.style.display = "none";
});
