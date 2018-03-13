exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function() {
      // Inserts seed entries
      return knex('articles').insert([{
        "id": 1,
        "title": "Seamless clear-thinking service-desk",
        "user_id": "e40f6b70-43be-4db2-b817-e8e28081390e"
      }, {
        "id": 2,
        "title": "Self-enabling encompassing support",
        "user_id": "e40f6b70-43be-4db2-b817-e8e28081390e"
      }, {
        "id": 3,
        "title": "Grass-roots real-time time-frame",
        "user_id": "d2b00dc6-d734-40b4-88a3-e869d5603c4e"
      }, {
        "id": 4,
        "title": "Up-sized hybrid framework",
        "user_id": "d2b00dc6-d734-40b4-88a3-e869d5603c4e"
      }, {
        "id": 5,
        "title": "Profound uniform paradigm",
        "user_id": "3723ef8d-bb85-4d45-a718-f9d82bc36b8f"
      }, {
        "id": 6,
        "title": "Re-contextualized didactic monitoring",
        "user_id": "3723ef8d-bb85-4d45-a718-f9d82bc36b8f"
      }, {
        "id": 7,
        "title": "Persevering holistic initiative",
        "user_id": "c1ffcdb1-131a-46ed-a644-c1b98c8ff824"
      }, {
        "id": 8,
        "title": "Function-based value-added Graphic Interface",
        "user_id": "c1ffcdb1-131a-46ed-a644-c1b98c8ff824"
      }]);
    });
};
