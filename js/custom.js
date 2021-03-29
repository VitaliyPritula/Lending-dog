let btn_complex = document.getElementById('btn-complex');
let complex = document.getElementById('complex');
btn_complex.addEventListener('click', function() {
    hideClassTabs();
    btn_complex.classList.add('btn-tab-active');
    show(complex);
});

let btn_hygiene = document.getElementById('btn-hygiene');
let hygiene = document.getElementById('hygiene');
btn_hygiene.addEventListener('click', function() {
    hideClassTabs();
    btn_hygiene.classList.add('btn-tab-active');
    show(hygiene);
});

let btn_washing_drying = document.getElementById('btn-washing-drying');
let washing_drying = document.getElementById('washing-drying');
btn_washing_drying.addEventListener('click', function() {
    hideClassTabs();
    btn_washing_drying.classList.add('btn-tab-active');
    show(washing_drying);
});

let btn_trimming = document.getElementById('btn-trimming');
let trimming = document.getElementById('trimming');
btn_trimming.addEventListener('click', function() {
    hideClassTabs();
    btn_trimming.classList.add('btn-tab-active');
    show(trimming);
});

let btn_express_molt = document.getElementById('btn-express-molt');
let express_molt = document.getElementById('express-molt');
btn_express_molt.addEventListener('click', function() {
    hideClassTabs();
    btn_express_molt.classList.add('btn-tab-active');
    show(express_molt);
});

let btn_cats = document.getElementById('btn-cats');
let cats = document.getElementById('cats');
btn_cats.addEventListener('click', function() {
    hideClassTabs();
    btn_cats.classList.add('btn-tab-active');
    show(cats);
});

let btn_additional_services = document.getElementById('btn-additional-services');
let additional_services = document.getElementById('additional-services');
btn_additional_services.addEventListener('click', function() {
    hideClassTabs();
    btn_additional_services.classList.add('btn-tab-active');
    show(additional_services);
});

// ************ Показывать и скрывать цены complex
let hideElements = function(els_list) {
    for (let i = 0; i < els_list.length; i++) {
        els_list[i].classList.add('hidden');
    }
}

// ************ Global vars
let _class_ = '';
let remove_class_list
// ************ END Global vars

let head_small_complex = document.getElementById('head-small-complex');
let tbody_small_complex = document.getElementById('tbody-small-complex');
let head_middle_complex = document.getElementById('head-middle-complex');
let tbody_middle_complex = document.getElementById('tbody-middle-complex');
let head_large_complex = document.getElementById('head-large-complex');
let tbody_large_complex = document.getElementById('tbody-large-complex');
let head_mestizo_complex = document.getElementById('head-mestizo-complex');
let tbody_mestizo_complex = document.getElementById('tbody-mestizo-complex');

head_small_complex.addEventListener('click', function() {
    _class_ = tbody_small_complex.getAttribute('class');

    hideElements([tbody_small_complex, tbody_middle_complex, tbody_large_complex, tbody_mestizo_complex]);

    if (_class_ == 'hidden') {
        tbody_small_complex.classList.remove('hidden');
    } else {
        tbody_small_complex.classList.add('hidden');
    }
});

head_middle_complex.addEventListener('click', function() {
    _class_ = tbody_middle_complex.getAttribute('class');

    hideElements([tbody_small_complex, tbody_middle_complex, tbody_large_complex, tbody_mestizo_complex]);

    if (_class_ == 'hidden') {
        tbody_middle_complex.classList.remove('hidden');
    } else {
        tbody_middle_complex.classList.add('hidden');
    }
});

head_large_complex.addEventListener('click', function() {
    _class_ = tbody_large_complex.getAttribute('class');

    hideElements([tbody_small_complex, tbody_middle_complex, tbody_large_complex, tbody_mestizo_complex]);

    if (_class_ == 'hidden') {
        tbody_large_complex.classList.remove('hidden');
    } else {
        tbody_large_complex.classList.add('hidden');
    }
});

