import express from "express";
import passport from "passport";
import userController from "./user.controller";


const userRouter = express.Router();


// entry point : 
// goto browser url : run localhost:3000/auth/facebook 
userRouter.get("/auth/facebook", passport.authenticate("facebook"));

// on auth completion 
// user will be taken to success or failure page
userRouter.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/fail"
  })
);

// handle fail
userRouter.get("/fail", (req, res) => {
  res.send("Failed attempt");
});

// handle success
userRouter.get("/", (req, res) => {
  res.send("Success");
});

export default userRouter;