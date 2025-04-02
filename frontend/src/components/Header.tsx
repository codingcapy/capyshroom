import iconCalendar from "/icon_calendar.svg";
import iconItinerary from "/icon_itinerary.svg";

export default function Header() {
    return (
        <header className="mx-auto md:pt-2 text-center">
            <h1 className="header-font sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-5 md:mb-10">
                Steph & Paul
            </h1>
            <div className="relative sm:flex italic md:mt-10 tracking-wide border-b border-[#637CC6] justify-center text-xs md:w-[450px] mx-auto">
                <div className="sm:border-r border-[#637CC6] py-2 px-10">
                    <div className="absolute left-0 bottom-[-2px] rounded-full h-[4px] w-[4px] bg-[#637CC6]"></div>
                    <div className="absolute right-0 bottom-[-2px] rounded-full h-[4px] w-[4px] bg-[#637CC6]"></div>
                    <div className="absolute sm:left-[47%] md:left-[46.7%] bottom-[88px] rounded-full h-[4px] w-[4px] bg-[#637CC6] hidden sm:block"></div>
                    <img
                        src={iconCalendar}
                        alt=""
                        className="mx-auto w-[20px] md:w-[30px] min-[1537px]:w-auto mb-3"
                    />
                    <div className="text-center min-[1537px]:text-base">
                        September 29,2025
                    </div>
                    <div>14:00</div>
                </div>
                <div className="py-2 px-10">
                    <img
                        src={iconItinerary}
                        alt=""
                        className="mx-auto w-[20px] min-[1537px]:w-auto mb-3"
                    />
                    <div className="min-[1537px]:text-base">
                        St. Augustine by the Sea
                    </div>
                    <div className="min-[1537px]:text-base">
                        Honolulu, HI, USA
                    </div>
                </div>
            </div>
        </header>
    );
}
