// REQUIRE what we need :
const express = require("express");
const connection = require("../../config/config");
const router = express.Router();
const bycrypt = require("bcryptjs");

// In this file, we are comming from 'http://localhost:4000/routes_for_user' as define in ../../index.js line 28
// So all routes from here beginning by '/routes_for_user', it is what we call 'ENTRY POINT'

// ENTRY POINT :
router.get("/", (req, res) => {
  res.send("Route=/user").status(200);
});

// Example of route and request for GET ALL USERS
// Keep in mind that the entire url for this route is 'http://localhost:4000/routes_for_user/user-list'
//   'http://localhost:4000/'        'routes_for_user'                 'user-list'
//             =                             =                              =
// |-- Address server -- | --Entry point of user's routes -- | -- name's route for get users -- //

// router.get("/user-list", (req, res) => {
//   connection.query("SELECT * FROM user", (err, results) => {
//     if (err) {
//       res
//         .status(500)
//         .send(`Erreur lors de la récupération de la liste des users !!`);
//     } else {
//       res.status(200).send(results);
//     }
//   });
// });
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const hash = await bycrypt.hash(password, 10);
    await connection("users").insert({ email: email, hash: hash });
    res.status(200).json("All good!");
  } catch (error) {
    console.log(error);
    res.status(500).send("Something broke!");
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await connection("users").first("*").where({ email: email });
    if (user) {
      const validPass = await bycrypt.compare(password, user.hash);
      if (validPass) {
        res.status(200).json("Valid email and password");
      } else {
        res.json("Wrong pass!");
      }
    } else {
      res.status(404).json("User not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Something broke!");
  }
});

module.exports = router;
