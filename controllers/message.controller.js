require("dotenv").config();
const db = require("../models/");
const Message = db.message;

exports.sendMessage = (req, res) => {
  Message.create({
    senderId: req.body.senderId,
    receiverId: req.params.receiverId,
    text: req.body.text,
  }).then((msg) => {
    res.send(msg);
  });
};
