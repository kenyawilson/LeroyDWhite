
$(function(){
    var centerShelfs,
        $body = $('body'),
        $topShelf = $('.shelf.top'),
        $middleShelf = $('.shelf.middle'),
        $bottomShelf = $('.shelf.bottom');
  
    centerShelfs = function(){
      var topShelfPosition = $body.height()/2;
  
      $topShelf.css('top', topShelfPosition);
      $middleShelf.css('top', topShelfPosition + 200);
      $bottomShelf.css('top', topShelfPosition + 400);
    };
  
    moveToShelf = function(e){
      e.preventDefault();
      $body.attr('class', '');
      $body.addClass(e.target.id);
    };
  
    // bind events
    $(window).on('resize', centerShelfs);
    $('.nav a').on('click', moveToShelf);
  
    // move to start position
    centerShelfs();
    
    window.setTimeout(function(){
      $body.addClass('view-middle-shelf');
    }, 500);
  });
  

  function showNav() {
    var x = document.getElementById("nav");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }



  /*Contact form animation*/
  $('.contact-form').find('.form-control').each(function() {
    var targetItem = $(this).parent();
    if ($(this).val()) {
        $(targetItem).find('label').css({
            'top': '10px',
            'fontSize': '14px'
        });
    }
})
$('.contact-form').find('.form-control').focus(function() {
    $(this).parent('.input-block').addClass('focus');
    $(this).parent().find('label').animate({
        'top': '10px',
        'fontSize': '14px'
    }, 300);
})
$('.contact-form').find('.form-control').blur(function() {
    if ($(this).val().length == 0) {
        $(this).parent('.input-block').removeClass('focus');
        $(this).parent().find('label').animate({
            'top': '25px',
            'fontSize': '18px'
        }, 300);
    }
})
