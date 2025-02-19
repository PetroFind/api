import Probe from "../models/Probe.js";

const registerProbe = async (req, res) => {
  const { name, type, status, depth, latitude, longitude } = req.body;

  const existingProbe = await Probe.findOne({ name });

  if (existingProbe) {
    return res.status(409).send("Probe already exists");
  }

  try {
    const newProbe = new Probe({
      name,
      type,
      status,
      depth,
      latitude,
      longitude,
    });

    await newProbe.save();
    return res.status(201).send("New probe created");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

const getProbe = async (req, res) => {
  const { id } = req.params;
  try {
    const probes = await Probe.findOne({_id: id});
    return res.send(probes);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const getProbes = async (req, res) => {
  try {
    const probes = await Probe.find();
    return res.send(probes);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const removeProbe = async (req, res) => {
  try {
    const probeId = req.params.id;
    const probe = await Probe.findByIdAndDelete(probeId);

    if (!probe) {
      return res.status(404).send({ message: "Probe not found" });
    }

    return res
      .status(200)
      .send({ message: "Probe successfully removed", user });
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Error removing probe", error: err.message });
  }
};

const editProbe = async (req, res) => {
  try {
    const probeId = req.params.id;
    const updatedData = req.body;

    const probe = await probe.findByIdAndUpdate(probeId, updatedData, {
      new: true,
    });

    if (!probe) {
      return res.status(404).send({ message: "Probe not found" });
    }

    return res
      .status(200)
      .send({ message: "Probe successfully updated", probe });
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Error editing probe", error: err.message });
  }
};

const probeController = {
  registerProbe,
  getProbe,
  getProbes,
  removeProbe,
  editProbe,
};

export default probeController;
