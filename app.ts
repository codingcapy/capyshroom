import express from "express";
import type { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { readFileSync } from "fs";
import path from "path";
import invitees from "./routes/invitees";

dotenv.config();
const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app's build directory
const frontendPath = path.join(__dirname, "./frontend/dist");
app.use(express.static(frontendPath));

// API routes
app.use("/api/invitees", invitees);

// Catch-all route to serve React app for non-API requests
app.get("*", (req: Request, res: Response) => {
    res.status(200).sendFile(path.join(frontendPath, "index.html"));
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
