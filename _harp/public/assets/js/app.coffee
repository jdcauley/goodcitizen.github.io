$(document).ready ->
  FastClick.attach document.body

  revealLogo = undefined
  revealLogo = ->
    distance = undefined
    logo = undefined
    scrollTop = undefined
    logo = $(".logo")
    distance = $(".hero").offset().top + 130
    scrollTop = $(window).scrollTop()
    if scrollTop > distance
      logo.addClass "js-peekaboo"
    else
      logo.removeClass "js-peekaboo"

  $(".js-menu-trigger, .nav-smallscreen a").click ->
    $(".nav-smallscreen").toggleClass "active"
    return

  $("a[href*=#]:not([href=#])").click ->
    target = undefined
    if location.pathname.replace(/^\//, "") is @pathname.replace(/^\//, "") and location.hostname is @hostname
      target = $(@hash)
      target = ((if target.length then target else $("[name=\" + @hash.slice(1) + \"]")))
      if target.length
        $("html,body").animate
          scrollTop: target.offset().top - 75
        , 1000
        false

  $("#project-planner").submit (e) ->
    e.preventDefault()
    if $(this).parsley("isValid")
      # alert $(this).serialize()
      $.post('/contact.php', $(this).serialize()).success( (data) ->
        $(".form-wrap").hide "slow"
        $(".form-success").show "slow"
        # alert 'success'
      ).fail (data) ->
        alert 'failure'
    return

  revealLogo()
  $(window).scroll ->
    revealLogo()
