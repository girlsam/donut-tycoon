exports.up = (knex, Promise) => {
  return knex.schema.createTable('shops_donuts', (table) => {
    table.increments();
    table.integer('shop_id').references('shops.id').unsigned();
    table.integer('donut_id').references('donuts.id').unsigned();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('shops_donuts');
};
