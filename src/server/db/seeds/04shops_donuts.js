exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shops_donuts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('shops_donuts').insert({
          shop_id:  knex('shops').select('id').where('name', 'Funkin\' Gonuts'),
          donut_id: knex('donuts').select('id').where('name', 'Sugar-Coated Donut')
        }),
        knex('shops_donuts').insert({
          shop_id:  knex('shops').select('id').where('name', 'Funkin\' Gonuts'),
          donut_id: knex('donuts').select('id').where('name', 'Boston Creme Donut')
        }),
        knex('shops_donuts').insert({
          shop_id:  knex('shops').select('id').where('name', 'Funkin\' Gonuts'),
          donut_id: knex('donuts').select('id').where('name', 'Jelly Donut')
        }),
        knex('shops_donuts').insert({
          shop_id:  knex('shops').select('id').where('name', 'Funkin\' Gonuts'),
          donut_id: knex('donuts').select('id').where('name', 'Mystery Donut')
        }),
        knex('shops_donuts').insert({
          shop_id:  knex('shops').select('id').where('name', 'Sugar Coma Donut Factory'),
          donut_id: knex('donuts').select('id').where('name', 'Jelly Donut')
        }),
        knex('shops_donuts').insert({
          shop_id:  knex('shops').select('id').where('name', 'Sugar Coma Donut Factory'),
          donut_id: knex('donuts').select('id').where('name', 'Mystery Donut')
        }),
        knex('shops_donuts').insert({
          shop_id:  knex('shops').select('id').where('name', 'Sugar Coma Donut Factory'),
          donut_id: knex('donuts').select('id').where('name', 'Blueberry Coffee Donut')
        }),
        knex('shops_donuts').insert({
          shop_id:  knex('shops').select('id').where('name', 'Sugar Coma Donut Factory'),
          donut_id: knex('donuts').select('id').where('name', 'Vanilla Walnut Donut')
        }),
        knex('shops_donuts').insert({
          shop_id:  knex('shops').select('id').where('name', 'Dough Hole Donuts'),
          donut_id: knex('donuts').select('id').where('name', 'Mystery Donut')
        }),
        knex('shops_donuts').insert({
          shop_id:  knex('shops').select('id').where('name', 'Dough Hole Donuts'),
          donut_id: knex('donuts').select('id').where('name', 'Vanilla Walnut Donut')
        }),
        knex('shops_donuts').insert({
          shop_id:  knex('shops').select('id').where('name', 'Dough Hole Donuts'),
          donut_id: knex('donuts').select('id').where('name', 'Blueberry Coffee Donut')
        }),
        knex('shops_donuts').insert({
          shop_id:  knex('shops').select('id').where('name', 'Stairway to Donuts'),
          donut_id: knex('donuts').select('id').where('name', 'Mystery Donut')
        }),
        knex('shops_donuts').insert({
          shop_id:  knex('shops').select('id').where('name', 'Stairway to Donuts'),
          donut_id: knex('donuts').select('id').where('name', 'Sugar-Coated Donut')
        }),
        knex('shops_donuts').insert({
          shop_id:  knex('shops').select('id').where('name', 'Stairway to Donuts'),
          donut_id: knex('donuts').select('id').where('name', 'Blueberry Coffee Donut')
        }),
        knex('shops_donuts').insert({
          shop_id:  knex('shops').select('id').where('name', 'Stairway to Donuts'),
          donut_id: knex('donuts').select('id').where('name', 'Jelly Donut')
        })
      ]);
    });
};
