import mongoose from "mongoose";

const PitSchema = new mongoose.Schema({
  name: String,
  type: String,
  status: String,
  depth: Number,
  latitude: Number,
  longitude: Number,
});

export default mongoose.model("Pit", PitSchema);
