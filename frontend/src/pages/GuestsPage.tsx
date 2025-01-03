import { NavLink, useNavigate } from "react-router-dom";
import Popup from "../components/Popup";
import { useState } from "react";
import useInviteeStore from "../store/InviteeStore";
import axios from "axios";
import DOMAIN from "../services/endpoint";

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
        <div>
            {invitee ? (
                <div>
                    <div className="font-bold my-5">
                        Responding for {invitee.first_name}
                    </div>
                    <div className="mt-10 mb-5">
                        How many guests are you bringing?
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col w-[300px] mx-auto"
                    >
                        <label
                            htmlFor="guests"
                            className="text-left text-sm text-gray-500"
                        >
                            Select
                        </label>
                        <select
                            name="guests"
                            id="guests"
                            className="mx-auto border"
                        >
                            <option value="0">Just me myself and I</option>
                            <option value="1">+1</option>
                            <option value="2">+2</option>
                            <option value="3">+3</option>
                            <option value="4">+4</option>
                            <option value="5">+5</option>
                        </select>
                        <div className="py-10">
                            <NavLink
                                to="/dietary"
                                className="px-5 py-2 mr-2 bg-[#65558F] text-white rounded-full"
                            >
                                Go Back
                            </NavLink>
                            <button
                                onClick={() => setShowPopup(true)}
                                className="px-5 py-2 ml-2 bg-[#65558F] text-white rounded-full"
                            >
                                Next
                            </button>
                        </div>
                    </form>

                    <div>
                        <div className="absolute bottom-[22%] left-[50%] pt-44 pb-3 text-center">
                            3/3
                        </div>
                        <div className="absolute bottom-[20%] left-10 md:left-[10%] w-[80%] bg-[#d9d9d9] h-2"></div>
                        <div className="absolute bottom-[20%] left-10 md:left-[10%] w-[80%] bg-[#65558F] h-2"></div>
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
