exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function() {
      // Inserts seed entries
      return knex('articles').insert([{
        "user_id": "e40f6b70-43be-4db2-b817-e8e28081390e",
        "title": "Moby Dick",
        "tagline": "Wise, funny and gripping, Melville's epic work continues to cast a long shadow over American literature",
        "hero_img_url": "https://m2m-vn.com/wp-content/uploads/2017/03/moby_dick-1-1050x525.jpg"
      }, {
        "user_id": "d2b00dc6-d734-40b4-88a3-e869d5603c4e",
        "title": "Treasure Island",
        "tagline": `“Fifteen men on the dead man's chest--
             Yo-ho-ho, and a bottle of rum!”`,
        "hero_img_url": "http://img02.deviantart.net/38e0/i/2010/037/0/3/treasure_island_by_cassiopeiaart.jpg"
      }, {
        "user_id": "3723ef8d-bb85-4d45-a718-f9d82bc36b8f",
        "title": "Frankenstein; or The Modern Prometheus",
        "tagline": `“It was on a dreary night of November, that I beheld the accomplishment of my toils”`,
        "hero_img_url": "http://blog.flocabulary.com/wp-content/uploads/2012/11/frankenstein-image.jpg"
      }, {
        "user_id": "c9f055e0-90a4-4999-ac54-3c309f981e7b",
        "title": "Pride and Prejudice",
        "tagline": `Willful and opinionated Elizabeth Bennet matches wits with haughty Mr. Darcy.`,
        "hero_img_url": "http://www.fancyferriage.com/CinderellaHeart-PT.jpg"
      }, {
        "user_id": "236fe96a-4807-40d9-9d00-0ff9baea72c0",
        "title": "Practical Hand Book of Gas, Oil and Steam Engines",
        "tagline": `A simple, practical and comprehensive book on the
        construction, operation and repair of all kinds of
        engines.`,
        "hero_img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/52_8134_Hoentrop_2012-09-16.jpg/440px-52_8134_Hoentrop_2012-09-16.jpg"
      }, {
        "user_id": "e0fb4e2c-a395-465f-9369-3c5731b889eb",
        "title": "Alice’s Adventures in Wonderland",
        "tagline": `"Alice had not a moment before she found herself falling down a very deep rabbit hole"`,
        "hero_img_url": "https://images.fineartamerica.com/images-medium-large-5/cheshire-cat-movie-poster-prints.jpg"
      }, {
        "user_id": "a65d8cf5-f7fd-413a-9b1d-f9c2e957f6ab",
        "title": "Dracula",
        "tagline": "Bram Stoker's classic vampire story was very much of its time but still resonates more than a century later",
        "hero_img_url": "https://nerdist.com/wp-content/uploads/2017/04/bela-dracula.jpg"
      }, {
        "user_id": "c1ffcdb1-131a-46ed-a644-c1b98c8ff824",
        "title": "The Adventures of Huckleberry Finn",
        "tagline": `Ernest Hemingway declared that "all modern American literature stems from this one book"`,
        "hero_img_url": "http://1.bp.blogspot.com/-93FoEXEdOBI/TqjZEygc91I/AAAAAAAAAZ0/j4JThlecquo/s1600/287674_10150299810586446_508261445_8257785_1662591965_o.jpg"
      }]);
    });
};
