import iconCalendar from "/icon_calendar.svg";
import iconItinerary from "/icon_itinerary.svg";

export default function Header() {
    return (
        <header className="mx-auto pt-20 text-center">
            <h1 className="header-font xl:text-6xl 2xl:text-8xl mt-5 mb-10">
                Steph & Paul
            </h1>
            <div className="flex italic mt-10 tracking-widest border-b border-[#637CC6] justify-center">
                <div className="border-r border-[#637CC6] py-2 px-10">
                    <img src={iconCalendar} alt="" className="mx-auto mb-5" />
                    <div className="text-center ">September 29,2025</div>
                    <div>14:00</div>
                </div>
                <div className="py-2 px-10">
                    <img src={iconItinerary} alt="" className="mx-auto mb-5" />
                    <div>St. Augustine by the Sea</div>
                    <div>Honolulu, HI, USA</div>
                </div>
            </div>
        </header>
    );
}
