$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger, .menu-nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $(document).ready(function(){
        $('.slider').slick({
            arrows:false,
            dots:true,
            slidesToShow:1,
            autoplay:false,
            speed:1000,
        });
        $('.slider-test').not('.slick-initialized').slick({
            slidesToShow: 1,
            centerMode: true,
            centerPagging: '500px',
            speed:1000,
            variableWidth: true
        });
    });
    
    
});