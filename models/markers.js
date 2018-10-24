module.exports = function(sequelize, DataTypes) 
{
    var Markers = sequelize.define("Markers", {
     
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address:{
        type: DataTypes.STRING,
        allowNull: false

      },
      lat:{
        type: DataTypes.FLOAT(10,6),
        allowNull: false

      },
      lng:{
        type: DataTypes.FLOAT(10,6),
        allowNull: false

      },
      type:{
        type: DataTypes.STRING,
        allowNull: false
      }
    });

    Markers.associate = function(models) {
      // Associating Markers with photos
      Markers.hasMany(models.Photos);
    };
    return Markers;
  };
  