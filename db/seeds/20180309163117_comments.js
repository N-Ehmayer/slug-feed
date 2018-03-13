exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function() {
      // Inserts seed entries
      return knex('comments').insert([
        { id: 1, user_id: 'google-oauth2|103031492696030474631', agree: true, content: 'comment for article 1, part 1', section_id: 1 },
        { id: 2, user_id: 'b-b|456', agree: false, content: 'comment for article 1, part 1', section_id: 1 },
        { id: 3, user_id: 'a-a|123', agree: true, content: 'comment for article 1, part 2', section_id: 2 },
        { id: 4, user_id: 'a-a|123', agree: true, content: 'comment for article 2, part 4', section_id: 4 },
        { id: 5, user_id: 'b-b|456', agree: false, content: 'comment for article 2, part 4', section_id: 4 },
        { id: 6, user_id: 'google-oauth2|103031492696030474631', agree: false, content: 'comment for article 2, part 4', section_id: 4 },
        { id: 7, user_id: 'google-oauth2|103031492696030474631', agree: true, content: 'comment for article 3, part 5', section_id: 5 },
        { id: 8, user_id: 'a-a|123', agree: true, content: 'comment for article 3, part 5', section_id: 5 },
        { id: 9, user_id: 'b-b|456', agree: true, content: 'comment for article 3, part 5', section_id: 5 },
      ]);
    });
};
