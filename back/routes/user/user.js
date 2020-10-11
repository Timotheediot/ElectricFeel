// REQUIRE what we need :
const express = require("express");
const connection = require("../../config/config");
const router = express.Router();

// In this file, we are comming from 'http://localhost:4000/routes_for_user' as define in ../../index.js line 28
// So all routes from here beginning by '/routes_for_user', it is what we call 'ENTRY POINT'

// ENTRY POINT :
router.get("/", (req, res) => {
  res.send("Route = /routes_for_user").status(200);
});

// Example of route and request for GET ALL USERS
// Keep in mind that the entire url for this route is 'http://localhost:4000/routes_for_user/user-list'
//   'http://localhost:4000/'        'routes_for_user'                 'user-list'
//             =                             =                              =
// |-- Address server -- | --Entry point of user's routes -- | -- name's route for get users -- //

router.get("/user-list", (req, res) => {
  connection.query("SELECT * FROM user", (err, results) => {
    if (err) {
      res
        .status(500)
        .send(`Erreur lors de la récupération de la liste des users !!`);
    } else {
      res.status(200).send(results);
    }
  });
});
