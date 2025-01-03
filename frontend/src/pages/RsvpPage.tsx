import { Link, NavLink, useNavigate } from "react-router-dom";
import useInviteeStore from "../store/InviteeStore";
import axios from "axios";
import DOMAIN from "../services/endpoint";
import { useState } from "react";

export default function RsvpPage() {
    const navigate = useNavigate();
    const { invitee, setInvitee, currentInviteeId, setCurrentInviteeId } =
        useInviteeStore((state) => state);
    console.log(invitee);
    const [rsvpValue, setRsvpValue] = useState("false");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const invitee_id = invitee.invitee_id;
            const rsvp = "true";
            const res = await axios.patch(`${DOMAIN}/api/invitees`, {
                invitee_id,
                rsvp,
            });
            if (res.data?.success) {
                setInvitee(res.data.content);
                navigate("/dietary");
            } else {
                throw new Error("Project ID not found in response");
            }
        } catch (err) {
            console.log(err);
        }
    }

    async function handleSubmit2(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const invitee_id = invitee.invitee_id;
            const rsvp = "false";
            const res = await axios.patch(`${DOMAIN}/api/invitees`, {
                invitee_id,
                rsvp,
            });
            if (res.data?.success) {
                setInvitee(res.data.content);
                navigate("/thankyou");
            } else {
                throw new Error("Project ID not found in response");
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div className="font-bold my-5">
                Responding for {invitee.first_name}
            </div>
            <div>
                Will you be able to join us at our wedding? We understand if you
                cannot make it! Please
            </div>
            <div>
                reply no later than{" "}
                <span className="font-bold">April 1st, 2025</span>. If you do
                not reply by April 1st, please bring a chair and
            </div>
            <div>sandwich.</div>
            <div className="flex flex-col w-[300px] mx-auto">
                <form onSubmit={handleSubmit}>
                    <button className="px-5 py-2 my-2 bg-[#65558F] text-white rounded-full">
                        Yessss, HAWAII  😎🌴
                    </button>
                </form>
                <form onSubmit={handleSubmit2}>
                    <button className="px-5 py-2 my-2 bg-[#65558F] text-white rounded-full">
                        No, I regretfully decline
                    </button>
                </form>
            </div>
            <div>
                <div className="absolute bottom-[22%] left-[50%] pt-44 pb-3 text-center">
                    1/3
                </div>
                <div className="absolute bottom-[20%] left-10 md:left-[10%] w-[80%] bg-[#d9d9d9] h-2"></div>
                <div className="absolute bottom-[20%] left-10 md:left-[10%] w-[27%] bg-[#65558F] h-2"></div>
            </div>
        </div>
    );
}
