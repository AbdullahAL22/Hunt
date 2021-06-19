$(document).ready(function() {

    $('.mnu .wrapper .tbar .menu ul li').click(function() {
        $(this).addClass('mb').siblings().removeClass('mb');
    });

    // $(".vertical").slick({
    //     dots: false,
    //     vertical: true,
    //     centerMode: true,
    //     slidesToShow: infinity,
    //     slidesToScroll: 1,
    //     infinity: true,
    //     autoPlay: true,
    // });


    $("#slider1").sliderResponsive({

        slidePause: 9000,
        fadeSpeed: 3000,
        autoPlay: "on",
        showArrows: "on",
        hideDots: "on",
        hoverZoom: "off",
        titleBarTop: "off"
    });

    $(window).scroll(function() {
        var scrolling = $(this).scrollTop();

        if (scrolling > 600) {
            $('.top').fadeIn({
                fadeSpeed: 1200,
            });
        } else {
            $('.top').fadeOut({
                fadeSpeed: 2000,
            });
        }

        if (scrolling > 150) {
            $('.mnu').addClass('mnu-fix');
        } else {
            $('.mnu').removeClass('mnu-fix');
        }
    });

    $('.top').click(function() {
        $('html,body').animate({
            scrollTop: 0,
        }, 1000);
    });

    // var html_body = $('html, body');
    // $('.menu ul li a').on('click', function() {



    //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //         if (target.length) {
    //             html_body.animate({
    //                 scrollTop: target.offset().top - 0
    //             }, 500);
    //             return false;
    //         }
    //     }
    // });


});