require("dotenv").config(process.cwd(), ".env");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, // MAMP UTILISATION
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (!err) {
    console.log("Database is connected");
  } else {
    console.log("Error connecting database", err);
  }
});

module.exports = connection;
