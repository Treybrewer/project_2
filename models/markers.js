module.exports = function(sequelize, DataTypes) {
    var Markers = sequelize.define("Markers", {
      // Giving the Markers model a name of type STRING
      id: {
        type: DataTypes.INT,
        primaryKey: true,
        allowNull: false
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
  
    return Markers;
  };
  