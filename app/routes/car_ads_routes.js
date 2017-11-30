var _ = require("lodash");

var CarAdvertCtrl = require("../controllers/car_advert");

module.exports = function(app, db) {
  // Create Ad
  app.post("/car_ads", (req, res) => {
    console.log(req.body);
    CarAdvertCtrl.AddCarAdvert(req.body)
      .then(() => {
        res.json("Ad created successfully");
      })
      .catch(e => {
        res.send(e);
      });
  });

  // View Ads
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

  // View Single Ad
  app.get("/car_ads/:ad_id", (req, res) => {
    CarAdvertCtrl.GetCarAdvert(req.params.ad_id)
      .then(ad => {
        res.json(ad);
      })
      .catch(e => {
        res.send(e);
      });
  });

  // Modify Ad
  app.put("/car_ads/:ad_id", (req, res) => {
    CarAdvertCtrl.ModifyCarAdvert(req.params.ad_id, _.omit(req.body, ["_id"]))
      .then(() => {
        res.json("Ad updated successfully");
      })
      .catch(e => {
        res.send(e);
      });
  });

  // Delete Ad
  app.delete("/car_ads/:ad_id", (req, res) => {
    CarAdvertCtrl.DeleteCarAdvert(req.params.ad_id)
      .then(() => {
        res.json("Ad deleted successfully");
      })
      .catch(e => {
        res.send(e);
      });
  });
};
