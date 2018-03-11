exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('article_tags').del()
    .then(function() {
      // Inserts seed entries
      return knex('article_tags').insert([
        { id: 1, article_id: 1, tag_id: 1 },
        { id: 2, article_id: 2, tag_id: 1 },
        { id: 3, article_id: 2, tag_id: 2 },
        { id: 4, article_id: 3, tag_id: 1 },
        { id: 5, article_id: 3, tag_id: 2 },
        { id: 6, article_id: 3, tag_id: 3 },
      ]);
    });
};
