import User from "../models/User.js";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
  const { name, lastname, date, role, phone, city, email, password } = req.body;
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(409).send("User already exists");
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      lastname,
      date,
      role,
      phone,
      city,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    return res.status(201).send("New user created");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send("User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send("Invalid password");
    }

    res.status(200).send("Successful login");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findOne({ _id: id });

    return res.send(user);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.send(users);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const removeUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    return res.status(200).send({ message: "User successfully removed", user });
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Error removing user", error: err.message });
  }
};

const editUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedData = req.body;

    const user = await User.findByIdAndUpdate(userId, updatedData, {
      new: true,
    });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    return res.status(200).send({ message: "User successfully updated", user });
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Error editing user", error: err.message });
  }
};

const userController = {
  registerUser,
  loginUser,
  getUser,
  getUsers,
  removeUser,
  editUser,
};

export default userController;
