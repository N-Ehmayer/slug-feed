exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, name: 'user_name_1' },
        { id: 2, name: 'user_name_2' },
        { id: 3, name: 'user_name_3' }
      ]);
    });
};
