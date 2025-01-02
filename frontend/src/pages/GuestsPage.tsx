import { NavLink } from "react-router-dom";
import Popup from "../components/Popup";
import { useState } from "react";

export default function GuestsPage() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div>
            <div className="font-bold my-5">Responding for [name here]</div>
            <div className="mt-10 mb-5">How many guests are you bringing?</div>
            <form action="" className="flex flex-col w-[300px] mx-auto">
                <label htmlFor="" className="text-left text-sm text-gray-500">
                    Select
                </label>
                <select name="" id="" className="mx-auto border">
                    <option value="">Just me myself and I</option>
                    <option value="">1</option>
                    <option value="">2</option>
                </select>
            </form>

            <div>
                <div className="absolute bottom-[22%] left-[50%] pt-44 pb-3 text-center">
                    3/3
                </div>
                <div className="absolute bottom-[20%] left-10 md:left-[10%] w-[80%] bg-[#d9d9d9] h-2"></div>
                <div className="absolute bottom-[20%] left-10 md:left-[10%] w-[80%] bg-[#65558F] h-2"></div>
            </div>
            <div className="py-10">
                <NavLink
                    to="/dietary"
                    className="px-5 py-2 mr-2 bg-[#65558F] text-white rounded-full"
                >
                    Go Back
                </NavLink>
                <button
                    onClick={() => setShowPopup(true)}
                    className="px-5 py-2 ml-2 bg-[#65558F] text-white rounded-full"
                >
                    Next
                </button>
            </div>
            {showPopup && <Popup setShowPopup={setShowPopup} />}
        </div>
    );
}
