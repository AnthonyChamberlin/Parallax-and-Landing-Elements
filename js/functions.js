$(window).scroll(function(){
  var windowScroll = $(this).scrollTop();

  // Parallax Image Rates of Movement
  $('.logo').css({
    'transform' : 'translate(0px, '+ windowScroll /-8 +'%)'
  });

  $('.layer-1').css({
    'transform' : 'translate(0px, '+ windowScroll /-9 +'%)'
  });

  $('.layer-2').css({
    'transform' : 'translate(0px, '+ windowScroll /-13 +'%)'
  });

  $('.layer-3').css({
    'transform' : 'translate(0px, '+ windowScroll /-16 +'%)'
  });

  $('.layer-4').css({
    'transform' : 'translate(0px, '+ windowScroll /-32 +'%)'
  });

  $('.layer-5').css({
    'transform' : 'translate(0px, '+ windowScroll /40 +'%)'
  });

  $('.layer-6').css({
    'transform' : 'translate(0px, '+ windowScroll /2 +'%)'
  });

  // Items Display Fade In
  if(windowScroll > $('.item-display').offset().top - $(window).height() / 1.2) {
    $('.item-display figure').each(function(i){
      setTimeout(function(){
        $('.item-display figure').eq(i).addClass('launchX');
      }, 150 * (i+1));

    });
  }

  // Telescope Promo's
  if(windowScroll > $('.telescope-display').offset().top - $(window).height() ) {
    $('.telescope-display').css({'background-position':'center ' + windowScroll + 'px'});
  }
});
