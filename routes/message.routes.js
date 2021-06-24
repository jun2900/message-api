const { authJWT } = require("../middleware");
const controller = require("../controllers/message.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/message/reply/:messageId",
    authJWT.verifyToken,
    controller.replyMessage
  );
  app.post("/message/:receiverId", authJWT.verifyToken, controller.sendMessage);
  app.post("/message", authJWT.verifyToken, controller.listAllMessage);
  app.get(
    "/connected/users",
    authJWT.verifyToken,
    controller.listAllConversation
  );
};
