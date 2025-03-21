import iconCalendar from "/icon_calendar.svg";
import iconItinerary from "/icon_itinerary.svg";

export default function Header() {
    return (
        <header className="mx-auto md:pt-12 text-center">
            <h1 className="header-font text-4xl md:text-8xl mt-5 md:mb-10">
                Steph & Paul
            </h1>
            <div className="sm:flex italic md:mt-10 tracking-widest border-b border-[#637CC6] justify-center">
                <div className="sm:border-r border-[#637CC6] py-2 px-10">
                    <img
                        src={iconCalendar}
                        alt=""
                        className="mx-auto w-[25px] md:w-auto mb-5"
                    />
                    <div className="text-center text-sm md:text-base">
                        September 29,2025
                    </div>
                    <div>14:00</div>
                </div>
                <div className="py-2 px-10">
                    <img
                        src={iconItinerary}
                        alt=""
                        className="mx-auto w-[25px] md:w-auto mb-5"
                    />
                    <div className="text-sm md:text-base">
                        St. Augustine by the Sea
                    </div>
                    <div className="text-sm md:text-base">
                        Honolulu, HI, USA
                    </div>
                </div>
            </div>
        </header>
    );
}
