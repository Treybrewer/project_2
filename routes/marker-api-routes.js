var db = require("../models");

module.exports = function(app) {
  app.get("/api/markers", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Photos
    db.Markers.findAll({
      include: [db.Photos]
    }).then(function(dbMarkers) {
      res.json(dbMarkers);
    });
  });

  app.get("/api/markers/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Photos
    db.Markers.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Photos]
    }).then(function(dbMarkers) {
      res.json(dbMarkers);
    });
  });

  app.post("/api/markers", function(req, res) {
    db.Markers.create(req.body).then(function(dbMarkers) {
      res.json(dbMarkers);
    });
  });

  app.delete("/api/markers/:id", function(req, res) {
    db.Markers.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbMarkers) {
      res.json(dbMarkers);
    });
  });

};
