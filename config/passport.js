const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
// load user model
const User = require("../server/models/User");
const initialisePassport = passport => {
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
};

module.exports = initialisePassport;

// module.exports = function(passport) {
//   passport.use(
//     new LocalStrategy(
//       { usernameField: "username" },
//       (username, password, done) => {
//         // Match user
//         User.findOne({ username: username })
//           .then(user => {
//             if (!user) {
//               return done(null, false, {
//                 message: "That username is not registered"
//               });
//             }

//             // Match the password
//             bcrypt.compare(password, user.password, (err, isMatch) => {
//               if (err) throw err;
//               if (isMatch) {
//                 return done(null, user);
//               } else {
//                 return done(null, false, { message: "Password incorrect" });
//               }
//             });
//           })
//           .catch(err => console.log(err));
//       }
//     )
//   );

//   passport.serializeUser((user, done) => {
//     done(null, user.id);
//   });

//   passport.deserializeUser((id, done) => {
//     User.findById(id, (err, user) => {
//       done(err, user);
//     });
//   });
// };
