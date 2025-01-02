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
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 text-center">
                <div className="md:p-40 text-xl">
                    <Header />
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
