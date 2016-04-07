'use strict';

$(function() {
  var section = $('section:first');
  var intervalTime = 3000;
  var interval;

  var rotate = function () {
    clearInterval(interval);
    section = section.next('section');
    if (typeof section === 'undefined' || !section.is('section')) {
      section = $('section:first');
    }
    if (section.attr('id') === 'blocks') {
      intervalTime = 20000;
    } else {
      intervalTime = 3000;
    }
    $(window).scrollTop(section[0].offsetTop);
    interval = setInterval(rotate, intervalTime);
  };

  interval = setInterval(rotate, intervalTime);
});
