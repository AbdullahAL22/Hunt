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

    $('.mnu .wrapper .tbar .menu ul li').click(function() {
        $(this).addClass('mb').siblings().removeClass('mb');
    });

});