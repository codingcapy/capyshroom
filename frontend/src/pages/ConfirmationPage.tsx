import { useEffect } from "react";
import useInviteeStore from "../store/InviteeStore";
import ship from "/icon_loadingbar_ship.svg";
import loadingBar from "/icon_loadingbar_empty.svg";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function ConfirmationPage() {
    const { invitee, setInvitee, currentInviteeId, setCurrentInviteeId } =
        useInviteeStore((state) => state);

    useEffect(() => {
        setInvitee(null);
    }, []);

    return (
        <>
            <Header />
            <div className="mx-auto pt-10">
                <div className="font-bold mb-5 text-center text-4xl">
                    Your RSVP has been sent!
                </div>
                <div className="font-bold text-center py-5 text-2xl">
                    What’s next?
                </div>
                <div className="px-2 text-center pb-10">
                    Take a look at{" "}
                    <a
                        href="http://localhost:5173/stephandpaul"
                        className="font-bold underline"
                        target="_blank"
                    >
                        our site
                    </a>{" "}
                    to learn a little more about us, and get suggestions/tips on
                    your trip to Hawaii!
                </div>
                <div
                    className="sm:w-[200px] px-5 py-2 my-2 font-bold mx-auto text-[#637CC6] hover:text-opacity-50 transition-all ease-in-out duration-300 text-center"
                    id="borderbutton"
                >
                    <Link to={"/stephandpaul"}>MORE INFO</Link>
                </div>
                <div className="pt-10">
                    <div className="ml-[175px] sm:ml-[400px] md:ml-[550px] lg:ml-[600px] animate-smooth-bounce">
                        <img
                            src={ship}
                            alt="ship"
                            className="w-[30px] md:w-auto mx-auto mt-5 mb-[-2px] sm:mb-[-8px] md:mb-[-20px]"
                        />
                    </div>
                    <img src={loadingBar} alt="" className="mx-auto" />
                    <div className="text-center">3/3</div>
                </div>
            </div>
        </>
    );
}
