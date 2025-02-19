import blockController from "../controllers/blockController.js";
import express from "express";

const router = express.Router();

router.post("/register", blockController.registerBlock);
router.get("/:id", blockController.getBlock);
router.get("/", blockController.getBlocks);
router.delete("/remove/:id", blockController.removeBlock);
router.patch("/edit/:id", blockController.editBlock);

export default router;