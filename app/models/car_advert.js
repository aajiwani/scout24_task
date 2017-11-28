var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CarAdvertSchema = new Schema({
  id: {
    type: Number,
    required: [true, "`id` is required for the car advertisement"]
  },
  title: {
    type: String,
    required: [true, "`title` is required for the car advertisement"]
  },
  fuel: {
    type: ["gasoline", "diesel"],
    required: [true, "`fuel` is required for the car advertisement"]
  },
  price: {
    type: Number,
    required: [true, "`price` is required for the car advertisement"]
  },
  new: {
    type: Boolean,
    required: [true, "`new` is required for the car advertisement"]
  },
  mileage: {
    type: Number,
    required: [
      () => {
        return !this.new;
      },
      "`mileage` is required for the car advertisement that is for an old car"
    ]
  },
  first_registration: {
    type: Date,
    required: [
      () => {
        return !this.new;
      },
      "`first_registration` is required for the car advertisement that is for an old car"
    ]
  }
});

module.exports = mongoose.model("CarAdvert", CarAdvertSchema);
