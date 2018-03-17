exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('articles').del()
    .then(function() {
      // Inserts seed entries
      return knex('articles').insert([{
        "user_id": "e40f6b70-43be-4db2-b817-e8e28081390e",
        "title": "Virtual methodical policy",
        "tagline": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "hero_img_url": "http://canacopegdl.com/images/dreamscape/dreamscape-17.jpg"
      }, {
        "user_id": "d2b00dc6-d734-40b4-88a3-e869d5603c4e",
        "title": "Organic well-modulated access",
        "tagline": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
        "hero_img_url": "http://dummyimage.com/1005x461.jpg/ff4444/ffffff"
      }, {
        "user_id": "3723ef8d-bb85-4d45-a718-f9d82bc36b8f",
        "title": "Diverse disintermediate strategy",
        "tagline": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
        "hero_img_url": "http://dummyimage.com/1488x1114.jpg/cc0000/ffffff"
      }, {
        "user_id": "236fe96a-4807-40d9-9d00-0ff9baea72c0",
        "title": "Front-line object-oriented knowledge base",
        "tagline": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "hero_img_url": "http://dummyimage.com/1331x965.jpg/5fa2dd/ffffff"
      }, {
        "user_id": "c9f055e0-90a4-4999-ac54-3c309f981e7b",
        "title": "Realigned stable portal",
        "tagline": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
        "hero_img_url": "http://dummyimage.com/1005x1355.png/cc0000/ffffff"
      }, {
        "user_id": "e0fb4e2c-a395-465f-9369-3c5731b889eb",
        "title": "Innovative 24/7 open architecture",
        "tagline": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
        "hero_img_url": "http://dummyimage.com/1127x1027.png/5fa2dd/ffffff"
      }, {
        "user_id": "a65d8cf5-f7fd-413a-9b1d-f9c2e957f6ab",
        "title": "Advanced systematic focus group",
        "tagline": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
        "hero_img_url": "http://dummyimage.com/232x1273.bmp/ff4444/ffffff"
      }, {
        "user_id": "c1ffcdb1-131a-46ed-a644-c1b98c8ff824",
        "title": "Visionary intermediate interface",
        "tagline": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
        "hero_img_url": "http://dummyimage.com/599x1267.bmp/dddddd/000000"
      }]);
    });
};
