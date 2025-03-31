import { NavLink, useNavigate } from "react-router-dom";
import Popup from "../components/Popup";
import { useState } from "react";
import useInviteeStore from "../store/InviteeStore";
import axios from "axios";
import DOMAIN from "../services/endpoint";
import ship from "/icon_loadingbar_ship.svg";
import loadingBar2 from "/wedding_loadingbar2.svg";
import Header from "../components/Header";

export default function GuestsPage() {
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const { invitee, setInvitee, currentInviteeId, setCurrentInviteeId } =
        useInviteeStore((state) => state);
    const [guests, setGuests] = useState(0);

    // async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    //     e.preventDefault();
    //     try {
    //         const invitee_id = invitee.invitee_id;
    //         const guests = Number.parseInt(
    //             (e.target as HTMLFormElement).guests.value
    //         );
    //         const res = await axios.patch(`${DOMAIN}/api/invitees/guests`, {
    //             invitee_id,
    //             guests,
    //         });
    //         if (res.data?.success) {
    //             setInvitee(res.data.content);
    //             setShowPopup(true);
    //         } else {
    //             throw new Error("Project ID not found in response");
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    async function handleMultiSubmit() {
        console.log("this function ran");
        try {
            const invitee_id = invitee.invitee_id;
            const forms = document.querySelectorAll("form");
            const formDataArray: {
                firstname?: string;
                lastname?: string;
                dietary?: string;
            }[] = [];

            forms.forEach((form, index) => {
                if (index > 0) {
                    const formData = new FormData(form);
                    const data = Object.fromEntries(formData.entries());
                    formDataArray.push(data);
                }
            });

            const guestsData = formDataArray.map((data) => ({
                invitee_id,
                firstname: data.firstname || "",
                lastname: data.lastname || "",
                dietary: data.dietary || "",
            }));

            // Step 1: Update the guest count
            const resInvitee = await axios.patch(
                `${DOMAIN}/api/invitees/guests`,
                {
                    invitee_id,
                    guests: guestsData.length,
                }
            );

            if (!resInvitee.data?.success) {
                throw new Error("Failed to update guests count.");
            }

            // Step 2: Submit each guest's details
            const guestPromises = guestsData.map((guest) =>
                axios.post(`${DOMAIN}/api/guests`, guest)
            );

            await Promise.all(guestPromises);

            // Show success popup
            setShowPopup(true);
        } catch (err) {
            console.error("Error submitting guests:", err);
        }
    }

    return (
        <>
            <Header />
            <div className="mx-auto">
                {invitee ? (
                    <div className="flex flex-col">
                        <div className="font-bold my-5 text-center md:text-2xl">
                            Responding for {invitee.first_name}
                        </div>
                        <div className="md:mt-0 mb-5 text-sm md:text-base text-center">
                            How many guests are you bringing?
                        </div>
                        <form className="mainform flex flex-col md:w-[300px] mx-auto pb-[56px]">
                            <select
                                name="guests"
                                id="guests"
                                className="mx-auto border md:p-3 text-sm md:text-base"
                                onChange={(e) =>
                                    setGuests(Number(e.target.value))
                                }
                            >
                                <option value="0">Just me myself and I </option>
                                <option value="1">+1</option>
                                <option value="2">+2</option>
                                <option value="3">+3</option>
                                <option value="4">+4</option>
                            </select>
                        </form>
                        {guests > 0 && (
                            <div className="guestform md:flex justify-between pb-5">
                                <div>What are your guests’ names?</div>
                                <div>
                                    Dietary restrictions and/or food allergies?
                                </div>
                            </div>
                        )}
                        {guests > 0 && (
                            <form className="guestform mb-10 ">
                                <input
                                    type="text"
                                    name="firstname"
                                    placeholder="First name"
                                    className="mr-2 bg-[#FFFBF6] p-1 pb-5 border-b-[#637CC6] border-dotted border-b-2 
                                    focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200"
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastname"
                                    placeholder="Last name"
                                    className="mr-20 bg-[#FFFBF6] p-1 pb-5 border-b-[#637CC6] border-dotted border-b-2 
                                    focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200"
                                    required
                                />
                                <input
                                    type="text"
                                    name="dietary"
                                    placeholder="Dietary requirements?"
                                    className="w-[250px] mr-2 bg-[#FFFBF6] p-1 pb-5 border-b-[#637CC6] border-dotted border-b-2 
                                    focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200"
                                    required
                                />
                            </form>
                        )}
                        {guests > 1 && (
                            <form className="guestform mb-10">
                                <input
                                    type="text"
                                    name="firstname"
                                    placeholder="First name"
                                    className="mr-2 bg-[#FFFBF6] p-1 pb-5 border-b-[#637CC6] border-dotted border-b-2 
                                    focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200"
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastname"
                                    placeholder="Last name"
                                    className="mr-20 bg-[#FFFBF6] p-1 pb-5 border-b-[#637CC6] border-dotted border-b-2 
                                    focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200"
                                    required
                                />
                                <input
                                    type="text"
                                    name="dietary"
                                    placeholder="Dietary requirements?"
                                    className="w-[250px] mr-2 bg-[#FFFBF6] p-1 pb-5 border-b-[#637CC6] border-dotted border-b-2 
                                    focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200"
                                    required
                                />
                            </form>
                        )}
                        {guests > 2 && (
                            <form className="guestform mb-10">
                                <input
                                    type="text"
                                    name="firstname"
                                    placeholder="First name"
                                    className="mr-2 bg-[#FFFBF6] p-1 pb-5 border-b-[#637CC6] border-dotted border-b-2 
                                    focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200"
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastname"
                                    placeholder="Last name"
                                    className="mr-20 bg-[#FFFBF6] p-1 pb-5 border-b-[#637CC6] border-dotted border-b-2 
                                    focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200"
                                    required
                                />
                                <input
                                    type="text"
                                    name="dietary"
                                    placeholder="Dietary requirements?"
                                    className="w-[250px] mr-2 bg-[#FFFBF6] p-1 pb-5 border-b-[#637CC6] border-dotted border-b-2 
                                    focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200"
                                    required
                                />
                            </form>
                        )}
                        {guests > 3 && (
                            <form className="guestform">
                                <input
                                    type="text"
                                    name="firstname"
                                    placeholder="First name"
                                    className="mr-2 bg-[#FFFBF6] p-1 pb-5 border-b-[#637CC6] border-dotted border-b-2 
                                    focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200"
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastname"
                                    placeholder="Last name"
                                    className="mr-20 bg-[#FFFBF6] p-1 pb-5 border-b-[#637CC6] border-dotted border-b-2 
                                    focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200"
                                    required
                                />
                                <input
                                    type="text"
                                    name="dietary"
                                    placeholder="Dietary requirements?"
                                    className="w-[250px] mr-2 bg-[#FFFBF6] p-1 pb-5 border-b-[#637CC6] border-dotted border-b-2 
                                    focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200"
                                    required
                                />
                            </form>
                        )}
                        <div className="mx-auto flex">
                            <NavLink to="/dietary">
                                <div
                                    className="w-[175px] px-5 py-2 my-2 font-bold mx-2 mt-10  text-[#637CC6] text-center hover:text-opacity-50 transition-all ease-in-out duration-300"
                                    id="borderbutton"
                                >
                                    Go Back
                                </div>
                            </NavLink>
                            <button
                                onClick={handleMultiSubmit}
                                className="w-[175px] px-5 py-2 my-2 font-bold mx-2 mt-10  text-[#637CC6] text-center hover:text-opacity-50 transition-all ease-in-out duration-300"
                                id="borderbutton"
                            >
                                Next
                            </button>
                        </div>
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
