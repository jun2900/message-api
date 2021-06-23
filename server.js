require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");

db.sequelize.sync({
  //force: true,
});
//.then(() => {
//  console.log(`resync DB`);
//});

const app = express();
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// routes
require("./routes/message.routes")(app);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
