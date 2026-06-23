import { Route, Routes } from "react-router-dom";

// Import components
import About from "./components/About";
import { PassangerCharts } from "./components/PassangerChart";
import { FlightInfo } from "./components/FlightInfo";
import type { FlightData } from "./types/flight";

export function AppRoutes({ flights }: { flights: FlightData[] }) {
    return (
        <Routes>
            <Route path="/" element={<FlightInfo flights={flights} />} />
            <Route
                path="/schedule"
                element={<FlightInfo flights={flights} />}
            />
            <Route
                path="/statistic"
                element={<PassangerCharts flights={flights} />}
            />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}
