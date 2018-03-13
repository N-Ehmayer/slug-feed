const timeCreated = function() {
  let date = $('.comment-created-date').html();
  let formattedDate = moment(date).fromNow();
  console.log(formattedDate);
  $('.comment-created-date').replaceWith(formattedDate);
}


$(function() {

  timeCreated()

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
