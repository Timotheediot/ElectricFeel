// Set Server dependencies :
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

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
app.use("/user", route.user);
app.use("/auto", route.auto);

app.listen(port, (err) => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${port}`);
});
