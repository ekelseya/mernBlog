const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

const MONGO_URI = process.env.MONGO_URI;

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log("Mongo Connection successful"))
    .catch(err => console.log(`Connection error: ${err}`));
app.get("/", (req, res) => {
    res.send("Hello!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.post("/user", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});