$(document).ready(function() {



    $('.mnu .wrapper .tbar .menu ul li').click(function() {
        var mb = document.createElement("span");
        var m = document.getElementsByTagName('span');

        $(this).append(mb).siblings().remove(m);
        // $(li).siblings.remove(m);
    });

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

        if (scrolling > 900) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
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
        }, 1500);
    });

});