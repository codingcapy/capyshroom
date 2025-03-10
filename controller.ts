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
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>
    <!-- partial:index.partial.html -->
    <div class="flex flex-col mx-auto bg-[#FFF7EE] max-w-[500px] p-2 mt-5 rounded-full">
        <div class="mx-auto border-2 border-[#637CC6] p-2 rounded-full">
            <div class="mx-auto border border-[#637CC6] pt-10 pb-20 px-20 rounded-full text-[#637CC6] text-center">
                <img src="https://capyshroom-production.up.railway.app/wedding_img.svg" alt=""
                    class="w-[200px] mx-auto">
                <div class="pt-5">YOU ARE INVITED</div>
                <div>to share in the wedding of</div>
                <img src="https://capyshroom-production.up.railway.app/image_title.svg" alt="" class="w-[300px] py-10">
                <div>MONDAY, SEPTEMBER 20, 2025</div>
                <div class="pb-5">at two in the afternoon</div>
                <div>ST. AUGUSTINE BY THE SEA</div>
                <div>Honolulu, Hawaii, USA</div>
                <div class="py-5">reception and dinner</div>
                <div>MOANA SURFRIDER</div>
                <div>Honolulu, Hawaii, USA</div>
                <div class="bg-[#637CC6] text-[#FFF7EE] py-2 my-5 rounded-lg w-[200px] mx-auto">RSVP</div>
                <div class="font-bold">More info on our website</div>
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
