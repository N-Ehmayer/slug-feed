exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function() {
      // Inserts seed entries
      return knex('tags').insert([
        { id: 1, name: 'tag_name_1' },
        { id: 2, name: 'tag_name_2' },
        { id: 3, name: 'tag_name_3' }
      ]);
    });
};
