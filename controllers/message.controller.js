require("dotenv").config();
const db = require("../models/");
const Message = db.message;
const User = db.user;
const Op = db.Sequelize.Op;

exports.sendMessage = (req, res) => {
  Message.create({
    senderId: req.body.senderId,
    receiverId: req.params.receiverId,
    text: req.body.text,
  }).then((msg) => {
    res.send(msg);
  });
};

exports.listAllMessage = (req, res) => {
  Message.findAll({
    attributes: ["id"],
    include: [
      {
        model: User,
        as: "sender",
      },
      { model: User, as: "receiver" },
    ],
    where: {
      senderId: {
        [Op.or]: [req.body.senderId, req.body.receiverId],
      },
      receiverId: {
        [Op.or]: [req.body.senderId, req.body.receiverId],
      },
    },
  }).then((msg) => {
    res.send(msg);
  });
};
