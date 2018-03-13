exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { id: 'google-oauth2|103031492696030474631', profile: {} },
        { id: 'a-a|123', profile: {} },
        { id: 'b-b|456', profile: {} }
      ]);
    });
};
