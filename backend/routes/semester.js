const express = require("express");
const Branch = require("../models/Branch");
const Semester = require("../models/Semester");

const router = express.Router();

// const branches = [
//   "Chemical Engineering",
//   "Mechanical Engineering",
//   "Civil Engineering",
//   "Computer Science & Engg",
//   "Electrical Engineering",
//   "E&C Engineering",
//   "Metallurgical Engineering",
//   "Information technology",
//   "Mathematics",
//   "Physics",
//   "Chemistry",
//   "HSS&M",
//   "Training & Placements",
// ];

router.get("/", async (req, res) => {
  const semesters = await Semester.find({});
  return res.status(200).json({ data: semesters });
});

module.exports = router;
