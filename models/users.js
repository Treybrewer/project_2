module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    // Giving the Users model a name of type STRING
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    bio:{
      type: DataTypes.STRING
    }
  });

  Users.associate = function(models) {
    // Associating Users with photos
    // When an Users is deleted, also delete any associated photos
    Users.hasMany(models.Photos);
  };

  return Users;
};
