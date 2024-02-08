

$(".owl-carousel").owlCarousel({
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
