exports.up = async function(knex, Promise) {
  return knex.schema.createTable("tags", function(table) {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());

    table.unique('name')
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("tags");
};
