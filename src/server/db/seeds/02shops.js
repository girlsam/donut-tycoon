exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shops').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('shops').insert({
          name: 'Funkin\' Gonuts',
          city: 'Denver',
          image_url: 'https://hd.unsplash.com/photo-1464869372688-a93d806be852'
        }),
        knex('shops').insert({
          name: 'Sugar Coma Donut Factory',
          city: 'Denver',
          image_url: 'https://hd.unsplash.com/photo-1461920607259-76ea048d89a2'
        }),
        knex('shops').insert({
          name: 'Dough Hole Donuts',
          city: 'Aurora',
          image_url: 'https://hd.unsplash.com/photo-1422098313659-a7869aa53f11'
        }),
        knex('shops').insert({
          name: 'Stairway to Donuts',
          city: 'Aurora',
          image_url: 'https://hd.unsplash.com/photo-1456743625079-86a97ff8bc86'
        })
      ]);
    });
};
