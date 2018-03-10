exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sections').del()
    .then(function() {
      // Inserts seed entries
      return knex('sections').insert([
        { id: 1, content: 'content for article 1, part 1', article_id: 1 },
        { id: 2, content: 'content for article 1, part 2', article_id: 1 },
        { id: 3, content: 'content for article 1, part 3', article_id: 1 },

        { id: 4, content: 'content for article 2, part 1', article_id: 2 },
        { id: 5, content: 'content for article 2, part 2', article_id: 2 },
        { id: 6, content: 'content for article 2, part 3', article_id: 2 },

        { id: 7, content: 'content for article 3, part 1', article_id: 3 },
        { id: 8, content: 'content for article 3, part 2', article_id: 3 },
        { id: 9, content: 'content for article 3, part 3', article_id: 3 },
      ]);
    });
};
