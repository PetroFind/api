import ductController from "../controllers/ductController.js";
import express from "express";

const router = express.Router();

router.post("/register", ductController.registerDuct);
router.get("/:id", ductController.getDuct);
router.get("/", ductController.getDucts);
router.delete("/remove/:id", ductController.removeDuct);
router.patch("/edit/:id", ductController.editDuct);

export default router;
