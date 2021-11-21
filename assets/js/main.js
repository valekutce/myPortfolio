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

    $('span.siteType-click').each(function (){
        $(this).click(function (){
            if($(this).attr('class') == 'siteType-click siteType-korporativ') {
                $('section.siteType-korporativ').fadeIn(2000);
            } else if($(this).attr('class') == 'siteType-click siteType-landing') {
                $('section.siteType-landing').fadeIn(2000);
            } else if($(this).attr('class') == 'siteType-click siteType-internet-magaz') {
                $('section.siteType-internet-magaz').fadeIn(2000);
            }
            $('.pupap-siteType').addClass('pupap-siteType__active');
            $('.pupapOverlay').addClass('pupapOverlay__active');
        });
    });

    $('.pupapOverlay').click(function(){
        $(this).removeClass('pupapOverlay__active');
        $('.pupap-siteType').removeClass('pupap-siteType__active');
        $('.pupap-siteType section').css('display','none')
    });
   
});