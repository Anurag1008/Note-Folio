const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  return res
    .status(200)
    .json({ message: "This api will return the branches in college" });
});

module.exports = router;
