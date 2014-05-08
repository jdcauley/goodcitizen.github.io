$(document).ready ->

  FastClick.attach(document.body)

  revealLogo = ->
    logo = $('.logo')
    distance = $('.hero').offset().top + 130
    # distance = 200
    scrollTop = $(window).scrollTop()

    if scrollTop > distance
      logo.addClass 'js-peekaboo'
    else
      logo.removeClass 'js-peekaboo'

  $('.js-menu-trigger, .nav-smallscreen a').click ->
    $('.nav-smallscreen').toggleClass 'active'
    return

  $('a[href*=#]:not([href=#])').click ->
    if location.pathname.replace(/^\//, "") is @pathname.replace(/^\//, "") and location.hostname is @hostname
      target = $(@hash)
      target = (if target.length then target else $('[name=" + @hash.slice(1) + "]'))
      if target.length
        $('html,body').animate
          scrollTop: target.offset().top - 75
        , 1000
        false

  $('#project-planner').submit (e) ->
    e.preventDefault() #STOP default action
    e.unbind() #unbind. to stop multiple form submit.
    if $(this).parsley('isValid')
      postData = $(this).serializeArray()
      formURL = $(this).attr('action')
      $.ajax(
        url: formURL
        type: 'POST'
        data: postData
      ).done (r) ->
        if r.success
          $('.form-wrap').hide 'slow'
          $('.form-success').show 'slow'
        else
          $('.form-fail').show 'slow'
        return
    return

  revealLogo()

  $(window).scroll ->
    revealLogo()
