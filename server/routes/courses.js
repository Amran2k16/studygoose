const express = require("express");
const router = express.Router();
const Course = require("../models/Course");
const Video = require("../models/Video");

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
