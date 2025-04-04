import { useEffect, useState } from "react";

const Countdown: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<string>("");
    const [label, setLabel] = useState<string>("");
    const [isFinished, setIsFinished] = useState<boolean>(false);

    useEffect(() => {
        const updateCountdown = () => {
            const now = new Date();
            const year = now.getFullYear();
            const target = new Date(`${year}-09-29T14:00:00`);
            const diff = target.getTime() - now.getTime();

            if (diff <= 0) {
                setIsFinished(true); // hide when done
                return;
            }

            const totalSeconds = Math.floor(diff / 1000);
            const minutes = Math.floor(totalSeconds / 60);
            const hours = Math.floor(totalSeconds / 3600);
            const days = Math.floor(totalSeconds / (3600 * 24));

            if (days >= 1) {
                setTimeLeft(`${days}`);
                setLabel(days === 1 ? "Day" : "days to go!");
            } else if (hours >= 1) {
                setTimeLeft(`${hours}`);
                setLabel(hours === 1 ? "Hour" : "hours to go!");
            } else {
                setTimeLeft(`${minutes}`);
                setLabel(minutes === 1 ? "Minute" : "minutes to go!");
            }
        };

        updateCountdown(); // initial render
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval); // cleanup on unmount
    }, []);

    if (isFinished) return null; //nothing rendered once time is up

    return (
        <div className="text-center">
            <div className="text-sm">
                {timeLeft} {label}
            </div>
        </div>
    );
};

export default Countdown;
