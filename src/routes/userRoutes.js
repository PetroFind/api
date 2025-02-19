import userController from "../controllers/userController.js";
import express from "express";

const router = express.Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/:id", userController.getUser);
router.get("/", userController.getUsers);
router.delete("/remove/:id", userController.removeUser);
router.patch("/edit/:id", userController.editUser);

export default router;
