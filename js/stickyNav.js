if( $('body').hasClass('home-body') ) {

  var targetPos = $('.nav-menu').offset().top;

  $(window).resize(function(){
    targetPos = $('.nav-menu').offset().top;
  });

    $(window).scroll(function(){

      var scrollPos = $(this).scrollTop();

        if( scrollPos > targetPos ){
          $('.nav-menu').addClass('fixed-nav');
          $('.nav-menu button').addClass('btn-border-change');
        } else {
          $('.nav-menu').removeClass('fixed-nav');
          $('.nav-menu button').removeClass('btn-border-change');
        }

    });
};
