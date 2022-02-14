$('.icon-menu').click(function (event) {
    $(this).toggleClass('active');
    $('.menu__body').toggleClass('active');
    $('body').toggleClass('lock');
});

$(function() {
    $('.portfolio__toggles button').click(function(){
        var get_id = this.id;
        var get_current = $('.posts .' + get_id);

        $('.post').not(get_current).hide(500);
        get_current.show(500);
    });

    $('#showall').click(function(){
        $('.post').show(500);
    });
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        responsive: {
            0:{
                items:1
            },
            600:{
                items:3
            },
            900:{
                items:5,
            },
            1500:{
                items:8
            },
        }
    });
});

