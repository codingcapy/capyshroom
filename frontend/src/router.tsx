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
import RsvpPage from "./pages/RsvpPage";
import DietaryPage from "./pages/DietaryPage";
import GuestsPage from "./pages/GuestsPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import DeclinePage from "./pages/DeclinePage";
import WebsitePage from "./pages/WebsitePage";

export function Router() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/rsvp" element={<RsvpPage />} />
                <Route path="/dietary" element={<DietaryPage />} />
                <Route path="/guests" element={<GuestsPage />} />
                <Route path="/confirmation" element={<ConfirmationPage />} />
                <Route path="/thankyou" element={<DeclinePage />} />
                <Route path="/home" element={<WebsitePage />} />
                <Route path="/*" element={<HomePage />} />
            </Route>
        )
    );
    return router;
}
