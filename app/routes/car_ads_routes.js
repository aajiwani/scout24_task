var CarAdvertCtrl = require("../controllers/car_advert");

module.exports = function(app, db) {
  // Create Ad
  app.post("/car_ads", (req, res) => {
    // Here we create the ad
    console.log(req.body);
    res.send("hello");
  });

  // View Ad
  app.get("/car_ads", (req, res) => {
    CarAdvertCtrl.ListAllAds({})
      .then(ads => {
        res.json(ads);
      })
      .catch(e => {
        res.send(e);
      });
  });

  // Modify Ad

  // Delete Ad
};
