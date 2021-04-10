$(document).ready(function () {
    $('.header-burger').click(function (event) {
        $('.header-burger, .menu-nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        autoplay: false,
        speed: 1000,
    });
});

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

});



const raitengItemsList = document.querySelectorAll('.raiteng_item');
const raitengItemsArray = Array.prototype.slice.call(raitengItemsList);

raitengItemsArray.forEach(item =>
    item.addEventListener('click', () => {
        const { itemValue } = item.dataset;
        item.parentNode.dataset.totalValue = itemValue;
    })
);
