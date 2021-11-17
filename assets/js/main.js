$(document).ready(function (){
    $('.testimonials-items').slick({
        autoplay: true,
        dots: true,
        autoplaySpeed: 5000,
    });

    $('.burg').click(function (){
        $('footer').toggleClass('footer-nav__active');
    });
    $('.burg').click(function (){
        $(this).toggleClass('burg__active');
        $('.footer-text h2').toggleClass("footer-text__active");
    });

    $('.header-download a').click(function (e){
        e.preventDefault();
        $('.pupapWhatWordpress').addClass('pupapWhatWordpress__active');
        $('.pupapOverlay').addClass('pupapOverlay__active');
    });
    $('.pupapOverlay').click(function(){
        $(this).removeClass('pupapOverlay__active');
        $('.pupapWhatWordpress').removeClass('pupapWhatWordpress__active');
    });
   
});