$(document).ready(function(){

    //============== burger menu ===============
    $('.header__burger').click(function(){
        $('.header__burger,.header__menu,.header__row_top').toggleClass('active');
        $('body').toggleClass('lock');
        if($('.header__logo').hasClass('scrolled')){
            $('.header__logo').toggleClass('scrolled');
        }else{
            $('.header__logo').toggleClass('scrolled');
        }

    });
    $('.header__link').click(function(){
        $('.header__burger,.header__menu,.header__row_top').toggleClass('active');
        $('body').toggleClass('lock');
          if($('.header__logo').hasClass('scrolled')){
            $('.header__logo').toggleClass('scrolled');
        }else{
            $('.header__logo').toggleClass('scrolled');
        }
    });
    //============= sticky header ===============
    $(window).scroll(function(){
        if($(window).scrollTop() > 50){
            $('.header__row_top').addClass('scrolled');
            $('.header__logo').addClass('scrolled');
            $('.header__burger').addClass('scrolled');
        }
        else{
            $('.header__row_top').removeClass('scrolled');
            $('.header__logo').removeClass('scrolled');
             $('.header__burger').removeClass('scrolled')
        }

    });
    //============== specialties slider ===============
    $('.specialties__slider').slick({
        slidesToShow:1,
        arrows:false,
        dots:true,
    });
    //================== freaking menu ================
    $('.choise__item').click(function(){
        var itemIndex = $(this).index();
        $('.choise__item').removeClass('choise__item_active');
        $(this).addClass('choise__item_active');
        $('.restaurant-menu__content').removeClass('restaurant-menu__content_active');
        $('.restaurant-menu__content').eq(itemIndex).addClass('restaurant-menu__content_active');


    });
    //=================== gallery =========================
    $('.fancybox').fancybox({
        loop: true
    });

});
