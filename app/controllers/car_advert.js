const CarAdvert = require("./../models/car_advert");

exports.ListAllAds = sortBy =>
  CarAdvert.find({})
    .sort(sortBy)
    .select("-__v");

exports.AddCarAdvert = advert => {
  var ad = new CarAdvert(advert);
  return ad.save();
};

exports.GetCarAdvert = advertId => {
  return CarAdvert.findOne({ _id: advertId }, "-__v");
};
