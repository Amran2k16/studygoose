const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  }
  // videos: [ObjectId]
});

module.exports = mongoose.model("courses", CourseSchema);
