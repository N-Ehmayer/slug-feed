exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function() {
      // Inserts seed entries
      return knex('tags').insert([
        { id: 1, display_name: 'tag_name_1', url_slug: 'url_slug_1' },
        { id: 2, display_name: 'tag_name_2', url_slug: 'url_slug_2' },
        { id: 3, display_name: 'tag_name_3', url_slug: 'url_slug_3' }
      ]);
    });
};
