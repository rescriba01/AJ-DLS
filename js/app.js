$(document).foundation();

// calculating some values
var header_height = $('.header').outerHeight(),
  hero_height = $('.hero').outerHeight(),
  scroll_top_icon = $('#scroll-to-top'),
  nav = $('.page-nav'),
  sections = $('.section'),
  cmt = parseInt($('.container').css('margin-top'), 10), 
  combined_height = header_height + hero_height;

// Scroll to top function 1/2
$(function(){
  $(window).scroll(function(){
    var $scrollTop = $(window).scrollTop();

    if( $scrollTop > header_height ){
        scroll_top_icon.fadeIn();
    } else {
        scroll_top_icon.fadeOut();
    }
    
    if( $scrollTop > combined_height + cmt ){
      nav.addClass( 'sticky-sidebar' );
    } else {
      nav.removeClass( 'sticky-sidebar' );
    }
  });   
});

$(window).scroll(function () {
  var cur_pos = $(this).scrollTop();

  sections.each(function() {
    var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active-nav');
      sections.removeClass('active-nav');
      
      $(this).addClass('active-nav');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active-nav');
    }
    if (cur_pos < combined_height) {
      nav.find('a').removeClass('active-nav');
    }

  });
});

//this is for the sticky dynamic nav
nav.find('a').on('click', function () {
  var $el = $(this), 
       id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top + 1
  }, 500);
  
  return false;
});

// Scroll to top function 2/2
scroll_top_icon.click(function(){
  var body = $("html, body");
  body.animate({scrollTop:0}, '500', 'swing');
});

// Navigation hovering
$('.has-submenu').hover(function(event){
  event.preventDefault();
  $(this).children('ul').stop(true).slideToggle();
});

//Navigation toggle in mobile
$('.icon-ajmn-menu').click(function(){
  $('nav.navigation').stop(true).slideToggle();
});

//Template carousel page
$('.carousel-wrapper').slick({
    autoplay: true,
    dots: true,
    // arrows:false
});

//SLICK contained carousel
$('.contained-carousel').slick({
  autoplay:true,
  dots: true,
  infinite: true,
  arrows:false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});