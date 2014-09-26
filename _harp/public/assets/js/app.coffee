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

  # Initialize Parse with your Parse application & javascript keys
  Parse.initialize "your_parse_app_key", "your_parse_javascript_key"

  # Setup the form to watch for the submit event
  $("#project-planner").submit (e) ->
    e.preventDefault()

    # Grab the elements from the form to make up
    # an object containing name, email and message
    data =
      name: document.getElementById("js-name").value
      email: document.getElementById("js-email").value
      budget: document.getElementById("js-budget").value
      message: document.getElementById("js-message").value

    # Run our Parse Cloud Code and
    # pass our 'data' object to it
    Parse.Cloud.run "sendEmail", data,
      success: (object) ->
        $(".form-wrap").hide "slow"
        $(".form-success").show "slow"
        return

      error: (object, error) ->
        console.log error
        $(".form-fail").show "slow"
        return

    return

  revealLogo()
  $(window).scroll ->
    revealLogo()