head_mestizo_complex.addEventListener('click', function() {
    // magicActions(tbody_mestizo_complex);

    _class_ = tbody_mestizo_complex.getAttribute('class');

    hideElements([tbody_small_complex, tbody_middle_complex, tbody_large_complex, tbody_mestizo_complex]);

    if (_class_ == 'hidden') {
        tbody_mestizo_complex.classList.remove('hidden');
    } else {
        tbody_mestizo_complex.classList.add('hidden');
    }
});

// Гигиена
let head_small_hygiene = document.getElementById('head-small-hygiene');
let tbody_small_hygiene = document.getElementById('tbody-small-hygiene');
let head_middle_hygiene = document.getElementById('head-middle-hygiene');
let tbody_middle_hygiene = document.getElementById('tbody-middle-hygiene');
let head_large_hygiene = document.getElementById('head-large-hygiene');
let tbody_large_hygiene = document.getElementById('tbody-large-hygiene');
let head_mestizo_hygiene = document.getElementById('head-mestizo-hygiene');
let tbody_mestizo_hygiene = document.getElementById('tbody-mestizo-hygiene');
remove_class_list = [tbody_small_hygiene, tbody_middle_hygiene, tbody_large_hygiene, tbody_mestizo_hygiene];

head_small_hygiene.addEventListener('click', function() {
    _class_ = tbody_small_hygiene.getAttribute('class');

    hideElements(remove_class_list);

    if (_class_ == 'hidden') {
        tbody_small_hygiene.classList.remove('hidden');
    } else {
        tbody_small_hygiene.classList.add('hidden');
    }
});

head_middle_hygiene.addEventListener('click', function() {
    _class_ = tbody_middle_hygiene.getAttribute('class');

    hideElements(remove_class_list);

    if (_class_ == 'hidden') {
        tbody_middle_hygiene.classList.remove('hidden');
    } else {
        tbody_middle_hygiene.classList.add('hidden');
    }
});

head_large_hygiene.addEventListener('click', function() {
    _class_ = tbody_large_hygiene.getAttribute('class');

    hideElements(remove_class_list);

    if (_class_ == 'hidden') {
        tbody_large_hygiene.classList.remove('hidden');
    } else {
        tbody_large_hygiene.classList.add('hidden');
    }
});

head_mestizo_hygiene.addEventListener('click', function() {
    _class_ = tbody_mestizo_hygiene.getAttribute('class');

    hideElements(remove_class_list);

    if (_class_ == 'hidden') {
        tbody_mestizo_hygiene.classList.remove('hidden');
    } else {
        tbody_mestizo_hygiene.classList.add('hidden');
    }
});

// Мытье-сушка
let head_small_washing = document.getElementById('head-small-washing');
let tbody_small_washing = document.getElementById('tbody-small-washing');
let head_middle_washing = document.getElementById('head-middle-washing');
let tbody_middle_washing = document.getElementById('tbody-middle-washing');
let head_large_washing = document.getElementById('head-large-washing');
let tbody_large_washing = document.getElementById('tbody-large-washing');
let head_mestizo_washing = document.getElementById('head-mestizo-washing');
let tbody_mestizo_washing = document.getElementById('tbody-mestizo-washing');
remove_class_list = [tbody_small_washing, tbody_middle_washing, tbody_large_washing, tbody_mestizo_washing];

head_small_washing.addEventListener('click', function() {
    _class_ = tbody_small_washing.getAttribute('class');

    hideElements(remove_class_list);

    if (_class_ == 'hidden') {
        tbody_small_washing.classList.remove('hidden');
    } else {
        tbody_small_washing.classList.add('hidden');
    }
});

head_middle_washing.addEventListener('click', function() {
    _class_ = tbody_middle_washing.getAttribute('class');

    hideElements(remove_class_list);

    if (_class_ == 'hidden') {
        tbody_middle_washing.classList.remove('hidden');
    } else {
        tbody_middle_washing.classList.add('hidden');
    }
});

