const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

let corsOption = {
    origin: "http://localhost:7080"
};

app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const db = require("./model");
db.sequelize.sync();

require("./route/route")(app);

const port = process.env.PORT || 7080;
app.listen(port, () => {
    console.log(`Server Berjalan Pada Port ${port}`);
});
