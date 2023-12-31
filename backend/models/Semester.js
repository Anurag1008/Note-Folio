const mongoose = require("mongoose");

const semesterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  branch: {
    type: mongoose.Types.ObjectId,
    ref: "Branch",
  },
  subjects: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Subject",
    },
  ],
  imgUrl: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Semester = new mongoose.model("Semester", semesterSchema);

module.exports = Semester;
