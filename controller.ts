import type { Request, Response } from "express";
import { db, invitees } from "./connect";

export async function createInvitee(req: Request, res: Response) {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    if (first_name.length > 200) {
        return res.json({
            success: false,
            message: "first name max char limit is 200",
        });
    }
    if (last_name.length > 200) {
        return res.json({
            success: false,
            message: "last name max char limit is 200",
        });
    }
    if (email.length > 255) {
        return res.json({
            success: false,
            message: "email max char limit is 255",
        });
    }
    const now = new Date();
    const timestamp = now.toISOString();
    try {
        await db.insert(invitees).values({
            first_name: first_name,
            last_name: last_name,
            email: email,
            created_at: timestamp,
        });
        res.status(200).json({
            success: true,
            message: "Invitee added successfully!",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Error creating invitee",
        });
    }
}

export async function updateRsvp(req: Request, res: Response) {}

export async function updateDietary(req: Request, res: Response) {}

export async function updateGuests(req: Request, res: Response) {}

export async function updateSubmitted(req: Request, res: Response) {}

export async function sendFirstEmail() {}

export async function sendSecondEmail() {}

export async function sendThirdEmail() {}

export async function sendFourthEmail() {}
