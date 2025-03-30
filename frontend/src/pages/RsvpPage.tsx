import { Link, NavLink, useNavigate } from "react-router-dom";
import useInviteeStore from "../store/InviteeStore";
import axios from "axios";
import DOMAIN from "../services/endpoint";
import { useState } from "react";
import Header from "../components/Header";

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
        <>
            <Header />
            <div className="mx-auto">
                {invitee ? (
                    <div>
                        <div className="font-bold my-5 text-center text-2xl">
                            Responding for {invitee.first_name}
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col 2xl:w-[800px] mx-auto"
                        >
                            <div className="text-center px-2">
                                Will you be able to join us at our wedding? We
                                understand if you cannot make it! Please reply
                                no later than{" "}
                                <span className="font-bold">May 1st, 2025</span>
                                . If you do not reply by May 1st, please bring a
                                chair and sandwich.
                            </div>
                            <button
                                className="px-5 py-2 my-2 font-bold mx-auto mt-10  text-[#637CC6] hover:text-opacity-50 transition-all ease-in-out duration-300"
                                id="borderbutton"
                            >
                                {" "}
                                YESSSS, HAWAII  😎🌴
                            </button>
                        </form>
                        <form
                            onSubmit={handleSubmit2}
                            className="flex flex-col"
                        >
                            <button
                                className="px-5 py-2 my-2 font-bold mx-auto mt-10  text-[#637CC6] hover:text-opacity-50 transition-all ease-in-out duration-300"
                                id="borderbutton"
                            >
                                {" "}
                                NO, I REGRETFULLY DECLINE
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="py-5">
                        <div>Whoops! Something went wrong :(</div>
                        <div className="px-5 py-2 my-2 border-2 border-[#637CC6] w-[150px] flex flex-col mx-auto">
                            <NavLink to="/" className="text-center">
                                Go Back
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
