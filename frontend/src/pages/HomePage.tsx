import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import DOMAIN from "../services/endpoint";
import useInviteeStore from "../store/InviteeStore";
import weddingImg from "/wedding_img.png";
import imgTitle from "/image_title.png";
import subtitle from "/subtitle.png";

export default function HomePage() {
    const navigate = useNavigate();
    const { invitee, setInvitee, currentInviteeId, setCurrentInviteeId } =
        useInviteeStore((state) => state);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const first_name = (e.target as HTMLFormElement).firstname.value;
            const last_name = (e.target as HTMLFormElement).lastname.value;
            const email = (e.target as HTMLFormElement).email.value;
            const res = await axios.post(`${DOMAIN}/api/invitees`, {
                first_name,
                last_name,
                email,
            });
            if (res.data?.success) {
                setInvitee(res.data.content);
                navigate("/rsvp");
            } else {
                throw new Error("Project ID not found in response");
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <main className="flex-1 mx-auto text-center tracking-[0.5px] pt-5">
            <div>
                We’re getting married and you’re invited! Come listen to us tell
                each other repeatedly how
            </div>
            <div>much we love each other, for two hours, IN HAWAII!!</div>
            <div className="my-5 font-bold text-2xl">
                Enter your name and email to RSVP.
            </div>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col mx-auto sm:w-[300px] md:w-[400px]"
            >
                <div className="sm:flex mx-auto">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="border mr-2 w-[100%] bg-[#FFFBF6] p-1 pb-5 border-b-[#637CC6] border-dotted border-b-2"
                        name="firstname"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="border ml-2 w-[100%] bg-[#FFFBF6] p-1 pb-5 border-b-[#637CC6] border-dotted border-b-2"
                        name="lastname"
                        required
                    />
                </div>
                <label htmlFor="" className="my-5">
                    A copy of your response will be sent to:
                </label>
                <input
                    type="email"
                    placeholder="Email"
                    className="border w-[100%] bg-[#FFFBF6] p-1 pb-5 border-b-[#637CC6] border-dotted border-b-2"
                    name="email"
                    required
                />
                <button className="px-7 py-2 my-5 w-[200px] mx-auto border-2 border-[#637CC6] font-bold text-2xl text-center hover:bg-[#637CC6] hover:text-[#FFFBF6] transition-all ease-in-out duration-300">
                    NEXT
                </button>
            </form>
            <img src={weddingImg} alt="" className="hidden" />
            <img src={imgTitle} alt="" className="hidden" />
            <img src={subtitle} alt="" className="hidden" />
        </main>
    );
}
