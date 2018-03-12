$(function() {

  function loadArticles() {
    $.ajax({
      url: '/articles',
      method: 'GET',
      error: function(err) {
        console.log(err);
      },
      success: function(articles) {
        console.log(articles);
      }
    })
  }
  const articles = loadArticles();

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
