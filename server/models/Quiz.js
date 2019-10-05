const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  video_title: String,
  course_title: String,
  question: String,
  option1: String,
  option2: String,
  option3: String,
  option4: String,
  correct: Number
});

module.exports = mongoose.model("quizzes", QuizSchema);
