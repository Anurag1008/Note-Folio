const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  return res
    .status(200)
    .json({
      message: "This api will return the semesters in a particular branch",
    });
});

module.exports = router;
