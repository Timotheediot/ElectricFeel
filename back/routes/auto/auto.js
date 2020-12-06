const express = require("express");
const connection = require("../../config/config");
const router = express.Router();

//ENTRY
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

//FORM
router.post("/filter", (req, res) => {
  let query = `SELECT DISTINCT a.id_brand, a.id_type, a.id_seat, a.autonomy, a.price, b.brand, t.type, s.seat, auterm.reloadTime, photo.url FROM auto a JOIN brand b ON a.id_brand = b.id JOIN photo ON a.id = photo.id RIGHT JOIN type t ON a.id_type = t.id RIGHT JOIN seat s ON a.id_seat = s.id LEFT JOIN auto_terminal auterm on a.id=auterm.id_auto`;
  let where = [];
  if (req.body.brand != null) {
    where.push(` b.brand = "${req.body.brand}"`);
  }
  if (req.body.seat != null) {
    where.push(` s.seat = "${req.body.seat}"`);
  }
  if (req.body.type != null) {
    where.push(` t.type = "${req.body.type}"`);
  }
  if (req.body.price != null) {
    where.push(
      ` a.price BETWEEN "${req.body.price.values[0]}" AND "${req.body.price.values[1]}"`
    );
  }
  if (req.body.autonomy != null) {
    where.push(
      ` a.autonomy BETWEEN "${req.body.autonomy.values[0]}" AND "${req.body.autonomy.values[1]}"`
    );
  }
  if (req.body.reloadTime != null) {
    where.push(` auterm.reloadTime = "${req.body.reloadTime}"`);
  }
  let whereQuery = "";
  let andQuery = "";
  if (where.length > 0) {
    whereQuery = whereQuery + ` WHERE` + where[0];
    for (let i = 1; i < where.length; i++) {
      andQuery = andQuery + ` AND` + where[i];
    }
    whereQuery = whereQuery + andQuery;
  }
  connection.query(query + whereQuery, (err, results) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération du filtre`);
    } else {
      res.json(results);
    }
  });
});

//RESULT CARDS
router.post("/auto", (req, res) => {
  let query = `SELECT a.id as "id_auto", a.id_brand, a.id_seat, a.id_type, a.autonomy, a.power, a.auto as "model_auto", a.description, a.date, a.color, a.price, p.url, b.brand, s.seat, t.type, auterm.reloadTime, electerm.longitude, electerm.latitude FROM auto a LEFT JOIN photo p ON a.id = p.id_auto JOIN brand b ON a.id_brand = b.id RIGHT JOIN type t ON a.id_type = t.id RIGHT JOIN seat s ON a.id_seat = s.id LEFT JOIN auto_terminal auterm on a.id=auterm.id_auto LEFT JOIN electricterminals electerm on auterm.id_electricTerminals=electerm.id`;
  let where = [];
  if (req.body.brand != null) {
    where.push(` b.brand = "${req.body.brand}"`);
  }
  if (req.body.seat != null) {
    where.push(` s.seat = "${req.body.seat}"`);
  }
  if (req.body.type != null) {
    where.push(` t.type = "${req.body.type}"`);
  }
  if (req.body.price != null) {
    where.push(
      ` a.price BETWEEN "${req.body.price.values[0]}" AND "${req.body.price.values[1]}"`
    );
    console.log("where", where);
  }
  if (req.body.autonomy != null) {
    where.push(
      ` a.autonomy BETWEEN "${req.body.autonomy.values[0]}" AND "${req.body.autonomy.values[1]}"`
    );
  }
  if (req.body.reloadTime != null) {
    where.push(` auterm.reloadTime = "${req.body.reloadTime}"`);
  }
  let whereQuery = "";
  let andQuery = "";
  if (where.length > 0) {
    whereQuery = whereQuery + ` WHERE` + where[0];
    for (let i = 1; i < where.length; i++) {
      andQuery = andQuery + ` AND` + where[i];
    }
    whereQuery = whereQuery + andQuery;
  }
  console.log("wherquery", whereQuery);
  connection.query(query + whereQuery, (err, results) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération du filtre`);
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
