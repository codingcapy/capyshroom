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
    const {
        invitee,
        guests,
        setGuests,
        firstName1,
        setFirstName1,
        lastName1,
        setLastName1,
        dietary1,
        setDietary1,
        firstName2,
        setFirstName2,
        lastName2,
        setLastName2,
        dietary2,
        setDietary2,
        firstName3,
        setFirstName3,
        lastName3,
        setLastName3,
        dietary3,
        setDietary3,
        firstName4,
        setFirstName4,
        lastName4,
        setLastName4,
        dietary4,
        setDietary4,
    } = useInviteeStore((state) => state);

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
                            <div className="hidden guestform md:flex pb-5">
                                <div>What are your guests’ names?</div>
                                <div className="w-[29%]"></div>
                                <div>
                                    Dietary restrictions and/or food allergies?
                                </div>
                            </div>
                        )}
                        {guests > 0 && (
                            <div className="guestform md:hidden pb-5 text-center">
                                <div>
                                    What are your guests’ names? and dietary
                                    restrictions
                                </div>
                            </div>
                        )}
                        {guests > 0 && (
                            <form className="guestform mb-10 ">
                                <div className="sm:hidden font-bold">
                                    Guest 1
                                </div>
                                <input
                                    type="text"
                                    name="firstname"
                                    placeholder="First name"
                                    value={firstName1}
                                    onChange={(e) =>
                                        setFirstName1(e.target.value)
                                    }
                                    className="w-[190px] md:w-auto mr-2 bg-[#FFFBF6] p-1 pb-3 xl:pb-5 my-2 border-b-[#637CC6] border-dotted border-b-2 
                                    focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200 mx-auto"
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastname"
                                    placeholder="Last name"
                                    value={lastName1}
                                    onChange={(e) =>
                                        setLastName1(e.target.value)
                                    }
                                    className="w-[190px] md:w-auto mr-20 bg-[#FFFBF6] p-1 pb-3 xl:pb-5 my-2 border-b-[#637CC6] border-dotted border-b-2 
                                    focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200"
                                    required
                                />
                                <input
                                    type="text"
                                    name="dietary"
                                    placeholder="Dietary requirements?"
                                    value={dietary1}
                                    onChange={(e) =>
                                        setDietary1(e.target.value)
                                    }
                                    className="w-[190px] mr-2 bg-[#FFFBF6] p-1 pb-3 xl:pb-5 my-2 border-b-[#637CC6] border-dotted border-b-2 
                                    focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200"
                                    required
                                />
                                <div className="text-xs sm:hidden">
                                    Please list dietary restrictions and/or
                                    allergies here
                                </div>
                            </form>
                        )}
                        {guests > 1 && (
                            <form className="guestform mb-10">
                                <div className="sm:hidden font-bold">
                                    Guest 2
                                </div>
                                <input
                                    type="text"
                                    name="firstname"
                                    placeholder="First name"
                                    value={firstName2}
                                    onChange={(e) =>
                                        setFirstName2(e.target.value)
                                    }
                                    className="w-[190px] md:w-auto mr-2 bg-[#FFFBF6] p-1 pb-3 xl:pb-5 my-2 border-b-[#637CC6] border-dotted border-b-2 
                                    focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200"
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastname"
                                    placeholder="Last name"
                                    value={lastName2}
                                    onChange={(e) =>
                                        setLastName2(e.target.value)
                                    }
                                    className="w-[190px] md:w-auto mr-20 bg-[#FFFBF6] p-1 pb-3 xl:pb-5 my-2 border-b-[#637CC6] border-dotted border-b-2 
                                    focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200"
                                    required
                                />
                                <input
                                    type="text"
                                    name="dietary"
                                    placeholder="Dietary requirements?"
                                    value={dietary2}
                                    onChange={(e) =>
                                        setDietary2(e.target.value)
                                    }
                                    className="w-[190px] mr-2 bg-[#FFFBF6] p-1 pb-3 xl:pb-5 my-2 border-b-[#637CC6] border-dotted border-b-2 
                                    focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200"
                                    required
                                />
                                <div className="text-xs sm:hidden">
                                    Please list dietary restrictions and/or
                                    allergies here
                                </div>
                            </form>
                        )}
                        {guests > 2 && (
                            <form className="guestform mb-10">
                                <div className="sm:hidden font-bold">
                                    Guest 3
                                </div>
                                <input
                                    type="text"
                                    name="firstname"
                                    placeholder="First name"
                                    value={firstName3}
                                    onChange={(e) =>
                                        setFirstName3(e.target.value)
                                    }
                                    className="w-[190px] md:w-auto mr-2 bg-[#FFFBF6] p-1 pb-3 xl:pb-5 my-2 border-b-[#637CC6] border-dotted border-b-2 
                                    focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200"
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastname"
                                    placeholder="Last name"
                                    value={lastName3}
                                    onChange={(e) =>
                                        setLastName3(e.target.value)
                                    }
                                    className="w-[190px] md:w-auto mr-20 bg-[#FFFBF6] p-1 pb-3 xl:pb-5 my-2 border-b-[#637CC6] border-dotted border-b-2 
                                    focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200"
                                    required
                                />
                                <input
                                    type="text"
                                    name="dietary"
                                    placeholder="Dietary requirements?"
                                    value={dietary3}
                                    onChange={(e) =>
                                        setDietary3(e.target.value)
                                    }
                                    className="w-[190px] mr-2 bg-[#FFFBF6] p-1 pb-5 border-b-[#637CC6] border-dotted border-b-2 
                                    focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200"
                                    required
                                />
                                <div className="text-xs sm:hidden">
                                    Please list dietary restrictions and/or
                                    allergies here
                                </div>
                            </form>
                        )}
                        {guests > 3 && (
                            <form className="guestform">
                                <div className="sm:hidden font-bold">
                                    Guest 4
                                </div>
                                <input
                                    type="text"
                                    name="firstname"
                                    placeholder="First name"
                                    value={firstName4}
                                    onChange={(e) =>
                                        setFirstName4(e.target.value)
                                    }
                                    className="w-[250px] md:w-auto mr-2 bg-[#FFFBF6] p-1 pb-3 xl:pb-5 my-2 border-b-[#637CC6] border-dotted border-b-2 
                                    focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200"
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastname"
                                    placeholder="Last name"
                                    value={lastName4}
                                    onChange={(e) =>
                                        setLastName4(e.target.value)
                                    }
                                    className="w-[250px] md:w-auto mr-20 bg-[#FFFBF6] p-1 pb-3 xl:pb-5 my-2 border-b-[#637CC6] border-dotted border-b-2 
                                    focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200"
                                    required
                                />
                                <input
                                    type="text"
                                    name="dietary"
                                    placeholder="Dietary requirements?"
                                    value={dietary4}
                                    onChange={(e) =>
                                        setDietary4(e.target.value)
                                    }
                                    className="w-[190px] mr-2 bg-[#FFFBF6] p-1 pb-3 xl:pb-5 my-2 border-b-[#637CC6] border-dotted border-b-2 
                                    focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200"
                                    required
                                />
                                <div className="text-xs sm:hidden">
                                    Please list dietary restrictions and/or
                                    allergies here
                                </div>
                            </form>
                        )}
                        <div className="hidden mx-auto md:flex">
                            <NavLink to="/dietary">
                                <div
                                    className="w-[175px] px-5 py-2 my-2 font-bold mx-2 text-[#637CC6] text-center hover:text-opacity-50 transition-all ease-in-out duration-300"
                                    id="borderbutton"
                                >
                                    Go Back
                                </div>
                            </NavLink>
                            <button
                                onClick={handleMultiSubmit}
                                className="w-[175px] px-5 py-2 my-2 font-bold mx-2 text-[#637CC6] text-center hover:text-opacity-50 transition-all ease-in-out duration-300"
                                id="borderbutton"
                            >
                                Next
                            </button>
                        </div>
                        <div className="md:hidden mx-auto pt-10">
                            <button
                                onClick={handleMultiSubmit}
                                className="w-[175px] px-5 py-2 my-2 font-bold mx-2 text-[#637CC6] text-center hover:text-opacity-50 transition-all ease-in-out duration-300"
                                id="borderbutton"
                            >
                                Next
                            </button>
                            <NavLink to="/dietary">
                                <div
                                    className="w-[175px] px-5 py-2 my-2 font-bold mx-2 text-[#637CC6] text-center hover:text-opacity-50 transition-all ease-in-out duration-300"
                                    id="borderbutton"
                                >
                                    Go Back
                                </div>
                            </NavLink>
                        </div>
                        <div>
                            <img
                                src={ship}
                                alt="ship"
                                className="w-[30px] lg:w-auto mx-auto mt-5 md:mb-[-5px] animate-smooth-bounce"
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
