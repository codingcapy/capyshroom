import type { Request, Response } from "express";
import { db, guests, invitees } from "./connect";
import { and, eq } from "drizzle-orm";
import nodemailer from "nodemailer";

const sentEmails = [
    "stephology@gmail.com",
    "spkim0921@gmail.com",
    "paulkim89.dev@gmail.com",
    "stepandpail@gmail.com",
    "yinanlinda@gmail.com",
    "ryanlmwong@gmail.com",
    "elainetehart@gmail.com",
    "cherryxoa@gmail.com",
    "derickgroves@gmail.com",
    "Jesus.a.tostado@gmail.com",
    "fisherdana@ymail.com",
    "astha.dalakoti@gmail.com",
    "skao0421@gmail.com",
    "binybani@gmail.com",
    "jessie.kim117@gmail.com",
    "lsn9652@gmail.com",
    "zachflentgewong@gmail.com",
    "kyoung.ho446@gmail.com",
    "byunsaboos@gmail.com",
    "rootingpoison@gmail.com",
    "nth.ngai@gmail.com",
    "j.ryan.louie@gmail.com",
    "john@bouissou.ch",
    "jika0584@gmail.com",
    "isabelle@bouissou.ch",
    "rabi.sun91@gmail.com ",
    "Dongjunshin91@gmail.com",
    "cecilekim07@gmail.com",
    "apaffaro2@gmail.com",
    "sion.lee.arts@gmail.com",
    "kinsonyung@gmail.com",
    "midorikaga@gmail.com",
    "katherine.mason@gmail.com",
    "yinniewong@hotmail.com",
    "kithlin@gmail.com",
    "leungwynne@gmail.com",
    "tyronne.salto@gmail.com",
    "tinsel_queen@hotmail.com",
];

const emails = ["ujon94@gmail.com"];

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

