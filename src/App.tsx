import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {StartPage} from "./pages/StartPage";
import {DomainAPage} from "./pages/DomainAPage";
import {NotFoundPage} from "./pages/NotFoundPage";
import {DomainBOverviewPage} from "./pages/domainB/DomainBOverviewPage";
import {DomainBDetailsPage} from "./pages/domainB/DomainBDetailsPage";

function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path={"/"} element={<StartPage/>}/>
                    <Route path={"/domainA"} element={<DomainAPage/>}/>
                    <Route path={"/domainB"} element={<DomainBOverviewPage/>}/>
                    <Route path={"/domainB/:id"} element={<DomainBDetailsPage/>}/>
                    <Route path={"*"} element={<NotFoundPage/>}/>
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}

export default App;
