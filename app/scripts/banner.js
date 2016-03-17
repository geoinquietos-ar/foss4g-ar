'use strict';

var section;

$(function() {
  section = $('section:first');

  setInterval(function () {
    section = section.next('section');
    if (!section.is('section')) {
      $('body').fadeOut(1000, function (){
        $('body').scrollTop(0);
        $('body').fadeIn(1000);
        section = $('section:first');
      });
    } else {
      $('body').animate({
        scrollTop: section.offset().top
      }, 2000);
    }
  }, 5000);
});