export async function createGuests(req: Request, res: Response) {
    const invitee_id = Number.parseInt(req.body.invitee_id);
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const dietary = req.body.dietary;
    if (firstname.length > 200) {
        return res.json({
            success: false,
            message: "first name max char limit is 200",
        });
    }
    if (lastname.length > 200) {
        return res.json({
            success: false,
            message: "last name max char limit is 200",
        });
    }
    const now = new Date();
    const timestamp = now.toISOString();
    try {
        const existingGuest = await db
            .select()
            .from(guests)
            .where(
                and(
                    eq(guests.firstname, firstname),
                    eq(guests.lastname, lastname),
                    eq(guests.invitee_id, invitee_id)
                )
            )
            .limit(1);
        if (existingGuest.length > 0) {
            return res.json({
                success: false,
                message: "This guest has already been added.",
            });
        }
        const [InsertedNewGuest] = await db
            .insert(guests)
            .values({
                invitee_id,
                firstname,
                lastname,
                dietary: dietary,
                created_at: timestamp,
            })
            .returning();

        res.status(200).json({
            success: true,
            message: "Guest added successfully!",
            content: InsertedNewGuest,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Error creating guest",
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
        emails.forEach((email) => {
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
                    from: '"Steph & Paul" <spkim0921@gmail.com>',
                    to: email.toString(),
                    subject:
                        "👩‍❤️‍👨 Steph & Paul are getting married AND YOU’RE INVITED!",
                    html: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>👩‍❤️‍👨 Steph & Paul are getting married AND YOU’RE INVITED!</title>
</head>

<body
    style="margin: 0; padding: 0; font-family: Georgia, 'Times New Roman', Times, serif; letter-spacing:0.2px; line-height: 25px; text-align: center;">
    <div style="max-width: 500px; margin: 20px auto; background-color: #FFF7EE; padding: 16px; border-radius: 5000px;">
        <div style="margin: 0 auto; border: 2px solid #637CC6; padding: 6px; border-radius: 5000px;">
            <div
                style="position:relative; margin: 0 auto; border: 1px solid #637CC6; padding: 10% 5%; border-radius: 5000px; color: #637CC6; text-align: center;">
                <img src="https://capyshroom-production.up.railway.app/wedding_img.png" alt="Wedding Image"
                    style="width: 200px; display: block; margin: 0 auto;">
                <div style="padding-top: 20px; font-size: 18px; ">YOU ARE INVITED</div>
                <div style="font-size: 16px;">to share in the wedding of</div>
                <img src="https://capyshroom-production.up.railway.app/image_title.png" alt="Steph & Paul"
                    style="max-width: 300px; width: 80%; padding: 40px 0; display: block; margin: 0 auto;">
                <div style="font-size: 16px;">MONDAY, SEPTEMBER 29, 2025</div>
                <div style="padding-bottom: 20px; font-size: 16px;">at two in the afternoon</div>
                <div style="font-size: 16px; ">ST. AUGUSTINE BY THE SEA</div>
                <div style="font-size: 16px;">Honolulu, Hawaii, USA</div>
                <img src="https://capyshroom-production.up.railway.app/subtitle.png" alt="Reception & Dinner"
                    style="max-width: 300px; width: 80%; padding-top: 38px; padding-bottom: 20px; display: block; margin: 0 auto;">
                <div style="font-size: 16px; ">MOANA SURFRIDER</div>
                <div style="font-size: 16px;">Honolulu, Hawaii, USA</div>
                <div
                    style="position:relative; width: 200px; text-align: center; margin-left:auto;margin-right:auto; margin-top:30px; margin-bottom:30px;">
                    <div
                    style="position:relative; width: 200px; text-align: center; margin-left:auto;margin-right:auto; margin-top:30px; margin-bottom:30px;">
                    <a href="https://stephandpaul.ca/" target="_blank"><img
                            src="https://capyshroom-production.up.railway.app/button_solid.png" alt=""
                            style="width:200px"></a>
                </div>
                </div>
                <div style="font-size: 16px; font-weight: bold;"><a href="https://stephandpaul.ca/home"
                        target="_blank">More info on our website</a></div>
                <img src="https://capyshroom-production.up.railway.app/icon_email_doublehappy.png" alt="Double Happy"
                    style="width: 75px; padding: 40px 0; display: block; margin: 0 auto;">
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

export async function sendConfirmationEmail(req: Request, res: Response) {
    const invitee_id = req.body.invitee_id;
    try {
        const confirmedInvitees = await db
            .select()
            .from(invitees)
            .where(eq(invitees.invitee_id, invitee_id));
        const inviteeGuests = await db.select().from(guests);
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
                    from: '"Steph & Paul" <spkim0921@gmail.com>',
                    to: invitee.email?.toString(),
                    subject: "Next stop: Aloha 🌺",
                    html: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>👩‍❤️‍👨 Steph & Paul are getting married AND YOU’RE INVITED!</title>
</head>

<body
    style="margin: 0; padding: 0; font-family: Georgia, 'Times New Roman', Times, serif; font-size: 14px; letter-spacing: 0.2px; line-height: 25px; text-align: center;">
    <div style="max-width: 500px; margin: 20px auto; background-color: #FFF7EE; padding: 16px; border-radius: 5000px; position: relative;">
    
      <!-- Border layer 1 (contains BOTH stars) -->
      <div style="margin: 0 auto; border: 2px solid #637CC6; padding: 6px; border-radius: 5000px; position: relative;">
    
        <!-- Border layer 2 and content -->
        <div style="position: relative; margin: 0 auto; border: 1px solid #637CC6; padding: 10% 5%; border-radius: 5000px; color: #637CC6; text-align: center;">
                <!-- Your content starts here -->
                <img src="https://capyshroom-production.up.railway.app/wedding_img_02.png" alt="Wedding Image" style="width: 200px; display: block; margin: 0 auto;">
                <img src="https://capyshroom-production.up.railway.app/image_title.png" alt="Steph & Paul" style="max-width: 300px; width: 80%; padding: 40px 0; display: block; margin: 0 auto;">
  
                <div style="padding-top: 0;">Dear <strong>${
                    invitee.first_name
                }</strong>, thank you for your response to our invitation.  
                  We’re constantly updating our site with new content as the big day approaches, so  
                  <a href="https://stephandpaul.ca/home" target="_blank" style="color: #637CC6; font-weight: bold;">visit it</a> to keep updated!
                </div>
  
                <div style="margin: 20px 0;">Keep this email for your reference.</div>
                    <hr style="border: none; border-top: 1px solid #637CC6; width: 80%; margin: 0; display: inline-block;" />   
                <div style="font-weight: bold; margin-top: 20px;">Will you be joining us at our wedding?</div>
                <div style="padding-bottom: 20px;">${
                    invitee.rsvp ? "Yes" : "No"
                }</div>
  
                <div style="font-weight: bold;">Do you have dietary restrictions or food allergies?</div>
                ${
                    invitee.dietary
                        ? `<div>${invitee.dietary}</div>`
                        : '<div style="font-style:italic">no response</div>'
                }
  
                <div style="font-weight: bold; margin-top: 20px;">Who else is coming?</div>
                ${
                    invitee.guests && invitee.guests > 0
                        ? inviteeGuests
                              .filter(
                                  (guest) =>
                                      guest.invitee_id === invitee.invitee_id
                              )
                              .sort(
                                  (a, b) =>
                                      //@ts-ignore
                                      new Date(a.created_at).getTime() -
                                      //@ts-ignore
                                      new Date(b.created_at).getTime()
                              )
                              .map((guest, idx) => {
                                  return `
                              <div>${guest.firstname} ${guest.lastname}</div>`;
                              })
                              .join("")
                        : "<div>Just me, myself and I</div>"
                }
                ${
                    invitee.guests && invitee.guests > 0
                        ? `<div style="font-weight: bold; margin-top: 20px;">Do your guests have dietary restrictions or food allergies?</div>`
                        : ""
                }
                ${inviteeGuests
                    .filter((guest) => guest.invitee_id === invitee.invitee_id)
                    .sort(
                        (a, b) =>
                            //@ts-ignore
                            new Date(a.created_at).getTime() -
                            //@ts-ignore
                            new Date(b.created_at).getTime()
                    )
                    .map((guest, idx) => {
                        return `
                          <div>${guest.firstname}: ${
                            guest.dietary ||
                            '<span style="font-style:italic">no response</span>'
                        }</div>`;
                    })
                    .join("")}
                        <hr style="border: none; border-top: 1px solid #637CC6; width: 80%; margin: 0; display: inline-block;" />
                <div style="font-weight: bold; margin-top: 20px;">
                  <a href="https://stephandpaul.ca/home" target="_blank">
                    <img src="https://capyshroom-production.up.railway.app/button_oursite.png" alt="" style="width: 200px;">
                  </a>
                </div>
  
                <img src="https://capyshroom-production.up.railway.app/icon_email_doublehappy.png" alt="Double Happy" style="width: 75px; padding: 20px 0; display: block; margin: 0 auto;">
                <!-- End content -->
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

export async function sendSorryEmail(req: Request, res: Response) {
    try {
        const { first_name, email } = req.body;
        console.log("Sending sorry email to", req.body);

        const transporter = nodemailer.createTransport({
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
            from: '"Steph & Paul" <spkim0921@gmail.com>',
            to: email.toString(),
            subject: "👩‍❤️‍👨 Thanks for responding to our RSVP!",
            html: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>👩‍❤️‍👨 Steph & Paul are getting married AND YOU’RE INVITED!</title>
</head>

<body
    style="margin: 0; padding: 0; font-family: Georgia, 'Times New Roman', Times, serif; letter-spacing:0.2px; line-height: 25px; text-align: center;">
    <div style="max-width: 500px; margin: 20px auto; background-color: #FFF7EE; padding: 16px; border-radius: 5000px;">
        <div style="margin: 0 auto; border: 2px solid #637CC6; padding: 6px; border-radius: 5000px;">
            <div
                style="position:relative; margin: 0 auto; border: 1px solid #637CC6; padding: 10% 5%; border-radius: 5000px; color: #637CC6; text-align: center;">
                <img src="https://capyshroom-production.up.railway.app/wedding_img.png" alt="Wedding Image"
                    style="width: 200px; display: block; margin: 0 auto;">
                <img src="https://capyshroom-production.up.railway.app/image_title.png" alt="Steph & Paul"
                    style="max-width: 300px; width: 80%; padding: 40px 0; display: block; margin: 0 auto;">
                <div style="font-size: 14px; ">Dear <span style="font-weight: bold;">${first_name}</span>, we’re sorry you can’t make it to our ceremony! We hope to catch up with you when we’re
                    in town. </div>
                    <div style="font-size: 14px; margin-top:10px; font-style: italic; color:#637CC6">- Steph & Paul</div>
                <a href="https://stephandpaul.ca/home" target="_blank">
                <img src="https://capyshroom-production.up.railway.app/icon_email_doublehappy.png" alt="Double Happy"
                    style="width: 75px; padding: 40px 0; display: block; margin: 0 auto;">
                    </a>
            </div>
        </div>
    </div>
</body>

</html>`,
        };

        await transporter.sendMail(mail_configs);

        // ✅ Send success response
        return res.status(200).json({ success: true, message: "Email sent" });
    } catch (err) {
        console.error("Error sending email:", err);
        return res.status(500).json({
            success: false,
            message: "Failed to send email",
        });
    }
}
