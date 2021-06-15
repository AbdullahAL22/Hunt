$(document).ready(function() {

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

        if (scrolling > 150) {
            $('.mnu').addClass('mnu-fix');
        } else {
            $('.mnu').removeClass('mnu-fix');
        }
    });

    $('.mnu .wrapper .tbar .menu ul li').click(function() {
        $(this).addClass('mb').siblings().removeClass('mb');
    });

});