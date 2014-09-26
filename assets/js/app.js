$(document).ready(function() {
  var revealLogo;
  FastClick.attach(document.body);
  revealLogo = void 0;
  revealLogo = function() {
    var distance, logo, scrollTop;
    distance = void 0;
    logo = void 0;
    scrollTop = void 0;
    logo = $(".logo");
    distance = $(".hero").offset().top + 130;
    scrollTop = $(window).scrollTop();
    if (scrollTop > distance) {
      return logo.addClass("js-peekaboo");
    } else {
      return logo.removeClass("js-peekaboo");
    }
  };
  $(".js-menu-trigger, .nav-smallscreen a").click(function() {
    $(".nav-smallscreen").toggleClass("active");
  });
  $("a[href*=#]:not([href=#])").click(function() {
    var target;
    target = void 0;
    if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
      target = $(this.hash);
      target = (target.length ? target : $("[name=\" + @hash.slice(1) + \"]"));
      if (target.length) {
        $("html,body").animate({
          scrollTop: target.offset().top - 75
        }, 1000);
        return false;
      }
    }
  });
  $("#project-planner").submit(function(e) {
    e.preventDefault();
    if ($(this).parsley("isValid")) {
      $.post('/contact.php', $(this).serialize()).success(function(data) {
        $(".form-wrap").hide("slow");
        return $(".form-success").show("slow");
      }).fail(function(data) {
        return alert('failure');
      });
    }
  });
  revealLogo();
  return $(window).scroll(function() {
    return revealLogo();
  });
});
