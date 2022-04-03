require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

// middleware
const notFound = require("./middleware/not_found");
const errorHandler = require("./middleware/error-handler");

// routes
app.get("/", (req, res) => {
  res.send("<h1> Email Sending </h1>");
});

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
