$(document).ready(function(){
   //animation scroll js
    var html_body = $('html, body');
    $('.mnu .wrapper .tbar .menu ul li a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 500, '');
                return false;
//                easeInOutCubic
            }
        }
    }); 
});