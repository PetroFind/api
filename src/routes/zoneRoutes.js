import zoneController from '../controllers/zoneController.js';
import express from 'express';

const router = express.Router();

router.post("/register", zoneController.registerZone);
router.get("/:id", zoneController.getZone);
router.get("/", zoneController.getZones);
router.delete("/remove/:id", zoneController.removeZone);
router.patch("/edit/:id", zoneController.editZone);


export default router;