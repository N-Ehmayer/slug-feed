exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function() {
      // Inserts seed entries
      return knex('tags').insert([{
        "display_name": "Treasure",  // 1
        "url_slug": "treasure"
      }, {
        "display_name": "Adventure",  // 2
        "url_slug": "adventure"
      }, {
        "display_name": "Island",  // 3
        "url_slug": "island"
      }, {
        "display_name": "Horror",  // 4
        "url_slug": "horror"
      }, {
        "display_name": "Science Fiction",  // 5
        "url_slug": "science_fiction"
      }, {
        "display_name": "Science",  // 6
        "url_slug": "science"
      }, {
        "display_name": "Technology",  // 7
        "url_slug": "technology"
      }, {
        "display_name": "Literature",  // 8
        "url_slug": "literature"
      }, {
        "display_name": "Whales",  // 9
        "url_slug": "Whales"
      }, {
        "display_name": "Sailing",  // 10
        "url_slug": "Sailing"
      }, {
        "display_name": "Power Plants",  // 11
        "url_slug": "power_plants"
      }, {
        "display_name": "Engines",  // 12
        "url_slug": "Engines"
      }, {
        "display_name": "Romance",  // 13
        "url_slug": "romance"
      }, {
        "display_name": "Victorian",  // 14
        "url_slug": "victorian"
      }, {
        "display_name": "Fantasy",  // 15
        "url_slug": "fantasy"
      }, {
        "display_name": "Mississippi",  // 16
        "url_slug": "mississippi"
      }]);

    });
};
