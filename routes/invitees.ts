/*
author: Paul Kim
date: February 14, 2024
Version: 1.0.0
description: messages route for CapyChat API server
 */

import express from "express";
import {
    createInvitee,
    sendFirstEmail,
    sendFourthEmail,
    sendSecondEmail,
    sendThirdEmail,
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
invitees.route("/sendsecond").post(sendSecondEmail);
invitees.route("/sendthird").post(sendThirdEmail);
invitees.route("/sendfourth").post(sendFourthEmail);

export default invitees;
