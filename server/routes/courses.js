const express = require("express");
const router = express.Router();
const Course = require("../models/Course");
const Video = require("../models/Video");
const Quiz = require("../models/Quiz");
function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

function convertToEmbed(Text) {
  return Text.toLowerCase().replace("watch?v=", "embed/");
}

// @@@ api/courses
router.get("/", (req, res) =>
  Course.find()
    .sort({ title: 1 })
    .then(courses => res.json(courses))
);

router.post("/", (req, res) => {
  const newCourse = new Course({
    title: req.body.title,
    description: req.body.description,
    slug: convertToSlug(req.body.title)
    // videos: req.body.videos
  });

  newCourse.save().then(courses => res.json(courses));
});

// // @@@ api/courses/all-videos
router.get("/all-videos", (req, res) => {
  Video.find()
    .sort({ title: 1 })
    .then(videos => res.json(videos));
});

// @@@ api/courses/coursename
router.get("/:coursename", (req, res) => {
  Video.find({ course_name: req.params.coursename })
    .sort({ title: 1 })
    .then(videos => res.json(videos));
});

// Add one new video
router.post("/:coursename", (req, res) => {
  const newVideo = new Video({
    title: req.body.title,
    description: req.body.description,
    video_url: convertToEmbed(req.body.video_url),
    course_name: req.params.coursename,
    slug: convertToSlug(req.body.title)
  });

  newVideo.save().then(videos => res.json(videos));
});

router.get("/:coursename/:videoname/quiz", (req, res) => {
  Quiz.find({
    course_title: req.params.coursename,
    video_title: req.params.videoname
  })
    .then(quizzes => res.json(quizzes))
    .catch(err => console.log(err));
});

router.post("/:coursename/:videoname/quiz", (req, res) => {
  const newQuiz = new Quiz({
    course_title: req.params.coursename,
    video_title: req.params.videoname,
    question: req.body.question,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    correct: req.body.correct
  });

  newQuiz
    .save()
    .then(quiz => {
      res.json(quiz);
      console.log("Successfully added a new quiz");
    })
    .catch(err => console.log(err));
});

// get info for one specific video
// // @@@ api/courses/coursename/videoname
router.get("/:coursename/:videoname", (req, res) => {
  // res.send(req.params.coursename + req.params.videoname);
  Video.find({
    course_name: req.params.coursename,
    slug: req.params.videoname
  })
    .sort({ title: 1 })
    .then(videos => res.json(videos));
});

module.exports = router;
