exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_interests').del()
    .then(function() {
      // Inserts seed entries
      return knex('user_interests').insert([
        { id: 1, user_id: 1, tag_id: 1 },
        { id: 2, user_id: 2, tag_id: 1 },
        { id: 3, user_id: 2, tag_id: 2 },
        { id: 4, user_id: 3, tag_id: 1 },
        { id: 5, user_id: 3, tag_id: 2 },
        { id: 6, user_id: 3, tag_id: 3 },
      ]);
    });
};
