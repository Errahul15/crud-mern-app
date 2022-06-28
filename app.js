require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./db/conn");
const users = require("./models/userSchema");
const cors = require("cors");
const router = require("./routes/router");

const port = process.env.PORT || 8003;

app.use(cors());
app.use(express.json());


app.use(router);

if (process.env.NODE_ENV == 'production') {
    app.use(express.static("client/build"));
}

app.listen(port, () => {
    console.log(`server is start port number ${port}`);
});