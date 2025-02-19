import Block from "../models/Block.js";

const registerBlock = async (req, res) => {
  const { name, city, area, status, latitude, longitude } = req.body;

  const existingBlock = await Block.findOne({ name });

  if (existingBlock) {
    return res.status(409).send("Block already exists");
  }

  try {
    const newBlock = new Block({
      name,
      city,
      area,
      status,
      latitude,
      longitude,
    });

    await newBlock.save();
    return res.status(201).send("New block created");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Internal Server Error");
  }
};

const getBlock = async (req, res) => {
  const { id } = req.params;
  try {
    const block = await Block.findOne( {_id: id});
    return res.send(block);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const getBlocks = async (req, res) => {
  try {
    const blocks = await Block.find();
    return res.send(blocks);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const removeBlock = async (req, res) => {
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

const editBlock = async (req, res) => {
  try {
    const blockId = req.params.id;
    const updatedData = req.body;

    const block = await basin.findByIdAndUpdate(blockId, updatedData, {
      new: true,
    });

    if (!block) {
      return res.status(404).send({ message: "Block not found" });
    }

    return res
      .status(200)
      .send({ message: "Block successfully updated", block });
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Error editing block", error: err.message });
  }
};

const blockController = {
  registerBlock,
  getBlock,
  getBlocks,
  removeBlock,
  editBlock,
};

export default blockController;
