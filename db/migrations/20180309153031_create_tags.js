exports.up = async function(knex, Promise) {
  return knex.schema.createTable("tags", function(table) {
    table.increments('id').primary();
    table.text('display_name').notNullable();
    table.text('url_slug').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());

    table.unique('display_name');
    table.unique('url_slug');
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("tags");
};
