// init owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause:false,
    lazyLoad:true,
    margin:10,
    slideTransition: 'linear',
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})