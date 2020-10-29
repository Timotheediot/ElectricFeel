// REQUIRE what we need :
const express = require("express");
const connection = require("../../config/config");
const router = express.Router();

// ENTRY POINT :
router.get("/", (req, res) => {
  connection.query(`SELECT * FROM auto`, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send(`Error auto list`);
    } else {
      res.json(results);
    }
  });
});

router.get("/brand", (req, res) => {
  connection.query(`SELECT * FROM brand`, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send(`Error brand lists`);
    } else {
      res.json(results);
    }
  });
});

router.get("/brand/auto", (req, res) => {
  connection.query(`SELECT * FROM brand`, (err, results) => {
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
  connection.query(`SELECT seat FROM auto`, (err, results) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération des places`);
    } else {
      res.json(results.data);
    }
  });
});

router.get("/price", (req, res) => {
  connection.query(`SELECT price FROM auto`, (err, results) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération des prix des autos`);
    } else {
      res.json(results);
    }
  });
});

router.get("/color", (req, res) => {
  connection.query(`SELECT color FROM auto`, (err, results) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération des prix des autos`);
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
