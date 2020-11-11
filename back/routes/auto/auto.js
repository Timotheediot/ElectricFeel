// REQUIRE what we need :
const express = require("express");
const connection = require("../../config/config");
const router = express.Router();

// ENTRY POINT :
router.get("/", (req, res) => {
  connection.query(
    `SELECT * FROM auto INNER JOIN photo ON auto.id = photo.id_auto INNER JOIN brand ON id_brand = brand.id INNER JOIN type ON id_type = type.id`,
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send(`Error auto list`);
      } else {
        res.json(results);
      }
    }
  );
});

router.get("/brand", (req, res) => {
  connection.query(`SELECT brand FROM brand`, (err, results) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération des marques`);
    } else {
      res.json(results);
    }
  });
});

router.get("/autonomy", (req, res) => {
  connection.query(`SELECT autonomy FROM auto`, (err, results) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération des autonomies`);
    } else {
      res.json(results);
    }
  });
});

router.get("/seat", (req, res) => {
  connection.query(`SELECT * FROM auto`, (err, results) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération des places`);
    } else {
      res.json(results);
    }
  });
});

router.get("/price", (req, res) => {
  connection.query(`SELECT * FROM auto WHERE price BETWEEN`, (err, results) => {
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
