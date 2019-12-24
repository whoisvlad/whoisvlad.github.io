var heroSwiper = new Swiper('.swiper-hero', {
    effect: 'fade',
    loop: true,
    // simulateTouch: false,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    fadeEffect: {
        crossFade: true,
    },
});

var carouselSwiper = new Swiper('.swiper-carousel', {
    effect: 'fade',
    loop: true,
    // simulateTouch: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    fadeEffect: {
        crossFade: true,
    },
});