/**

    This fiddle is using the latest version 
    of Slick (from master) and jQuery.

    If your issue occurs in older version or a 
    specific tag; please use the "External Resources" 
    section in the sidebar to correct it.

**/


$(".slider").slick({
    autoplay: false,
    dots: true,
    responsive: [{ 
        breakpoint: 500,
        settings: {
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2
        } 
    }]
});
