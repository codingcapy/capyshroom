import { Link } from "react-router-dom";

export default function HomePage() {
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
                action=""
                className="flex flex-col mx-auto w-[300px] md:w-[400px]"
            >
                <div className="flex mx-auto">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="border mr-2 w-[100%] bg-[#E6E0E9] p-1 pb-5 border-b-gray-400 border-b-2"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="border ml-2 w-[100%] bg-[#E6E0E9] p-1 pb-5 border-b-gray-400 border-b-2"
                    />
                </div>
                <label htmlFor="" className="my-5">
                    A copy of your response wilil be sent to:
                </label>
                <input
                    type="email"
                    placeholder="email"
                    className="border w-[100%] bg-[#E6E0E9] p-1 pb-5 border-b-gray-400 border-b-2"
                />
                <Link
                    to="/rsvp"
                    className="px-5 py-2 bg-[#65558F] rounded-full my-5 text-white w-[100px] mx-auto"
                >
                    Next
                </Link>
            </form>
        </div>
    );
}
