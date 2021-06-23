require("dotenv").config();
const Sequelize = require("sequelize");
// initialize connection to database
const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorsAliases: false,
    define: {
      timestamps: false,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.message = require("./message.model.js")(sequelize, Sequelize);

db.message.belongsTo(db.user, {
  as: "sender",
  foreignKey: "senderId",
});

db.message.belongsTo(db.user, {
  as: "receiver",
  foreignKey: "receiverId",
});

module.exports = db;
