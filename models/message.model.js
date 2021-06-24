module.exports = (sequelize, Sequelize) => {
  const Message = sequelize.define(
    "messages",
    {
      senderId: {
        type: Sequelize.UUID,
      },
      receiverId: {
        type: Sequelize.UUID,
      },
      text: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: true,
      updatedAt: false,
      deletedAt: false,
    }
  );
  return Message;
};
