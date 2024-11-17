import express from "express";
import authRouter from "./routes/auth.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json()); // Body parser
app.use("/", authRouter); // Auth Router
app.listen(PORT, () => {
    console.log("server is on");
}); // Listning for requests
