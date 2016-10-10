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
          shop_id: 1,
          favorite_donut: 6
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: 1,
          favorite_donut: 5
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: 1,
          favorite_donut: 3
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: 1,
          favorite_donut: 4
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: 1,
          favorite_donut: 5
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: 2,
          favorite_donut: 5
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: 2,
          favorite_donut: 4
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: 2,
          favorite_donut: 1
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: 2,
          favorite_donut: 3
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: 2,
          favorite_donut: 5
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: 3,
          favorite_donut: 6
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: 3,
          favorite_donut: 1
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: 3,
          favorite_donut: 2
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: 3,
          favorite_donut: 2
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: 3,
          favorite_donut: 2
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: 3,
          favorite_donut: 5
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: 4,
          favorite_donut: 6
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: 4,
          favorite_donut: 2
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: 4,
          favorite_donut: 4
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: 4,
          favorite_donut: 2
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: 4,
          favorite_donut: 1
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: 4,
          favorite_donut: 3
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: 4,
          favorite_donut: 6
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: 2,
          favorite_donut: 6
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: 1,
          favorite_donut: 1
        }),
        knex('employees').insert({
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
          email: faker.internet.email(),
          shop_id: 3,
          favorite_donut: 4
        })
      ]);
    });
};
