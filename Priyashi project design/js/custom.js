$('#banner-slider').owlCarousel({    
    autoplay:true,
    autoplayTimeout:5000,    
    items:1,
    loop:true,
    margin:00,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('#customers-slider').owlCarousel({    
    // autoplay:true,
    // autoplayTimeout:5000,    
    items:2,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});
$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".site-header").addClass("ac");
        } else {
           $(".site-header").removeClass("ac");
        }
    });
});