exports.up = async function(knex, Promise) {
  return knex.schema.createTable("user_interests", function(table) {
    table.increments('id').primary();
    table.text('user_id').notNullable();
    table.integer('tag_id').unsigned().notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());

    table.foreign('user_id').references('users.id');
    table.foreign('tag_id').references('tags.id');
    table.unique(['user_id', 'tag_id']);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("user_interests");
};
