import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Inicial from "./pages/Inicial";
import Login from "./pages/Login";
import PaginaBase from "./pages/PaginaBase";
import PaginaBaseFormulario from "./pages/PaginaBaseFormulario";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicial />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                </Route>
                <Route path="/" element={<PaginaBaseFormulario />}>
                    <Route path="/Login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
