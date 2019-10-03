const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  slug: String
  // videos: [ObjectId]
});

module.exports = mongoose.model("courses", CourseSchema);
