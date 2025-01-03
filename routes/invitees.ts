/*
author: Paul Kim
date: February 14, 2024
Version: 1.0.0
description: messages route for CapyChat API server
 */

import express from "express";
import { createInvitee, updateRsvp } from "../controller";

const invitees = express.Router();

invitees.route("/").post(createInvitee).patch(updateRsvp);

export default invitees;
