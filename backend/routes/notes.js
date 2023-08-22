const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).json({
    message:
      "This api will return the notes for a particular semester in a particular branch",
  });
});

module.exports = router;
