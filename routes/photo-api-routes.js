// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the Photos
  app.get("/api/photos", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.UserId = req.query.user_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Photos.findAll({
      where: query,
      include: [db.Users]
    }).then(function(dbPhotos) {
      res.json(dbPhotos);
    });
  });

  // Get route for retrieving a single Photos
  app.get("/api/photos/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Photos.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Users]
    }).then(function(dbPhotos) {
      res.json(dbPhotos);
    });
  });

  // Photos route for saving a new Photos
  app.post("/api/photos", function(req, res) {
    db.Photos.create(req.body).then(function(dbPhotos) {
      res.json(dbPhotos);
    });
  });

  // DELETE route for deleting Photoss
  app.delete("/api/photos/:id", function(req, res) {
    db.Photos.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPhotos) {
      res.json(dbPhotos);
    });
  });

  // PUT route for updating Photoss
  app.put("/api/photos", function(req, res) {
    db.Photos.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbPhotos) {
      res.json(dbPhotos);
    });
  });
};
