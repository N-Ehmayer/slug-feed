exports.up = async function(knex, Promise) {
  return knex.schema.createTable("articles", function(table) {
    table.increments('id').primary();
    table.text('title').notNullable();
    table.integer('user_id').unsigned().notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());

    table.foreign('user_id').references('users.id');
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("articles");
};
