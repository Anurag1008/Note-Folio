const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const branchRoutes = require("./routes/branch");
const semesterRoutes = require("./routes/semester");
const notesRoutes = require("./routes/notes");
const cors = require("cors");
const app = express();

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch(() => {
    console.log("Error connecting to database");
  });

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Working correctly" });
});

app.use("/branches", branchRoutes);
app.use("/branches/:bid", semesterRoutes);
app.use("/notes/:sid", notesRoutes);

app.listen(5000, () => {
  console.log("Server started listening on port 5000");
});
