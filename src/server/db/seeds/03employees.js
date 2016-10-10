const faker = require('faker');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: knex('shops').select('id').where('name', 'Funkin\' Gonuts'),
          favorite_donut: knex('donuts').select('id').where('name', 'Sugar-Coated Donut')
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: knex('shops').select('id').where('name', 'Funkin\' Gonuts'),
          favorite_donut: knex('donuts').select('id').where('name', 'Boston Creme Donut')
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: knex('shops').select('id').where('name', 'Funkin\' Gonuts'),
          favorite_donut: knex('donuts').select('id').where('name', 'Sugar-Coated Donut')
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: knex('shops').select('id').where('name', 'Funkin\' Gonuts'),
          favorite_donut: knex('donuts').select('id').where('name', 'Mystery Donut')
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: knex('shops').select('id').where('name', 'Funkin\' Gonuts'),
          favorite_donut: knex('donuts').select('id').where('name', 'Jelly Donut')
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: knex('shops').select('id').where('name', 'Sugar Coma Donut Factory'),
          favorite_donut: knex('donuts').select('id').where('name', 'Jelly Donut')
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: knex('shops').select('id').where('name', 'Sugar Coma Donut Factory'),
          favorite_donut: knex('donuts').select('id').where('name', 'Blueberry Coffee Donut')
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: knex('shops').select('id').where('name', 'Sugar Coma Donut Factory'),
          favorite_donut:  knex('donuts').select('id').where('name', 'Vanilla Walnut Donut')
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: knex('shops').select('id').where('name', 'Sugar Coma Donut Factory'),
          favorite_donut: knex('donuts').select('id').where('name', 'Blueberry Coffee Donut')
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: knex('shops').select('id').where('name', 'Sugar Coma Donut Factory'),
          favorite_donut: knex('donuts').select('id').where('name', 'Jelly Donut')
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: knex('shops').select('id').where('name', 'Sugar Coma Donut Factory'),
          favorite_donut:  knex('donuts').select('id').where('name', 'Vanilla Walnut Donut')
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: knex('shops').select('id').where('name', 'Dough Hole Donuts'),
          favorite_donut: knex('donuts').select('id').where('name', 'Vanilla Walnut Donut')
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: knex('shops').select('id').where('name', 'Dough Hole Donuts'),
          favorite_donut: knex('donuts').select('id').where('name', 'Vanilla Walnut Donut')
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: knex('shops').select('id').where('name', 'Dough Hole Donuts'),
          favorite_donut: knex('donuts').select('id').where('name', 'Blueberry Coffee Donut')
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: knex('shops').select('id').where('name', 'Dough Hole Donuts'),
          favorite_donut: knex('donuts').select('id').where('name', 'Vanilla Walnut Donut')
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: knex('shops').select('id').where('name', 'Dough Hole Donuts'),
          favorite_donut: knex('donuts').select('id').where('name', 'Blueberry Coffee Donut')
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: knex('shops').select('id').where('name', 'Dough Hole Donuts'),
          favorite_donut: knex('donuts').select('id').where('name', 'Blueberry Coffee Donut')
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: knex('shops').select('id').where('name', 'Stairway to Donuts'),
          favorite_donut:  knex('donuts').select('id').where('name', 'Jelly Donut')
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: knex('shops').select('id').where('name', 'Stairway to Donuts'),
          favorite_donut: knex('donuts').select('id').where('name', 'Blueberry Coffee Donut')
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: knex('shops').select('id').where('name', 'Stairway to Donuts'),
          favorite_donut:  knex('donuts').select('id').where('name', 'Jelly Donut')
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: knex('shops').select('id').where('name', 'Stairway to Donuts'),
          favorite_donut:  knex('donuts').select('id').where('name', 'Jelly Donut')
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: knex('shops').select('id').where('name', 'Stairway to Donuts'),
          favorite_donut:  knex('donuts').select('id').where('name', 'Sugar-Coated Donut')
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: knex('shops').select('id').where('name', 'Stairway to Donuts'),
          favorite_donut:  knex('donuts').select('id').where('name', 'Sugar-Coated Donut')
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: knex('shops').select('id').where('name', 'Funkin\' Gonuts'),
          favorite_donut:  knex('donuts').select('id').where('name', 'Boston Creme Donut')
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: knex('shops').select('id').where('name', 'Sugar Coma Donut Factory'),
          favorite_donut: knex('donuts').select('id').where('name', 'Boston Creme Donut')
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: knex('shops').select('id').where('name', 'Sugar Coma Donut Factory'),
          favorite_donut: knex('donuts').select('id').where('name', 'Boston Creme Donut')
        })
      ]);
    });
};
