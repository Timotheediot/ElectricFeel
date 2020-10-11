// Set Server dependencies :
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connection = require("./config/config");
const bodyParser = require("body-parser");
const route = require("./routes/index");
const port = 4000;
const app = express();

// Server Uses :
app.use(cors("*"));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Entry point of server 'http://localhost:4000/'
app.get("/", (req, res) => {
  res.send("Welcome on your Node/Express server !").status(200);
});

// To add Routes follow this example :
// ----------------------------------- //
// Define a logic for the name of routes :
// For example all the user's routes start by '/routes_for_user'
// And will be define in the routes directory by user.js
// Result :
// app.use("/routes_for_user", route.user)

app.listen(port, (err) => {
  if (err) {
    throw new Error("something bad happened...");
  }
  console.log(`server is listening on ${port}`);
});
