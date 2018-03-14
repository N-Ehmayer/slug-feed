exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([{
        "profile": {
          "displayName": "Constantine Garment",
          "id": "3ee7cc84-a812-42a8-b712-167d49b957b6",
          "name": {
            "givenName": "Constantine",
            "familyName": "Garment"
          },
          "picture": "https://robohash.org/remeafuga.png?size=50x50&set=set1",
          "locale": "Swahili",
          "gender": "Female",
          "nickname": "cgarment0"
        },
        "id": "e40f6b70-43be-4db2-b817-e8e28081390e"
      }, {
        "profile": {
          "displayName": "Calhoun Yeaman",
          "id": "9eb22ec6-2f58-44fc-9ba7-d768d1ffd0a2",
          "name": {
            "givenName": "Calhoun",
            "familyName": "Yeaman"
          },
          "picture": "https://robohash.org/facilisaliquamdeleniti.jpg?size=50x50&set=set1",
          "locale": "Aymara",
          "gender": "Male",
          "nickname": "cyeaman1"
        },
        "id": "d2b00dc6-d734-40b4-88a3-e869d5603c4e"
      }, {
        "profile": {
          "displayName": "Mervin Egdell",
          "id": "428f0e7d-c543-4d3b-b141-f8d92b0fc1f1",
          "name": {
            "givenName": "Mervin",
            "familyName": "Egdell"
          },
          "picture": "https://robohash.org/inutaccusantium.jpg?size=50x50&set=set1",
          "locale": "Czech",
          "gender": "Male",
          "nickname": "megdell2"
        },
        "id": "3723ef8d-bb85-4d45-a718-f9d82bc36b8f"
      }, {
        "profile": {
          "displayName": "Tamas Lembrick",
          "id": "d8168e5a-a2de-4b77-ba05-f80bc92ae014",
          "name": {
            "givenName": "Tamas",
            "familyName": "Lembrick"
          },
          "picture": "https://robohash.org/sintsintquis.bmp?size=50x50&set=set1",
          "locale": "Irish Gaelic",
          "gender": "Male",
          "nickname": "tlembrick3"
        },
        "id": "236fe96a-4807-40d9-9d00-0ff9baea72c0"
      }, {
        "profile": {
          "displayName": "Wilow Freyn",
          "id": "a7b6bc49-7d1a-4574-b2fd-0847e11462ed",
          "name": {
            "givenName": "Wilow",
            "familyName": "Freyn"
          },
          "picture": "https://robohash.org/etsintsimilique.png?size=50x50&set=set1",
          "locale": "Guaraní",
          "gender": "Female",
          "nickname": "wfreyn4"
        },
        "id": "c9f055e0-90a4-4999-ac54-3c309f981e7b"
      }, {
        "profile": {
          "displayName": "Saundra Osinin",
          "id": "0207dde2-473c-414c-8cab-3bf620f36689",
          "name": {
            "givenName": "Saundra",
            "familyName": "Osinin"
          },
          "picture": "https://robohash.org/veroenimaut.jpg?size=50x50&set=set1",
          "locale": "Thai",
          "gender": "Female",
          "nickname": "sosinin5"
        },
        "id": "e0fb4e2c-a395-465f-9369-3c5731b889eb"
      }, {
        "profile": {
          "displayName": "Stormie Le Fevre",
          "id": "2a5f8a9a-a979-4914-82dd-eb6216f64982",
          "name": {
            "givenName": "Stormie",
            "familyName": "Le Fevre"
          },
          "picture": "https://robohash.org/occaecatiiustosequi.png?size=50x50&set=set1",
          "locale": "Hindi",
          "gender": "Female",
          "nickname": "sle6"
        },
        "id": "a65d8cf5-f7fd-413a-9b1d-f9c2e957f6ab"
      }, {
        "profile": {
          "displayName": "Foss Greenhowe",
          "id": "e63ccfba-55d8-4be9-871c-8c6d6393f4b4",
          "name": {
            "givenName": "Foss",
            "familyName": "Greenhowe"
          },
          "picture": "https://robohash.org/corporisetdeserunt.jpg?size=50x50&set=set1",
          "locale": "Māori",
          "gender": "Male",
          "nickname": "fgreenhowe7"
        },
        "id": "c1ffcdb1-131a-46ed-a644-c1b98c8ff824"
      }]);
    });
};
