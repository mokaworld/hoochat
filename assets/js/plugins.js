// init owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
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