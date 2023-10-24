import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Inicial from "./pages/Inicial";
import PaginaBase from "./pages/PaginaBase";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicial />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
