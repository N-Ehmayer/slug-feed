exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { name: 'user_name_1' },
        { name: 'user_name_2' },
        { name: 'user_name_3' }
      ]);
    });
};
