const carAdsRoutes = require('./car_ads_routes');

module.exports = function (app, db) {
    carAdsRoutes(app, db);
};