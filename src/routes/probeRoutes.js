import probeController from "../controllers/probeController.js";
import express from 'express';

const router = express.Router();

router.post("/register", probeController.registerProbe);
router.get("/:id", probeController.getProbe);
router.get("/", probeController.getProbes);
router.delete("/remove/:id", probeController.removeProbe);
router.patch("/edit/:id", probeController.editProbe);


export default router;