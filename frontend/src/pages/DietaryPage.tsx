import { NavLink, useNavigate } from "react-router-dom";
import useInviteeStore from "../store/InviteeStore";
import axios from "axios";
import DOMAIN from "../services/endpoint";
import { useState } from "react";
import ship from "/icon_loadingbar_ship.svg";
import loadingBar1 from "/wedding_loadingbar1.svg";

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
        <div className="">
            {invitee ? (
                <div>
                    <div className="font-bold my-5 text-center md:text-2xl">
                        Responding for {invitee.first_name}
                    </div>
                    <div className="text-center text-sm md:text-base">
                        Do you have any dietary restrictions and/or allergies?
                    </div>
                    <div className="text-center text-sm md:text-base">
                        Please list below, otherwise leave blank.
                    </div>
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
                        <div className="mr-[150px] sm:mr-[350px] lg:mr-[500px]">
                            <img
                                src={ship}
                                alt="ship"
                                className="w-[30px] md:w-auto mx-auto mt-5 mb-[-2px] md:mb-[-5px]"
                            />
                        </div>
                        <img
                            src={loadingBar1}
                            alt=""
                            className="w-auto mx-auto"
                        />
                        <div className="text-center">1/3</div>
                    </div>
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
    );
}
