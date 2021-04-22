import 'slick-carousel';
import AOS from 'aos';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';

AOS.init({
    disable: 'mobile'
});


$(function () {
    // main-menu and hamburger icon toggle starts
    $('#toggle').click(function () {
        $(this).toggleClass('-menu-open');
        $('#overlay').toggleClass('open');
    });
    // main-menu and hamburger icon toggle ends

    //nav links delay starts
    $("a.menu-link[href]").click(function (e) {
        e.preventDefault();
        if (this.href) {
            var target = this.href;
            setTimeout(function () {
                window.location = target;
            }, 500);
        }
    });
    // nav links delay ends

    //logo slider starts
    $('.logo-slider').slick({
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        arrows: false,
        dots: false,
        cssEase: 'ease-in',
        Infinite: true,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                }
            },
            {
                breakpoint: 576,
                settings: {
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

    //filter-slider starts
    $('.filter-block__slider').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    //filter-slider ends

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

    //filter sticky top starts
    var firstHeight = $('.pink-bg').css("height");
    var height = parseInt(firstHeight);

    $(window).scroll(function () {
        if ($(window).scrollTop() > height) {
            $(".filter-block").addClass("filter-block--sticky-top");
        } else {
            $(".filter-block").removeClass("filter-block--sticky-top");
        }
    });
    //filter sticky top ends
    
    var linkScroll = $('.filter-block__slider__item');
    linkScroll.click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top -150
        }, 700);
    });
});
