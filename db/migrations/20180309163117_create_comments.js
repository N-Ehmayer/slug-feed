exports.up = async function(knex, Promise) {
  return knex.schema.createTable("comments", function(table) {
    table.increments('id').primary();
    table.text('content').notNullable();
    table.boolean('agree').notNullable();
    table.integer('section_id').unsigned().notNullable();
    table.integer('user_id').unsigned().notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());

    table.foreign('user_id').references('users.id');
    table.foreign('section_id').references('sections.id');
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("comments");
};
