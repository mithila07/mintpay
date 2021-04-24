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
        }, 100);
    });
});


function verifyRecaptchaCallback(){
        document.getElementById('submit-button').disabled = false;
    }

window.verifyRecaptchaCallback = verifyRecaptchaCallback;
                

    function submitToAPI(e) {
        e.preventDefault();

        var URL = "https://9pe7damgd2.execute-api.ap-south-1.amazonaws.com/live/partner-with-us";

        var comp_name = document.getElementById("comp-name-input").value
        var comp_url = document.getElementById("comp-url-input").value
        var name = document.getElementById("name-input").value
        var email = document.getElementById("email-input").value
        var phone = document.getElementById("phone-input").value
        var message = document.getElementById("message-input").value

        var comp_name_error = document.getElementById("comp-name-input-error")
        var comp_url_error = document.getElementById("comp-url-input-error")
        var name_error = document.getElementById("name-input-error")
        var email_error =  document.getElementById("email-input-error")
        var phone_error = document.getElementById("phone-input-error")
        var message_error = document.getElementById("message-input-error")
        var submit = true;
        

        const email_re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const phone_re = /[0-9]{10}/;


        if (comp_name==null || comp_name==""){
            comp_name_error.innerText = "This is a required field";
            submit = false;
        }
        else{
            comp_name_error.innerText = ''
        }

        if (comp_url==null || comp_url==""){
            comp_url_error.innerText = "This is a required field";
            submit = false;
        }
        else{
            comp_url_error.innerText = ''
        }

        if (name==null || name==""){
            name_error.innerText= "This is a required field";
            submit = false;
        }
        else{
            name_error.innerText = ''
        }

        if (email==null || email==""){
            email_error.innerText = "This is a required field";
            submit = false;
        }
        else if (!email_re.test(String(email).toLowerCase())){
            email_error.innerText = "Invalid email address";
            submit = false;
        }
        else{
            email_error.innerText = ''
        }

        if (phone==null || phone==""){
            phone_error.innerText = "This is a required field";
            submit = false;
        }
        else if (!phone_re.test(String(phone))){
            phone_error.innerText = "Invalid phone number";
            submit = false;
        }
        else{
            phone_error.innerText = ''
        }


        if (message==null || message==""){
            message_error.innerText = "This is a required field"
            submit = false;
        }
        else{
            message_error.innerText = ''
        }

        if (submit === true){
            var http = new XMLHttpRequest();
            var params = {
                'comp_name': comp_name,
                'comp_url': comp_url,
                'name': name,
                'email': email,
                'phone': phone,
                'message': message
            };
            http.open('POST', URL, true);

            http.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            http.onreadystatechange = function() {
                if(http.readyState == 4 && http.status == 200) {
                    const id = 'partner-form-section';
                    const yOffset = -150; 
                    const element = document.getElementById(id);
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({top: y, behavior: 'smooth'});
                    document.getElementById('success-message').classList.remove('d-none');
                    document.getElementById('partner-with-us-form').classList.add('d-none');
                }
            }
            http.send(JSON.stringify(params));
        }

        else{
            return;
        }        
     }
