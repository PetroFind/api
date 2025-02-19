import express from "express";
import corsMiddleware from "./middleware/cors.js";
import userRoutes from "./routes/userRoutes.js";
import basinRoutes from "./routes/basinRoutes.js";
import zoneRoutes from "./routes/zoneRoutes.js";
import probeRoutes from "./routes/probeRoutes.js";
import blockRoutes from "./routes/blockRoutes.js";
import ductRoutes from "./routes/ductRoutes.js";
import pitRoutes from "./routes/pitRoutes.js";
import connectDB from "./config/db.js";

const app = express();
const port = 8000;

connectDB();

app.use(corsMiddleware);

app.use(express.json());

app.use("/users", userRoutes);
app.use("/basin", basinRoutes);
app.use("/zone", zoneRoutes);
app.use("/duct", ductRoutes);
app.use("/probe", probeRoutes);
app.use("/block", blockRoutes);
app.use("/pit", pitRoutes);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
