/*
Author: Paul Kim, Vitor Akiyama, Selina Park
Date: September 16, 2024
Version: 0.0.1
Detail: React Router for Arkhet
*/

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/HomePage";

export function Router() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/*" element={<HomePage />} />
            </Route>
        )
    );
    return router;
}
