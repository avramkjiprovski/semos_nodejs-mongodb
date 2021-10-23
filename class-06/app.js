const express = require("express");
const cors = require("cors");
const router = require("./routes");

const app = express();

// sekogas ima middleware za da moze aplikacijta da prima req
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

module.exports = app;
