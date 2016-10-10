const express = require('express');
const knex = require('../db/knex');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  let findShops = knex('shops').where('shops.id', id).first();
  let findDonuts =
  knex('shops_donuts')
  .select('donuts.name', 'donuts.image_url', 'donuts.topping', 'donuts.price')
  .join('shops', 'shops_donuts.shop_id', id)
  .join('donuts', 'shops_donuts.donut_id', 'donuts.id')
  .where('shops.id', id);
  Promise.all([
    findShops,
    findDonuts
  ])
  .then((results) => {
    const renderObject = {};
    renderObject.shops = results[0];
    renderObject.donuts = results[1];
    res.render('shops/shop', renderObject);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send({
      status: 'error'
    });
  });
});

module.exports = router;
