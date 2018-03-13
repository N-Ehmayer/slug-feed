exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function() {
      // Inserts seed entries
      return knex('articles').insert([
        { id: 1, title: 'article_title_1', user_id: 'e40f6b70-43be-4db2-b817-e8e28081390e' },
        { id: 2, title: 'article_title_2', user_id: 'd2b00dc6-d734-40b4-88a3-e869d5603c4e' },
        { id: 3, title: 'article_title_3', user_id: '3723ef8d-bb85-4d45-a718-f9d82bc36b8f' }
      ]);
    });
};
