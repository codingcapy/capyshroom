import { useEffect } from "react";
import useInviteeStore from "../store/InviteeStore";
import ship from "/icon_loadingbar_ship.svg";
import loadingBar from "/icon_loadingbar_empty.svg";
import Header from "../components/Header";

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
                <div className="px-2 text-center">
                    Take a look at <span className="font-bold">our site</span>{" "}
                    to learn a little more about us, and get suggestions/tips on
                    your trip to Hawaii!
                </div>
                <div className="px-5 py-2 my-10 border-2 border-[#637CC6] sm:w-[300px] mx-auto text-center font-bold hover:bg-[#637CC6] hover:text-[#FFFBF6] transition-all ease-in-out duration-300">
                    <a
                        href="https://en.wikipedia.org/wiki/Capybara"
                        target="_blank"
                        className=""
                    >
                        MORE INFO
                    </a>
                </div>
                <div>
                    <div className="ml-[175px] sm:ml-[400px] md:ml-[550px] lg:ml-[600px]">
                        <img
                            src={ship}
                            alt="ship"
                            className="w-[30px] md:w-auto mx-auto mt-5 mb-[-2px] sm:mb-[-8px] md:mb-[-15px]"
                        />
                    </div>
                    <img src={loadingBar} alt="" className="mx-auto" />
                    <div className="text-center">3/3</div>
                </div>
            </div>
        </>
    );
}
