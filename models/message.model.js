module.exports = (sequelize, Sequelize) => {
  const Message = sequelize.define({
    senderId: {
      type: DataTypes.UUID,
    },
    receiverId: {
      type: DataTypes.UUID,
    },
    text: {
      type: Sequelize.STRING,
    },
  });
  return Message;
};
