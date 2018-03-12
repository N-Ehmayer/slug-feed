exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function() {
      // Inserts seed entries
      return knex('articles').insert([
        { id: 1, title: 'article_title_1', user_id: 1 },
        { id: 2, title: 'article_title_2', user_id: 2 },
        { id: 3, title: 'article_title_3', user_id: 3 }
      ]);
    });
};
