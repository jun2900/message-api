module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define({
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
    },
    username: {
      type: Sequelize.STRING,
    },
  });
  return User;
};
