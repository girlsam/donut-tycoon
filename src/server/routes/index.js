const express = require('express');
const knex = require('../db/knex');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', (req, res, next) => {
  knex('shops')
  .then((results) => {
    const renderObject = {};
    renderObject.shops = results;
    res.render('shops/shops', renderObject);
  })
  .catch((err) => {
    res.status(500).send({
      status: 'error'
    });
  });
});

module.exports = router;
