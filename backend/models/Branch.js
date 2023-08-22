const mongoose = require("mongoose");

const branchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  semesters: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Semester",
    },
  ],
  subjects: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Subject",
    },
  ],
  img: {
    type: String,
    required: true,
  },
});

const Branch = new mongoose.model("Branch", branchSchema);

module.exports = Branch;
