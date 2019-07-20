$('[data-mobile]').click(function() {
    var selector = $(this).attr('data-mobile');
    
    if (selector === 'close') {
      $('.overlay').removeClass('active');
      $('.mobile-nav').removeClass('active');
    }
    else {
      $('.overlay').addClass('active');
      $('.mobile-nav').addClass('active');
    }
  });