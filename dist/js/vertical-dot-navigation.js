$(document).ready(function ($) {
    var parPosition = [];
    $('section').each(function () {
        parPosition.push($(this).offset().top);
    });

    $('nav.dot-vrt-nav a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

    $('nav.dot-vrt-nav  li').click(function () {
        $('nav.dot-vrt-nav  li').removeClass('active');
        $(this).addClass('active');
    });

    $(document).scroll(function () { activateDot(); });

    $('nav.dot-vrt-nav  li').click(function () {
        $('nav.dot-vrt-nav  li').removeClass('active');
        $(this).addClass('active');
    });

    activateDot();

    function activateDot() {
        var position = $(document).scrollTop(),
            index;
        for (var i = parPosition.length - 1; i >= 0; i--) {

            if (position >= parPosition[i]) {
                index = i;
                break;
            }
        }
        
        $('nav.dot-vrt-nav  li').removeClass('active');
        $('nav.dot-vrt-nav  li:eq(' + index + ')').addClass('active');
    };
});