exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees', (table) => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').notNullable();
    table.integer('favorite_donut').notNullable();
    table.integer('shop_id').references('shops.id').unsigned();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employees');
};
