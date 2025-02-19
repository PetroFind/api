import mongoose from "mongoose";

const ZoneSchema = new mongoose.Schema({
  name: String,
  city: String,
  depth: Number,
  type: String,
  latitude: Number,
  longitude: Number,
});

export default mongoose.model("Zone", ZoneSchema);
