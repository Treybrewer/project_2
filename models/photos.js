module.exports = function(sequelize, DataTypes) {
  var Photos = sequelize.define("Photos", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_id: {//Needed for associating the User with the Photo table
      type: DataTypes.INTEGER,
      allowNull: false
    },
    marker_id: {//Needed for associating Marker with the photo table
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
    
  },{
    underscored: true
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
  Photos.associate = function(models) {
    // We're saying that a Photo should belong to a User
    // A Photos can't be created without an Users due to the foreign key constraint
    Photos.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };


  return Photos;
};
