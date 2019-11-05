$(document).ready(function () {
    $('.gallery__slider').slick({
        // setting - name: setting - value
    });
});


$('.gallery__slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                infinite: true
            }
        },
        {
            breakpoint: 775,
            settings: {
                slidesToShow: 1,
                infinite: true,
                arrows: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


// Testimonials
$(document).ready(function () {
    $('.testimonials__slider').slick({
        // setting - name: setting - value
    });
});

$('.testimonials__slider').slick({
    infinite: false,
    fade: true,
    speed: 300,
    slidesToShow: 1,
    dots: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 775,
                settings: {
                    fade: false,
                    slidesToShow: 1,
                    infinite: true,
                    arrows: false,
                    speed: 300
                }
            }
    ]
});