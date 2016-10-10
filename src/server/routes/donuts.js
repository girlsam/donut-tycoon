const express = require('express');
const knex = require('../db/knex');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', (req, res, next) => {
  knex('donuts')
  .then((results) => {
    const renderObject = {};
    renderObject.donuts = results;
    res.render('donuts/donuts', renderObject);
  })
  .catch((err) => {
    res.status(500).send({
      status: 'error'
    });
  });
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  let findDonuts =
  knex('donuts')
  .select('donuts.name', 'donuts.image_url', 'donuts.topping', 'donuts.price')
  .where('donuts.id', id);
  let findShops =
  knex('shops')
  .select('shops.name', 'shops.city', 'shops.image_url')
  .join('shops_donuts', 'shops_donuts.donut_id', id)
  .where('shops_donuts.donut_id', id);
  Promise.all([
    findDonuts,
    findShops
  ])
  .then((results) => {
    const renderObject = {};
    console.log(renderObject);
    renderObject.donuts = results[0];
    renderObject.shops = results[1];
    res.render('donuts/donut', renderObject);
  })
  .catch((err) => {
    res.status(500).send({
      status: 'error'
    });
  });
});
//
// router.get('/:id/edit', (req, res, next) => {
//   const id = parseInt(req.params.id);
//   knex('shops').where('shops.id', id)
//   .then(results => {
//     const renderObject = {};
//     renderObject.shop = results[0];
//     res.render('shops/edit-shop', renderObject);
//   })
//   .catch(results => {
//     res.status(500).send({
//       status: 'error'
//     });
//   });
// });
//
// router.get('/shops/new', (req, res, next) => {
//   res.render('shops/new-shop');
// });

module.exports = router;
