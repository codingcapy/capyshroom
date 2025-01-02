import { Link, NavLink } from "react-router-dom";

export default function RsvpPage() {
    return (
        <div>
            <div className="font-bold my-5">Responding for [name here]</div>
            <div>
                Will you be able to join us at our wedding? We understand if you
                cannot make it! Please
            </div>
            <div>
                reply no later than{" "}
                <span className="font-bold">April 1st, 2025</span>. If you do
                not reply by April 1st, please bring a chair and
            </div>
            <div>sandwich.</div>
            <div className="flex flex-col w-[300px] mx-auto">
                <NavLink
                    to="/dietary"
                    className="px-5 py-2 my-2 bg-[#65558F] text-white rounded-full"
                >
                    Yessss, HAWAII  😎🌴
                </NavLink>
                <NavLink
                    to="/dietary"
                    className="px-5 py-2 my-2 bg-[#65558F] text-white rounded-full"
                >
                    No, I regretfully decline
                </NavLink>
            </div>
            <div>
                <div className="absolute bottom-[22%] left-[50%] pt-44 pb-3 text-center">
                    1/3
                </div>
                <div className="absolute bottom-[20%] left-10 md:left-[10%] w-[80%] bg-[#d9d9d9] h-2"></div>
                <div className="absolute bottom-[20%] left-10 md:left-[10%] w-[27%] bg-[#65558F] h-2"></div>
            </div>
        </div>
    );
}
