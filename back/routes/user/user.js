// REQUIRE what we need :
const bcrypt = require("bcryptjs");
const connection = require("../../config/config");
const express = require("express");
const router = express.Router();

router.use(express.json());

// ENTRY POINT :

router.get("/", (req, res) => {
  res.send("On the road user").status(200);
});

// REGISTER
router.post("/register", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = {
    email: req.body.email,
    password: hashedPassword,
  };
  connection.query(`INSERT INTO user SET ?`, user, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send(`Error user register`);
    } else {
      res.json(results);
    }
  });
});

// LOGIN
router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  connection.query(
    `SELECT * FROM user WHERE email = ?`,
    [email],
    async (error, results) => {
      if (error) {
        res.send({
          code: 400,
          failed: "error ocurred",
        });
      } else {
        if (results.length > 0) {
          const comparaision = await bcrypt.compare(
            password,
            results[0].password
          );
          if (comparaision) {
            res.send({
              code: 200,
              success: "Login sucessfull",
            });
          } else {
            res.send({
              code: 204,
              success: "Email and password does not match",
            });
          }
        } else {
          res.send({
            code: 206,
            success: "Email does not exits",
          });
        }
      }
    }
  );
});

module.exports = router;
