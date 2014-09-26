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
  Parse.initialize("your_parse_app_key", "your_parse_javascript_key");
  $("#project-planner").submit(function(e) {
    var data;
    e.preventDefault();
    data = {
      name: document.getElementById("js-name").value,
      email: document.getElementById("js-email").value,
      budget: document.getElementById("js-budget").value,
      message: document.getElementById("js-message").value
    };
    Parse.Cloud.run("sendEmail", data, {
      success: function(object) {
        $(".form-wrap").hide("slow");
        $(".form-success").show("slow");
      },
      error: function(object, error) {
        console.log(error);
        $(".form-fail").show("slow");
      }
    });
  });
  revealLogo();
  return $(window).scroll(function() {
    return revealLogo();
  });
});
