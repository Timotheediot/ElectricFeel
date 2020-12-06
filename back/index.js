const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const bodyParser = require("body-parser");
const route = require("./routes/index");
const port = 4000;
const app = express();

//SERVER USES
app.use(cors("*"));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//ENTRY
app.get("/", (req, res) => {
  res.send("Welcome on your Node/Express server !").status(200);
});

//ROUTER
app.use("/user", route.user);
app.use("/auto", route.auto);

app.listen(port, (err) => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${port}`);
});
