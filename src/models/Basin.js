import mongoose from "mongoose";

const BasinSchema = new mongoose.Schema({
  name: String,
  city: String,
  dailyVolume: Number,
  provenReserves: Number,
  wellsDrilled: Number,
  oilType: String,
  viscosity: String,
  productionCost: Number,
});

export default mongoose.model("Basin", BasinSchema);
