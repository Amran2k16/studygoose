const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const VideoSchema = new mongoose.Schema({
  title: String,
  description: String,
  video_url: String,
  course_name: String,
  slug: String
});

module.exports = mongoose.model("videos", VideoSchema);
