import iconCalendar from "/icon_calendar.svg";
import iconItinerary from "/icon_itinerary.svg";

export default function Header() {
    return (
        <header className="mx-auto text-center">
            <h1 className="header-font text-4xl sm:text-4xl md:text-5xl xxl:text-7xl mt-5 md:mb-10">
                Steph & Paul
            </h1>
            <div className="relative flex italic mt-10 tracking-wide border-b border-[#637CC6] justify-center text-xs md:w-[450px] mx-auto">
                <div className="border-r border-[#637CC6] py-2 pt-2 md:pt-2 px-2 sm:px-10">
                    <div className="absolute left-0 bottom-[-2px] rounded-full h-[4px] w-[4px] bg-[#637CC6]"></div>
                    <div className="absolute right-0 bottom-[-2px] rounded-full h-[4px] w-[4px] bg-[#637CC6]"></div>
                    <div className="absolute sm:left-[47%] md:left-[46.7%] 2xl:left-[46%] xxl:left-[46.2%] top-0 rounded-full h-[4px] w-[4px] bg-[#637CC6] hidden sm:block"></div>
                    <div className="h-[40px] xxl:h-auto">
                        <img
                            src={iconCalendar}
                            alt=""
                            className="mx-auto w-[20px] md:w-[30px] xxl:w-auto mb-3"
                        />
                    </div>
                    <div className="text-center xxl:text-base">
                        September 29,2025
                    </div>
                    <div>14:00</div>
                </div>
                <div className="py-2 px-2 sm:px-10">
                    <div className="h-[40px] xxl:h-auto">
                        <img
                            src={iconItinerary}
                            alt=""
                            className="mx-auto w-[20px] xxl:w-auto mb-3"
                        />
                    </div>
                    <div className="xxl:text-base">
                        St. Augustine by the Sea
                    </div>
                    <div className="xxl:text-base">Honolulu, HI, USA</div>
                </div>
            </div>
        </header>
    );
}
