import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard";
import Inicial from "./pages/Inicial";
import Login from "./pages/Login";
import PaginaBase from "./pages/PaginaBase";
import PaginaBaseFormulario from "./pages/PaginaBaseFormulario";
import RotaPrivada from "./utils/RotaPrivada";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicial />} />
                    <Route element={<RotaPrivada />}>
                        <Route path="/Dashboard" element={<Dashboard />} />
                    </Route>
                </Route>
                <Route path="/" element={<PaginaBaseFormulario />}>
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Cadastro" element={<Cadastro />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
