import express from "express";
import dotenv from "dotenv";
import path from "path";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
const app = express();
const __dirname = path.resolve();
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
// make ready for deployment
// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "../frontend/dist")));
//     app.get(/.*/, (req, res) => {
//         res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
//     });
// }
app.get("/", (req, res) => {
  res.status(200).json({
    status: "Backend is live 🚀",
    service: "chatup-api",
    timestamp: new Date().toISOString(),
  });
});
app.listen(PORT, () => {
    console.log("server running on port " + PORT);
    connectDB();
});
//# sourceMappingURL=server.js.map