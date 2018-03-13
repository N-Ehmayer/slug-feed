exports.up = async function(knex, Promise) {
  return knex.schema.createTable("articles", function(table) {
    table.increments('id').primary();
    table.text('title').notNullable();
    table.text('user_id').notNullable();
    table.text('tagline');
    table.text('hero_img_url').defaultTo('https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%287%29.jpg')
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());

    table.foreign('user_id').references('users.id');
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("articles");
};