head_large_washing.addEventListener('click', function() {
    _class_ = tbody_large_washing.getAttribute('class');

    hideElements(remove_class_list);

    if (_class_ == 'hidden') {
        tbody_large_washing.classList.remove('hidden');
    } else {
        tbody_large_washing.classList.add('hidden');
    }
});

head_mestizo_washing.addEventListener('click', function() {
    _class_ = tbody_mestizo_washing.getAttribute('class');

    hideElements(remove_class_list);

    if (_class_ == 'hidden') {
        tbody_mestizo_washing.classList.remove('hidden');
    } else {
        tbody_mestizo_washing.classList.add('hidden');
    }
});

// Express molt
let head_small_express = document.getElementById('head-small-express');
let tbody_small_express = document.getElementById('tbody-small-express');
let head_middle_express = document.getElementById('head-middle-express');
let tbody_middle_express = document.getElementById('tbody-middle-express');
let head_large_express = document.getElementById('head-large-express');
let tbody_large_express = document.getElementById('tbody-large-express');
let head_mestizo_express = document.getElementById('head-mestizo-express');
let tbody_mestizo_express = document.getElementById('tbody-mestizo-express');
remove_class_list = [tbody_small_express, tbody_middle_express, tbody_large_express, tbody_mestizo_express];

head_small_express.addEventListener('click', function() {
    _class_ = tbody_small_express.getAttribute('class');

    hideElements(remove_class_list);

    if (_class_ == 'hidden') {
        tbody_small_express.classList.remove('hidden');
    } else {
        tbody_small_express.classList.add('hidden');
    }
});

head_middle_express.addEventListener('click', function() {
    _class_ = tbody_middle_express.getAttribute('class');

    hideElements(remove_class_list);

    if (_class_ == 'hidden') {
        tbody_middle_express.classList.remove('hidden');
    } else {
        tbody_middle_express.classList.add('hidden');
    }
});

head_large_express.addEventListener('click', function() {
    _class_ = tbody_large_express.getAttribute('class');

    hideElements(remove_class_list);

    if (_class_ == 'hidden') {
        tbody_large_express.classList.remove('hidden');
    } else {
        tbody_large_express.classList.add('hidden');
    }
});

head_mestizo_express.addEventListener('click', function() {
    _class_ = tbody_mestizo_express.getAttribute('class');

    hideElements(remove_class_list);

    if (_class_ == 'hidden') {
        tbody_mestizo_express.classList.remove('hidden');
    } else {
        tbody_mestizo_express.classList.add('hidden');
    }
});

// Trimming
let head_main_trimming = document.getElementById('head-main-trimming');
let tbody_main_trimming = document.getElementById('tbody-main-trimming');
let head_mestizo_trimming = document.getElementById('head-mestizo-trimming');
let tbody_mestizo_trimming = document.getElementById('tbody-mestizo-trimming');
remove_class_list = [tbody_main_trimming, tbody_mestizo_trimming];

head_main_trimming.addEventListener('click', function() {
    _class_ = tbody_main_trimming.getAttribute('class');

    hideElements(remove_class_list);

    if (_class_ == 'hidden') {
        tbody_main_trimming.classList.remove('hidden');
    } else {
        tbody_main_trimming.classList.add('hidden');
    }
});

head_mestizo_trimming.addEventListener('click', function() {
    _class_ = tbody_mestizo_trimming.getAttribute('class');

    hideElements(remove_class_list);

    if (_class_ == 'hidden') {
        tbody_mestizo_trimming.classList.remove('hidden');
    } else {
        tbody_mestizo_trimming.classList.add('hidden');
    }
});

// ************* END

let magicActions = function(el) {
    _class_ = el.getAttribute('class');

    console.log(_class_, el);

    hideElements([tbody_small_complex, tbody_middle_complex, tbody_large_complex, tbody_mestizo_complex]);

    if (_class_ == 'hidden') {
        el.remove('hidden');
        console.log('test')
    } else {
        el.add('hidden');
    }
}

// Mobile
// Complex small
// let complex_mobile_arrow_up = document.getElementById('complex-mobile-arrow-up');
// let complex_mobile_arrow_down = document.getElementById('complex-mobile-arrow-down');

