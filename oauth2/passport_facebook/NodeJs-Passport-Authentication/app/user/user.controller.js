import passport from "passport";
import dotenv from "dotenv";
import strategy from "passport-facebook";

import userModel from "../user/user.model";

const FacebookStrategy = strategy.Strategy;

dotenv.config();
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(
  new FacebookStrategy(
    {
      clientID: '218829649768253',//process.env.FACEBOOK_CLIENT_ID,
      clientSecret: '96b96b3eda79175a3c757d19f8782a96',//process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/facebook/callback',//process.env.FACEBOOK_CALLBACK_URL,
      profileFields: ["email", "name"]// need more clarity, may be available fields to read
    },
    function(accessToken, refreshToken, profile, done) {
      console.log("fields available from profile : " , profile._json);
      const { id, first_name, last_name } = profile._json;
      const userData = {
        id,
        firstName: first_name,
        lastName: last_name
      };
      new userModel(userData).save(); // save to mongodb database
      done(null, profile);
    }
  )
);