require("dotenv").config();
const db = require("../models/");
const Message = db.message;
const User = db.user;
const Op = db.Sequelize.Op;

exports.sendMessage = (req, res) => {
  Message.create({
    senderId: req.userId,
    receiverId: req.params.receiverId,
    text: req.body.text,
  }).then((msg) => {
    res.send(msg);
  });
};

exports.listAllMessage = (req, res) => {
  Message.findAll({
    attributes: ["id", "createdAt", "text"],
    include: [
      {
        model: Message,
        as: "replier",
      },
      {
        model: Message,
        as: "targetReply",
      },
      {
        model: User,
        as: "sender",
        attributes: ["id", "username"],
      },
      { model: User, as: "receiver", attributes: ["id", "username"] },
    ],
    where: {
      senderId: {
        [Op.or]: [req.body.targetUserId, req.userId],
      },
      receiverId: {
        [Op.or]: [req.body.targetUserId, req.userId],
      },
    },
  }).then((msg) => {
    res.send(msg);
  });
};

exports.listAllConversation = (req, res) => {
  Message.findAll({
    attributes: ["senderId", "receiverId", "text", "createdAt"],
    where: {
      [Op.or]: [{ senderId: req.userId }, { receiverId: req.userId }],
    },
    order: [["createdAt", "DESC"]],
  }).then((msg) => {
    let temp = [];
    let result = [];

    msg.forEach((message) => {
      if (
        !temp.some(
          (e) =>
            (e.senderId == message.receiverId &&
              e.receiverId == message.senderId) ||
            (e.senderId == message.senderId &&
              e.receiverId == message.receiverId)
        )
      ) {
        temp.push({
          senderId: message.receiverId,
          receiverId: message.senderId,
          text: message.text,
          createdAt: message.createdAt,
        });
      }
    });

    temp.forEach((user) => {
      if (user.senderId != req.userId) {
        result.push({
          username: user.senderId,
          lastMessage: user.text,
          messageDate: user.createdAt,
        });
      } else if (user.receiverId != req.userId) {
        result.push({
          username: user.receiverId,
          text: user.text,
          messageDate: user.createdAt,
        });
      }
    });

    res.send({ connected: result });
  });
};

exports.replyMessage = (req, res) => {
  Message.create({
    senderId: req.userId,
    receiverId: req.body.receiverId,
    text: req.body.text,
    replyId: req.params.messageId,
  }).then((msg) => {
    res.send(msg);
  });
};
