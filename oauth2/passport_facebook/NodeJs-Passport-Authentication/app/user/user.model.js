import mongoose from "mongoose";

// fields you can read from facebook
// check what are the fields available from fb profile
// mention these fields here, or handle missing fields by giving default name. etc
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  }
  // email: {
  //   type: String,
  //   required: true
  // }
});

const userModel = mongoose.model("User", userSchema);

export default userModel;