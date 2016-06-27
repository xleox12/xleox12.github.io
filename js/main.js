$(window).scroll(function () {
  if ( $(this).scrollTop() > 70 && !$('#car').hasClass('open') ) {
    $('#car').addClass('open');
    $('#car').css('position', 'fixed');
  //  $('#car').slideDown();
   } else if ( $(this).scrollTop() <= 70 ) {
    $('#car').removeClass('open');
    $('#car').css('position', 'absolute');
  //  $('#car').slideUp();
  }
});