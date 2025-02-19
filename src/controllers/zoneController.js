import Zone from "../models/Zone.js";

const registerZone = async (req, res) => {
  const { name, city, depth, type, latitude, longitude } = req.body;

  const existingZone = await Zone.findOne({ name });

  if (existingZone) {
    return res.status(409).send("Zone already exists");
  }

  try {
    const newZone = new Zone({
      name,
      city,
      depth,
      type,
      latitude,
      longitude,
    });

    await newZone.save();
    return res.status(201).send("New zone created");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

const getZone = async (req, res) => {
  const { id } = req.params;
  try {
    const zones = await Zone.findOne({ _id: id });
    return res.send(zones);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const getZones = async (req, res) => {
  try {
    const zones = await Zone.find();
    return res.send(zones);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const removeZone = async (req, res) => {
  try {
    const zoneId = req.params.id;
    const zone = await Zone.findByIdAndDelete(zoneId);

    if (!zone) {
      return res.status(404).send({ message: "Zone not found" });
    }

    return res.status(200).send({ message: "Zone successfully removed", user });
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Error removing zone", error: err.message });
  }
};

const editZone = async (req, res) => {
  try {
    const zoneId = req.params.id;
    const updatedData = req.body;

    const zone = await Zone.findByIdAndUpdate(zoneId, updatedData, {
      new: true,
    });

    if (!zone) {
      return res.status(404).send({ message: "Zone not found" });
    }

    return res.status(200).send({ message: "Zone successfully updated", zone });
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Error editing zone", error: err.message });
  }
};

const zoneController = {
  registerZone,
  getZone,
  getZones,
  removeZone,
  editZone,
};

export default zoneController;
