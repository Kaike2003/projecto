/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import swal from 'sweetalert';


import Layout from "../components/Layout/index"
import PaginaPrincipal from "../pages/PaginaPrincipal/PaginaPrincipal";
import Concerto from "../pages/tipo_Eventos/Concerto/Concerto"
import Teatro from "../pages/tipo_Eventos/Teatro/Teatro"
import Espetaculo from "../pages/tipo_Eventos/Espetaculo/Espetaculo";
import Palestra from "../pages/tipo_Eventos/Palestra/Palestra";


import TopMes from "../pages/tipo_Eventos/TopMes/TopMes";
import TodosEvento from "../pages/tipo_Eventos/TodosEvento/TodosEvento";
import Palestrante from "../pages/Palestrante/Palestrante";

import Bilhete from "../pages/detalhe_Bilhete/Bilhete";

import Historico from "../pages/dashboard/components/Historico";
import Dashboard from "../pages/dashboard/components/Dashboard/organizador/DashboardOrganizador";

import Estrutura from "../pages/dashboard/components/estrutura/Estrutura";
import Editar from "../pages/dashboard/components/estrutura/Editar"
import DashboardLayout from "../components/Dashboard/DashboardLayoutOrganizador";
import Perfil from "../pages/dashboard/components/estrutura/Perfil";
import { ContextDashboard } from "../context/Context";


import Foto from "../pages/dashboard/components/estrutura/Foto";
import BilheteEstrutura from "../pages/dashboard/components/estrutura/BilheteEstrutura";
import Orador from "../pages/dashboard/components/estrutura/Orador";
import PalestranteEstrutura from "../pages/dashboard/components/estrutura/Palestrante";
import TabelaEstrutura from "../pages/dashboard/components/estrutura/TabelaEstrutura";

import { CriarParticipante } from "../pages/Participante/CriarParticipante";
import AutenticarParticipante from "../pages/Participante/AutenticarParticipante";
import { LoginParticipante } from "../pages/Participante/LoginParticipante";
import RecuperarSenhaParticipante from "../pages/Participante/RecuperarSenhaParticipante";
import { CriarOrganizador } from "../pages/Organizador/CriarOrganizador";
import { LoginOrganizador } from "../pages/Organizador/LoginOrganizador";
import { RotasPrivadasAdmin, RotasPrivadasOrganizador, RotasPrivadasParticipante } from "./RotasPrivadas";
import AutenticarOrganizador from "../pages/Organizador/AutenticarOrganizador";
import RecuperarSenhaOrganizador from "../pages/Organizador/RecuperarSenhaOrganizador";

