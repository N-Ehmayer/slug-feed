exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function() {
      // Inserts seed entries
      return knex('tags').insert([{
        "id": 1,
        "display_name": "Acoustic Guitar",
        "url_slug": "acoustic_guitar"
      }, {
        "id": 2,
        "display_name": "SAP EBP",
        "url_slug": "sap_ebp"
      }, {
        "id": 3,
        "display_name": "Force Protection",
        "url_slug": "force_protection"
      }, {
        "id": 4,
        "display_name": "Norton Ghost",
        "url_slug": "norton_ghost"
      }, {
        "id": 5,
        "display_name": "Illustrator",
        "url_slug": "illustrator"
      }, {
        "id": 6,
        "display_name": "CFOs",
        "url_slug": "cfos"
      }, {
        "id": 7,
        "display_name": "IICRC Certified",
        "url_slug": "iicrc_certified"
      }, {
        "id": 8,
        "display_name": "Power Plants",
        "url_slug": "power_plants"
      }]);

    });
};
