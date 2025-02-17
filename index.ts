import express, { Express } from "express";
import mongoose from "mongoose";
import { router as Report } from "./apps/report/route";
import cors from "cors";

const app: Express = express();

// MongoDB Connection
const mongoUri = "mongodb://localhost:27017/alwahdainventory"; // Replace 'your_database_name' with the actual database name you want to use
mongoose.connect(mongoUri);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log(`Connected to MongoDB at ${mongoUri}`);
});

app.use(cors());
app.use(express.json());

app.use("/api/reports", Report);

app.listen(8081, () => {
  console.log("Listening on port 8081...");
});
