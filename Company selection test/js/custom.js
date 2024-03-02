$(document).ready(function () {
    $('#owl-demo1').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    $('#owl-demo').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 1
            },
            1400: {
                items: 2
            }

        }
    })
})
$(".mobile-navigation-toggle").click(function () {
    $("body").toggleClass("menu-open");
});

$('.close').on('click', function (e) {
    $('body').removeClass("menu-open");
}); 
$(".switch-toggle-btn").click(function () {
    $("body").toggleClass("toggle-open");
});