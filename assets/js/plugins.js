// owl carowsel init
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

// START SCROLL TOP
let scrollTop = document.getElementById("scroll");

this.addEventListener('click',function(){
  scroll({
    top: 0,
    behavior: "smooth",
  });
});

this.addEventListener('scroll', function(){
  if (scrollY >= 400) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
  
});
// END SCROLL TOP

let loading = document.getElementById("loading");

this.addEventListener('load',function(){
  loading.style.display = "none";
})