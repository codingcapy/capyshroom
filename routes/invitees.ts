import express from "express";
import {
    createInvitee,
    sendFirstEmail,
    sendConfirmationEmail,
    sendSorryEmail,
    updateDietary,
    updateGuests,
    updateRsvp,
    updateSubmitted,
} from "../controller";

const invitees = express.Router();

//@ts-ignore
invitees.route("/").post(createInvitee).patch(updateRsvp);
invitees.route("/dietary").patch(updateDietary);
invitees.route("/guests").patch(updateGuests);
invitees.route("/submitted").patch(updateSubmitted);
invitees.route("/sendfirst").post(sendFirstEmail);
invitees.route("/sendsecond").post(sendConfirmationEmail);
//@ts-ignore
invitees.route("/sendthird").post(sendSorryEmail);

export default invitees;
