import { NavLink, useNavigate } from "react-router-dom";
import useInviteeStore from "../store/InviteeStore";
import axios from "axios";
import DOMAIN from "../services/endpoint";
import buttonSolid from "/button_solid.svg";
import { confetti } from "@tsparticles/confetti";
import confetti1 from "/confetti1.png";
import confetti2 from "/confetti2.png";
import confetti3 from "/confetti3.png";
import confetti4 from "/confetti4.png";
import confetti5 from "/confetti5.png";
import confetti6 from "/confetti6.png";

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
            const res2 = await axios.post(`${DOMAIN}/api/invitees/sendsecond`, {
                invitee_id,
            });
            console.log("Send email response", res2.data);
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

    async function fireConfetti() {
        const confettiInstance = await confetti({
            spread: 500,
            ticks: 350,
            gravity: 1,
            decay: 1,
            startVelocity: 15,
            particleCount: 80,
            scalar: 6,
            shapes: ["image"],
            shapeOptions: {
                image: [
                    {
                        src: confetti1,
                        width: 50,
                        height: 67,
                    },
                    {
                        src: confetti2,
                        width: 50,
                        height: 62,
                    },
                    {
                        src: confetti3,
                        width: 50,
                        height: 63,
                    },
                    {
                        src: confetti4,
                        width: 50,
                        height: 65,
                    },
                    {
                        src: confetti5,
                        width: 50,
                        height: 63,
                    },
                    {
                        src: confetti6,
                        width: 50,
                        height: 42,
                    },
                ],
            },
        });
        setTimeout(() => {
            confettiInstance && confettiInstance.destroy(); // This will stop the confetti animation and remove it from the DOM
        }, 3000);
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="bg-[#FFF7EE] p-2 shadow-[0_35px_35px_rgba(0,0,0,0.15)] w-[80%] lg:w-[60%] xl:w-[40%] relative">
                <div className="p-5">
                    <div className="header-font text-center pt-5 sm:pt-10 pb-5 text-4xl xl:text-5xl">
                        Almost done!
                    </div>
                    <div className="xl:px-5 text-base text-center">
                        Submit your RSVP to share your responses with Stephanie
                        and Paul, or take a minute to review. Come back to edit
                        and resubmit your response at any time.
                    </div>
                    <div className="font-bold text-center text-base py-5">
                        A copy of your response will be sent to:
                    </div>
                    <div className="font-bold text-center md:text-2xl">
                        {invitee.email}
                    </div>
                    <div className="xl:pb-2 pt-2">
                        <form
                            onSubmit={handleSubmit2}
                            className="flex flex-col"
                        >
                            <div className="hidden sm:flex mx-auto items-center">
                                <div
                                    onClick={() => props.setShowPopup(false)}
                                    className="w-[200px] h-[47px] px-5 font-bold sm:mx-2 text-[#637CC6] hover:text-opacity-50 transition-all ease-in-out duration-300 cursor-pointer text-center mx-auto"
                                    id="borderbutton"
                                >
                                    Review
                                </div>
                                <div className="relative w-[200px] h-[100px] mx-auto md:mx-0">
                                    <img
                                        src={buttonSolid}
                                        alt=""
                                        className="absolute w-[100%] h-[100%]"
                                    />
                                    <button
                                        onClick={fireConfetti}
                                        className="absolute w-[100%] h-[100%] text-[#FFFBF6]"
                                    >
                                        Submit RSVP
                                    </button>
                                </div>
                            </div>
                            <div className="sm:hidden">
                                <div className="relative w-[200px] h-[75px] mx-auto">
                                    <img
                                        src={buttonSolid}
                                        alt=""
                                        className="absolute w-[100%] h-[100%]"
                                    />
                                    <button className="absolute w-[100%] h-[100%] text-[#FFFBF6]">
                                        Submit RSVP
                                    </button>
                                </div>
                                <div
                                    onClick={() => props.setShowPopup(false)}
                                    className="w-[200px] h-[47px] px-5 font-bold sm:mx-2 text-[#637CC6] hover:text-opacity-50 transition-all ease-in-out duration-300 cursor-pointer text-center mx-auto"
                                    id="borderbutton"
                                >
                                    Review
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
