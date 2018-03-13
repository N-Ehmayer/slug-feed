exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_interests').del()
    .then(function() {
      // Inserts seed entries
      return knex('user_interests').insert([
        { id: 1, user_id: 'e40f6b70-43be-4db2-b817-e8e28081390e', tag_id: 1 },
        { id: 2, user_id: 'd2b00dc6-d734-40b4-88a3-e869d5603c4e', tag_id: 1 },
        { id: 3, user_id: 'e40f6b70-43be-4db2-b817-e8e28081390e', tag_id: 2 },
        { id: 4, user_id: 'a65d8cf5-f7fd-413a-9b1d-f9c2e957f6ab', tag_id: 1 },
        { id: 5, user_id: 'c1ffcdb1-131a-46ed-a644-c1b98c8ff824', tag_id: 2 },
        { id: 6, user_id: 'e40f6b70-43be-4db2-b817-e8e28081390e', tag_id: 3 },
      ]);
    });
};
