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
  let findEmployees =
  knex('employees')
  .select('employees.first_name', 'employees.last_name', 'employees.email', 'donuts.name')
  .join('shops', 'shops.id', id)
  .join('donuts', 'donuts.id', 'employees.favorite_donut')
  .where('employees.shop_id', id);
  Promise.all([
    findShops,
    findDonuts,
    findEmployees
  ])
  .then((results) => {
    const renderObject = {};
    renderObject.shops = results[0];
    renderObject.donuts = results[1];
    renderObject.employees = results[2];
    res.render('shops/shop', renderObject);
  })
  .catch((err) => {
    res.status(500).send({
      status: 'error'
    });
  });
});

router.get('/:id/edit', (req, res, next) => {
  const id = parseInt(req.params.id);
  knex('shops').where('shops.id', id)
  .then(results => {
    const renderObject = {};
    renderObject.shop = results[0];
    res.render('shops/edit-shop', renderObject);
  })
  .catch(results => {
    res.status(500).send({
      status: 'error'
    });
  });
});

router.get('/shops/new', (req, res, next) => {
  res.render('shops/new-shop');
});

module.exports = router;
