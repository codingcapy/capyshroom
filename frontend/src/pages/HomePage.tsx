import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import DOMAIN from "../services/endpoint";
import useInviteeStore from "../store/InviteeStore";

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
        <div>
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
                className="flex flex-col mx-auto w-[300px] md:w-[400px]"
            >
                <div className="flex mx-auto">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="border mr-2 w-[100%] bg-[#E6E0E9] p-1 pb-5 border-b-gray-400 border-b-2"
                        name="firstname"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="border ml-2 w-[100%] bg-[#E6E0E9] p-1 pb-5 border-b-gray-400 border-b-2"
                        name="lastname"
                        required
                    />
                </div>
                <label htmlFor="" className="my-5">
                    A copy of your response wilil be sent to:
                </label>
                <input
                    type="email"
                    placeholder="email"
                    className="border w-[100%] bg-[#E6E0E9] p-1 pb-5 border-b-gray-400 border-b-2"
                    name="email"
                    required
                />
                <button className="px-5 py-2 bg-[#65558F] rounded-full my-5 text-white w-[100px] mx-auto">
                    Next
                </button>
            </form>
        </div>
    );
}
