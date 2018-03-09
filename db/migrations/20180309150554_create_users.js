exports.up = async function(knex, Promise) {
  await knex.raw('create extension if not exists "uuid-ossp"');
  return knex.schema.createTable("users", function(table) {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("users");
};