// let complex_mobile_plus_up = document.getElementById('complex-mobile-plus-up');
// let complex_mobile_plus_down = document.getElementById('complex-mobile-plus-down');

// let complex_mobile_small = document.getElementById('complex-mobile-small');
// complex_mobile_small.addEventListener('click', function() {
//     if (complex_mobile_small.classList.contains('collapsed')) {
//         complex_mobile_arrow_up.classList.add('hide');
//         complex_mobile_arrow_down.classList.remove('hide');

//         complex_mobile_plus_up.classList.add('hide');
//         complex_mobile_plus_down.classList.remove('hide');

//         console.log('collapsed');
//     } else {
//         complex_mobile_arrow_up.classList.remove('hide');
//         complex_mobile_arrow_down.classList.add('hide');

//         complex_mobile_plus_up.classList.remove('hide');
//         complex_mobile_plus_down.classList.add('hide');

//         console.log('NO collapsed');
//     }

//     console.log('complex_mobile_small.addEventListener');
// });

// Complex middle
// let complex_middle_arrow_up = document.getElementById('complex-middle-arrow-up');
// let complex_middle_arrow_down = document.getElementById('complex-middle-arrow-down');

// let complex_middle_plus_up = document.getElementById('complex-middle-plus-up');
// let complex_middle_plus_down = document.getElementById('complex-middle-plus-down');

// let complex_mobile_middle = document.getElementById('complex-mobile-middle');
// complex_mobile_middle.addEventListener('click', function() {
//     if (complex_mobile_middle.classList.contains('collapsed')) {
//         complex_middle_arrow_up.classList.add('hide');
//         complex_middle_arrow_down.classList.remove('hide');

//         complex_middle_plus_up.classList.add('hide');
//         complex_middle_plus_down.classList.remove('hide');

//         console.log('collapsed middle');
//     } else {
//         complex_middle_arrow_up.classList.remove('hide');
//         complex_middle_arrow_down.classList.add('hide');

//         complex_middle_plus_up.classList.remove('hide');
//         complex_middle_plus_down.classList.add('hide');

//         console.log('NO collapsed middle');
//     }
// });

// Complex large
// let complex_large_arrow_up = document.getElementById('complex-large-arrow-up');
// let complex_large_arrow_down = document.getElementById('complex-large-arrow-down');

// let complex_large_plus_up = document.getElementById('complex-large-plus-up');
// let complex_large_plus_down = document.getElementById('complex-large-plus-down');

// let complex_mobile_large = document.getElementById('complex-mobile-large');
// complex_mobile_large.addEventListener('click', function() {
//     if (complex_mobile_large.classList.contains('collapsed')) {
//         complex_large_arrow_up.classList.add('hide');
//         complex_large_arrow_down.classList.remove('hide');

//         complex_large_plus_up.classList.add('hide');
//         complex_large_plus_down.classList.remove('hide');

//         console.log('collapsed large');
//     } else {
//         complex_large_arrow_up.classList.remove('hide');
//         complex_large_arrow_down.classList.add('hide');

//         complex_large_plus_up.classList.remove('hide');
//         complex_large_plus_down.classList.add('hide');

//         console.log('NO collapsed large');
//     }
// });

// Complex mestizo
// let complex_mestizo_arrow_up = document.getElementById('complex-mestizo-arrow-up');
// let complex_mestizo_arrow_down = document.getElementById('complex-mestizo-arrow-down');

// let complex_mestizo_plus_up = document.getElementById('complex-mestizo-plus-up');
// let complex_mestizo_plus_down = document.getElementById('complex-mestizo-plus-down');

// let complex_mobile_mestizo = document.getElementById('complex-mobile-mestizo');
// complex_mobile_mestizo.addEventListener('click', function() {
//     if (complex_mobile_mestizo.classList.contains('collapsed')) {
//         complex_mestizo_arrow_up.classList.add('hide');
//         complex_mestizo_arrow_down.classList.remove('hide');

//         complex_mestizo_plus_up.classList.add('hide');
//         complex_mestizo_plus_down.classList.remove('hide');

