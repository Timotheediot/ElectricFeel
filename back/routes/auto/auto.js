// REQUIRE what we need :
const express = require("express");
const connection = require("../../config/config");
const router = express.Router();

// ENTRY POINT :
router.get("/", (req, res) => {
  res.send("tu es sur la route auto").status(200);
});

module.exports = router;
