const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({});

const Subject = new mongoose.model("Branch", subjectSchema);

module.exports = Subject;
