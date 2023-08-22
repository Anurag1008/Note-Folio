const express = require("express");
const Branch = require("../models/Branch");
const Semester = require("../models/Semester");

const router = express.Router();

router.get("/", async (req, res) => {
  const semesters = await Semester.find({});
  return res.status(200).json({ data: semesters });
});

module.exports = router;
