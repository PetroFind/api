import basinController from "../controllers/basinController.js";
import express from 'express';

const router = express.Router();

router.post("/register", basinController.registerBasin);
router.get("/:id", basinController.getBasin);
router.get("/", basinController.getBasins);
router.delete("/remove/:id", basinController.removeBasin);
router.patch("/edit/:id", basinController.editBasin);

export default router;