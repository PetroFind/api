import pitController from "../controllers/pitController.js";
import express from "express";

const router = express.Router();

router.post("/register", pitController.registerPit);
router.get("/:id", pitController.getPit);
router.get("/", pitController.getPits);
router.delete("/remove/:id", pitController.removePit);
router.patch("/edit/:id", pitController.editPit);

export default router;