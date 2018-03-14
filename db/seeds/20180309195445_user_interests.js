exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_interests').del()
    .then(function() {
      // Inserts seed entries
      return knex('user_interests').insert([{
        "user_id": "e40f6b70-43be-4db2-b817-e8e28081390e",
        "tag_id": 1
      }, {
        "user_id": "d2b00dc6-d734-40b4-88a3-e869d5603c4e",
        "tag_id": 1
      }, {
        "user_id": "3723ef8d-bb85-4d45-a718-f9d82bc36b8f",
        "tag_id": 1
      }, {
        "user_id": "236fe96a-4807-40d9-9d00-0ff9baea72c0",
        "tag_id": 1
      }, {
        "user_id": "c9f055e0-90a4-4999-ac54-3c309f981e7b",
        "tag_id": 1
      }, {
        "user_id": "e0fb4e2c-a395-465f-9369-3c5731b889eb",
        "tag_id": 1
      }, {
        "user_id": "a65d8cf5-f7fd-413a-9b1d-f9c2e957f6ab",
        "tag_id": 1
      }, {
        "user_id": "c1ffcdb1-131a-46ed-a644-c1b98c8ff824",
        "tag_id": 1
      }, {
        "user_id": "e40f6b70-43be-4db2-b817-e8e28081390e",
        "tag_id": 2
      }, {
        "user_id": "d2b00dc6-d734-40b4-88a3-e869d5603c4e",
        "tag_id": 2
      }, {
        "user_id": "3723ef8d-bb85-4d45-a718-f9d82bc36b8f",
        "tag_id": 2
      }, {
        "user_id": "236fe96a-4807-40d9-9d00-0ff9baea72c0",
        "tag_id": 2
      }, {
        "user_id": "c9f055e0-90a4-4999-ac54-3c309f981e7b",
        "tag_id": 2
      }, {
        "user_id": "e0fb4e2c-a395-465f-9369-3c5731b889eb",
        "tag_id": 2
      }, {
        "user_id": "a65d8cf5-f7fd-413a-9b1d-f9c2e957f6ab",
        "tag_id": 2
      }, {
        "user_id": "c1ffcdb1-131a-46ed-a644-c1b98c8ff824",
        "tag_id": 2
      }, {
        "user_id": "e40f6b70-43be-4db2-b817-e8e28081390e",
        "tag_id": 3
      }, {
        "user_id": "d2b00dc6-d734-40b4-88a3-e869d5603c4e",
        "tag_id": 3
      }, {
        "user_id": "3723ef8d-bb85-4d45-a718-f9d82bc36b8f",
        "tag_id": 3
      }, {
        "user_id": "236fe96a-4807-40d9-9d00-0ff9baea72c0",
        "tag_id": 3
      }, {
        "user_id": "c9f055e0-90a4-4999-ac54-3c309f981e7b",
        "tag_id": 3
      }, {
        "user_id": "e0fb4e2c-a395-465f-9369-3c5731b889eb",
        "tag_id": 3
      }, {
        "user_id": "a65d8cf5-f7fd-413a-9b1d-f9c2e957f6ab",
        "tag_id": 3
      }, {
        "user_id": "c1ffcdb1-131a-46ed-a644-c1b98c8ff824",
        "tag_id": 3
      }, {
        "user_id": "e40f6b70-43be-4db2-b817-e8e28081390e",
        "tag_id": 4
      }, {
        "user_id": "d2b00dc6-d734-40b4-88a3-e869d5603c4e",
        "tag_id": 4
      }, {
        "user_id": "3723ef8d-bb85-4d45-a718-f9d82bc36b8f",
        "tag_id": 4
      }, {
        "user_id": "236fe96a-4807-40d9-9d00-0ff9baea72c0",
        "tag_id": 4
      }, {
        "user_id": "c9f055e0-90a4-4999-ac54-3c309f981e7b",
        "tag_id": 4
      }, {
        "user_id": "e0fb4e2c-a395-465f-9369-3c5731b889eb",
        "tag_id": 4
      }]);
    });
};
