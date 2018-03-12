exports.up = async function(knex, Promise) {
  return knex.schema.createTable("sections", function(table) {
    table.increments('id').primary();
    table.integer('article_id').unsigned().notNullable();
    table.text('content');
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());

    table.foreign('article_id').references('articles.id');
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("sections");
};
