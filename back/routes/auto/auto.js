// REQUIRE what we need :
const express = require("express");
const connection = require("../../config/config");
const router = express.Router();

// ENTRY POINT :
router.get("/", (req, res) => {
  connection.query(
    `SELECT DISTINCT a.id as "id_auto", a.id_brand, a.id_type, a.autonomy, a.power, a.auto as "model_auto", a.description, a.date, a.color, a.price, p.url, b.brand, t.type, auterm.reloadTime, electerm.longitude, electerm.latitude FROM auto a LEFT JOIN photo p ON a.id = p.id_auto JOIN brand b ON a.id_brand = b.id RIGHT JOIN type t ON a.id_type = t.id LEFT JOIN auto_terminal auterm on a.id=auterm.id_auto LEFT JOIN electricterminals electerm on auterm.id_electricTerminals=electerm.id ORDER BY a.auto`,
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

router.get("/autoList", (req, res) => {
  connection.query(
    `SELECT DISTINCT brand FROM auto JOIN brand b ON auto.id_brand = b.id ORDER BY brand `,
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

router.post("/filter", (req, res) => {
  let query = `SELECT * from auto `;
  console.log(req.body);

  if (req.body.brand != null) {
    query =
      query +
      `JOIN brand b ON auto.id_brand = b.id WHERE brand=${req.body.brand} ORDER BY brand`;
  }
  // if (req.body.seat != null) {
  //   query =
  //     query +
  //     `WHERE seat = "${req.body.seat}" INNER JOIN seat s ON auto.id_seat= s.id`;
  // }
  // if (req.body.type != null) {
  //   query =
  //     query +
  //     `WHERE type = "${req.body.type}" INNER JOIN type t ON auto.id_type=t.id`;
  // }
  // if (req.body.price != null) {
  //   query =
  //     query +
  //     `WHERE price BETWEEN "${req.body.price[0]}" AND "${req.body.price[1]}"`;
  // }
  // if (req.body.autonomy != null) {
  //   query =
  //     query +
  //     `WHERE autonomy BETWEEN "${req.body.autonomy[0]}" AND "${req.body.autonomy[1]}"`;
  // }
  // if (req.body.reloadTime != null) {
  //   query =
  //     query +
  //     `WHERE reloadTime = ${req.body.reloadTime} LEFT JOIN auto_terminal auterm ON auto.id=auterm.id_auto`;
  // }

  console.log(query);
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération du filtre`);
    } else {
      res.json(results);
    }
  });
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

router.get("/price", (req, res) => {
  connection.query(
    `SELECT *  FROM auto WHERE price BETWEEN ${req[0]} AND ${req[1]}`,
    (err, results) => {
      if (err) {
        res.status(500).send(`Erreur lors de la récupération des prices`);
      } else {
        res.json(results);
      }
    }
  );
});

router.get("/autonomy", (req, res) => {
  connection.query(`SELECT  DISTINCT * FROM auto_terminal`, (err, results) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération des autonomies`);
    } else {
      res.json(results);
    }
  });
});

router.get("/seat", (req, res) => {
  connection.query(`SELECT seat from seat`, (err, results) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération des places`);
    } else {
      res.json(results);
    }
  });
});

router.get("/type", (req, res) => {
  connection.query(`SELECT DISTINCT * FROM type`, (err, results) => {
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
