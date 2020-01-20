var header = $(heroBlock);
var dummy = $(heroBlockDummyShadow);
var offsetFromTop = dummy.offset()

$(window).on('scroll', function () {

    var scrollTop = $(this).scrollTop() - offsetFromTop.top,
        elementHeight = dummy.outerHeight(),
        calc = 0 + (elementHeight - scrollTop) / elementHeight;

    header.css({
        'opacity': calc
    });

    if (calc > '1') {
        header.css({
            'opacity': 1
        });
    } else if (calc < '0') {
        header.css({
            'opacity': 0
        });
    }

});