const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const db = require("./config/db");
const app = express();

const port = 8000;

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect(db.url);

require("./app/routes")(app, mongoose);
app.listen(port, () => {
  console.log("We are live on " + port);
});
