var CarAdvert = require("./app/models/car_advert");

module.exports = function (app, db) {

    // Create Ad
    app.post("/car_ads", (req, res) => {
        // Here we create the ad
        console.log(req.body);
        res.send("hello");
    });

    // View Ad

    // Modify Ad

    // Delete Ad
};