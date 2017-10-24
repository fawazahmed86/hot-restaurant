// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
// var path = require("path");

var htmlRoutes = require("./routes/htmlRoutes.js")
var apiRoutes = require("./routes/apiRoutes.js")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

htmlRoutes(app);
apiRoutes(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
