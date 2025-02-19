import mongoose from "mongoose";

const ProbeSchema = new mongoose.Schema({
  name: String,
  type: String,
  status: String,
  depth: Number,
  latitude: Number,
  longitude: Number,
});

export default mongoose.model("Probe", ProbeSchema);
