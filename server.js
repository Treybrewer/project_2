var express = require("express");
var dontenv = require("dotenv").config();
var keys = require("./keys.js");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./public"));

//Natalie --> commenting out requiring of the html and api files until ready. Causing errors.
require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

require("./routes/user-api-routes.js")(app);
require("./routes/photo-api-routes.js")(app);
require("./routes/marker-api-routes.js")(app);


db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});