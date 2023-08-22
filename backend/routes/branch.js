const express = require("express");
const Branch = require("../models/Branch");
const router = express.Router();
const Semester = require("../models/Semester");

router.get("/", async (req, res) => {
  const branches = await Branch.find({});
  return res.status(200).json({ data: branches });
});

router.get("/:bid", async (req, res) => {
  const bid = req.params.bid;
  const semesters = await Semester.find({ branch: bid });
  return res.status(200).json({ data: semesters });
});

module.exports = router;
