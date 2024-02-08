// init owl carousel
// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:false,
//     autoplayHoverPause:true,
//     lazyLoad:true,
//     slideTransition: 'linear',
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:3,
//             nav:false
//         },
//         1000:{
//             items:5,
//             nav:true,
//             loop:false
//         }
//     }
// })


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
    autoplayHoverPause:true,
    lazyLoad:true,
    slideTransition: 'linear',
    responsiveClass:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})





