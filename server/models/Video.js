const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const VideoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  video_url: {
    type: String,
    required: true
  },
  course_name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("videos", VideoSchema);
