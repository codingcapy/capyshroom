import { Link, NavLink, useNavigate } from "react-router-dom";
import useInviteeStore from "../store/InviteeStore";
import axios from "axios";
import DOMAIN from "../services/endpoint";
import Header from "../components/Header";

export default function RsvpPage() {
    const navigate = useNavigate();
    const { invitee, setInvitee } = useInviteeStore((state) => state);

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
            const res2 = await axios.post(`${DOMAIN}/api/invitees/sendthird`, {
                email: invitee.email,
                first_name: invitee.first_name,
            });
            console.log("Send email response", res2.data);
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
                            <div className="text-center text-base px-2">
                                Will you be able to join us at our wedding? We
                                understand if you cannot make it! Please reply
                                no later than{" "}
                                <span className="font-bold">
                                    May 15th, 2025
                                </span>
                                . If you do not reply by May 15th, please bring
                                a chair and sandwich.
                            </div>
                            <button
                                className="w-[259px] px-5 py-2 my-2 font-bold mx-auto mt-10  text-[#637CC6] hover:text-opacity-50 transition-all ease-in-out duration-300"
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
                                className="px-5 py-2 my-2 font-bold mx-auto text-[#637CC6] hover:text-opacity-50 transition-all ease-in-out duration-300"
                                id="borderbutton"
                            >
                                {" "}
                                NO, I REGRETFULLY DECLINE
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="py-5">
                        <div className="text-center pt-10">
                            You broke our site!! Just kidding.
                        </div>
                        <div className="w-[200px] flex flex-col mx-auto">
                            <NavLink
                                to="/"
                                className="w-[175px] px-5 py-2 my-2 font-bold mx-2 mt-10  text-[#637CC6] text-center hover:text-opacity-50 transition-all ease-in-out duration-300"
                                id="borderbutton"
                            >
                                Go Back
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
