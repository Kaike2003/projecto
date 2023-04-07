/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Layout from "../components/Layout/index"
import PaginaPrincipal from "../pages/PaginaPrincipal/PaginaPrincipal";
import Concerto from "../pages/tipo_Eventos/Concerto/Concerto"
import Festa from "../pages/tipo_Eventos/Festa/Festa";
import Teatro from "../pages/tipo_Eventos/Teatro/Teatro"
import Espetaculo from "../pages/tipo_Eventos/Espetaculo/Espetaculo";
import Visualizar_ingresso from "../pages/Visualizar_ingresso/Visualizar_ingresso";
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
import Home from "../pages/dashboard/components/estrutura/Home";
import Perfil from "../pages/dashboard/components/estrutura/Perfil";
import { ContextDashboard } from "../context/Context";


import Foto from "../pages/dashboard/components/estrutura/Foto";
import BilheteEstrutura from "../pages/dashboard/components/estrutura/BilheteEstrutura";
import Orador from "../pages/dashboard/components/estrutura/Orador";
import PalestranteEstrutura from "../pages/dashboard/components/estrutura/Palestrante";
import TabelaEstrutura from "../pages/dashboard/components/estrutura/TabelaEstrutura";
import TabelaPalestrante from "../pages/dashboard/components/estrutura/Tabelas/TabelaPalestrante";
import TabelaOrador from "../pages/dashboard/components/estrutura/Tabelas/TabelaOrador";
import TabelaBilhete from "../pages/dashboard/components/estrutura/Tabelas/TabelaBilhete";
import { CriarParticipante } from "../pages/Participante/CriarParticipante";
import AutenticarParticipante from "../pages/Participante/AutenticarParticipante";
import { LoginParticipante } from "../pages/Participante/LoginParticipante";
import RecuperarSenhaParticipante from "../pages/Participante/RecuperarSenhaParticipante";
import { CriarOrganizador } from "../pages/Organizador/CriarOrganizador";
import { LoginOrganizador } from "../pages/Organizador/LoginOrganizador";
import { RotasPrivadasAdmin, RotasPrivadasOrganizador } from "./RotasPrivadas";
import AutenticarOrganizador from "../pages/Organizador/AutenticarOrganizador";
import RecuperarSenhaOrganizador from "../pages/Organizador/RecuperarSenhaOrganizador";
import CriarEvento from "../pages/dashboard/components/estrutura/evento/CriarEvento";
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



//  Context Dashboard
// CP - Context proprs ou Context propriedade

export default function Rotas() {

    const url = "reservaOnline/"
    const urlPrivadaOrganizador = "/reservaOnline/dashboard"
    const urlPrivadaAdmin = "/reservaOnline/dashboard/admin"

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

                <Route path="perfil" element={<h1>Perfil</h1>} >


                </Route>




                { /* Participante*/}
                <Route
                    path="participante/criarContaParticipante"
                    element={<CriarParticipante />}
                />

                <Route
                    path="participante/verificarContaPalestrante"
                    element={<AutenticarParticipante />}
                />

                <Route
                    path="participante/loginParticipante"
                    element={<LoginParticipante />}
                />

                <Route
                    path="participante/recuperarSenha"
                    element={<RecuperarSenhaParticipante />}
                />


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
                        <ContextDashboard.Provider
                            value={{
                                CPadmin: false,
                                CPli: ""
                            }} >
                            <DashboardLayout />
                        </ContextDashboard.Provider>
                    }>

                        <Route index
                            element={
                                <Home
                                    titulo="Olá, Nome do usuário"
                                />}
                        />

                        <Route index path="home"
                            element={
                                <Home
                                    titulo="Olá, Nome do usuário"
                                />}
                        />



                        <Route path="evento"
                            element={
                                <Estrutura
                                    infoGeral={""}
                                    titulo="Evento"
                                    lista1="Criar"
                                    // lista2="Foto"
                                    // lista3="Editar"
                                    lista4="Listar"
                                    // lista5="Excluir"
                                    rota1={urlPrivadaOrganizador + "/evento/criar"}
                                    rota2={urlPrivadaOrganizador + "/evento/foto"}
                                    rota3={urlPrivadaOrganizador + "/evento/editar"}
                                    rota4={urlPrivadaOrganizador + "/evento/listar"}
                                    rota5={urlPrivadaOrganizador + "/evento/excluir"}

                                />}
                        >

                            <Route path="criar" element={
                                <CriarEvento />
                            }>

                            </Route>

                            <Route path="listar" element={
                                <ListarEvento />
                            }>

                            </Route>


                        </Route>


                        <Route path="estatistica"
                            element="Olá mundo"
                        >

                        </Route>

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
                        <ContextDashboard.Provider
                            value={{
                                CPadmin: true,
                                CPli: ""
                            }} >
                            <DashboardAdmin />
                        </ContextDashboard.Provider>
                    }>

                        <Route index
                            element={
                                <Estrutura
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

                            <Route path="criar" element={
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
                                    infoGeral={""}
                                    titulo="Participantes"
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
                                    infoGeral={""}
                                    titulo="Evento"
                                    lista1="Publicados"
                                    // lista2="Banir"
                                    lista3="A espera"
                                    lista4="Banidos"
                                    // lista5="Excluir"
                                    rota1={urlPrivadaAdmin + "/evento/publicado"}
                                    // rota2={urlPrivadaAdmin + "/evento/banir"}
                                    rota3={urlPrivadaAdmin + "/evento/espera"}
                                    rota4={urlPrivadaAdmin + "/evento/banidos"}
                                // rota5={urlPrivadaAdmin + "/bilhete/excluir"}
                                />}
                        >

                            <Route path="publicado" element={
                                <TabelaEventoPublicado />
                            }></Route>



                            <Route path="espera" element={
                                <TabelaEventoAespera />
                            }></Route>

                            <Route path="banidos" element={
                                <TabelaEventoBanido />
                            }></Route>

                        </Route>

                        <Route path="estatistica"
                            element="Olá mundo"
                        ></Route>

                        <Route path="perfil"
                            element={
                                <Estrutura
                                    infoGeral={""}
                                    titulo="Informação da conta"
                                    lista1={"Informações"}
                                    lista2={"Editar"}
                                    lista3={"Senha"}
                                    lista4={"foto"}
                                    lista5={"Sair"}
                                    rota1={urlPrivadaAdmin + "/perfil/informacao"}
                                    rota2={urlPrivadaAdmin + "/perfil/editar"}
                                    rota3={urlPrivadaAdmin + "/perfil/senha"}
                                    rota4={urlPrivadaAdmin + "/perfil/foto"}
                                    rota5={urlPrivadaAdmin + "/perfil/sair"}
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

                            <Route
                                path="foto"
                                element={<AdicionarFotoPerfil />}

                            />

                            <Route
                                path="sair"
                                element={<SairAdmin />}

                            />





                        </Route>





                    </Route>
                </Route>

            </Routes>


        </>
    )
}