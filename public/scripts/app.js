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
})
