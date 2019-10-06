const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

// load user model
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

passport.use(
  new LocalStrategy(function(username, password, done) {
    User.findOne({ username }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect username" });
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    });
  })
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// router.post(
//   "/login",
//   passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/login",
//     failureFlash: true
//   })
// );

// router.post("/login", () => {
//   passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/login",
//     failureFlash: true
//   });
//   console.log("passport is checking");
// });

router.post("/login", (req, res) => {
  if (req.body.username !== "" && req.body.password !== "") {
    User.find({ username: req.body.username })
      .then(user => {
        if (bcrypt.compareSync(req.body.password, user[0].password)) {
          // Logged in!
          console.log("You logged in!");
          // res.json(res.sendStatus(200));
          res.json({ status: "success" });
        } else {
          console.log("Password is wrong!");
          res.json({ status: "Wrong password" });
        }
      })
      .catch(err => {
        console.log("Username does not exist!");
      });
  } else {
    console.log("Username or password was empty");
    res.json({ status: "Username or password was empty" });
  }
});

module.exports = router;
