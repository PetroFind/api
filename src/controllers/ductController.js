import Duct from "../models/Duct.js";

const registerDuct = async (req, res) => {
  const { name, length, capacity, status, latitude, longitude } = req.body;

  const existingDuct = await Duct.findOne({ name });

  if (existingDuct) {
    return res.status(409).send("Duct already exists");
  }

  try {
    const newDuct = new Duct({
      name,
      length,
      capacity,
      status,
      latitude,
      longitude,
    });

    await newDuct.save();
    return res.status(201).send("New duct created");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

const getDuct = async (req, res) => {
  const { id } = req.params;
  try {
    const ducts = await Duct.findOne({_id: id});
    return res.send(ducts);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const getDucts = async (req, res) => {
  try {
    const ducts = await Duct.find();
    return res.send(ducts);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const removeDuct = async (req, res) => {
  try {
    const ductId = req.params.id;
    const duct = await Duct.findByIdAndDelete(ductId);

    if (!duct) {
      return res.status(404).send({ message: "Duct not found" });
    }

    return res.status(200).send({ message: "Duct successfully removed", user });
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Error removing duct", error: err.message });
  }
};

const editDuct = async (req, res) => {
  try {
    const ductId = req.params.id;
    const updatedData = req.body;

    const duct = await duct.findByIdAndUpdate(ductId, updatedData, {
      new: true,
    });

    if (!duct) {
      return res.status(404).send({ message: "Duct not found" });
    }

    return res.status(200).send({ message: "Duct successfully updated", duct });
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Error editing duct", error: err.message });
  }
};

const ductController = {
  registerDuct,
  getDuct,
  getDucts,
  removeDuct,
  editDuct,
};

export default ductController;
