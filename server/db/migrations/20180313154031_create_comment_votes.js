exports.up = async function(knex, Promise) {
  return knex.schema.createTable("comment_votes", function(table) {
    table.increments('id').primary();
    table.integer('comment_id').notNullable();
    table.text('user_id').notNullable();
    table.boolean('is_upvote');

    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());

    table.foreign('comment_id').references('comments.id');
    table.foreign('user_id').references('users.id');

    table.unique(['comment_id', 'user_id']);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("comment_votes");
};
