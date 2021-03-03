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
    //slick slider ends

    //logo slider starts
    $('.logo-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 6000,
        arrows: false,
        dots: false,
        cssEase: 'linear',
        Infinite: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    //logo slider ends

    //testimonial-slider starts
    $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 8000,
        arrows: false,
        dots: true,
        cssEase: 'linear',
        Infinite: true
    });
    //testimonial-slider ends

    //fixed top bar class toggle starts
    $(window).scroll(function () {
        if ($(window).scrollTop() > 56) {
            $(".navbar").addClass("navbar-sticky-top");
        } else {
            $(".navbar").removeClass("navbar-sticky-top");
        }
    });
    $(".navbar-toggler").click(function () {
        if (!$(".navbar-collapse").hasClass("show")) {
            $(".navbar").addClass("navbar-sticky-top");
        } else {
            if ($(window).scrollTop() < 56) {
                $(".navbar").removeClass("navbar-sticky-top");
            } else {
            }
        }
    });
    //fixed top bar class toggle ends
});
