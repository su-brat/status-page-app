import { ThemeProvider } from "@/components/theme-provider";
import ServiceList from "@/components/service-list/page";
import IncidentList from "@/components/incident-list/page";
import Navbar from "@/components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<ServiceList />} />
                    <Route path="/incidents" element={<IncidentList />} />
                    <Route
                        path="/incidents/:incidentId"
                        element={
                            <div className="flex justify-center my-auto">
                                Go to incident
                            </div>
                        }
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
