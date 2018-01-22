// Dependencies
import passport from "passport";
import User from "../models/user";

const LocalStrategy = require("passport-local").Strategy;

passport.serializeUser((user, done) => {
  console.log("serialize");
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    console.log("deserialize");
    done(err, user);
  });
});

passport.use(
  new LocalStrategy(
    { usernameField: "username" },
    (username, password, done) => {
      User.findOne({ username }, (err, user) => {
        !user
          ? done(null, false, { message: `El username ${user} no esta registrado` })
          : user.comparePassword(password, (err, sonIguales) => {
            (sonIguales)
              ? done(null, user)
              : done(null, false, { message: "la contraseña no es valida" });
          });
      });
    }
  )
);

exports.estaAutenticado = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send("tienes que hacer login para acceder a este recurso");
};
