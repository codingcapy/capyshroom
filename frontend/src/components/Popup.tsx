import { NavLink } from "react-router-dom";

export default function Popup(props: any) {
    return (
        <div>
            <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-black opacity-50"></div>
            <div className="absolute top-[20%] left-[5%] md:left-[30%] w-[90%] md:w-[40%] h-[50%] bg-white">
                <div className="text-center font-bold py-10 md:text-6xl">
                    Almost done!
                </div>
                <div className="px-5">
                    Submit your RSVP to share your responses with Stephanie and
                    Paul, or take a minute to review. Come back to edit and
                    resubmit your response at any time.
                </div>
                <div className="py-20">
                    <button
                        onClick={() => props.setShowPopup(false)}
                        className="px-5 py-2 mr-4 bg-[#ECE6F0] text-[#65558F] rounded-full"
                    >
                        Review
                    </button>
                    <NavLink
                        to="/confirmation"
                        className="px-5 py-2 ml-4 bg-[#65558F] text-white rounded-full"
                    >
                        Submit your RSVP
                    </NavLink>
                </div>
            </div>
        </div>
    );
}
