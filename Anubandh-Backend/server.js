require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: process.env.CLIENT_LINK || "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
const {connectToDb} = require("./utils/connectToDb");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

connectToDb();

app.get("/hi", (req, res) => {
    res.send("Server is working!");
});

app.listen(2424, () => {
    console.log("Server is running on http://localhost:2424");
  });