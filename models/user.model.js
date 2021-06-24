module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    username: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING(80),
      allowNull: false,
    },
  });

  return User;
};
