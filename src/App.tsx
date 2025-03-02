import { ThemeProvider } from "@/components/theme-provider";
import ServiceList from "@/components/service-list/page";
import IncidentList from "@/components/incident-list/page";
import Navbar from "@/components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IncidentPage from "./components/incident-page/page";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>
                                <Navbar />
                                <ServiceList />
                            </div>
                        }
                    />
                    <Route
                        path="/incidents"
                        element={
                            <div>
                                <Navbar />
                                <IncidentList />
                            </div>
                        }
                    />
                    <Route
                        path="/incidents/:incidentId"
                        element={<IncidentPage />}
                    />
                    <Route
                        path="*"
                        element={
                            <div className="flex justify-center my-4">
                                <img src="404.svg" />
                            </div>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
