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
import CriarEvento from "../pages/dashboard/components/Criar/evento/CriarEvento";
import CriarBilhete from "../pages/dashboard/components/Criar/bilhete/CriarBilhete";
import CriarPalestrante from "../pages/dashboard/components/Criar/palestrante/CriarPalestrante";
import CriarOrador from "../pages/dashboard/components/Criar/orador/CriarOrador";
import Historico from "../pages/dashboard/components/Historico";
import DashboardLayout from "../components/Dashboard";
import PerfilDashboard from "../pages/dashboard/perfil_dashboard/PerfilDashboard";
import EditarPrincipal from "../pages/dashboard/perfil_dashboard/components/EditarPrincipal";
import EditarInfo from "../pages/dashboard/perfil_dashboard/components/EditarInfo";
import EditarSenha from "../pages/dashboard/perfil_dashboard/components/EditarSenha";
import EditarFoto from "../pages/dashboard/perfil_dashboard/components/EditarFoto";
import DashboardHome from "../pages/dashboard/components/DashboardHome/DashboardHome";
import DashboarEvento from "../pages/dashboard/components/DashboardEvento/DashboardEvento";
import Tabela from "../pages/dashboard/components/Tabela/Tabela";
import SortingTable from "../pages/dashboard/components/Tabela/SortingTable";
import GlobalFilterTable from "../pages/dashboard/components/Tabela/GlobalFilterTable";
import { EventoColuna } from "../pages/dashboard/components/Tabela/components/Coluna";
import EditarPalestrante from "../pages/dashboard/components/Editar/palestrante/EditarPalestrante";
import EditarBilhete from "../pages/dashboard/components/Editar/bilhete/EditarBilhete";
import EditarEvento from "../pages/dashboard/components/Editar/evento/EditarEvento";
import EditarOrador from "../pages/dashboard/components/Editar/orador/EditarOrador";
import ApagarEvento from "../pages/dashboard/components/Apagar/evento/ApagarEvento";
import ApagarBilhete from "../pages/dashboard/components/Apagar/bilhete/ApagarBilhete";
import ApagarPalestrante from "../pages/dashboard/components/Apagar/palestrante/ApagarPalestrante";
import ApagarOrador from "../pages/dashboard/components/Apagar/orador/ApagarOrador";
import Estatistica from "../pages/dashboard/components/Criar/estatistica/Estatistica";
import EditarPrincipalParticipante from "../pages/perfil/components/EditarPrincipalParticipante";
import EditarInfoParticipante from "../pages/perfil/components/EditarInfoParticipante";
import EditarSenhaParticipante from "../pages/perfil/components/EditarSenhaParticipante";
import EditarFotoParticipante from "../pages/perfil/components/EditarFotoParticipante";
import AdicionarFoto from "../pages/dashboard/components/Criar/foto/AdicionarFoto";


export default function Rotas() {

    return (
        <>
            {/*Página principal*/}

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

                <Route path="perfil" element={<Perfil />} >
                    <Route path="editar" element={<EditarPrincipalParticipante />}>
                        <Route path="InformacaoBasica" element={<EditarInfoParticipante />} />

                        <Route path="senha"
                            element={<EditarSenhaParticipante />} />

                        <Route path="foto"
                            element={<EditarFotoParticipante />} />
                    </Route>

                </Route>
                <Route path="login" element={<Login />} />
                <Route path="teste" element={<Section_eventos_Teste />} />


                {/*Dashboard*/}

                <Route path="dashboard/evento" element={<DashboarEvento />} >

                    <Route path="criarEvento" element={<CriarEvento />} />

                    <Route path="adicionarFotoEvento"
                        element={<AdicionarFoto
                            titulo={"Adicionar foto do evento"}
                            visibilidade={"none"}
                            nome={"Evento"}
                            selecionar={"evento"}
                        />}

                    />

                    <Route path="editarEvento" element={<EditarEvento />} />

                    <Route path="apagarEvento" element={<ApagarEvento />} />

                    <Route path="estatistica" element={<Estatistica />} />


                    <Route path="EventoLista" element={<Tabela
                        nome={"Lista de evento"}
                        coluna={EventoColuna}
                    />} />


                    <Route path="criarBilhete" element={<CriarBilhete />} />
                    <Route path="editarBilhete" element={<EditarBilhete />} />

                    <Route path="apagarBilhete" element={<ApagarBilhete />} />


                    <Route path="BilheteLista" element={<Tabela
                        nome={"Lista de bilhete"}
                        coluna={EventoColuna}

                    />} />

                    <Route path="criarPalestrante" element={<CriarPalestrante />} />

                    <Route path="adicionarFotoPalestrante"
                        element={<AdicionarFoto
                            titulo={"Adicionar foto do palestrante"}
                            visibilidade={"block"}
                            nome={"Palestrante"}
                            selecionar={"palestrante"}

                        />}
                    />

                    <Route path="editarPalestrante" element={<EditarPalestrante />} />

                    <Route path="apagarPalestrante" element={<ApagarPalestrante />} />



                    <Route path="PalestranteLista" element={<Tabela
                        nome={"Lista de palestrante"}
                        coluna={EventoColuna}


                    />} />


                    <Route path="criarOrador" element={<CriarOrador />} />

                    <Route path="editarOrador" element={<EditarOrador />} />

                    <Route path="apagarOrador" element={<ApagarOrador />} />

                    <Route path="OradorLista" element={<Tabela
                        nome={"Lista de orador"}
                        coluna={EventoColuna}

                    />} />



                    <Route path="historico" element={<Historico />} />

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


                <Route>
                    <Route path="dashboard" element={<DashboardLayout></DashboardLayout>}>

                        <Route index element={<DashboardHome />} />

                        {/* <Route path="evento" element={<Evento />} >
                            <Route path="criarEvento" element={<CriarEvento />} />
                            <Route path="criarBilhete" element={<CriarBilhete />} />
                            <Route path="criarPalestrante" element={<CriarPalestrante />} />
                            <Route path="criarOrador" element={<CriarOrador />} />
                            <Route path="historico" element={<Historico />} />
                        </Route> */}

                        <Route path="historico" element={<Historico />} >

                        </Route>

                        {/* <Route path="perfil" element={<PerfilDashboard />}>
                            <Route path="editar" element={<EditarPrincipal />}>
                                <Route path="InformacaoBasica" element={<EditarInfo />} />

                                <Route path="senha"
                                    element={<EditarSenha />} />

                                <Route path="foto"
                                    element={<EditarFoto />} />



                            </Route>
                        </Route> */}







                    </Route>

                </Route>

            </Routes>


        </>
    )
}