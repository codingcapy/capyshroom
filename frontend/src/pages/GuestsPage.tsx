import { NavLink, useNavigate } from "react-router-dom";
import Popup from "../components/Popup";
import { useState } from "react";
import useInviteeStore from "../store/InviteeStore";
import axios from "axios";
import DOMAIN from "../services/endpoint";
import ship from "/icon_loadingbar_ship.svg";
import loadingBar2 from "/wedding_loadingbar2.svg";

export default function GuestsPage() {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const { invitee, setInvitee, currentInviteeId, setCurrentInviteeId } =
        useInviteeStore((state) => state);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const invitee_id = invitee.invitee_id;
            const guests = Number.parseInt(
                (e.target as HTMLFormElement).guests.value
            );
            const res = await axios.patch(`${DOMAIN}/api/invitees/guests`, {
                invitee_id,
                guests,
            });
            if (res.data?.success) {
                setInvitee(res.data.content);
                setShowPopup(true);
            } else {
                throw new Error("Project ID not found in response");
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="mx-auto">
            {invitee ? (
                <div>
                    <div className="font-bold my-5 text-center md:text-2xl">
                        Responding for {invitee.first_name}
                    </div>
                    <div className="md:mt-10 mb-5 text-sm md:text-base text-center">
                        How many guests are you bringing?
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col md:w-[300px] mx-auto"
                    >
                        <select
                            name="guests"
                            id="guests"
                            className="mx-auto border md:p-5 text-sm md:text-base"
                        >
                            <option value="0">Just me myself and I</option>
                            <option value="1">+1</option>
                            <option value="2">+2</option>
                            <option value="3">+3</option>
                            <option value="4">+4</option>
                            <option value="5">+5</option>
                        </select>
                        <div className="pt-16 mx-auto flex">
                            <NavLink to="/dietary">
                                <div className="px-5 py-2 mr-2 border-2 border-[#637CC6] hover:bg-[#637CC6] hover:text-[#FFFBF6] transition-all ease-in-out duration-300">
                                    Go Back
                                </div>
                            </NavLink>
                            <button
                                onClick={() => setShowPopup(true)}
                                className="px-5 py-2 ml-2 border-2 border-[#637CC6] hover:bg-[#637CC6] hover:text-[#FFFBF6] transition-all ease-in-out duration-300"
                            >
                                Next
                            </button>
                        </div>
                    </form>
                    <div>
                        <img
                            src={ship}
                            alt="ship"
                            className="w-[30px] lg:w-auto mx-auto mt-5"
                        />
                        <img
                            src={loadingBar2}
                            alt=""
                            className="w-[65%] xl:w-auto mx-auto"
                        />
                        <div className="text-center">2/3</div>
                    </div>
                    {showPopup && <Popup setShowPopup={setShowPopup} />}
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
