import type { Request, Response } from "express";
import { db, invitees } from "./connect";
import { eq } from "drizzle-orm";
import nodemailer from "nodemailer";

export async function createInvitee(req: Request, res: Response) {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const dietary = "none";
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
        const [InsertedNewInvitee] = await db
            .insert(invitees)
            .values({
                first_name: first_name,
                last_name: last_name,
                email: email,
                dietary: dietary,
                created_at: timestamp,
            })
            .returning();

        res.status(200).json({
            success: true,
            message: "Invitee added successfully!",
            content: InsertedNewInvitee,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Error creating invitee",
        });
    }
}

export async function updateRsvp(req: Request, res: Response) {
    const invitee_id = Number.parseInt(req.body.invitee_id);
    const rsvp = req.body.rsvp;
    if (rsvp === "true") {
        try {
            const [InsertedNewInvitee] = await db
                .update(invitees)
                .set({ rsvp: true })
                .where(eq(invitees.invitee_id, invitee_id))
                .returning();
            res.status(200).json({
                success: true,
                content: InsertedNewInvitee,
            });
        } catch (err) {
            console.error("Error updating rsvp:", err);
            res.status(500).json({
                success: false,
                message: "Error updating rsvp",
            });
        }
    } else {
        try {
            await db
                .update(invitees)
                .set({ rsvp: false })
                .where(eq(invitees.invitee_id, invitee_id));
            res.status(200).json({ success: true });
        } catch (err) {
            console.error("Error updating rsvp:", err);
            res.status(500).json({
                success: false,
                message: "Error updating rsvp",
            });
        }
    }
}

export async function updateDietary(req: Request, res: Response) {
    const invitee_id = Number.parseInt(req.body.invitee_id);
    const dietary = req.body.dietary;
    try {
        const [InsertedNewInvitee] = await db
            .update(invitees)
            .set({ dietary: dietary })
            .where(eq(invitees.invitee_id, invitee_id))
            .returning();
        res.status(200).json({ success: true, content: InsertedNewInvitee });
    } catch (err) {
        console.error("Error updating dietary:", err);
        res.status(500).json({
            success: false,
            message: "Error updating dietary",
        });
    }
}

export async function updateGuests(req: Request, res: Response) {
    const invitee_id = Number.parseInt(req.body.invitee_id);
    const guests = Number.parseInt(req.body.guests);
    try {
        const [InsertedNewInvitee] = await db
            .update(invitees)
            .set({ guests: guests })
            .where(eq(invitees.invitee_id, invitee_id))
            .returning();
        res.status(200).json({ success: true, content: InsertedNewInvitee });
    } catch (err) {
        console.error("Error updating guests:", err);
        res.status(500).json({
            success: false,
            message: "Error updating guests",
        });
    }
}

export async function updateSubmitted(req: Request, res: Response) {
    const invitee_id = Number.parseInt(req.body.invitee_id);
    try {
        const [InsertedNewInvitee] = await db
            .update(invitees)
            .set({ submitted: true })
            .where(eq(invitees.invitee_id, invitee_id))
            .returning();
        res.status(200).json({ success: true, content: InsertedNewInvitee });
    } catch (err) {
        console.error("Error updating submitted:", err);
        res.status(500).json({
            success: false,
            message: "Error updating submitted",
        });
    }
}

export async function sendFirstEmail(req: Request, res: Response) {
    try {
        const confirmedInvitees = await db
            .select()
            .from(invitees)
            .where(eq(invitees.submitted, true));
        confirmedInvitees.forEach((invitee) => {
            return new Promise((resolve, reject) => {
                var transporter = nodemailer.createTransport({
                    service: "gmail",
                    host: "smtp.gmail.com",
                    port: 465,
                    secure: true,
                    auth: {
                        user: "spkim0921@gmail.com",
                        pass: process.env.EMAIL_PASSWORD,
                    },
                });

                const mail_configs = {
                    from: "spkim0921@gmail.com",
                    to: invitee.email?.toString(),
                    subject: "Steph & Paul & Eggbaras",
                    html: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Steph & Paul & Eggbaras</title>
</head>

<body style="background-color: #FFF7EE; margin: 0; padding: 0; font-family: Arial, sans-serif; text-align: center;">

    <div style="max-width: 500px; margin: 20px auto; background-color: #FFF7EE; padding: 16px; border-radius: 5000px;">
        <div style="margin: 0 auto; border: 2px solid #637CC6; padding: 16px; border-radius: 5000px;">
            <div
                style="margin: 0 auto; border: 1px solid #637CC6; padding: 40px 80px; border-radius: 5000px; color: #637CC6; text-align: center;">
                <img src="https://capyshroom-production.up.railway.app/wedding_img.svg" alt=""
                    style="width: 200px; display: block; margin: 0 auto;">
                <div style="padding-top: 20px; font-size: 18px; font-weight: bold;">YOU ARE INVITED</div>
                <div style="font-size: 16px;">to share in the wedding of</div>
                <img src="https://capyshroom-production.up.railway.app/image_title.svg" alt=""
                    style="width: 300px; padding: 40px 0; display: block; margin: 0 auto;">
                <div style="font-size: 16px;">MONDAY, SEPTEMBER 20, 2025</div>
                <div style="padding-bottom: 20px; font-size: 16px;">at two in the afternoon</div>
                <div style="font-size: 16px; font-weight: bold;">ST. AUGUSTINE BY THE SEA</div>
                <div style="font-size: 16px;">Honolulu, Hawaii, USA</div>
                <div style="padding: 20px 0; font-size: 16px; font-weight: bold;">reception and dinner</div>
                <div style="font-size: 16px; font-weight: bold;">MOANA SURFRIDER</div>
                <div style="font-size: 16px;">Honolulu, Hawaii, USA</div>
                <div
                    style="background-color: #637CC6; color: #FFF7EE; padding: 10px; margin: 20px auto; border-radius: 8px; width: 200px; text-align: center; font-weight: bold;">
                    RSVP
                </div>
                <div style="font-size: 16px; font-weight: bold;">More info on our website</div>
            </div>
        </div>
    </div>

</body>

</html>`,
                };
                transporter.sendMail(mail_configs, function (error, info) {
                    if (error) {
                        console.log(error);
                        return reject({ message: `An error has occured` });
                    }
                    return resolve({ message: "Email sent succesfuly" });
                });
            });
        });
        res.status(200).json({ success: true });
    } catch (err) {
        console.error("Error getting inviteees:", err);
        res.status(500).json({
            success: false,
            message: "Error getting inviteees",
        });
    }
}

export async function sendSecondEmail() {}

export async function sendThirdEmail() {}

export async function sendFourthEmail() {}
