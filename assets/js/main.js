$(document).ready(function () {
    "use strict";

    //owl-carousel

    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        dots: false,
        nav: true,
        items: 5,
        autoplayHoverPause: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });
})