//         console.log('collapsed mestizo');
//     } else {
//         complex_mestizo_arrow_up.classList.remove('hide');
//         complex_mestizo_arrow_down.classList.add('hide');

//         complex_mestizo_plus_up.classList.remove('hide');
//         complex_mestizo_plus_down.classList.add('hide');

//         console.log('NO collapsed mestizo');
//     }
// });









// let btn_complex_mobile = document.getElementById('btn-complex-mobile');
// let complex_mobile = document.getElementById('complex-mobile');
// btn_complex_mobile.addEventListener('click', function() {
//     hideClassTabs();
//     btn_complex_mobile.classList.add('btn-tab-active');
//     show(complex_mobile);
// });

// let btn_hygiene_mobile = document.getElementById('btn-hygiene-mobile');
// let hygiene_mobile = document.getElementById('hygiene-mobile');
// btn_hygiene_mobile.addEventListener('click', function() {
//     hideClassTabs();
//     btn_hygiene_mobile.classList.add('btn-tab-active');
//     show(hygiene_mobile);
// });
//
// let btn_washing_drying_mobile = document.getElementById('btn-washing-drying-mobile');
// let washing_drying_mobile = document.getElementById('washing-drying-mobile');
// btn_washing_drying_mobile.addEventListener('click', function() {
//     hideClassTabs();
//     btn_washing_drying_mobile.classList.add('btn-tab-active');
//     show(washing_drying_mobile);
// });
//
// let btn_trimming_mobile = document.getElementById('btn-trimming-mobile');
// let trimming_mobile = document.getElementById('trimming-mobile');
// btn_trimming_mobile.addEventListener('click', function() {
//     hideClassTabs();
//     btn_trimming_mobile.classList.add('btn-tab-active');
//     show(trimming_mobile);
// });
//
// let btn_express_molt_mobile = document.getElementById('btn-express-molt-mobile');
// let express_molt_mobile = document.getElementById('express-molt-mobile');
// btn_express_molt_mobile.addEventListener('click', function() {
//     hideClassTabs();
//     btn_express_molt_mobile.classList.add('btn-tab-active');
//     show(express_molt_mobile);
// });
//
// let btn_cats_mobile = document.getElementById('btn-cats-mobile');
// let cats_mobile = document.getElementById('cats-mobile');
// btn_cats_mobile.addEventListener('click', function() {
//     hideClassTabs();
//     btn_cats_mobile.classList.add('btn-tab-active');
//     show(cats_mobile);
// });
//
// let btn_additional_services_mobile = document.getElementById('btn-additional-services-mobile');
// let additional_services_mobile = document.getElementById('additional-services-mobile');
// btn_additional_services_mobile.addEventListener('click', function() {
//     hideClassTabs();
//     btn_additional_services_mobile.classList.add('btn-tab-active');
//     show(additional_services_mobile);
// });

function log(data) {
    console.log(data);
}

function hideClassTabs() {
    let tab_btn = document.getElementsByClassName('tab-btn');
    let tabs_price = document.getElementsByClassName('tabs-price');

    for (let i = 0; i < tab_btn.length; i++) {
        tab_btn[i].classList.remove('btn-tab-active');
    }

    for (let i = 0; i < tabs_price.length; i++) {
        tabs_price[i].classList.add('hidden');
    }
}

function hide(el) {
    el.classList.add('hidden');
}

function show(el) {
    el.classList.remove('hidden');
}

// tab_btn_1.addEventListener('click', function() {
//     hideClassTabs();
//     tab_btn_1.classList.add('btn-tab-active');
//     show(tab_1);
// });

// tab_btn_2.addEventListener('click', function() {
//     hideClassTabs();
//     tab_btn_2.classList.add('btn-tab-active');
//     hide(tab_1);
//     show(tab_2);
// });

// tab_btn_3.addEventListener('click', function() {
//     hideClassTabs();
//     tab_btn_3.classList.add('btn-tab-active');
//     hide(tab_1);
//     show(tab_3);
// });
