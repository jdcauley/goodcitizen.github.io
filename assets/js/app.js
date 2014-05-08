$(document).ready(function() {
  var revealLogo;
  FastClick.attach(document.body);
  revealLogo = function() {
    var distance, logo, scrollTop;
    logo = $('.logo');
    distance = $('.hero').offset().top + 130;
    scrollTop = $(window).scrollTop();
    if (scrollTop > distance) {
      return logo.addClass('js-peekaboo');
    } else {
      return logo.removeClass('js-peekaboo');
    }
  };
  $('.js-menu-trigger, .nav-smallscreen a').click(function() {
    $('.nav-smallscreen').toggleClass('active');
  });
  $('a[href*=#]:not([href=#])').click(function() {
    var target;
    if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
      target = $(this.hash);
      target = (target.length ? target : $('[name=" + @hash.slice(1) + "]'));
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 75
        }, 1000);
        return false;
      }
    }
  });
  $('#project-planner').submit(function(e) {
    var formURL, postData;
    e.preventDefault();
    e.unbind();
    if ($(this).parsley('isValid')) {
      postData = $(this).serializeArray();
      formURL = $(this).attr('action');
      $.ajax({
        url: formURL,
        type: 'POST',
        data: postData
      }).done(function(r) {
        if (r.success) {
          $('.form-wrap').hide('slow');
          $('.form-success').show('slow');
        } else {
          $('.form-fail').show('slow');
        }
      });
    }
  });
  revealLogo();
  return $(window).scroll(function() {
    return revealLogo();
  });
});
