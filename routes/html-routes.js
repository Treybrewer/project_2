// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });

  // cms route loads cms.html
  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });

  app.get("/photo-info", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/photo-info.html"));
  });

    // linking sign up page
  app.get("/form", function(req, res) {
    res.sendFile(path.join(__dirname, "public/form.html"));
  });

};
