import Basin from "../models/Basin.js";

const registerBasin = async (req, res) => {
  const {
    name,
    city,
    dailyVolume,
    provenReserves,
    wellsDrilled,
    oilType,
    viscosity,
    productionCost,
  } = req.body;

  const existingBasin = await Basin.findOne({ name });

  if (existingBasin) {
    return res.status(409).send("Basin already exists");
  }

  try {
    const newBasin = new Basin({
      name,
      city,
      dailyVolume,
      provenReserves,
      wellsDrilled,
      oilType,
      viscosity,
      productionCost,
    });

    await newBasin.save();
    return res.status(201).send("New basin created");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

const getBasin = async (req, res) => {
  const { id } = req.params;
  try {
    const basin = await Basin.findOne({ _id: id });
    return res.send(basin);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const getBasins = async (req, res) => {
  try {
    const basins = await Basin.find();
    return res.send(basins);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const removeBasin = async (req, res) => {
  try {
    const basinId = req.params.id;
    const basin = await Basin.findByIdAndDelete(basinId);

    if (!basin) {
      return res.status(404).send({ message: "Basin not found" });
    }

    return res
      .status(200)
      .send({ message: "Basin successfully removed", user });
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Error removing basin", error: err.message });
  }
};

const editBasin = async (req, res) => {
  try {
    const basinId = req.params.id;
    const updatedData = req.body;

    const basin = await basin.findByIdAndUpdate(basinId, updatedData, {
      new: true,
    });

    if (!basin) {
      return res.status(404).send({ message: "Basin not found" });
    }

    return res
      .status(200)
      .send({ message: "Basin successfully updated", basin });
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Error editing basin", error: err.message });
  }
};

const basinController = {
  registerBasin,
  getBasin,
  getBasins,
  removeBasin,
  editBasin,
};

export default basinController;
