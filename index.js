const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const db = require("./config/db");
const app = express();

const port = 8000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect(db.url);

require("./app/routes")(app, mongoose);
app.listen(port, () => {
  console.log("We are live on " + port);
});
