const _ = require("lodash");
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

exports.ModifyCarAdvert = (advertId, newData) => {
  if (_.has(newData, "new")) {
    if (_.isBoolean(newData.new)) {
      if (newData.new) {
        newData = {
          $set: _.omit(newData, ["mileage", "first_registration"]),
          $unset: { mileage: undefined, first_registration: undefined }
        };
        console.log(newData);
      } else {
        if (!(_.has(newData, "mileage") && _.has(newData, "mileage"))) {
          throw new Error(
            "When the car is old, `mileage` and `first_registration` are required"
          );
        }
      }
    } else {
      throw new Error("`new` must be a boolean value");
    }
  }

  return CarAdvert.update({ _id: advertId }, newData);
};

exports.DeleteCarAdvert = advertId => {
  return CarAdvert.remove({
    _id: advertId
  });
};
