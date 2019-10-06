const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  video_title: {
    type: String,
    required: true
  },
  course_title: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  option1: {
    type: String,
    required: true
  },
  option2: {
    type: String,
    required: true
  },
  option3: {
    type: String,
    required: true
  },
  option4: {
    type: String,
    required: true
  },
  correct: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("quizzes", QuizSchema);
