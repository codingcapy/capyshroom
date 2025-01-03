import { useEffect } from "react";
import useInviteeStore from "../store/InviteeStore";

export default function ConfirmationPage() {
    const { invitee, setInvitee, currentInviteeId, setCurrentInviteeId } =
        useInviteeStore((state) => state);

    useEffect(() => {
        setInvitee(null);
    }, []);

    return (
        <div>
            <div className="font-bold mb-5">Your RSVP has been sent!</div>
            <div className="font-bold">What’s next?</div>
            <div>
                Take a look at our site to learn a little more about us, and get
                suggestions/tips on your trip to Hawaii!
            </div>
            <div className="px-5 py-2 my-10 bg-[#65558F] text-white rounded-full w-[300px] mx-auto">
                <a
                    href="https://en.wikipedia.org/wiki/Capybara"
                    target="_blank"
                    className=""
                >
                    Head to our site
                </a>
            </div>
        </div>
    );
}
