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

// router.get("/autoList", (req, res) => {
//   connection.query(
//     `SELECT DISTINCT brand FROM auto JOIN brand b ON auto.id_brand = b.id ORDER BY brand `,
//     (err, results) => {
//       if (err) {
//         console.log(err);
//         res.status(500).send(`Error auto list`);
//       } else {
//         res.json(results);
//       }
//     }
//   );
// });

// router.post("/filter", (req, res) => {
//   let query = `SELECT * from auto `;
//   console.log(req.body);

//   if (req.body.brand != null) {
//     query =
//       query +
//       `JOIN brand b ON auto.id_brand = b.id WHERE brand=${req.body.brand} ORDER BY brand`;
//   }
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

//   console.log(query);
//   connection.query(query, (err, results) => {
//     if (err) {
//       res.status(500).send(`Erreur lors de la récupération du filtre`);
//     } else {
//       res.json(results);
//     }
//   });
// });

router.post("/filter", (req, res) => {
  let query = `SELECT * from auto`;
  let joinQuery = ``;
  let where = [];
  if (req.body.brand != null) {
    joinQuery = joinQuery + ` LEFT JOIN brand b ON auto.id_brand = b.id`;
    where.push(` b.brand = "${req.body.brand}"`);
  }
  if (req.body.seat != null) {
    joinQuery = joinQuery + ` LEFT JOIN seat s ON auto.id_seat = s.id`;
    where.push(` s.seat = "${req.body.seat}"`);
  }
  if (req.body.type != null) {
    joinQuery = joinQuery + ` LEFT JOIN type t ON auto.id_type = t.id`;
    where.push(` t.type = "${req.body.type}"`);
  }
  if (req.body.price != null) {
    where = where.push(
      ` price BETWEEN "${req.body.price[0]}" AND "${req.body.price[1]}"`
    );
  }
  if (req.body.autonomy != null) {
    where.push(
      ` autonomy BETWEEN "${req.body.autonomy[0]}" AND "${req.body.autonomy[1]}"`
    );
  }
  if (req.body.reloadTime != null) {
    joinQuery =
      joinQuery + ` LEFT JOIN auto_terminal at ON auto.id = at.id_auto`;
    where.push(` at.reloadTime = "${req.body.seat}"`);
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
  connection.query(query + joinQuery + whereQuery, (err, results) => {
    if (err) {
      res.status(500).send(`Erreur lors de la récupération du filtre`);
    } else {
      res.json(results);
    }
  });
});

router.get("/brand", (req, res) => {
  connection.query(
    `SELECT * from auto  LEFT JOIN brand b ON auto.id_brand = b.id`,
    (err, results) => {
      if (err) {
        res.status(500).send(`Erreur lors de la récupération des marques`);
      } else {
        res.json(results);
      }
    }
  );
});

// router.get("/price", (req, res) => {
//   connection.query(
//     `SELECT *  FROM auto WHERE price BETWEEN ${req[0]} AND ${req[1]}`,
//     (err, results) => {
//       if (err) {
//         res.status(500).send(`Erreur lors de la récupération des prices`);
//       } else {
//         res.json(results);
//       }
//     }
//   );
// });

// router.get("/autonomy", (req, res) => {
//   connection.query(`SELECT  DISTINCT * FROM auto_terminal`, (err, results) => {
//     if (err) {
//       res.status(500).send(`Erreur lors de la récupération des autonomies`);
//     } else {
//       res.json(results);
//     }
//   });
// });

// router.get("/seat", (req, res) => {
//   connection.query(`SELECT seat from seat`, (err, results) => {
//     if (err) {
//       res.status(500).send(`Erreur lors de la récupération des places`);
//     } else {
//       res.json(results);
//     }
//   });
// });

// router.get("/type", (req, res) => {
//   connection.query(`SELECT DISTINCT * FROM type`, (err, results) => {
//     if (err) {
//       res.status(500).send(`Erreur lors de la récupération des places`);
//     } else {
//       res.json(results);
//     }
//   });
// });

// router.get("/price", (req, res) => {
//   connection.query(`SELECT * FROM auto WHERE price BETWEEN`, (err, results) => {
//     if (err) {
//       res.status(500).send(`Erreur lors de la récupération des prix des autos`);
//     } else {
//       res.json(results);
//     }
//   });
// });

module.exports = router;
