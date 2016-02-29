$(function() {
  $.getJSON('/programme.json')
    .done(function(data) {
      var source   = $("#programme-template").html();
      var template = Handlebars.compile(source);
      $.each(data, function(dayIndex, day) {
        $('#programme').append(template(day));
      });
    })
    .fail(function(error) {
      console.log(error);
    });
});
