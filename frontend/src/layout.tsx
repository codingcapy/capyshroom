import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
    const location = useLocation();
    const isStephAndPaul = location.pathname === "/stephandpaul";

    return (
        <div className="bg-[#FFF7EE] p-3 min-[1537px]:p-10 min-h-screen">
            {!isStephAndPaul ? (
                <div
                    className="absolute top-0 left-0 w-screen h-screen flex flex-col p-5"
                    id="frame"
                >
                    <div className="flex flex-col min-h-[87vh] text-[#637CC6] main-font text-sm min-[1537px]:text-lg min-[1537px]:p-5">
                        <Outlet />
                    </div>
                </div>
            ) : (
                <div className="flex flex-col min-h-screen text-[#637CC6] main-font">
                    <Outlet />
                </div>
            )}
        </div>
    );
}
