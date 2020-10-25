// REQUIRE what we need :
const express = require("express");
const connection = require("../../config/config");
const router = express.Router();

// ENTRY POINT :
router.get("/", (req, res) => {
  res.send("tu es sur la route auto").status(200);
});

router.get("/brand", (req, res) => {
  connection.query(`SELECT * FROM marque`, (err, results) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send(`Erreur lors de la récupération des marques d'autos`);
    } else {
      res.json(results);
    }
  });
});

router.get("/brand/model", (req, res) => {
  connection.query(`SELECT * FROM marque`, (err, results) => {
    if (err) {
      res
        .status(500)
        .send(`Erreur lors de la récupération des marques d'autos`);
    } else {
      res.json(results);
    }
  });
});

router.get("/seat", (req, res) => {
  connection.query(`SELECT place FROM place`, (err, results) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération des places`);
    } else {
      res.json(results.data);
    }
  });
});

router.get("/price", (req, res) => {
  connection.query(`SELECT prix FROM auto`, (err, results) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération des prix des autos`);
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
