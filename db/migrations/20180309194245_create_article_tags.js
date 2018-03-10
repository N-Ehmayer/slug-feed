exports.up = async function(knex, Promise) {
  return knex.schema.createTable("article_tags", function(table) {
    table.increments('id').primary();
    table.integer('article_id').unsigned().notNullable();
    table.integer('tag_id').unsigned().notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());

    table.foreign('article_id').references('articles.id');
    table.foreign('tag_id').references('tags.id');
    table.unique(['article_id', 'tag_id']);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("article_tags");
};
