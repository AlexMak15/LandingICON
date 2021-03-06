$(document).ready(function(){
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 700); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });

    //Circular animate
    $('.circlestat').circliful();

    //Owl carousel
    $('.owl-carousel').owlCarousel({
        center: true,
        margin: 90,
        items: 3,
        loop:true,
        navText: [" "],
        nav:true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                nav: false,
                items: 1
            },
            900:{
                margin: 10,
                nav: false,
                items: 2,
                center: false
            },
            1080:{
                items: 3
            }

        }
    });
});

