$(document).ready(function () {
    $('.header-burger').click(function (event) {
        $('.header-burger, .menu-nav').toggleClass('active');
        $('body').toggleClass('lock');
        
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

    $(document).ready(function () {
        $.datetimepicker.setLocale('ru');

        $('#datepicker1').datetimepicker({
            timepicker: false,
            format: 'd M y',
            minDate:'0'
        });
        $('#datepicker2').datetimepicker({
            datepicker: false,
            format: 'H:i'
        });
        $('#datepicker3').datetimepicker({
            timepicker: false,
            format: 'd M y',
            minDate:'0'
        });
        $('#datepicker4').datetimepicker({
            datepicker: false,
            format: 'H:i'
        });
    });
});

// плавная прокрутка при скроле
const menuLinks = document.querySelectorAll('.header_li[data-goto]');
if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });    
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            // if(header-burger .menu-nav.contains('active')){
            //     document.body.classList.remove('lock');
            //     header-burger.classList.remove('active');
            //     menu-nav.classList.remove('active');
            // }
            
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}


const raitengItemsList = document.querySelectorAll('.raiteng_item');
const raitengItemsArray = Array.prototype.slice.call(raitengItemsList);

raitengItemsArray.forEach(item =>
    item.addEventListener('click', () => {
        const { itemValue } = item.dataset;
        item.parentNode.dataset.totalValue = itemValue;
    })
);
