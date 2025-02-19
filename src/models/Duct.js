import mongoose from "mongoose";

const DuctSchema = new mongoose.Schema({
  name: String,
  length: Number,
  capacity: Number,
  status: String,
  latitude: Number,
  longitude: Number,
});

export default mongoose.model("Duct", DuctSchema);
