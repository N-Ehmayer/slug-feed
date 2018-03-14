exports.up = async function(knex, Promise) {
  return knex.schema.createTable("users", function(table) {
    table.text('id').primary();
    table.json('profile');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("users");
};
