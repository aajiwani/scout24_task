var counter = require("./counter");

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CarAdvertSchema = new Schema({
  _id: {
    type: Number
  },
  title: {
    type: String,
    required: [true, "`title` is required for the car advertisement"]
  },
  fuel: {
    type: String,
    enum: ["gasoline", "diesel"],
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
      function() {
        return !this.new;
      },
      "`mileage` is required for the car advertisement that is for an old car"
    ]
  },
  first_registration: {
    type: Date,
    required: [
      function() {
        return !this.new;
      },
      "`first_registration` is required for the car advertisement that is for an old car"
    ]
  }
});

CarAdvertSchema.pre("save", function(next) {
  var doc = this;
  console.log("Presave");
  console.log(doc);
  counter.findByIdAndUpdate({_id: "CarAdvertId"}, { $inc: { seq: 1 } }, {upsert: true, new: true}, function(
    err,
    result
  ) {
    if (err) {
      throw err;
    }
    doc._id = result.seq;
    next();
  });
});

module.exports = mongoose.model("CarAdvert", CarAdvertSchema);
