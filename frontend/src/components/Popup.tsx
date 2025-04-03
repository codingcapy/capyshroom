import { NavLink, useNavigate } from "react-router-dom";
import useInviteeStore from "../store/InviteeStore";
import axios from "axios";
import DOMAIN from "../services/endpoint";
import buttonSolid from "/button_solid.svg";

export default function Popup(props: any) {
    const navigate = useNavigate();
    const { invitee, setInvitee } = useInviteeStore((state) => state);

    async function handleSubmit2(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const invitee_id = invitee.invitee_id;
            const res = await axios.patch(`${DOMAIN}/api/invitees/submitted`, {
                invitee_id,
            });
            if (res.data?.success) {
                setInvitee(res.data.content);
                navigate("/confirmation");
            } else {
                throw new Error("Project ID not found in response");
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div className="absolute top-[-75px] left-[-75px] w-[100vw] h-screen bg-black opacity-75"></div>
            <div className="absolute top-[20%] left-[5%] md:left-[30%] w-[90%] md:w-[40%] lg:top-[0%] h-[69%] bg-[#FFF7EE] p-2">
                <div className="border border-[#637CC6] p-5">
                    <div className="header-font text-center pt-16 pb-5 text-4xl xl:text-6xl">
                        Almost done!
                    </div>
                    <div className="xl:px-5 text-base">
                        Submit your RSVP to share your responses with Stephanie
                        and Paul, or take a minute to review. Come back to edit
                        and resubmit your response at any time.
                    </div>
                    <div className="font-bold text-center text-base py-5">
                        A copy of your response will be sent to:
                    </div>
                    <div className="font-bold text-center text-2xl">
                        {invitee.email}
                    </div>
                    <div className="xl:pb-2 pt-9">
                        <form
                            onSubmit={handleSubmit2}
                            className="flex flex-col"
                        >
                            <div className="flex mx-auto items-center">
                                <div
                                    onClick={() => props.setShowPopup(false)}
                                    className="w-[170px] h-[54px] px-5 font-bold mx-2 text-[#637CC6] hover:text-opacity-50 transition-all ease-in-out duration-300
                                    cursor-pointer text-center"
                                    id="borderbutton"
                                >
                                    Review
                                </div>
                                <div className="relative w-[200px] h-[100px]">
                                    <img
                                        src={buttonSolid}
                                        alt=""
                                        className="absolute w-[100%] h-[100%]"
                                    />
                                    <button className="absolute w-[100%] h-[100%] text-[#FFFBF6]">
                                        Submit RSVP
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
