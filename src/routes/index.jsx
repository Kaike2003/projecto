/* eslint-disable react/jsx-pascal-case */
import { Route, Routes, Navigate } from "react-router-dom";

import Layout from "../components/Layout/index"
import PaginaPrincipal from "../pages/PaginaPrincipal/PaginaPrincipal";




import Concerto from "../pages/tipo_Eventos/Concerto/Concerto"
import Festa from "../pages/tipo_Eventos/Festa/Festa";
import Teatro from "../pages/tipo_Eventos/Teatro/Teatro"
import Espetaculo from "../pages/tipo_Eventos/Espetaculo/Espetaculo";
import Visualizar_ingresso from "../pages/Visualizar_ingresso/Visualizar_ingresso";
import Palestra from "../pages/tipo_Eventos/Palestra/Palestra";
import Section_eventos_Teste from "../pages/section_eventos/Section_eventos_teste";

import TopMes from "../pages/tipo_Eventos/TopMes/TopMes";
import TodosEvento from "../pages/tipo_Eventos/TodosEvento/TodosEvento";
import Login from "../pages/Login/Login";
import Palestrante from "../pages/Palestrante/Palestrante";

import Bilhete from "../pages/detalhe_Bilhete/Bilhete";
import Perfil from "../pages/perfil/Perfil";
import { Dashboard } from "../pages/dashboard/Dashboard";
import Evento from "../pages/dashboard/components/Evento";
import CriarEvento from "../pages/dashboard/components/CriarEvento";
import CriarBilhete from "../pages/dashboard/components/CriarBilhete";
import CriarPalestrante from "../pages/dashboard/components/CriarPalestrante";
import CriarOrador from "../pages/dashboard/components/CriarOrador";
import Historico from "../pages/dashboard/components/Historico";
import DashboardLayout from "../components/Dashboard";
import PerfilDashboard from "../pages/dashboard/perfil_dashboard/PerfilDashboard";
import EditarPrincipal from "../pages/dashboard/perfil_dashboard/components/EditarPrincipal";
import EditarInfo from "../pages/dashboard/perfil_dashboard/components/EditarInfo";
import EditarSenha from "../pages/dashboard/perfil_dashboard/components/EditarSenha";
import EditarFoto from "../pages/dashboard/perfil_dashboard/components/EditarFoto";

export default function Rotas() {

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<PaginaPrincipal />} />
                    <Route path="concertos" element={<Concerto />} />
                    <Route path="festas" element={<Festa />} />
                    <Route path="teatro" element={<Teatro />} />
                    <Route path="espetaculos" element={<Espetaculo />} />
                    <Route path={"topMes"} element={<TopMes />} />
                    <Route path={"todosEventos"} element={<TodosEvento />} />
                    <Route path="palestra" element={<Palestra />}></Route>
                </Route>

                <Route path="visualizarIngresso" element={<Visualizar_ingresso />}></Route>
                {/* <Route path="concertos/visualizarIngresso" element={<Visualizar_ingresso />} /> */}
                <Route path="festas/visualizarIngresso" element={<Visualizar_ingresso />} />
                <Route path="teatro/visualizarIngresso" element={<Visualizar_ingresso />} />
                <Route path="espetaculos/visualizarIngresso" element={<Visualizar_ingresso />} />
                <Route path="palestra/visualizarIngresso" element={<Visualizar_ingresso />} />

                <Route path="concertos/visualizarIngresso" element={<Visualizar_ingresso />} >
                </Route>

                <Route path="concertos/visualizarIngresso/palestrante" element={<Palestrante />} />


                <Route path="concertos/visualizarIngresso/palestrante/bilhete" element={<Bilhete />} />



                <Route path="*" element={<Navigate to={"/"} replace />} />

                <Route path="perfil" element={<Perfil />} />
                <Route path="login" element={<Login />} />
                <Route path="teste" element={<Section_eventos_Teste />} />


                {/*Dashboard*/}

                <Route>
                    <Route path="/dashboard" element={<DashboardLayout></DashboardLayout>}>

                        <Route index element={<Evento />} />

                        <Route path="evento" element={<Evento />} >
                            <Route path="criarEvento" element={<CriarEvento />} />
                            <Route path="criarBilhete" element={<CriarBilhete />} />
                            <Route path="criarPalestrante" element={<CriarPalestrante />} />
                            <Route path="criarOrador" element={<CriarOrador />} />
                            <Route path="historico" element={<Historico />} />
                        </Route>

                        <Route path="historico" element={<Historico />} >

                        </Route>

                        <Route path="perfil" element={<PerfilDashboard />}>
                            <Route path="editar" element={<EditarPrincipal />}>
                                <Route path="InformacaoBasica" element={<EditarInfo />} />

                                <Route path="senha"
                                    element={<EditarSenha />} />

                                <Route path="foto"
                                    element={<EditarFoto />} />



                            </Route>
                        </Route>







                    </Route>

                </Route>

            </Routes>


        </>
    )
}