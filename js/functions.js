$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  console.log(wScroll);

  $('.logo').css({
    'transform' : 'translate(0px, '+ wScroll /-8 +'%)'
  });

  $('.layer-1').css({
    'transform' : 'translate(0px, '+ wScroll /-10 +'%)'
  });

  $('.layer-2').css({
    'transform' : 'translate(0px, '+ wScroll /-13 +'%)'
  });

  $('.layer-3').css({
    'transform' : 'translate(0px, '+ wScroll /-16 +'%)'
  });

  $('.layer-4').css({
    'transform' : 'translate(0px, '+ wScroll /-32 +'%)'
  });

  $('.layer-5').css({
    'transform' : 'translate(0px, '+ wScroll /40 +'%)'
  });

  $('.layer-6').css({
    'transform' : 'translate(0px, '+ wScroll /2 +'%)'
  });

});
