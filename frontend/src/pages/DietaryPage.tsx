import { NavLink, useNavigate } from "react-router-dom";
import useInviteeStore from "../store/InviteeStore";
import axios from "axios";
import DOMAIN from "../services/endpoint";
import ship from "/icon_loadingbar_ship.svg";
import loadingBar1 from "/wedding_loadingbar1.svg";
import Header from "../components/Header";

export default function DietaryPage() {
    const navigate = useNavigate();
    const { invitee, setInvitee, dietaryContent, setDietaryContent } =
        useInviteeStore((state) => state);

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
            <Header />
            {invitee ? (
                <div>
                    <div className="font-bold my-5 text-center md:text-2xl">
                        Responding for {invitee.first_name}
                    </div>
                    <div className="text-center text-sm md:text-base">
                        Do you have any dietary restrictions and/or allergies?
                    </div>
                    <div className="text-center text-sm md:text-base">
                        Please list below, otherwise proceed to next.
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <textarea
                            name=""
                            id=""
                            value={dietaryContent}
                            placeholder="Enter any dietary requirements"
                            onChange={(e) => setDietaryContent(e.target.value)}
                            className="bg-[#FFFBF6] m-5 xs:w-[275px] md:w-[500px] h-[58px] border-b-[#637CC6] border-dotted border-b-2 mx-auto focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200"
                        ></textarea>
                        <div className="hidden sm:flex flex-col sm:flex-row mx-auto">
                            <NavLink
                                to="/rsvp"
                                className="w-[175px] px-5 py-2 sm:my-2 font-bold mx-2 xxl:mt-10  text-[#637CC6] text-center hover:text-opacity-50 transition-all ease-in-out duration-300"
                                id="borderbutton"
                            >
                                Go Back
                            </NavLink>
                            <button
                                className="w-[175px] px-5 py-2 sm:my-2 font-bold mx-2 mt-5 xxl:mt-10  text-[#637CC6] text-center hover:text-opacity-50 transition-all ease-in-out duration-300"
                                id="borderbutton"
                            >
                                Next
                            </button>
                        </div>
                        <div className="sm:hidden flex flex-col mx-auto">
                            <button
                                className="w-[175px] px-5 py-2 sm:my-2 font-bold mx-2 xxl:mt-10  text-[#637CC6] text-center hover:text-opacity-50 transition-all ease-in-out duration-300"
                                id="borderbutton"
                            >
                                Next
                            </button>
                            <NavLink
                                to="/rsvp"
                                className="w-[175px] px-5 py-2 sm:my-2 font-bold mx-2 mt-5 xxl:mt-10  text-[#637CC6] text-center hover:text-opacity-50 transition-all ease-in-out duration-300"
                                id="borderbutton"
                            >
                                Go Back
                            </NavLink>
                        </div>
                    </form>
                    <div>
                        <div className="mr-[100px] sm:mr-[250px] lg:mr-[400px] md:mb-[0px] animate-smooth-bounce">
                            <img
                                src={ship}
                                alt="ship"
                                className="w-[30px] md:w-[40px] 2xl:w-auto mx-auto mt-5 mb-[-2px] md:mb-[-5px]"
                            />
                        </div>
                        <img
                            src={loadingBar1}
                            alt=""
                            className="w-[50%] xxl:w-auto mx-auto"
                        />
                        <div className="text-center">1/3</div>
                    </div>
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
    );
}
