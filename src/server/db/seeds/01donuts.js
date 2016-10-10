exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('donuts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('donuts').insert({
          name: 'Sugar-Coated Donut',
          topping: 'Brown Sugar, Cinnamon',
          price: 2.50,
          image_url: 'https://hd.unsplash.com/photo-1458938354258-3e66eb36eb7b'
        }),
        knex('donuts').insert({
          name: 'Jelly Donut',
          topping: 'Powdered Sugar, Rasberry Jelly Filling',
          price: 3.00,
          image_url: 'https://hd.unsplash.com/photo-1422919869950-5fdedb27cde8'
        }),
        knex('donuts').insert({
          name: 'Boston Creme Donut',
          topping: 'Chocolate Frosting, Creme-Filled',
          price: 4.00,
          image_url: 'https://hd.unsplash.com/photo-1447879027584-9d17c2ca0333'
        }),
        knex('donuts').insert({
          name: 'Blueberry Coffee Donut',
          topping: 'Blue Sprinkles',
          price: 3.50,
          image_url: 'https://hd.unsplash.com/photo-1471102204080-fe99e6db4ef0'
        }),
        knex('donuts').insert({
          name: 'Vanilla Walnut Donut',
          topping: 'Vanilla Frosting, Crushed Walnuts',
          price: 3.00,
          image_url: 'https://hd.unsplash.com/photo-1472452049192-db15def0be25'
        }),
        knex('donuts').insert({
          name: 'Mystery Donut',
          topping: 'It\'s a Mystery',
          price: 3.00,
          image_url: 'https://hd.unsplash.com/photo-1454255779048-55ecd78837d4'
        })
      ]);
    });
};
