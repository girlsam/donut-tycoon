(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const shopRoutes = require('../routes/shops');
    const donutRoutes = require('../routes/donuts');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/shops', shopRoutes);
    app.use('/donuts', donutRoutes);

  };

})(module.exports);
