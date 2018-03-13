$(function() {


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
