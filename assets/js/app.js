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
  Parse.initialize("C0w22hONKF6OXEXUJMuOlMnX2g8n2nPDq1LDWazM", "wnN2fUkBrgwX6lz4eboDk2FY5RVGZ7f86draHV9R");
  $("#project-planner").submit(function(e) {
    var data;
    e.preventDefault();
    if ($(this).parsley("isValid")) {
      $(".form-button-loading").addClass("js-submitted");
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
      return;
    }
  });
  revealLogo();
  return $(window).scroll(function() {
    return revealLogo();
  });
});
