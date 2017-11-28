var CarAdvertCtrl = require("../controllers/car_advert");

module.exports = function(app, db) {
  // Create Ad
  app.post("/car_ads", (req, res) => {
    // Here we create the ad
    console.log(req.body);
    res.send("hello");
  });

  // View Ad
  // Sort by clause should be in JSON format
  // {
  //   id: -1, // Desc
  //   name: 1 // Asc
  // }
  app.get("/car_ads", (req, res) => {
    var sortBy = {};
    if (req.query.sortBy) sortBy = JSON.parse(req.query.sortBy);
    CarAdvertCtrl.ListAllAds(req.query.sortBy || {})
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
