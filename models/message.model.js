module.exports = (sequelize, Sequelize) => {
  const Message = sequelize.define("messages", {
    senderId: {
      type: Sequelize.UUID,
    },
    receiverId: {
      type: Sequelize.UUID,
    },
    text: {
      type: Sequelize.STRING,
    },
  });
  return Message;
};
