import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
    const location = useLocation();
    const isStephAndPaul = location.pathname === "/home";

    return (
        <div className="bg-[#FFF7EE] xxl:p-10 min-h-screen">
            {!isStephAndPaul ? (
                <div
                    className="absolute top-0 left-0 md:w-[100vw] flex flex-col"
                    id="frame"
                >
                    <div className="flex flex-col min-h-[87vh] text-[#637CC6] main-font text-sm xxl:text-lg xxl:p-5">
                        <Outlet />
                    </div>
                </div>
            ) : (
                <div className="flex flex-col min-h-screen text-[#637CC6] main-font bg-[#FFF7EE]">
                    <Outlet />
                </div>
            )}
        </div>
    );
}
