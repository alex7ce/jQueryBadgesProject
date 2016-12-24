$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/2827214.json',
    dataType: 'jsonp',
    success: function(response) {
      $.each(response.courses.completed, function(index, value) {
        $('#badges').append('<div class="course">'
        + '<h3>' + value.title + '</h3>'
        + '<img src="' + value.badge + '"/>'
        + '<a class="btn btn-primary" target="_blank" href="' + value.url + '">See course</a>'
        + '</div>');
      });
    }
  });

});
