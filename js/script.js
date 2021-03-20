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
        $('.slider_master').slick({
            arrows:true,
            dots:true,
            slidesToShow:3,
            autoplay:false,
            speed:1000,
            // autoplaySpeed:800,
            responsive:[
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow:2
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow:1
                    }
                }
            ]
        });
    });
    
    
});