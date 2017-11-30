const CarAdvert = require("./../models/car_advert");

exports.ListAllAds = sortBy => CarAdvert.find({}).sort(sortBy);

exports.AddCarAdvert = advert => {
  var ad = new CarAdvert(advert);
  return ad.save();
}