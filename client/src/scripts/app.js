
const timeCreated = function() {
  let date = $('.comment-created-date').html();
  let formattedDate = moment(date).fromNow();
  $('.comment-created-date').replaceWith(formattedDate);
}


$(function() {

  timeCreated()

  $('#comment-box').click('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $.ajax({
      url: 'api/comments',
      method: 'POST',
      data: $(this).serialize(),
      success: function(comments) {
        console.log("success");
      },
      error: function(err) {
        console.log(err);
      }
    });
  })



  // shorten tagline to 140 chars
  $('.text-shortener').text(function() {
    var text = $(this).html();
    var overOneForty = text.length > 140
    console.log(text);
    text = text.split('').slice(0, 139).join('');
    if (overOneForty) {
      text += "..."
    }
    console.log(text)
    return text;

  });


  $('#comments-p').click(event => {
    $('#comments-p').addClass('animated zoomOut');
    $('#comments-n').addClass('animated zoomOut');
  });

  $('.popover-markup>.trigger').popover({
    html: true,
    title: function() {
      return $(this).parent().find('.head').html();
    },
    content: function() {
      return $(this).parent().find('.content').html();
    }
  });
})
