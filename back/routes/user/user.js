// REQUIRE what we need :
const bycrypt = require("bcryptjs");
const connection = require("../../config/config");
const express = require("express");
const router = express.Router();

// In this file, we are comming from 'http://localhost:4000/routes_for_user' as define in ../../index.js line 28
// So all routes from here beginning by '/routes_for_user', it is what we call 'ENTRY POINT'

router.use(express.json());

const users = [];

// ENTRY POINT :
router.get("/", (req, res) => {
  res.send("On the road user").status(200);
});

router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bycrypt.hash(req.body.password, 10);
    const user = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashedPassword,
    };
    users.push(user);
    console.log("users:", users);
    res.status(201).send();
  } catch {
    res.status(500).send();
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
