const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.write("Server is up and Runnning!!");
  res.end();
});

module.exports = router;
