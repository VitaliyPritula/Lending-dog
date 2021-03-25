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
    });    
});