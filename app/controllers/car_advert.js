const CarAdvert = require("./../models/car_advert");

exports.ListAllAds = sortBy => {
  return CarAdvert.find({}).sort(sortBy);
};