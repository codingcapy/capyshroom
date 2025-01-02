import { NavLink } from "react-router-dom";

export default function DietaryPage() {
    return (
        <div>
            <div className="font-bold my-5">Responding for [name here]</div>
            <div>Do you have any dietary restrictions and/or allergies?</div>
            <div>Please list below, otherwise leave blank.</div>
            <form action="">
                <textarea
                    name=""
                    id=""
                    className="bg-[#E6E0E9] m-5 md:w-[500px] h-[100px] border border-b-gray-400"
                ></textarea>
            </form>
            <div>
                <div className="absolute bottom-[22%] left-[50%] pt-44 pb-3 text-center">
                    2/3
                </div>
                <div className="absolute bottom-[20%] left-10 md:left-[10%] w-[80%] bg-[#d9d9d9] h-2"></div>
                <div className="absolute bottom-[20%] left-10 md:left-[10%] w-[54%] bg-[#65558F] h-2"></div>
            </div>
            <div className="">
                <NavLink
                    to="/rsvp"
                    className="px-5 py-2 mr-2 bg-[#65558F] text-white rounded-full"
                >
                    Go Back
                </NavLink>
                <NavLink
                    to="/guests"
                    className="px-5 py-2 ml-2 bg-[#65558F] text-white rounded-full"
                >
                    Next
                </NavLink>
            </div>
        </div>
    );
}
