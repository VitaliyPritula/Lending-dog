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
            // dots: true,
            centerMode: true,
            centerPagging: '200px',
            // focusOnSelect: true,
            speed:1000,
            variableWidth: true
            // autoplaySpeed:800,
            // responsive:[
            //     {
            //         breakpoint: 768,
            //         settings: {
            //             slidesToShow:2
            //         }
            //     },
            //     {
            //         breakpoint: 550,
            //         settings: {
            //             slidesToShow:1
            //         }
            //     }
            // ]
        });
    });
    
    
});

$("#fullpage").onepage_scroll({
    sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                     // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
    pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.

    loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true,                  // You can activate the keyboard controls
    responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                     // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                     // the browser's width is less than 600, the fallback will kick in.
    direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
 });















$(document).ready(function () {
    console.log('test ajax');

    $('#contactform').on('submit', function (e) {
        e.preventDefault();

        console.log('contactform');

        $.ajax({
            type: 'POST',
            url: '/sendmail',
            data: $('#contactform').serialize(),
            success: function (data) {
                if (data.result == 'success') {
                    console.log('data.result = ', data.result);
                    $('#senderror').hide();
                    $('#sendmessage').show();
                    $('#contactform')[0].reset();
                }

                if (data.result == 'failed') {
                    console.log('data = ', data.name);
                    $('#senderror').show();
                    $('#sendmessage').hide();
                }
            },
            error: function () {
                console.log('error ajax');
                // $('#senderror').show();
                // $('#sendmessage').hide();
            }
        });
    });
});

var $page = $('html, body');

    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 675);
        return false;
    });

    /* 2 */
    var btn = $('#button');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
});


    function hideNavbarCollapse() {
        let navbars_main = $('#navbars-main');

        if (navbars_main.hasClass("show")) {
            navbars_main.removeClass('show');
        }
    }
    $('.form_datetime').datetimepicker({
        language:  'ru',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        forceParse: 0,
        showMeridian: 1
    });
    $('.form_date').datetimepicker({
        language:  'ru',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });
    $('.form_time').datetimepicker({
        language:  'ru',
        weekStart: 1,
        todayBtn:  1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 1,
        minView: 0,
        maxView: 1,
        forceParse: 0
    });

// $function(m,e,t,r,i,k,a) {m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
//         m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}
//     (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

//     ym(70137172, "init", {
//         clickmap:true,
//         trackLinks:true,
//         accurateTrackBounce:true,
//         webvisor:true
//     });