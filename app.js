require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

// controller
const sendEmail = require("./controllers/sendEmail");

// errorHandlers
const notFound = require("./middleware/not_found");
const errorHandler = require("./middleware/error-handler");

app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("<h1> Email Sending </h1> <a href='/send'> Send Email </a>");
});

app.get("/send", sendEmail);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
