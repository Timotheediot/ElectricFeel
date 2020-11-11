// REQUIRE what we need :
const express = require("express");
const connection = require("../../config/config");
const router = express.Router();

// ENTRY POINT :
router.get("/", (req, res) => {
  connection.query(
    `SELECT a.id as "id_auto", a.id_brand, a.id_type, a.autonomy, a.power, a.auto as "model_auto", a.description, a.date, a.color, a.price, p.url, b.brand, t.type, auterm.reloadTime, electerm.longitude, electerm.latitude FROM auto a LEFT JOIN photo p ON a.id = p.id_auto JOIN brand b ON a.id_brand = b.id RIGHT JOIN type t ON a.id_type = t.id LEFT JOIN auto_terminal auterm on a.id=auterm.id_auto LEFT JOIN electricterminals electerm on auterm.id_electricTerminals=electerm.id ORDER BY a.auto`,
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
