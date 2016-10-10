exports.up = function(knex, Promise) {
  return knex.schema.createTable('donuts', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('topping').notNullable();
    table.string('price').notNullable();
    table.string('image_url');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('donuts');
};
