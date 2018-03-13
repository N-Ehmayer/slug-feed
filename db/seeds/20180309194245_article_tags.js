exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('article_tags').del()
    .then(function() {
      // Inserts seed entries
      return knex('article_tags').insert([{
        "id": 1,
        "article_id": 1,
        "tag_id": 1
      }, {
        "id": 2,
        "article_id": 1,
        "tag_id": 2
      }, {
        "id": 3,
        "article_id": 1,
        "tag_id": 3
      }, {
        "id": 4,
        "article_id": 1,
        "tag_id": 4
      }, {
        "id": 5,
        "article_id": 1,
        "tag_id": 5
      }, {
        "id": 6,
        "article_id": 1,
        "tag_id": 6
      }, {
        "id": 7,
        "article_id": 1,
        "tag_id": 7
      }, {
        "id": 8,
        "article_id": 1,
        "tag_id": 8
      }, {
        "id": 9,
        "article_id": 2,
        "tag_id": 1
      }, {
        "id": 10,
        "article_id": 2,
        "tag_id": 2
      }, {
        "id": 11,
        "article_id": 2,
        "tag_id": 3
      }, {
        "id": 12,
        "article_id": 2,
        "tag_id": 4
      }, {
        "id": 13,
        "article_id": 2,
        "tag_id": 5
      }, {
        "id": 14,
        "article_id": 2,
        "tag_id": 6
      }, {
        "id": 15,
        "article_id": 2,
        "tag_id": 7
      }, {
        "id": 16,
        "article_id": 2,
        "tag_id": 8
      }, {
        "id": 17,
        "article_id": 3,
        "tag_id": 1
      }, {
        "id": 18,
        "article_id": 3,
        "tag_id": 2
      }, {
        "id": 19,
        "article_id": 3,
        "tag_id": 3
      }, {
        "id": 20,
        "article_id": 3,
        "tag_id": 4
      }, {
        "id": 21,
        "article_id": 3,
        "tag_id": 5
      }, {
        "id": 22,
        "article_id": 3,
        "tag_id": 6
      }, {
        "id": 23,
        "article_id": 3,
        "tag_id": 7
      }, {
        "id": 24,
        "article_id": 3,
        "tag_id": 8
      }, {
        "id": 25,
        "article_id": 4,
        "tag_id": 1
      }, {
        "id": 26,
        "article_id": 4,
        "tag_id": 2
      }, {
        "id": 27,
        "article_id": 4,
        "tag_id": 3
      }, {
        "id": 28,
        "article_id": 4,
        "tag_id": 4
      }, {
        "id": 29,
        "article_id": 4,
        "tag_id": 5
      }, {
        "id": 30,
        "article_id": 4,
        "tag_id": 6
      }]);
    });
};
