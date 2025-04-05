import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import DOMAIN from "../services/endpoint";
import useInviteeStore from "../store/InviteeStore";
import weddingImg from "/wedding_img.png";
import imgTitle from "/image_title.png";
import subtitle from "/subtitle.png";
import doubleHappy from "/icon_email_doublehappy.png";
import Header from "../components/Header";
import star from "/icon_star.png";
import rsvpButton from "/button_solid.png";
import ourSite from "/button_oursite.png";

export default function HomePage() {
    const navigate = useNavigate();
    const { setInvitee } = useInviteeStore((state) => state);

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
        <div className="p-2 bg-[#FFF7EE]">
            <Header />
            <main className="flex-1 mx-auto text-center text-base tracking-[0.5px] pt-5">
                <div className="text-sm lg:text-base md:w-[600px] mx-auto">
                    We’re getting married and you’re invited! Come listen to us
                    tell each other repeatedly how much we love each other, for
                    two hours, IN HAWAII!!
                </div>
                <div className="my-5 font-bold text-sm xxl:text-2xl">
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
                            className="border sm:mr-2 w-[100%] bg-[#FFFBF6] p-1 pb-3 xxl:pb-5 border-b-[#637CC6] border-dotted border-b-2 focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200"
                            name="firstname"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="border sm:ml-2 w-[100%] bg-[#FFFBF6] p-1 pb-3 mt-4 sm:mt-0 xxl:pb-5 border-b-[#637CC6] border-dotted border-b-2 focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200"
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
                        className="border w-[100%] bg-[#FFFBF6] p-1 pb-3 xxl:pb-5 border-b-[#637CC6] border-dotted border-b-2 focus:placeholder:opacity-0 focus:placeholder:transition-opacity focus:placeholder:duration-200 max-w-[375px] mx-auto"
                        name="email"
                        required
                    />
                    <button
                        className="w-[200px] px-5 py-2 my-2 font-bold mx-auto mt-10  text-[#637CC6] hover:text-opacity-50 transition-all ease-in-out duration-300"
                        id="borderbutton"
                    >
                        {" "}
                        NEXT
                    </button>
                </form>
                <img src={weddingImg} alt="" className="hidden" />
                <img src={imgTitle} alt="" className="hidden" />
                <img src={subtitle} alt="" className="hidden" />
                <img src={doubleHappy} alt="" className="hidden" />
                <img src={star} alt="" className="hidden" />
                <img src={rsvpButton} alt="" className="hidden" />
                <img src={ourSite} alt="" className="hidden" />
            </main>
        </div>
    );
}
