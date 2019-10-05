const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const User = require("../models/User");

// Login Page
router.get("/login", (req, res) => {
  // User.find().then(users => res.json(users));
  res.send("GET: Login");
});

// Register Page
router.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  const newUser = new User({
    username,
    email,
    password
  });

  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(newUser.password, salt);
  newUser.password = hash;
  // console.log(bcrypt.compareSync("test", hash));
  console.log(newUser.username, newUser.email, newUser.password);

  newUser
    .save()
    .then(newuser => res.json(newuser))
    .catch(err => res.json("Error" + err));
});

// router.post(
//   "/login",
//   passport.authenticate("local", { failureRedirect: "/login" }),
//   (req, res) => {
//     res.redirect("/");
//   }
// );

//use local strategy
// router.post("/login", (req, res, next) => {
//   // res.send("POST: Login");
//   passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/login"
//   })(req, res, next);
//   console.log(failureRedirect);
// });

router.get("/login", (req, res) => {
  if (req.body.username !== "" && req.body.password !== "") {
    User.find({ username: req.body.username }).then(user => {
      if (bcrypt.compareSync(req.body.password, user[0].password)) {
        // Logged in!
        console.log("You logged in!");
        console.log(user);
        return res.redirect("/");
      } else {
        console.log("Password is wrong!");
      }
    });
  } else {
    console.log("Username or password was empty");
  }
});

module.exports = router;
