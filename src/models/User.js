import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  lastName: String,
  date: Date,
  role: String,
  phone: String,
  city: String,
  email: String,
  password: String,
});

export default mongoose.model("User", UserSchema);
