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

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST"],
    })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./frontend/dist")));
const htmlContent = readFileSync(
    path.join(__dirname, "./frontend/dist/index.html"),
    "utf-8"
);

app.get("/", (req: Request, res: Response) => {
    res.status(200).send(htmlContent);
});

app.use("/api/invitees", invitees);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
