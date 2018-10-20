module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    // Giving the Users model a name of type STRING
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_fname:{
      type: DataTypes.STRING
    },
    user_lname:{
      type: DataTypes.STRING
    },
    bio:{
      type: DataTypes.STRING
    }
  });

  Users.associate = function(models) {
    // Associating Users with photos
    // When an Users is deleted, also delete any associated photos
    Users.hasMany(models.Photos, {
      onDelete: "cascade"
    });
  };

  return Users;
};
