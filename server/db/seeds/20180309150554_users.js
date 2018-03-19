exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([{
        "profile": {
          "displayName": "Herman Melville",
          "id": "3ee7cc84-a812-42a8-b712-167d49b957b6",
          "name": {
            "givenName": "Herman",
            "familyName": "Melville"
          },
          "picture": "https://www.fakepersongenerator.com/Face/female/female1023193986206.jpg",
          "locale": "American",
          "gender": "Male",
          "nickname": "hmelville"
        },
        "id": "e40f6b70-43be-4db2-b817-e8e28081390e"
      }, {
        "profile": {
          "displayName": "Robert Louis Stevenson",
          "id": "9eb22ec6-2f58-44fc-9ba7-d768d1ffd0a2",
          "name": {
            "givenName": "Robert Louis",
            "familyName": "Stevenson"
          },
          "picture": "https://www.fakepersongenerator.com/Face/male/male1084610502014.jpg",
          "locale": "England",
          "gender": "Male",
          "nickname": "RLStevenson"
        },
        "id": "d2b00dc6-d734-40b4-88a3-e869d5603c4e"
      }, {
        "profile": {
          "displayName": "Mary Shelley",
          "id": "428f0e7d-c543-4d3b-b141-f8d92b0fc1f1",
          "name": {
            "givenName": "Mary",
            "familyName": "Shelley"
          },
          "picture": "https://www.fakepersongenerator.com/Face/male/male1085882788391.jpg",
          "locale": "England",
          "gender": "Female",
          "nickname": "FrankenWriter"
        },
        "id": "3723ef8d-bb85-4d45-a718-f9d82bc36b8f"
      }, {
        "profile": {
          "displayName": "John B. Rathbun",
          "id": "d8168e5a-a2de-4b77-ba05-f80bc92ae014",
          "name": {
            "givenName": "John B.",
            "familyName": "Rathbun"
          },
          "picture": "https://www.fakepersongenerator.com/Face/male/male108440371381.jpg",
          "locale": "America",
          "gender": "Male",
          "nickname": "JBR"
        },
        "id": "236fe96a-4807-40d9-9d00-0ff9baea72c0"
      }, {
        "profile": {
          "displayName": "Jane Austen",
          "id": "a7b6bc49-7d1a-4574-b2fd-0847e11462ed",
          "name": {
            "givenName": "Jane",
            "familyName": "Austen"
          },
          "picture": "https://www.fakepersongenerator.com/Face/male/male1085635283783.jpg",
          "locale": "England",
          "gender": "Female",
          "nickname": "JAusten"
        },
        "id": "c9f055e0-90a4-4999-ac54-3c309f981e7b"
      }, {
        "profile": {
          "displayName": "Bram Stoker",
          "id": "0207dde2-473c-414c-8cab-3bf620f36689",
          "name": {
            "givenName": "Bram",
            "familyName": "Stoker"
          },
          "picture": "https://www.fakepersongenerator.com/Face/female/female1021714246674.jpg",
          "locale": "England",
          "gender": "Male",
          "nickname": "BStoker"
        },
        "id": "e0fb4e2c-a395-465f-9369-3c5731b889eb"
      }, {
        "profile": {
          "displayName": "Mark Twain",
          "id": "2a5f8a9a-a979-4914-82dd-eb6216f64982",
          "name": {
            "givenName": "Mark",
            "familyName": "Twain"
          },
          "picture": "https://www.fakepersongenerator.com/Face/male/male1085292691650.jpg",
          "locale": "America",
          "gender": "Male",
          "nickname": "RaftLover"
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
          "picture": "https://www.fakepersongenerator.com/Face/male/male20151083704422302.jpg",
          "locale": "Māori",
          "gender": "Male",
          "nickname": "fgreenhowe7"
        },
        "id": "c1ffcdb1-131a-46ed-a644-c1b98c8ff824"
      }]);
    });
};
