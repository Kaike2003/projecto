import { Route, Routes } from "react-router-dom";

import Layout from "../components/Layout/index"
import Main_ingresso from "../pages/Main_ingresso/Main_ingresso"
import Concerto from "../pages/tipo_Eventos/Concerto/Concerto"
import Festa from "../pages/tipo_Eventos/Festa/Festa";
import Teatro from "../pages/tipo_Eventos/Teatro/Teatro"
import Espetaculo from "../pages/tipo_Eventos/Espetaculo/Espetaculo";
import Visualizar_ingresso from "../pages/Visualizar_ingresso/Visualizar_ingresso";

export default function Rotas() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route index element={<Main_ingresso/>}></Route>
                    <Route path="concertos" element={<Concerto/>}></Route>
                    <Route path="festas" element={<Festa/>}></Route>
                    <Route path="teatro" element={<Teatro/>}></Route>
                    <Route path="espetaculos" element={<Espetaculo/>}></Route>
                    <Route path="visualizarIngresso" element={<Visualizar_ingresso/>}></Route>
                </Route>


            </Routes>
        </>
    )
}