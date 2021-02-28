var jquery = require("jquery");
window.$ = window.jQuery = jquery; // notice the definition of global variables here
require("jquery/dist/jquery.js");


$(function () {
    // main-menu and hamburger icon toggle starts
    $('#toggle').click(function () {
        $(this).toggleClass('-menu-open');
        $('#overlay').toggleClass('open');
    });
    // main-menu and hamburger icon toggle ends

    //slick slider starts
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 0,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false,
        cssEase: 'linear',
        Infinite: true
    });
});
