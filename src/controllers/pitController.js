import Pit from "../models/pit.js";

const registerPit = async (req, res) => {
  const { name, type } = req.body;

  const existingPit = await Pit.findOne({ name });

  if (existingPit) {
    return res.status(409).send("Pit already exists");
  }

  try {
    const newPit = new Pit({
      name,
      type,
    });

    await newPit.save();
    return res.status(201).send("New pit created");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

const getPit = async (req, res) => {
  try {
    const pits = await Pit.findOne({_id: id});
    return res.send(pits);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const getPits = async (req, res) => {
  try {
    const pits = await Pit.find();
    return res.send(pits);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const removePit = async (req, res) => {
  try {
    const pitId = req.params.id;
    const pit = await Pit.findByIdAndDelete(pitId);

    if (!pit) {
      return res.status(404).send({ message: "Pit not found" });
    }

    return res
      .status(200)
      .send({ message: "Pit successfully removed", user });
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Error removing pit", error: err.message });
  }
};

const editPit = async (req, res) => {
  try {
    const pitId = req.params.id;
    const updatedData = req.body;

    const pit = await pit.findByIdAndUpdate(pitId, updatedData, {
      new: true,
    });

    if (!pit) {
      return res.status(404).send({ message: "Pit not found" });
    }

    return res
      .status(200)
      .send({ message: "Pit successfully updated", pit });
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Error editing pit", error: err.message });
  }
};

const pitController = {
  registerPit,
  getPit,
  getPits,
  removePit,
  editPit,
};

export default pitController;
