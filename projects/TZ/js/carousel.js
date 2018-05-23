// Owl Carousel settings
$(document).ready(function() {
    $(".quote-slider").owlCarousel({
        center: true,
        loop: true,
        dots: false,
        margin: 24,
        nav: false,
        responsive: {
            0: {
                items: 1.5
            },
            600: {
                items: 1.5
            },
            1000: {
                items: 1.5
            },
            1400: {
                items: 2
            }
        }
    });
});