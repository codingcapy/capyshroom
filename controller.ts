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
                        user: "stephology@gmail.com",
                        pass: process.env.EMAIL_PASSWORD,
                    },
                });

                const mail_configs = {
                    from: "stephology@gmail.com",
                    to: invitee.email?.toString(),
                    subject: "Steph & Paul & Eggbaras",
                    html: `<!DOCTYPE html>
        <html lang="en" >
        <head>
          <meta charset="UTF-8">
          <title>Steph & Paul & Eggbaras</title>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body>
        <!-- partial:index.partial.html -->
        <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
          <div style="margin:50px auto;width:70%;padding:20px 0">
            <div style="border-bottom:1px solid #eee">
              <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">CapyChat</a>
            </div>
            <p style="font-size:1.1em">Hi ${invitee.first_name},</p>
            <p>EGGBARAS</p>
            <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">1234</h2>
            <p>ARE</p>
            <p style="font-size:0.9em;">BARAS,<br />CapyChat</p>
            <hr style="border:none;border-top:1px solid #eee" />
            <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
              <p>TOO</p>
            </div>
          </div>
        </div>
        <!-- partial -->
          
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
