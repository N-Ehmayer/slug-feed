exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_interests').del()
    .then(function() {
      // Inserts seed entries
      return knex('user_interests').insert([
        { id: 1, user_id: 'google-oauth2|103031492696030474631', tag_id: 1 },
        { id: 2, user_id: 'a-a|123', tag_id: 1 },
        { id: 3, user_id: 'a-a|123', tag_id: 2 },
        { id: 4, user_id: 'b-b|456', tag_id: 1 },
        { id: 5, user_id: 'b-b|456', tag_id: 2 },
        { id: 6, user_id: 'b-b|456', tag_id: 3 },
      ]);
    });
};
