require("dotenv").config();
const express = require("express");
const Router = require("./routes");
const cors = require("cors");
const dbInit = require("./src/seeders/dbInit");
const port = process.env.APP_PORT || 3022;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

Router(app);
dbInit(false);

app.listen(port, () => console.log("listen port: ", port));
