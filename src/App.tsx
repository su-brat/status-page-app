import { ThemeProvider } from "@/components/theme-provider";
import ServiceList from "@/components/service-list/page";
import IncidentList from "@/components/incident-list/page";
import Navbar from "@/components/ui/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IncidentLayout from "./components/incident-layout/page";
import { useCallback, useRef } from "react";

function App() {
    const appTitle = useRef("Service Tracker");
    const getNavItems = useCallback(
        (activeTab: string) => [
            { name: "Services", path: "/", active: activeTab === "services" },
            {
                name: "Incidents",
                path: "/incidents",
                active: activeTab === "incidents",
            },
        ],
        [],
    );

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>
                                <Navbar
                                    title={appTitle.current}
                                    navItems={getNavItems("services")}
                                />
                                <div className="container mx-auto my-10">
                                    <ServiceList />
                                </div>
                            </div>
                        }
                    />
                    <Route
                        path="/incidents"
                        element={
                            <div>
                                <Navbar
                                    title={appTitle.current}
                                    navItems={getNavItems("incidents")}
                                />
                                <div className="container mx-auto my-10">
                                    <IncidentList />
                                </div>
                            </div>
                        }
                    />
                    <Route
                        path="/incidents/:incidentId"
                        element={
                            <div>
                                <Navbar
                                    title={appTitle.current}
                                    navItems={getNavItems("incidents")}
                                />
                                <div className="container mx-auto my-10">
                                    <IncidentLayout />
                                </div>
                            </div>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <div>
                                <Navbar
                                    title={appTitle.current}
                                    navItems={getNavItems("")}
                                />
                                <div className="container flex justify-center mx-auto my-10">
                                    <img src="404.svg" />
                                </div>
                            </div>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
