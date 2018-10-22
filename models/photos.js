module.exports = function(sequelize, DataTypes) {
  var Photos = sequelize.define("Photos", {
    photo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {//I dont think this is needed. In routes, User is defined as HasMany photos and Photos belongsTo Users
      type: DataTypes.INTEGER,
      allowNull: false
    },
    marker_id: {//I dont think this is needed. In routes, User is defined as HasMany photos and Photos belongsTo Users
      type: DataTypes.INTEGER,
      allowNull: false
    },
    photo_url: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    photog_notes: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATE,
    }
    // time: {
    //   type: DataTypes.TIME,
    // },
    


  });

  Photos.associate = function(models) {
    // We're saying that a Photo should belong to a User
    // A Photos can't be created without an Users due to the foreign key constraint
    Photos.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  //ONCE NO PHOTOS REMAIN FOR A LOCATION, SHOULD THE MARKER EXIST?
  // Photos.associate = function(models) {
    // Associating Photos with Markers
    // When an Photo is deleted, also delete any associated Markers
  //   Photos.hasMany(models.Markers, {
  //     onDelete: "cascade"
  //   });
  // };


  return Photos;
};
