'use strict';

$(function() {
  var section = $('section:first');
  var intervalTime = 5000;
  var interval;

  var rotate = function () {
    clearInterval(interval);
    section = section.next('section');
    if (typeof section === 'undefined' || !section.is('section')) {
      section = $('section:first');
    }
    if (section.attr('id') === 'blocks') {
      intervalTime = 15000;
    } else {
      intervalTime = 5000;
    }
    $('body').scrollTop(section[0].offsetTop);
    interval = setInterval(rotate, intervalTime);
  };

  interval = setInterval(rotate, intervalTime);
});
