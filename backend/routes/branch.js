const express = require("express");
const Branch = require("../models/Branch");
const router = express.Router();

router.get("/", async (req, res) => {
  const branches = await Branch.find({});
  return res.status(200).json({ data: branches });
});

module.exports = router;