import ListarEvento from "../pages/dashboard/components/estrutura/evento/ListarEvento";
import { LoginAdmin } from "../pages/Admin/LoginAdmin";
import AutenticarAdmin from "../pages/Admin/AutenticarAdmin";
import { CriarAdmin } from "../pages/Admin/CriarAdmin";
import RecuperarSenhaAdmin from "../pages/Admin/RecuperarSenhaAdmin";
import DashboardAdmin from "../pages/dashboard/components/Dashboard/admin/DashboardAdmin";
import CriarCategoria from "../pages/dashboard/components/Dashboard/admin/categoria/CriarCategoria";
import TabelaCategoria from "../pages/dashboard/components/Dashboard/admin/tabelas/TabelaCategoria";
import CriarTipoBilhete from "../pages/dashboard/components/Dashboard/admin/tipobilhete/CriarTipoBilhete";
import TabelaTipoBilhete from "../pages/dashboard/components/Dashboard/admin/tabelas/TabelaTipoBilhete";
import TabelaAdministradores from "../pages/dashboard/components/Dashboard/admin/tabelas/TabelaAdministradores";
import TabelaParticipante from "../pages/dashboard/components/Dashboard/admin/tabelas/TabelaParticipante";
import TabelaOrganizador from "../pages/dashboard/components/Dashboard/admin/tabelas/TabelaOrganizador";
import TabelaEventoPublicado from "../pages/dashboard/components/Dashboard/admin/tabelas/TabelaEventoPublicado";
import TabelaEventoAespera from "../pages/dashboard/components/Dashboard/admin/tabelas/TabelaEventoAespera";
import TabelaEventoBanido from "../pages/dashboard/components/Dashboard/admin/tabelas/TabelaEventoBanido";
import PerfilInfo from "../pages/dashboard/components/Dashboard/admin/perfilAdmin/PerfilInfo";
import PerfilEditar from "../pages/dashboard/components/Dashboard/admin/perfilAdmin/PerfilEditar";
import AlterarSenha from "../pages/dashboard/components/Dashboard/admin/perfilAdmin/AlterarSenha";
import AdicionarFotoPerfil from "../pages/dashboard/components/Dashboard/admin/perfilAdmin/AdicionarFotoPerfil";
import SairAdmin from "../pages/dashboard/components/Dashboard/admin/perfilAdmin/SairAdmin";
import TabelaEvento from "../pages/dashboard/components/Dashboard/organizador/tabelas/TabelaEvento";
import EstruturaEvento from "../pages/dashboard/components/Dashboard/organizador/evento/EstruturaEvento";
import CriarEvento from "../pages/dashboard/components/Dashboard/organizador/evento/CriarEvento";
import EstruturaEventoEditar from "../pages/dashboard/components/Dashboard/organizador/evento/EstruturaEventoEditar";
import EditarEvento from "../pages/dashboard/components/Dashboard/organizador/evento/EditarEvento";
import AdicionarFotoEvento from "../pages/dashboard/components/Dashboard/organizador/evento/AdicionarFotoEvento";
import EstruturaBilhete from "../pages/dashboard/components/Dashboard/organizador/evento/bilhete/EstruturaBilhete";
import CriarBilhete from "../pages/dashboard/components/Dashboard/organizador/evento/bilhete/CriarBilhete";
import TabelaBilhete from "../pages/dashboard/components/Dashboard/organizador/tabelas/TabelaBilhete";
import EditarBilhete from "../pages/dashboard/components/Dashboard/organizador/evento/bilhete/EditarBilhete";
import EstruturaOrador from "../pages/dashboard/components/Dashboard/organizador/evento/orador/EstruturaOrador";
import CriarOrador from "../pages/dashboard/components/Dashboard/organizador/evento/orador/CriarOrador";
import TabelaOrador from "../pages/dashboard/components/Dashboard/organizador/tabelas/TabelaOrador";
import EstruturaPalestrante from "../pages/dashboard/components/Dashboard/organizador/evento/palestrante/EstruturaPalestrante";
import CriarPalestrante from "../pages/dashboard/components/Dashboard/organizador/evento/palestrante/CriarPalestrante";
import TabelaPalestrante from "../pages/dashboard/components/Dashboard/organizador/tabelas/TabelaPalestrante";
import AdicionarFotoPalestrante from "../pages/dashboard/components/Dashboard/organizador/evento/palestrante/AdicionarFotoPalestrante";
import PublicarEvento from "../pages/dashboard/components/Dashboard/organizador/evento/publicar/PublicarEvento";
import Home from "../pages/dashboard/components/Dashboard/organizador/home/Home";
import InformacaoEvento from "../pages/dashboard/components/Dashboard/organizador/evento/informacao/InformacaoEvento";
import PerfilInfoOrganizador from "../pages/dashboard/components/Dashboard/organizador/perfilOrganizador/PerfilInfoOrganizador";
import PerfilEditarOrganizador from "../pages/dashboard/components/Dashboard/organizador/perfilOrganizador/PerfilEditarOrganizador";
import AlterarSenhaOrganizador from "../pages/dashboard/components/Dashboard/organizador/perfilOrganizador/AlterarSenhaOrganizador";
import AdicionarFotoPerfilOrganizador from "../pages/dashboard/components/Dashboard/organizador/perfilOrganizador/AdicionarFotoPerfilOrganizador";
import SairOrganizador from "../pages/dashboard/components/Dashboard/organizador/perfilOrganizador/SairOrganizador";
import VisualizarBilhete from "../pages/Visualizar_ingresso/VisualizarBilhete";
import InformacaoEventoAdmin from "../pages/dashboard/components/Dashboard/admin/informacaoEventoAdmin/InformacaoEventoAdmin";
import Reservas from "../pages/Participante/reservas/Reservas";
import NaoPagas from "../pages/Participante/reservas/components/NaoPagas";
import Paga from "../pages/Participante/reservas/components/Paga";
import MeusEventos from "../pages/Participante/reservas/components/MeusBilhetes";
import InformacaoEventoParticipante from "../pages/Participante/informacao/InformacaoEventoParticipante";
import Seminario from "../pages/tipo_Eventos/Seminario/Seminario";
import Shows from "../pages/tipo_Eventos/Shows/Shows";
import TabelaEventoAprovarPagamentoParticipante from "../pages/dashboard/components/Dashboard/admin/tabelas/TabelaEventoAprovarPagamentoParticipante";
import InformacaoCompraParticipante from "../pages/dashboard/components/Dashboard/admin/InformacaoCompraParticipante/InformacaoCompraParticipante";
import AdicionarFotoComprovativo from "../pages/Participante/reservas/components/AdicionarFotoComprovativo";
import TabelaPagamentoAprovado from "../pages/dashboard/components/Dashboard/admin/tabelas/TabelaPagamentoAprovado";
import EstatisticaHome from "../pages/dashboard/components/Dashboard/admin/estatistica/EstatisticaHome";
import LayoutSemSessao from "../components/Layout/LayoutSemSessao";
import HeaderSemSessao from "../components/Header/HeaderSemSessao";
import PaginaPrincipalOrganizador from "../pages/PaginaPrincipal/PaginaPrincipalOrganizador";
import TodosEventoOrganizador from "../pages/tipo_Eventos/TodosEvento/TodosEventoOrganizador";
import TeatroOrganizador from "../pages/tipo_Eventos/Teatro/TeatroOrganizador";
import ConcertoOrganizador from "../pages/tipo_Eventos/Concerto/ConcertoOrganizador";
import SeminarioOrganizador from "../pages/tipo_Eventos/Seminario/SeminarioOrganizador";
import PalestraOrganizador from "../pages/tipo_Eventos/Palestra/PalestraOrganizador";
import ShowsOrganizador from "../pages/tipo_Eventos/Shows/ShowsOrganizador";
import VisualizarBilheteOrganizador from "../pages/Visualizar_ingresso/VisualizarBilheteOrganizador";
import PaginaPrincipalSemSessao from "../pages/PaginaPrincipal/PaginaPrincipalSemSessao";
import TodosEventoSemSessao from "../pages/tipo_Eventos/TodosEvento/TodosEventoSemSessao";
import TeatroSemSessao from "../pages/tipo_Eventos/Teatro/TeatroSemSessao";
import ConcertoOrganizadorSemSessao from "../pages/tipo_Eventos/Concerto/ConcertoSemSessao";
import SeminarioSemSessao from "../pages/tipo_Eventos/Seminario/SeminarioSemSessao";
import PalestraSemSessao from "../pages/tipo_Eventos/Palestra/PalestraSemSessao";
import ShowsSemSessao from "../pages/tipo_Eventos/Shows/ShowsSemSessao";
import VisualizarBilheteSemSessao from "../pages/Visualizar_ingresso/VisualizarBilheteSemSessao";
import EstruturaPerfil from "../pages/dashboard/components/estrutura/EstruturaPerfil";
import PerfilInfoParticipante from "../pages/Participante/perfilParticipante/PerfilInfoParticipante";
import PerfilEditarParticipante from "../pages/Participante/perfilParticipante/PerfilEditarParticipante";
import AlterarSenhaParticipante from "../pages/Participante/perfilParticipante/AlterarSenhaParticipante";
import AdicionarFotoPerfilParticipante from "../pages/Participante/perfilParticipante/AdicionarFotoPerfilParticpante";
import PagamentoNaoFeito from "../pages/dashboard/components/Dashboard/admin/pagamento/pagamentoNaoFeito";
import PagamentoFeito from "../pages/dashboard/components/Dashboard/admin/pagamento/pagamentoFeito";
import EstruturaPagamento from "../pages/dashboard/components/estrutura/EstruturaPagamento";


