const express = require("express");
const rotuer = express.Router();

//login page
router.get("/login", (req, res) => res.send("login"));

router.get("/register", (req, res) => res.send("register"));

router.post("/register", (req, res) => {
  console.log(req.body);
  res.send("hello");
});

module.exports = router;
