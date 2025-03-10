/*
Author: Paul Kim, Vitor Akiyama, Selina Park
Date: September 16, 2024
Version: 0.0.1
Detail: Layout for Arkhet
*/

import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function Layout() {
    return (
        <div className="bg-[#FFF7EE] p-10 min-h-screen">
            <div className="border-2 border-[#637CC6] p-2">
                <div className="flex flex-col min-h-[87vh] text-[#637CC6] main-font border border-[#637CC6] text-lg">
                    <Header />
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
