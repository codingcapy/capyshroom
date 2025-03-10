import { NavLink, useNavigate } from "react-router-dom";
import useInviteeStore from "../store/InviteeStore";
import axios from "axios";
import DOMAIN from "../services/endpoint";
import { useState } from "react";

export default function DietaryPage() {
    const navigate = useNavigate();
    const { invitee, setInvitee, currentInviteeId, setCurrentInviteeId } =
        useInviteeStore((state) => state);
    console.log(invitee);
    const [dietaryContent, setDietaryContent] = useState(
        invitee ? invitee.dietary : ""
    );

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const invitee_id = invitee.invitee_id;
            const dietary = dietaryContent;
            const res = await axios.patch(`${DOMAIN}/api/invitees/dietary`, {
                invitee_id,
                dietary,
            });
            if (res.data?.success) {
                setInvitee(res.data.content);
                navigate("/guests");
            } else {
                console.log("Error updating dietary restrictions");
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="mx-auto">
            {invitee ? (
                <div>
                    <div className="font-bold my-5 text-center text-2xl">
                        Responding for {invitee.first_name}
                    </div>
                    <div>
                        Do you have any dietary restrictions and/or allergies?
                    </div>
                    <div>Please list below, otherwise leave blank.</div>
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <textarea
                            name=""
                            id=""
                            value={dietaryContent}
                            onChange={(e) => setDietaryContent(e.target.value)}
                            className="bg-[#FFFBF6] m-5 md:w-[500px] h-[100px] border-b-[#637CC6] border-dotted border-b-2 mx-auto"
                        ></textarea>
                        <div className="flex mx-auto">
                            <NavLink
                                to="/rsvp"
                                className="px-5 py-2 mr-2 border-2 border-[#637CC6] hover:bg-[#637CC6] hover:text-[#FFFBF6] transition-all ease-in-out duration-300"
                            >
                                Go Back
                            </NavLink>
                            <button className="px-5 py-2 ml-2 border-2 border-[#637CC6] hover:bg-[#637CC6] hover:text-[#FFFBF6] transition-all ease-in-out duration-300">
                                Next
                            </button>
                        </div>
                    </form>
                    <div>
                        <div className="absolute bottom-[10%] left-[50%] pt-44 pb-3 text-center">
                            2/3
                        </div>
                        <div className="absolute bottom-[15%] left-10 md:left-[10%] w-[80%] bg-[#d9d9d9] h-2"></div>
                        <div className="absolute bottom-[15%] left-10 md:left-[10%] w-[54%] bg-[#65558F] h-2"></div>
                    </div>
                </div>
            ) : (
                <div>
                    <div>Whoops! Something went wrong :(</div>
                    <div className="x-5 py-2 my-2 bg-[#65558F] text-white rounded-full w-[100px] mx-auto">
                        <NavLink to="/">Go Back</NavLink>
                    </div>
                </div>
            )}
        </div>
    );
}
