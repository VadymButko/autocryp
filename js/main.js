//скролл хедера
$(window).scroll(function() {
  var height = $(window).scrollTop();
   /*Если сделали скролл на 100px задаём новый класс для header*/
  if(height > 50){
    $('header').addClass('header-active');
  } 
  else{
    /*Если меньше 100px удаляем класс для header*/
    $('header').removeClass('header-active');
  }
});

// header-burger

$('.header__burger').on('click', function(e) {
    e.preventDefault();
    $('.header__burger,.header__menu-nav').toggleClass('active');
    $('body').toggleClass('lock');
});

//pricing

var tariff = $('.pricing__tariff-button');
tariff.on('click', function(e) {
    e.preventDefault();
    tariff.removeClass('active-tariff');
     $(this).addClass('active-tariff');
});

$(document).ready(function(){
    $('.pricing__tariff-button').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.pricing__tariff-button').removeClass('current');
        $('.pricing__cards').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });
});

// slider slick

$(document).ready(function(){
    $('.testimonials__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,        
        responsive: [          
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false
            }
          }
        ]
        
    });
});

//плавный якорь

$(function(){
  $('a[href^="#"]').click(function(e){
     var target = $(this).attr('href');
     e.preventDefault();
     $('.header__burger,.header__menu-nav').removeClass('active');
	 $('body').removeClass('lock');
     $('html, body').animate({scrollTop: $(target).offset().top-100}, 1000);
     return false;     
  });
});