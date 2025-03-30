import { NavLink, useNavigate } from "react-router-dom";
import useInviteeStore from "../store/InviteeStore";
import axios from "axios";
import DOMAIN from "../services/endpoint";

export default function Popup(props: any) {
    const navigate = useNavigate();
    const { invitee, setInvitee, currentInviteeId, setCurrentInviteeId } =
        useInviteeStore((state) => state);

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
            <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-black opacity-75"></div>
            <div className="absolute top-[20%] left-[5%] xl:left-[30%] w-[90%] xl:w-[40%] h-[50%] bg-[#FFF7EE] p-2">
                <div className="border border-[#637CC6] p-5">
                    <div className="header-font text-center pt-16 pb-5 text-4xl xl:text-6xl">
                        Almost done!
                    </div>
                    <div className="xl:px-5">
                        Submit your RSVP to share your responses with Stephanie
                        and Paul, or take a minute to review. Come back to edit
                        and resubmit your response at any time.
                    </div>
                    <div className="font-bold text-center py-5">
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
                            <div className="flex mx-auto">
                                <div
                                    onClick={() => props.setShowPopup(false)}
                                    className="w-[170px] px-5 my-2 font-bold mx-2  text-[#637CC6] hover:text-opacity-50 transition-all ease-in-out duration-300
                                    cursor-pointer text-center"
                                    id="borderbutton"
                                >
                                    Review
                                </div>
                                <button
                                    className="px-5 my-2 font-bold mx-2 text-[#FFF7EE] hover:text-opacity-50 transition-all ease-in-out duration-300"
                                    id="borderbutton-solid"
                                >
                                    Submit your RSVP
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
