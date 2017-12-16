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
  if(windowScroll > $('.telescope-display-1').offset().top - $(window).height() ) {
    $('.telescope-display-1').css({'background-position':'center ' + (windowScroll - $('.telescope-display-1').offset().top) + 'px'});

    var opacity = (windowScroll - $('.telescope-display-1').offset().top + 400) / (windowScroll / 4)
    $('.telescope-tint').css({ 'opacity': opacity })
  }



  // Recent Orders Floating Scroll
  if(windowScroll > $('.recent-orders-1').offset().top - $(window).height()) {

    var offsetOneThree = Math.min(0, windowScroll - $('.recent-orders-1').offset().top + $(window).height() - 400);
    var offsetTwo = Math.min(0, windowScroll - $('.recent-orders-1').offset().top + $(window).height() - 400);
    var orderOpacity1 = (windowScroll - $('.recent-orders-1').offset().top + 400) / (windowScroll / 4)
    var orderOpacity2 = (windowScroll - $('.recent-orders-1').offset().top + 450) / (windowScroll / 6)

    $('.order-1').css({'transform':'translate('+ offsetOneThree +'px, 20px)', 'opacity': orderOpacity2});
    $('.order-2').css({'transform':'translate(0px, '+ Math.abs(offsetTwo) +'px)', 'opacity': orderOpacity2});
    $('.order-3').css({'transform':'translate('+ Math.abs(offsetOneThree) +'px, 20px)', 'opacity': orderOpacity2  });
  }

  // Launch Y Translate on Order Row 2
  if(windowScroll > $('.recent-orders-2').offset().top - $(window).height() / 1.1 ) {
    $('.recent-orders-2 .order').each(function(i) {
      setTimeout(function(){
        $('.recent-orders-2 .order').eq(i).addClass('launchY');
      }, 150 * (i+1));
    });
  } else {
    $('.recent-orders-2 .order').each(function(i) {
      setTimeout(function(){
        $('.recent-orders-2 .order').eq(i).removeClass('launchY');
      }, 150 * (i+1));
    });
  }

  // Launch Y Translate on Order Row 3
  if(windowScroll > $('.recent-orders-3').offset().top - $(window).height() / 1.1 ) {
    $('.recent-orders-3 .order').each(function(i) {
      setTimeout(function(){
        $('.recent-orders-3 .order').eq(i).addClass('launchY');
      }, 150 * (i+1));
    });
  } else {
    $('.recent-orders-3 .order').each(function(i) {
      setTimeout(function(){
        $('.recent-orders-3 .order').eq(i).removeClass('launchY');
      }, 150 * (i+1));
    });
  }
});
