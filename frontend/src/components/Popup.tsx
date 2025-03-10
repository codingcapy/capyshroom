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
            <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-black opacity-50"></div>
            <div className="absolute top-[20%] left-[5%] md:left-[30%] w-[90%] md:w-[40%] h-[50%] bg-[#FFF7EE] p-2">
                <div className="border border-[#637CC6] p-5">
                    <div className="header-font text-center pt-16 pb-5 md:text-6xl">
                        Almost done!
                    </div>
                    <div className="px-5">
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
                    <div className="py-9">
                        <form
                            onSubmit={handleSubmit2}
                            className="flex flex-col"
                        >
                            <div className="flex mx-auto">
                                <div
                                    onClick={() => props.setShowPopup(false)}
                                    className="px-5 py-2 mr-4 border-2 border-[#637CC6] cursor-pointer"
                                >
                                    Review
                                </div>
                                <button className="px-5 py-2 ml-4 border-2 border-[#637CC6] bg-[#637CC6] text-[#FFFBF6]">
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