//  Context Dashboard
// CP - Context proprs ou Context propriedade

export default function Rotas() {

    const url = "reservaOnline/"
    const urlPrivadaOrganizador = "/reservaOnline/dashboard/organizador"
    const urlPrivadaOrganizadorMenuPrincipal = "/reservaOnline.com/organizador"
    const urlPrivadaAdmin = "/reservaOnline/dashboard/admin"
    const urlPrivadaParticipante = "/reservaOnline/participante"


    return (
        <>





            {/*Página principal*/}





            <Routes>

                <Route path="/vendaOnline.com"
                    element={<LayoutSemSessao />}
                >

                    <Route
                        index
                        element={<PaginaPrincipalSemSessao />}
                    >
                    </Route>

                    <Route path="visualizarBilhete/:idEvento"
                        element={<VisualizarBilheteSemSessao />}
                    >
                    </Route>

                    <Route
                        path="todosEventos"
                        element={<TodosEventoSemSessao />}
                    ></Route>

                    <Route path="teatro"
                        element={<TeatroSemSessao />}
                    ></Route>

                    <Route path="concerto"
                        element={<ConcertoOrganizadorSemSessao />}
                    ></Route>

                    <Route path="seminario"
                        element={<SeminarioSemSessao />}
                    ></Route>

                    <Route path="palestra"
                        element={<PalestraSemSessao />}
                    ></Route>

                    <Route path="shows"
                        element={<ShowsSemSessao />}
                    ></Route>



                </Route>

                {/* <Route path="/" element={<Layout />}>
                    <Route index element={<PaginaPrincipal />} />
                    <Route path="concertos" element={<Concerto />} />
                    <Route path="festas" element={<Festa />} />
                    <Route path="teatro" element={<Teatro />} />
                    <Route path="espetaculos" element={<Espetaculo />} />
                    <Route path={"topMes"} element={<TopMes />} />
                    <Route path={"todosEventos"} element={<TodosEvento />} />
                    <Route path="palestra" element={<Palestra />}></Route>
                </Route> */}

                {/* <Route path="visualizarIngresso" element={<Visualizar_ingresso />}></Route>
                <Route path="concertos/visualizarIngresso" element={<Visualizar_ingresso />} />
                <Route path="festas/visualizarIngresso" element={<Visualizar_ingresso />} />
                <Route path="teatro/visualizarIngresso" element={<Visualizar_ingresso />} />
                <Route path="espetaculos/visualizarIngresso" element={<Visualizar_ingresso />} />
                <Route path="palestra/visualizarIngresso" element={<Visualizar_ingresso />} />

                <Route path="concertos/visualizarIngresso" element={<Visualizar_ingresso />} >
                </Route>

                <Route path="concertos/visualizarIngresso/palestrante" element={<Palestrante />} /> */}


                {/* <Route path="concertos/visualizarIngresso/palestrante/bilhete" element={<Bilhete />} /> */}



                <Route path="*" element={<Navigate to={"/"} replace />} />

                <Route path="perfil" element={<h1>Perfil</h1>} >


                </Route>




                { /* Participante*/}
                <Route
                    path={url + "participante/criarconta"}
                    element={<CriarParticipante />}
                />

                <Route
                    path={url + "participante/autenticarConta"}
                    element={<AutenticarParticipante />}
                />

                <Route
                    path={url + "participante/login"}
                    element={<LoginParticipante />}
                />

                <Route
                    path={url + "participante/recuperarSenha"}
                    element={<RecuperarSenhaParticipante />}
                />

                <Route path={urlPrivadaParticipante} element={<RotasPrivadasParticipante />}>
                    <Route path={urlPrivadaParticipante} element={
                        <ContextDashboard.Provider>
                            <Layout />
                        </ContextDashboard.Provider>
                    }>

                        <Route
                            index
                            element={<PaginaPrincipal />}
                        >

                        </Route>

                        <Route path="visualizarBilhete/:idEvento"
                            element={<VisualizarBilhete />}
                        >
                        </Route>

                        <Route path="reservas"
                            element={<Reservas />}
                        >

                            <Route
                                path="naoPagas/:idUtilizador"
                                element={<NaoPagas />}
                            ></Route>

                            <Route path="adicionarComprovativo/:idReserva"
                                element={<AdicionarFotoComprovativo />}
                            ></Route>


                            <Route path="pagas/:idUtilizador"
                                element={<Paga />}
                            ></Route>

                            <Route path="meusEventos/:idUtilizador"
                                element={<MeusEventos />}
                            ></Route>

                            <Route path="informacaoEvento/:idUtilizador/:idBilhete"
                                element={<InformacaoEventoParticipante />}
                            ></Route>

                        </Route>


                        <Route path="todosEventos"
                            element={<TodosEvento />}
                        ></Route>

                        <Route path="teatro"
                            element={<Teatro />}
                        ></Route>

                        <Route path="concerto"
                            element={<Concerto />}
                        ></Route>

                        <Route path="seminario"
                            element={<Seminario />}
                        ></Route>

                        <Route path="palestra"
                            element={<Palestra />}
                        ></Route>

                        <Route path="shows"
                            element={<Shows />}
                        ></Route>



                        <Route path="perfil"
                            element={
                                <EstruturaPerfil
                                    estilo={""}
                                    infoGeral={""}
                                    titulo="Informação da conta"
                                    lista1={"Informações"}
                                    lista2={"Foto"}
                                    lista3={"Editar"}
                                    lista4={"Senha"}
                                    lista5={"Sair"}
                                    rota1={urlPrivadaParticipante + "/perfil/informacao"}
                                    rota2={urlPrivadaParticipante + "/perfil/foto"}
                                    rota3={urlPrivadaParticipante + "/perfil/editar"}
                                    rota4={urlPrivadaParticipante + "/perfil/senha"}
                                    rota5={urlPrivadaParticipante + "/perfil/sair"}
                                />
                            }
                        >

                            <Route
                                path="informacao"
                                element={<PerfilInfoParticipante />}
                            />


                            <Route
                                path="editar"
                                element={<PerfilEditarParticipante />}
                            />

                            <Route
                                path="senha"
                                element={<AlterarSenhaParticipante />}

                            />

                            <Route
                                path="foto"
                                element={<AdicionarFotoPerfilParticipante />}

                            />

                            <Route
                                path="sair"
                                element={
                                    <SairOrganizador />
                                }

                            />

                        </Route>





                    </Route>
                </Route>

























                { /* Organizador*/}

                <Route
                    path={`${url + "organizador/criarConta"}`}
                    element={<CriarOrganizador />}
                />

                <Route
                    path={`${url + "organizador/login"}`}
                    element={<LoginOrganizador />}
                />

                <Route
                    path={`${url + "organizador/autenticarConta"}`}
                    element={<AutenticarOrganizador />}
                />

                <Route
                    path={`${url + "organizador/recuperarSenha"}`}
                    element={<RecuperarSenhaOrganizador />}
                />

                <Route path={urlPrivadaOrganizador} element={<RotasPrivadasOrganizador />}>
                    <Route path={urlPrivadaOrganizador} element={
                        <ContextDashboard.Provider>
                            <DashboardLayout />
                        </ContextDashboard.Provider>
                    }>

                        <Route index
                            element={
                                <Home
                                />} />

                        <Route index path="home"
                            element={
                                <Home
                                />} />


                        <Route path="evento"
                            element={
                                <EstruturaEvento />
                            }
                        >

                            <Route path="criar" element={
                                <CriarEvento />
                            }>

                            </Route>

                            <Route path="listar/:idUtilizador" element={
                                <TabelaEvento />
                            }>

                            </Route>

                        </Route>

                        <Route path="evento/listar/:idUtilizador/editar/:idEvento"
                            element={<EstruturaEventoEditar />}
                        >

                            <Route path="evento"
                                element={<EditarEvento />}
                            ></Route>

                            <Route path="foto"
                                element={<AdicionarFotoEvento />}
                            ></Route>

                            <Route path="bilhete"
                                element={<EstruturaBilhete />}
                            >

                                <Route path="criar"
                                    element={<CriarBilhete />}
                                ></Route>

                                <Route path="listar"
                                    element={<TabelaBilhete />}
                                ></Route>

                                <Route path="editar/:idBilhete"
                                    element={<EditarBilhete />}
                                ></Route>

                            </Route>

                            <Route path="orador"
                                element={<EstruturaOrador />}
                            >

                                <Route path="criar"
                                    element={<CriarOrador />}
                                ></Route>

                                <Route path="listar"
                                    element={<TabelaOrador />}

                                ></Route>


                            </Route>

                            <Route path="palestrante"
                                element={<EstruturaPalestrante />}
                            >

                                <Route path="criar"
                                    element={<CriarPalestrante />}
                                ></Route>

                                <Route path="listar"
                                    element={<TabelaPalestrante />}
                                ></Route>

                                <Route path="foto/:idPalestrante"
                                    element={<AdicionarFotoPalestrante />}
                                ></Route>


                            </Route>

                            <Route path="informacao"
                                element={<InformacaoEvento />}
                            ></Route>

                            <Route path="publicar"
                                element={<PublicarEvento />}
                            ></Route>



                        </Route>

                        <Route path="perfil"
                            element={
                                <Estrutura
                                    estilo={"estiloEstrutura"}
                                    infoGeral={""}
                                    titulo="Informação da conta"
                                    lista1={"Informações"}
                                    lista2={"Editar"}
                                    lista3={"Senha"}
                                    lista4={"Sair"}
                                    // lista5={"Sair"}
                                    rota1={urlPrivadaOrganizador + "/perfil/informacao"}
                                    rota2={urlPrivadaOrganizador + "/perfil/editar"}
                                    rota3={urlPrivadaOrganizador + "/perfil/senha"}
                                    rota4={urlPrivadaOrganizador + "/perfil/sair"}
                                // rota5={urlPrivadaAdmin + "/perfil/foto"}
                                />
                            }
                        >

                            <Route
                                path="informacao"
                                element={<PerfilInfoOrganizador />}
                            />


                            <Route
                                path="editar"
                                element={<PerfilEditarOrganizador />}
                            />

                            <Route
                                path="senha"
                                element={<AlterarSenhaOrganizador />}

                            />

                            <Route
                                path="foto"
                                element={<AdicionarFotoPerfilOrganizador />}

                            />

                            <Route
                                path="sair"
                                element={
                                    <SairOrganizador />
                                }

                            />

                        </Route>

                        {/* <Route path="estatistica"
                            element="Olá mundo"
                        >

                        </Route> */}

                        <Route path="paginaPrincipal/visualizarBilhete/:idEvento"
                            element={<VisualizarBilheteOrganizador />}
                        >
                        </Route>


                        <Route
                            path="paginaPrincipal"
                            element={<PaginaPrincipalOrganizador />}>

                        </Route>



                        <Route
                            path="paginaPrincipal/todosEventos"
                            element={<TodosEventoOrganizador />}
                        ></Route>

                        <Route path="paginaPrincipal/teatro"
                            element={<TeatroOrganizador />}
                        ></Route>

                        <Route path="paginaPrincipal/concerto"
                            element={<ConcertoOrganizador />}
                        ></Route>

                        <Route path="paginaPrincipal/seminario"
                            element={<SeminarioOrganizador />}
                        ></Route>

                        <Route path="paginaPrincipal/palestra"
                            element={<PalestraOrganizador />}
                        ></Route>

                        <Route path="paginaPrincipal/shows"
                            element={<ShowsOrganizador />}
                        ></Route>

                    </Route>
                </Route>



                { /* Administrador*/}

                <Route
                    path={`${url + "admin/criarConta"}`}
                    element={<CriarAdmin />}
                />

                <Route
                    path={`${url + "admin/login"}`}
                    element={<LoginAdmin />}
                />

                <Route
                    path={`${url + "admin/autenticarConta"}`}
                    element={<AutenticarAdmin />}
                />

                <Route
                    path={`${url + "admin/recuperarSenha"}`}
                    element={<RecuperarSenhaAdmin />}
                />

                <Route path={urlPrivadaAdmin} element={<RotasPrivadasAdmin />}>
                    <Route path={urlPrivadaAdmin} element={
                        <ContextDashboard.Provider>
                            <DashboardAdmin />
                        </ContextDashboard.Provider>
                    }>

                        <Route index
                            element={
                                <Estrutura
                                    estilo={"estiloEstrutura2"}
                                    infoGeral={""}
                                    titulo=""
                                    lista1="Categoria"
                                    lista2="Bilhete"
                                    lista3="Administradores"
                                    lista4="Participantes"
                                    lista5="Organizadores"
                                    lista6="Evento"
                                    rota1={urlPrivadaAdmin + "/categoria"}
                                    rota2={urlPrivadaAdmin + "/bilhete"}
                                    rota3={urlPrivadaAdmin + "/administradores"}
                                    rota4={urlPrivadaAdmin + "/participantes"}
                                    rota5={urlPrivadaAdmin + "/organizadores"}
                                    rota6={urlPrivadaAdmin + "/evento"}


                                />}
                        >


                        </Route>


                        <Route path="categoria"
                            element={
                                <Estrutura
                                    estilo={"estiloEstrutura3"}
                                    infoGeral={""}
                                    titulo="Categoria"
                                    lista1="Criar"
                                    lista2="Listar"
                                    // lista3="Listar"
                                    // lista4="Excluir"
                                    // lista5="Excluir"
                                    rota1={urlPrivadaAdmin + "/categoria/criar"}
                                    rota2={urlPrivadaAdmin + "/categoria/listar"}
                                // rota3={urlPrivadaAdmin + "/categoria/listar"}
                                // rota4={urlPrivadaAdmin + "/categoria/listar"}
                                // rota5={urlPrivadaAdmin + "/categoria/excluir"}
                                />}
                        >

                            <Route path="criar" element={
                                <CriarCategoria />
                            }>

                            </Route>


                            <Route path="listar" element={
                                <TabelaCategoria />
                            }>

                            </Route>



                        </Route>

                        <Route path="bilhete"
                            element={
                                <Estrutura
                                    estilo={"estiloEstrutura3"}
                                    infoGeral={""}
                                    titulo="Bilhete"
                                    lista1="Criar"
                                    lista2="Listar"
                                    // lista3="Listar"
                                    // lista4="Excluir"
                                    // lista5="Excluir"
                                    rota1={urlPrivadaAdmin + "/bilhete/criar"}
                                    rota2={urlPrivadaAdmin + "/bilhete/listar"}
                                // rota3={urlPrivadaAdmin + "/bilhete/listar"}
                                // rota4={urlPrivadaAdmin + "/bilhete/listar"}
                                // rota5={urlPrivadaAdmin + "/bilhete/excluir"}
                                />}
                        >

                            <Route
                                path="criar"
                                element={
                                    <CriarTipoBilhete />
                                }>

                            </Route>

                            <Route path="listar" element={
                                <TabelaTipoBilhete />
                            }>

                            </Route>


                        </Route>

                        <Route path="administradores"
                            element={
                                <Estrutura
                                    estilo={"estiloEstrutura3"}
                                    infoGeral={""}
                                    titulo="Administradores"
                                    lista1="Listar"
                                    // lista2="Editar"
                                    // lista3="Listar"
                                    // lista4="Excluir"
                                    // lista5="Excluir"
                                    rota1={urlPrivadaAdmin + "/Administradores/listar"}
                                // rota2={urlPrivadaAdmin + "/categoria/listar"}
                                // rota3={urlPrivadaAdmin + "/categoria/listar"}
                                // rota4={urlPrivadaAdmin + "/categoria/listar"}
                                // rota5={urlPrivadaAdmin + "/categoria/excluir"}
                                />}
                        >



                            <Route path="listar" element={
                                <TabelaAdministradores />
                            }>

                            </Route>
                        </Route>


                        <Route path="participantes"
                            element={
                                <Estrutura
                                    estilo={"estiloEstrutura3"}
                                    infoGeral={""}
                                    titulo="Participantes"
                                    lista1="Listar"
                                    // lista2="Editar"
                                    // lista3="Listar"
                                    // lista4="Excluir"
                                    // lista5="Excluir"
                                    rota1={urlPrivadaAdmin + "/participantes/listar"}
                                // rota2={urlPrivadaAdmin + "/categoria/listar"}
                                // rota3={urlPrivadaAdmin + "/categoria/listar"}
                                // rota4={urlPrivadaAdmin + "/categoria/listar"}
                                // rota5={urlPrivadaAdmin + "/categoria/excluir"}
                                />}
                        >



                            <Route path="listar" element={
                                <TabelaParticipante />
                            }>

                            </Route>
                        </Route>

                        <Route path="organizadores"
                            element={
                                <Estrutura
                                    estilo={"estiloEstrutura3"}
                                    infoGeral={""}
                                    titulo="Organizadores"
                                    lista1="Listar"
                                    // lista2="Editar"
                                    // lista3="Listar"
                                    // lista4="Excluir"
                                    // lista5="Excluir"
                                    rota1={urlPrivadaAdmin + "/organizadores/listar"}
                                // rota2={urlPrivadaAdmin + "/categoria/listar"}
                                // rota3={urlPrivadaAdmin + "/categoria/listar"}
                                // rota4={urlPrivadaAdmin + "/categoria/listar"}
                                // rota5={urlPrivadaAdmin + "/categoria/excluir"}
                                />}
                        >



                            <Route path="listar" element={
                                <TabelaOrganizador />
                            }>

                            </Route>
                        </Route>

                        <Route path="evento"
                            element={
                                <Estrutura
                                    estilo={"estiloEstrutura3"}
                                    infoGeral={""}
                                    titulo="Evento"
                                    lista1="Publicados"
                                    lista2="A espera"
                                    lista3="Banidos"
                                    lista4="Aprovar compras"
                                    lista5={"Compras aprovadas"}
                                    lista8={"Pagamento"}
                                    // lista4="Informações do evento"
                                    rota1={urlPrivadaAdmin + "/evento/publicado"}
                                    rota2={urlPrivadaAdmin + "/evento/espera"}
                                    rota3={urlPrivadaAdmin + "/evento/banidos"}
                                    rota4={urlPrivadaAdmin + "/evento/aprovarPagamento"}
                                    rota5={urlPrivadaAdmin + "/evento/pagamentosAprovados"}
                                    rota6={urlPrivadaAdmin + "/evento/aprovarPagamento/informacaoCompra/:idReserva"}
                                    rota7={urlPrivadaAdmin + "/evento/informacoes/:idEvento"}
                                    rota8={urlPrivadaAdmin + "/evento/pagamento"}


                                />}
                        >

                            <Route path="publicado" element={
                                <TabelaEventoPublicado />
                            }></Route>


                            <Route path="pagamento" element={
                                <EstruturaPagamento
                                    estilo={""}
                                    lista1={"Não feito"}
                                    lista2={"Feito"}
                                    rota1={urlPrivadaAdmin + "/evento/pagamento/naoFeito"}
                                    rota2={urlPrivadaAdmin + "/evento/pagamento/feito"}
                                ></EstruturaPagamento>
                            }>


                                <Route path="naoFeito"
                                    element={<PagamentoNaoFeito />}>
                                </Route>

                                <Route path="feito"
                                    element={<PagamentoFeito />}>
                                </Route>

                            </Route>




                            <Route path="espera" element={
                                <TabelaEventoAespera />
                            }></Route>

                            <Route path="banidos" element={
                                <TabelaEventoBanido />
                            }></Route>

                            <Route path="aprovarPagamento" element={
                                <TabelaEventoAprovarPagamentoParticipante />
                            }></Route>

                            <Route path="pagamentosAprovados" element={
                                <TabelaPagamentoAprovado />
                            }></Route>

                            <Route path="informacaoCompra/:idReserva" element={
                                <InformacaoCompraParticipante />
                            }></Route>


                            <Route path="informacoes/:idUtilizador/:idEvento" element={
                                <InformacaoEventoAdmin />
                                // <h1>Informações do evento</h1>
                            }></Route>

                        </Route>

                        <Route path="estatistica"
                            element={<EstatisticaHome />}
                        ></Route>

                        <Route path="perfil"
                            element={
                                <Estrutura
                                    estilo={"estiloEstrutura"}
                                    infoGeral={""}
                                    titulo="Informação da conta"
                                    lista1={"Informações"}
                                    lista2={"Editar"}
                                    lista3={"Senha"}
                                    lista4={"Sair"}
                                    // lista5={"Foto"}



                                    rota1={urlPrivadaAdmin + "/perfil/informacao"}
                                    rota2={urlPrivadaAdmin + "/perfil/editar"}
                                    rota3={urlPrivadaAdmin + "/perfil/senha"}
                                    rota4={urlPrivadaAdmin + "/perfil/sair"}
                                // rota5={urlPrivadaAdmin + "/perfil/foto"}


                                />
                            }
                        >

                            <Route
                                path="informacao"
                                element={<PerfilInfo />}
                            />


                            <Route
                                path="editar"
                                element={<PerfilEditar />}
                            />

                            <Route
                                path="senha"
                                element={<AlterarSenha />}

                            />

                            {/* <Route
                                path="foto"
                                element={<AdicionarFotoPerfil />}

                            /> */}

                            <Route
                                path="sair"
                                element={
                                    <SairAdmin />
                                }

                            />





                        </Route>





                    </Route>
                </Route>

            </Routes>


        </>
    )
}