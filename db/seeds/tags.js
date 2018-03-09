exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function() {
      // Inserts seed entries
      return knex('tags').insert([
        { name: 'tag_name_1' },
        { name: 'tag_name_2' },
        { name: 'tag_name_3' }
      ]);
    });
};
