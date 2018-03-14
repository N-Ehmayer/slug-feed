exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function() {
      // Inserts seed entries
      return knex('tags').insert([{
        "display_name": "Acoustic Guitar",
        "url_slug": "acoustic_guitar"
      }, {
        "display_name": "SAP EBP",
        "url_slug": "sap_ebp"
      }, {
        "display_name": "Force Protection",
        "url_slug": "force_protection"
      }, {
        "display_name": "Norton Ghost",
        "url_slug": "norton_ghost"
      }, {
        "display_name": "Illustrator",
        "url_slug": "illustrator"
      }, {
        "display_name": "CFOs",
        "url_slug": "cfos"
      }, {
        "display_name": "IICRC Certified",
        "url_slug": "iicrc_certified"
      }, {
        "display_name": "Power Plants",
        "url_slug": "power_plants"
      }]);

    });
};
