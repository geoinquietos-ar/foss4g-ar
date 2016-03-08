'use strict';

$(function() {
  $.getJSON('/programme.json')
    .done(function(data) {
      var source = $('#programme-template').html();
      var template = Handlebars.compile(source);
      $.each(data, function(dayIndex, day) {
        $('#programa > div.container').append(template(day));
      });
      $('[data-toggle="popover"]').popover({html: true});
    })
    .fail(function(error) {
      console.log(error);
    });
});

Handlebars.registerHelper('columnSize', function(content) {
  return Math.round(10 / content.rooms.length);
});
