import express from "express";
import { createGuests } from "../controller";

const guests = express.Router();

//@ts-ignore
guests.route("/").post(createGuests);

export default guests;
