import mongoose from "mongoose";

const BlockSchema = new mongoose.Schema({
  name: String,
  city: String,
  area: Number,
  status: String,
  latitude: Number,
  longitude: Number,
});

export default mongoose.model("Block", BlockSchema);
