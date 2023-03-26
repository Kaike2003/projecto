/* eslint-disable react/jsx-pascal-case */
import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, useParams } from "react-router-dom";
import axios from "axios";

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
import Login from "../pages/Login/Login";
import Palestrante from "../pages/Palestrante/Palestrante";

import Bilhete from "../pages/detalhe_Bilhete/Bilhete";

import Historico from "../pages/dashboard/components/Historico";
import Dashboard from "../pages/dashboard/components/Dashboard/Dashboard";

import Estrutura from "../pages/dashboard/components/estrutura/Estrutura";
import Criar from "../pages/dashboard/components/estrutura/Criar";
import Editar from "../pages/dashboard/components/estrutura/Editar"
import DashboardLayout from "../components/Dashboard/DashboardLayout";
import Home from "../pages/dashboard/components/estrutura/Home";
import Perfil from "../pages/dashboard/components/estrutura/Perfil";
import { ContextDashboard, ContextUserId } from "../context/Context";


import { useContext } from "react";
import Foto from "../pages/dashboard/components/estrutura/Foto";
import BilheteEstrutura from "../pages/dashboard/components/estrutura/BilheteEstrutura";
import Orador from "../pages/dashboard/components/estrutura/Orador";
import PalestranteEstrutura from "../pages/dashboard/components/estrutura/Palestrante";
import TabelaOrador from "../pages/dashboard/components/Tabela/components/TabelaOrador";


//  Context Dashboard
// CP - Context proprs ou Context propriedade

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

                <Route path="perfil" element={<h1>Perfil</h1>} >


                </Route>
                <Route path="login" element={<Login />} />


                {/* Dashboard do organizador */}
                <Route>
                    <Route path="organizador"
                        element={

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
                                    rota1="/organizador/evento/criar"
                                    rota2="/organizador/evento/foto"
                                    rota3="/organizador/evento/editar"
                                    rota4="/organizador/evento/listar"
                                    rota5="/organizador/evento/excluir"

                                />}
                        >

                            <Route path="criar"
                                element={
                                    <Criar

                                        /* Grupo 1 - informação 1 */
                                        Pinformacao1="1. Informações básicas"
                                        PsubInformacao1="
                                    Adicione as principais informações do evento."
                                        PnomeBotao="Criar"

                                        /* Grupo 1 - inputs e select*/
                                        Pselect1=""
                                        PselectOption1=""
                                        PselectName="nomeCategoria"
                                        Pselect2="Categoria do evento"
                                        PselectOption2="Selecionar a categoria"
                                        PspanNomeInput1="Nome do evento"
                                        PnameInput1="nomeEvento"
                                        PplaceholderInput1="Nomo do vento"
                                        PtipoInput1="text"



                                        /* Grupo 2 - informação 2 */
                                        Pinformacao2="2. Informe o endereço ou o nome do local do evento"
                                        PsubInformacao2="Adicione os principais endereço do evento"

                                        /* Grupo 2 - inputs e select*/
                                        PspanNomeInput2="Nome do local"
                                        PnameInput2="nomeLocal"
                                        PplaceholderInput2="Nome do local"
                                        PtipoInput2="text"

                                        PspanNomeInput3="Bairro"
                                        PnameInput3="nomeBairro"
                                        PplaceholderInput3="Nome do bairro"
                                        PtipoInput3="text"


                                        PspanNomeInput4="Munícipio"
                                        PnameInput4="nomeMunicipio"
                                        PplaceholderInput4="Nome do munícipio"
                                        PtipoInput4="text"

                                        /* Grupo 3 - informação 3 */
                                        Pinformacao3="3. Descriçao do evento"
                                        PsubInformacao3="Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!"
                                        /* Grupo 3 - textearea */
                                        PtexteareaDisplay=""
                                        PnameTextearea="nomeTextearea"
                                        /* Grupo 4 - informação 4*/
                                        Pinformacao4="4. Data e horário"
                                        PsubInformacao4="Informe aos participantes quando seu evento vai acontecer."

                                        /* Grupo 4 - inputs e selects */

                                        PspanNomeInput5="Data de Início"
                                        PnameInput5="dataInicio"
                                        PtipoInput5="date"

                                        PspanNomeInput6="Hora de Início"
                                        PnameInput6="horaInicio"
                                        PtipoInput6="time"

                                        PspanNomeInput7="Data de Término"
                                        PnameInput7="dataTermino"
                                        PtipoInput7="date"

                                        PspanNomeInput8="Hora de Término"
                                        PnameInput8="horaTermino"
                                        PtipoInput8="time"

                                        //! Display de todas informações
                                        PInformacao1Display=""
                                        PInformacao2Display=""
                                        PInformacao3Display=""
                                        PInformacao4Display=""


                                        //! Display de todas select
                                        PselectDisplay1="none"
                                        PselectDisplay2=""

                                        //! Display de todas inputs
                                        PInput1Display=""
                                        PInput2Display=""
                                        PInput3Display=""
                                        PInput4Display=""
                                        PInput5Display=""
                                        PInput6Display=""
                                        PInput7Display=""
                                        PInput8Display=""
                                        PinputFileDisplay="none"
                                        PtabelaDisplay="none"

                                    />} />


                            <Route path="foto"
                                element={
                                    <Criar
                                        /* Grupo 1 - informação 1 */
                                        Pinformacao1="1. Informações básicas"
                                        PsubInformacao1="
                                        Formato JPEG ou PNG de no máximo 2MB."
                                        PnomeBotao="Enviar"

                                        /* Grupo 1 - inputs e select*/
                                        Pselect1=""
                                        PselectOption1=""
                                        Pselect2="Evento"
                                        PselectOption2="Evento"
                                        PspanNomeInput1="Nome do evento"
                                        PnameInput1=""
                                        PplaceholderInput1="Nomo do vento"
                                        PtipoInput1="text"



                                        /* Grupo 2 - informação 2 */
                                        Pinformacao2="2. Informe o endereço ou o nome do local do evento"
                                        PsubInformacao2="Adicione os principais endereço do evento"

                                        /* Grupo 2 - inputs e select*/
                                        PspanNomeInput2="Nome do local"
                                        PnameInput2=""
                                        PplaceholderInput2="Nome do local"
                                        PtipoInput2="text"

                                        PspanNomeInput3="Bairro"
                                        PnameInput3=""
                                        PplaceholderInput3="Nome do bairro"
                                        PtipoInput3="text"


                                        PspanNomeInput4="Munícipio"
                                        PnameInput4=""
                                        PplaceholderInput4="Nome do munícipio"
                                        PtipoInput4="text"

                                        /* Grupo 3 - informação 3 */
                                        Pinformacao3="3. Descriçao do evento"
                                        PsubInformacao3="Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!"
                                        /* Grupo 3 - textearea */

                                        /* Grupo 4 - informação 4*/
                                        Pinformacao4="4. Data e horário"
                                        PsubInformacao4="Informe aos participantes quando seu evento vai acontecer."

                                        /* Grupo 4 - inputs e selects */

                                        PspanNomeInput5="Data de Início"
                                        PnameInput5=""
                                        PtipoInput5="date"

                                        PspanNomeInput6="Hora de Início"
                                        PnameInput6=""
                                        PtipoInput6="time"

                                        PspanNomeInput7="Data de Término"
                                        PnameInput7=""
                                        PtipoInput7="date"

                                        PspanNomeInput8="Hora de Término"
                                        PnameInput8=""
                                        PtipoInput8="time"

                                        //! Display de todas informações
                                        PInformacao1Display=""
                                        PInformacao2Display="none"
                                        PInformacao3Display="none"
                                        PInformacao4Display="none"


                                        //! Display de todas textearea
                                        PtexteareaDisplay="none"




                                        //! Display de todas select
                                        PselectDisplay1="none"
                                        PselectDisplay2=""

                                        //! Display de todas inputs
                                        PInput1Display="none"
                                        PInput2Display="none"
                                        PInput3Display="none"
                                        PInput4Display="none"
                                        PInput5Display="none"
                                        PInput6Display="none"
                                        PInput7Display="none"
                                        PInput8Display="none"
                                        PinputFileDisplay=""
                                        PtabelaDisplay="none"


                                    />} />


                            <Route path="editar"
                                element={
                                    <Criar
                                        /* Grupo 1 - informação 1 */
                                        Pinformacao1="1. Informações básicas"
                                        PsubInformacao1="
                                     Adicione as principais informações do evento."
                                        PnomeBotao="Salvar"

                                        /* Grupo 1 - inputs e select*/
                                        Pselect1="Evento"
                                        PselectOption1="Selecionar evento"
                                        Pselect2="Categoria do evento"
                                        PselectOption2="Selecionar categoria"
                                        PspanNomeInput1="Nome do evento"
                                        PnameInput1=""
                                        PplaceholderInput1="Nomo do vento"
                                        PtipoInput1="text"



                                        /* Grupo 2 - informação 2 */
                                        Pinformacao2="2. Informe o endereço ou o nome do local do evento"
                                        PsubInformacao2="Adicione os principais endereço do evento"

                                        /* Grupo 2 - inputs e select*/
                                        PspanNomeInput2="Nome do local"
                                        PnameInput2=""
                                        PplaceholderInput2="Nome do local"
                                        PtipoInput2="text"

                                        PspanNomeInput3="Bairro"
                                        PnameInput3=""
                                        PplaceholderInput3="Nome do bairro"
                                        PtipoInput3="text"


                                        PspanNomeInput4="Munícipio"
                                        PnameInput4=""
                                        PplaceholderInput4="Nome do munícipio"
                                        PtipoInput4="text"

                                        /* Grupo 3 - informação 3 */
                                        Pinformacao3="3. Descriçao do evento"
                                        PsubInformacao3="Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!"
                                        /* Grupo 3 - textearea */
                                        PtexteareaDisplay=""

                                        /* Grupo 4 - informação 4*/
                                        Pinformacao4="4. Data e horário"
                                        PsubInformacao4="Informe aos participantes quando seu evento vai acontecer."

                                        /* Grupo 4 - inputs e selects */

                                        PspanNomeInput5="Data de Início"
                                        PnameInput5=""
                                        PtipoInput5="date"

                                        PspanNomeInput6="Hora de Início"
                                        PnameInput6=""
                                        PtipoInput6="time"

                                        PspanNomeInput7="Data de Término"
                                        PnameInput7=""
                                        PtipoInput7="date"

                                        PspanNomeInput8="Hora de Término"
                                        PnameInput8=""
                                        PtipoInput8="time"

                                        //! Display de todas informações
                                        PInformacao1Display=""
                                        PInformacao2Display=""
                                        PInformacao3Display=""
                                        PInformacao4Display=""

                                        //! Display de todas select
                                        PselectDisplay1=""
                                        PselectDisplay2=""

                                        //! Display de todas inputs
                                        PInput1Display=""
                                        PInput2Display=""
                                        PInput3Display=""
                                        PInput4Display=""
                                        PInput5Display=""
                                        PInput6Display=""
                                        PInput7Display=""
                                        PInput8Display=""
                                        PinputFileDisplay="none"
                                        PtabelaDisplay="none"
                                    />} /> */


                            <Route
                                path="listar"
                                element={<Criar
                                    /* Grupo 1 - informação 1 */
                                    Pinformacao1="1. Informações básicas"
                                    PsubInformacao1="
                                      Adicione as principais informações do evento."
                                    PnomeBotao="Salvar"

                                    /* Grupo 1 - inputs e select*/
                                    Pselect1="Evento"
                                    PselectOption1="Selecionar evento"
                                    Pselect2="Categoria do evento"
                                    PselectOption2="Selecionar categoria"
                                    PspanNomeInput1="Nome do evento"
                                    PnameInput1=""
                                    PplaceholderInput1="Nomo do vento"
                                    PtipoInput1="text"



                                    /* Grupo 2 - informação 2 */
                                    Pinformacao2="2. Informe o endereço ou o nome do local do evento"
                                    PsubInformacao2="Adicione os principais endereço do evento"

                                    /* Grupo 2 - inputs e select*/
                                    PspanNomeInput2="Nome do local"
                                    PnameInput2=""
                                    PplaceholderInput2="Nome do local"
                                    PtipoInput2="text"

                                    PspanNomeInput3="Bairro"
                                    PnameInput3=""
                                    PplaceholderInput3="Nome do bairro"
                                    PtipoInput3="text"


                                    PspanNomeInput4="Munícipio"
                                    PnameInput4=""
                                    PplaceholderInput4="Nome do munícipio"
                                    PtipoInput4="text"

                                    /* Grupo 3 - informação 3 */
                                    Pinformacao3="3. Descriçao do evento"
                                    PsubInformacao3="Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!"
                                    /* Grupo 3 - textearea */
                                    PtexteareaDisplay="none"

                                    /* Grupo 4 - informação 4*/
                                    Pinformacao4="4. Data e horário"
                                    PsubInformacao4="Informe aos participantes quando seu evento vai acontecer."

                                    /* Grupo 4 - inputs e selects */

                                    PspanNomeInput5="Data de Início"
                                    PnameInput5=""
                                    PtipoInput5="date"

                                    PspanNomeInput6="Hora de Início"
                                    PnameInput6=""
                                    PtipoInput6="time"

                                    PspanNomeInput7="Data de Término"
                                    PnameInput7=""
                                    PtipoInput7="date"

                                    PspanNomeInput8="Hora de Término"
                                    PnameInput8=""
                                    PtipoInput8="time"

                                    //! Display de todas informações
                                    PInformacao1Display="none"
                                    PInformacao2Display="none"
                                    PInformacao3Display="none"
                                    PInformacao4Display="none"

                                    //! Display de todas select
                                    PselectDisplay1="none"
                                    PselectDisplay2="none"

                                    //! Display de todas inputs
                                    PInput1Display="none"
                                    PInput2Display="none"
                                    PInput3Display="none"
                                    PInput4Display="none"
                                    PInput5Display="none"
                                    PInput6Display="none"
                                    PInput7Display="none"
                                    PInput8Display="none"
                                    PinputFileDisplay="none"
                                    PtabelaDisplay=""

                                />}

                            >

                            </Route>

                            <Route path="excluir"
                                element={
                                    <Criar
                                        /* Grupo 1 - informação 1 */
                                        Pinformacao1="1. Exclua evento"
                                        PsubInformacao1="
                                    Pode excluir evento 2 dias antes de começar."
                                        PnomeBotao="Excluir"

                                        /* Grupo 1 - inputs e select*/
                                        PselectDisplay1="none"
                                        Pselect1=""
                                        PselectOption1=""
                                        PselectDisplay2=""
                                        Pselect2="Eventos"
                                        PselectOption2="eventos"
                                        PspanNomeInput1="Nome do evento"
                                        PnameInput1=""
                                        PplaceholderInput1="Nomo do vento"
                                        PtipoInput1="text"



                                        /* Grupo 2 - informação 2 */
                                        Pinformacao2="2. Informe o endereço ou o nome do local do evento"
                                        PsubInformacao2="Adicione os principais endereço do evento"

                                        /* Grupo 2 - inputs e select*/
                                        PspanNomeInput2="Nome do local"
                                        PnameInput2=""
                                        PplaceholderInput2="Nome do local"
                                        PtipoInput2="text"

                                        PspanNomeInput3="Bairro"
                                        PnameInput3=""
                                        PplaceholderInput3="Nome do bairro"
                                        PtipoInput3="text"


                                        PspanNomeInput4="Munícipio"
                                        PnameInput4=""
                                        PplaceholderInput4="Nome do munícipio"
                                        PtipoInput4="text"

                                        /* Grupo 3 - informação 3 */
                                        Pinformacao3="3. Descriçao do evento"
                                        PsubInformacao3="Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!"
                                        /* Grupo 3 - textearea */
                                        PtexteareaDisplay="none"

                                        /* Grupo 4 - informação 4*/
                                        Pinformacao4="4. Data e horário"
                                        PsubInformacao4="Informe aos participantes quando seu evento vai acontecer."

                                        /* Grupo 4 - inputs e selects */

                                        PspanNomeInput5="Data de Início"
                                        PnameInput5=""
                                        PtipoInput5="date"

                                        PspanNomeInput6="Hora de Início"
                                        PnameInput6=""
                                        PtipoInput6="time"

                                        PspanNomeInput7="Data de Término"
                                        PnameInput7=""
                                        PtipoInput7="date"

                                        PspanNomeInput8="Hora de Término"
                                        PnameInput8=""
                                        PtipoInput8="time"

                                        //! Display de todas informações
                                        PInformacao1Display=""
                                        PInformacao2Display="none"
                                        PInformacao3Display="none"
                                        PInformacao4Display="none"




                                        //! Display de todas select

                                        //! Display de todas inputs
                                        PInput1Display="none"
                                        PInput2Display="none"
                                        PInput3Display="none"
                                        PInput4Display="none"
                                        PInput5Display="none"
                                        PInput6Display="none"
                                        PInput7Display="none"
                                        PInput8Display="none"
                                        PinputFileDisplay="none"
                                        PtabelaDisplay="none"
                                    />} />



                        </Route>



                        <Route path="detalhe/"
                            element={
                                <Estrutura
                                    infoGeral={"none"}
                                    titulo="Detalhe"
                                    lista1="Editar evento"
                                    lista2="Foto"
                                    lista3="Bilhete"
                                    lista4="Orador"
                                    lista5="Palestrante"
                                    rota1="/organizador/detalhe/editar/1234"
                                    rota2={`/organizador/detalhe/foto/123`}
                                    rota3="/organizador/evento/editar"
                                    rota4="/organizador/evento/listar"
                                    rota5="/organizador/evento/excluir"
                                />} >

                            <Route path="listar/:id"
                            element={
                                <TabelaOrador></TabelaOrador>

                            }
                            >

                            </Route>

                            <Route path="bilhete/:id"


                                element={<BilheteEstrutura

                                    /* Grupo 1 - informação 1 */
                                    Pinformacao1="1. Informações básicas"
                                    PsubInformacao1="
                                 Adicione as principais informações do bilhete."
                                    PnomeBotao="Criar"

                                    /* Grupo 1 - inputs e select*/
                                    Pselect1=""
                                    PselectOption1=""
                                    PselectName="tipoBilhete"
                                    Pselect2="Tipo de bilhete"
                                    PselectOption2="Selecionar tipo de bilhete"
                                    PspanNomeInput1="Nome do evento"
                                    PnameInput1="nomeBilhete"
                                    PplaceholderInput1="Nome do bilhete"
                                    PtipoInput1="text"



                                    /* Grupo 2 - informação 2 */
                                    Pinformacao2="2. Informe o endereço ou o nome do local do evento"
                                    PsubInformacao2="Adicione os principais endereço do evento"

                                    /* Grupo 2 - inputs e select*/
                                    PspanNomeInput2="Quantidade de bilhetes"
                                    PnameInput2="quantidadeBilhete"
                                    PplaceholderInput2="Quantidade de bilhete"
                                    PtipoInput2="number"

                                    PspanNomeInput3="Data de inicio"
                                    PnameInput3="dataInicioBilhete"
                                    PplaceholderInput3="Nome do bairro"
                                    PtipoInput3="date"


                                    PspanNomeInput4="Data de termino"
                                    PnameInput4="dataTerminoBilhete"
                                    PplaceholderInput4="Nome do munícipio"
                                    PtipoInput4="date"

                                    /* Grupo 3 - informação 3 */
                                    Pinformacao3="3. Descriçao do evento"
                                    PsubInformacao3="Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!"
                                    /* Grupo 3 - textearea */
                                    PtexteareaDisplay="none"
                                    PnameTextearea="nomeTextearea"
                                    /* Grupo 4 - informação 4*/
                                    Pinformacao4="4. Data e horário"
                                    PsubInformacao4="Informe aos participantes quando seu evento vai acontecer."

                                    /* Grupo 4 - inputs e selects */

                                    PspanNomeInput5="Data de Início"
                                    PnameInput5="dataInicio"
                                    PtipoInput5="date"

                                    PspanNomeInput6="Hora de Início"
                                    PnameInput6="horaInicio"
                                    PtipoInput6="time"

                                    PspanNomeInput7="Data de Término"
                                    PnameInput7="dataTermino"
                                    PtipoInput7="date"

                                    PspanNomeInput8="Hora de Término"
                                    PnameInput8="horaTermino"
                                    PtipoInput8="time"

                                    //! Display de todas informações
                                    PInformacao1Display=""
                                    PInformacao2Display="none"
                                    PInformacao3Display="none"
                                    PInformacao4Display="none"


                                    //! Display de todas select
                                    PselectDisplay1="none"
                                    PselectDisplay2=""

                                    //! Display de todas inputs
                                    PInput1Display=""
                                    PInput2Display=""
                                    PInput3Display=""
                                    PInput4Display=""
                                    PInput5Display="none"
                                    PInput6Display=""
                                    PInput7Display=""
                                    PInput8Display="none"
                                    PinputFileDisplay="none"
                                    PtabelaDisplay="none"
                                />}>








                            </Route>


                            <Route path="orador/:id"


                                element={<Orador

                                    /* Grupo 1 - informação 1 */
                                    Pinformacao1="1. Informações básicas"
                                    PsubInformacao1="
                     Adicione as principais informações do orador."
                                    PnomeBotao="Criar"

                                    /* Grupo 1 - inputs e select*/
                                    Pselect1=""
                                    PselectOption1=""
                                    PselectName="tipoBilhete"
                                    Pselect2="Tipo de bilhete"
                                    PselectOption2="Selecionar tipo de bilhete"
                                    PspanNomeInput1="Nome do orador"
                                    PnameInput1="nomeOrador"
                                    PplaceholderInput1="Nome do orador"
                                    PtipoInput1="text"

                                />}

                            >
                            </Route>

                            <Route path="palestrante/:id"
                                element={
                                    <PalestranteEstrutura
                                        /* Grupo 1 - informação 1 */
                                        Pinformacao1="1. Informações básicas"
                                        PsubInformacao1="
                                Adicione as principais informações do palestrante."
                                        PnomeBotao="Criar"

                                        /* Grupo 1 - inputs e select*/
                                        Pselect1="Evento"
                                        PselectOption1="Selecionar evento"
                                        Pselect2="Categoria do evento"
                                        PselectOption2="Selecionar categoria"
                                        PspanNomeInput1="Nome do palestrante"
                                        PnameInput1="nomePalestrante"
                                        PplaceholderInput1="Nome do palestrante"
                                        PtipoInput1="text"



                                        /* Grupo 2 - informação 2 */
                                        Pinformacao2="2. Informe a quantidade e o preço do bilhete"
                                        PsubInformacao2="Adicione os principais endereço do evento"

                                        /* Grupo 2 - inputs e select*/
                                        PspanNomeInput2="Facebook"
                                        PnameInput2="facebookPalestrante"
                                        PplaceholderInput2="Nome do facebook"
                                        PtipoInput2="text"

                                        PspanNomeInput3="Instagram"
                                        PnameInput3="instagramPalestrante"
                                        PplaceholderInput3="Nome do instagram"
                                        PtipoInput3="texte"


                                        PspanNomeInput4="Youtube"
                                        PnameInput4="youtubePalestrante"
                                        PplaceholderInput4="Nome do canal"
                                        PtipoInput4="text"

                                        /* Grupo 3 - informação 3 */
                                        Pinformacao3="3. Descriçao do evento"
                                        PsubInformacao3="Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!"
                                        /* Grupo 3 - textearea */
                                        PtexteareaDisplay="none"

                                        /* Grupo 4 - informação 4*/
                                        Pinformacao4="3. Data e horário"
                                        PsubInformacao4="Informe aos participantes os bilhetes estão desponiveis."

                                        /* Grupo 4 - inputs e selects */

                                        PspanNomeInput5="Data de Início"
                                        PnameInput5=""
                                        PtipoInput5="date"

                                        PspanNomeInput6="Hora de Início"
                                        PnameInput6=""
                                        PtipoInput6="time"

                                        PspanNomeInput7="Data de Término"
                                        PnameInput7=""
                                        PtipoInput7="date"

                                        PspanNomeInput8="Hora de Término"
                                        PnameInput8=""
                                        PtipoInput8="time"

                                        //! Display de todas informações
                                        PInformacao1Display=""
                                        PInformacao2Display="none"
                                        PInformacao3Display="none"
                                        PInformacao4Display="none"

                                        //! Display de todas select
                                        PselectDisplay1=""
                                        PselectDisplay2="none"


                                        //! Display de todas inputs
                                        PInput1Display=""
                                        PInput2Display=""
                                        PInput3Display=""
                                        PInput4Display=""
                                        PInput5Display="none"
                                        PInput6Display="none"
                                        PInput7Display="none"
                                        PInput8Display="none"
                                        PinputFileDisplay="none"
                                        PtabelaDisplay="none"
                                    />}






                            >
                            </Route>




                            <Route path={`foto/:id`}


                                element={
                                    <Foto
                                        /* Grupo 1 - informação 1 */
                                        Pinformacao1="1. Informações básicas"
                                        PsubInformacao1="
                                        Formato JPEG ou PNG de no máximo 2MB."
                                        PnomeBotao="Enviar"

                                        /* Grupo 1 - inputs e select*/
                                        Pselect1=""
                                        PselectOption1=""
                                        Pselect2="Palestrante"
                                        PselectOption2="Selecionar palestrante"
                                        PspanNomeInput1="Nome do evento"
                                        PnameInput1=""
                                        PplaceholderInput1="Nomo do vento"
                                        PtipoInput1="text"



                                        /* Grupo 2 - informação 2 */
                                        Pinformacao2="2. Informe o endereço ou o nome do local do evento"
                                        PsubInformacao2="Adicione os principais endereço do evento"

                                        /* Grupo 2 - inputs e select*/
                                        PspanNomeInput2="Nome do local"
                                        PnameInput2=""
                                        PplaceholderInput2="Nome do local"
                                        PtipoInput2="text"

                                        PspanNomeInput3="Bairro"
                                        PnameInput3=""
                                        PplaceholderInput3="Nome do bairro"
                                        PtipoInput3="text"


                                        PspanNomeInput4="Munícipio"
                                        PnameInput4=""
                                        PplaceholderInput4="Nome do munícipio"
                                        PtipoInput4="text"

                                        /* Grupo 3 - informação 3 */
                                        Pinformacao3="3. Descriçao do evento"
                                        PsubInformacao3="Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!"
                                        /* Grupo 3 - textearea */

                                        /* Grupo 4 - informação 4*/
                                        Pinformacao4="4. Data e horário"
                                        PsubInformacao4="Informe aos participantes quando seu evento vai acontecer."

                                        /* Grupo 4 - inputs e selects */

                                        PspanNomeInput5="Data de Início"
                                        PnameInput5=""
                                        PtipoInput5="date"

                                        PspanNomeInput6="Hora de Início"
                                        PnameInput6=""
                                        PtipoInput6="time"

                                        PspanNomeInput7="Data de Término"
                                        PnameInput7=""
                                        PtipoInput7="date"

                                        PspanNomeInput8="Hora de Término"
                                        PnameInput8=""
                                        PtipoInput8="time"

                                        //! Display de todas informações
                                        PInformacao1Display=""
                                        PInformacao2Display="none"
                                        PInformacao3Display="none"
                                        PInformacao4Display="none"


                                        //! Display de todas textearea
                                        PtexteareaDisplay="none"




                                        //! Display de todas select
                                        PselectDisplay1="none"
                                        PselectDisplay2="none"

                                        //! Display de todas inputs
                                        PInput1Display="none"
                                        PInput2Display="none"
                                        PInput3Display="none"
                                        PInput4Display="none"
                                        PInput5Display="none"
                                        PInput6Display="none"
                                        PInput7Display="none"
                                        PInput8Display="none"
                                        PinputFileDisplay=""
                                        PtabelaDisplay="none"


                                    />}



                            >

                            </Route>

                            <Route path="editar/:id"

                                element={<Editar

                                    /* Grupo 1 - informação 1 */
                                    Pinformacao1="1. Informações básicas"
                                    PsubInformacao1="
                                 Adicione as principais informações do evento."
                                    PnomeBotao="Editar"

                                    /* Grupo 1 - inputs e select*/
                                    Pselect1=""
                                    PselectOption1=""
                                    PselectName="nomeCategoria"
                                    Pselect2="Categoria do evento"
                                    PselectOption2="Selecionar a categoria"
                                    PspanNomeInput1="Nome do evento"
                                    PnameInput1="nomeEvento"
                                    PplaceholderInput1="Nomo do vento"
                                    PtipoInput1="text"



                                    /* Grupo 2 - informação 2 */
                                    Pinformacao2="2. Informe o endereço ou o nome do local do evento"
                                    PsubInformacao2="Adicione os principais endereço do evento"

                                    /* Grupo 2 - inputs e select*/
                                    PspanNomeInput2="Nome do local"
                                    PnameInput2="nomeLocal"
                                    PplaceholderInput2="Nome do local"
                                    PtipoInput2="text"

                                    PspanNomeInput3="Bairro"
                                    PnameInput3="nomeBairro"
                                    PplaceholderInput3="Nome do bairro"
                                    PtipoInput3="text"


                                    PspanNomeInput4="Munícipio"
                                    PnameInput4="nomeMunicipio"
                                    PplaceholderInput4="Nome do munícipio"
                                    PtipoInput4="text"

                                    /* Grupo 3 - informação 3 */
                                    Pinformacao3="3. Descriçao do evento"
                                    PsubInformacao3="Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!"
                                    /* Grupo 3 - textearea */
                                    PtexteareaDisplay=""
                                    PnameTextearea="nomeTextearea"
                                    /* Grupo 4 - informação 4*/
                                    Pinformacao4="4. Data e horário"
                                    PsubInformacao4="Informe aos participantes quando seu evento vai acontecer."

                                    /* Grupo 4 - inputs e selects */

                                    PspanNomeInput5="Data de Início"
                                    PnameInput5="dataInicio"
                                    PtipoInput5="date"

                                    PspanNomeInput6="Hora de Início"
                                    PnameInput6="horaInicio"
                                    PtipoInput6="time"

                                    PspanNomeInput7="Data de Término"
                                    PnameInput7="dataTermino"
                                    PtipoInput7="date"

                                    PspanNomeInput8="Hora de Término"
                                    PnameInput8="horaTermino"
                                    PtipoInput8="time"

                                    //! Display de todas informações
                                    PInformacao1Display=""
                                    PInformacao2Display=""
                                    PInformacao3Display=""
                                    PInformacao4Display=""


                                    //! Display de todas select
                                    PselectDisplay1="none"
                                    PselectDisplay2=""

                                    //! Display de todas inputs
                                    PInput1Display=""
                                    PInput2Display=""
                                    PInput3Display=""
                                    PInput4Display=""
                                    PInput5Display=""
                                    PInput6Display=""
                                    PInput7Display=""
                                    PInput8Display=""
                                    PinputFileDisplay="none"
                                    PtabelaDisplay="none"
                                />}>
                            </Route>



                        </Route>

                        <Route path="bilhete"
                            element={
                                <Estrutura
                                    infoGeral={""}
                                    titulo="Bilhete"
                                    lista1="Criar"
                                    lista2="Editar"
                                    lista3="Listar"
                                    lista4="Excluir"
                                    rota1="/organizador/bilhete/criar"
                                    rota2="/organizador/bilhete/editar"
                                    rota3="/organizador/bilhete/listar"
                                    rota4={"/organizador/bilhete/excluir"}
                                />}
                        >
                            <Route path="criar"
                                element={
                                    <Criar
                                        /* Grupo 1 - informação 1 */
                                        Pinformacao1="1. Informações básicas"
                                        PsubInformacao1="
                                    Adicione as principais informações do bilhete."
                                        PnomeBotao="Criar"

                                        /* Grupo 1 - inputs e select*/
                                        PselectDisplay1=""
                                        Pselect1="Evento"
                                        PselectOption1="Selecionar evento"
                                        PselectDisplay2=""
                                        Pselect2="Categoria do evento"
                                        PselectOption2="Selecionar categoria"
                                        PspanNomeInput1="Nome do bilhete"
                                        PnameInput1=""
                                        PplaceholderInput1="Nomo do bilhete"
                                        PtipoInput1="text"



                                        /* Grupo 2 - informação 2 */
                                        Pinformacao2="2. Informe a quantidade e o preço do bilhete"
                                        PsubInformacao2="Adicione os principais endereço do evento"

                                        /* Grupo 2 - inputs e select*/
                                        PspanNomeInput2="Quantidade"
                                        PnameInput2=""
                                        PplaceholderInput2="Quantidade de bilhete"
                                        PtipoInput2="number"

                                        PspanNomeInput3="Preço"
                                        PnameInput3=""
                                        PplaceholderInput3="Preço do bilhete"
                                        PtipoInput3="number"


                                        PspanNomeInput4="Munícipio"
                                        PnameInput4=""
                                        PplaceholderInput4="Nome do munícipio"
                                        PtipoInput4="text"

                                        /* Grupo 3 - informação 3 */
                                        Pinformacao3="3. Descriçao do evento"
                                        PsubInformacao3="Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!"
                                        /* Grupo 3 - textearea */
                                        PtexteareaDisplay="none"

                                        /* Grupo 4 - informação 4*/
                                        Pinformacao4="3. Data e horário"
                                        PsubInformacao4="Informe aos participantes os bilhetes estão desponiveis."

                                        /* Grupo 4 - inputs e selects */

                                        PspanNomeInput5="Data de Início"
                                        PnameInput5=""
                                        PtipoInput5="date"

                                        PspanNomeInput6="Hora de Início"
                                        PnameInput6=""
                                        PtipoInput6="time"

                                        PspanNomeInput7="Data de Término"
                                        PnameInput7=""
                                        PtipoInput7="date"

                                        PspanNomeInput8="Hora de Término"
                                        PnameInput8=""
                                        PtipoInput8="time"

                                        //! Display de todas informações
                                        PInformacao1Display=""
                                        PInformacao2Display=""
                                        PInformacao3Display="none"
                                        PInformacao4Display=""

                                        //! Display de todas select

                                        //! Display de todas inputs
                                        PInput1Display=""
                                        PInput2Display=""
                                        PInput3Display=""
                                        PInput4Display="none"
                                        PInput5Display=""
                                        PInput6Display=""
                                        PInput7Display=""
                                        PInput8Display=""
                                        PinputFileDisplay="none"
                                        PtabelaDisplay="none"
                                    />} />

                            <Route path="editar"
                                element={<Criar
                                    /* Grupo 1 - informação 1 */
                                    Pinformacao1="1. Informações básicas"
                                    PsubInformacao1="
                                  Adicione as principais informações do bilhete."
                                    PnomeBotao="Salvar"

                                    /* Grupo 1 - inputs e select*/
                                    PselectDisplay1=""
                                    Pselect1="Evento"
                                    PselectOption1="Selecionar evento"
                                    PselectDisplay2=""
                                    Pselect2="Categoria do evento"
                                    PselectOption2="Selecionar categoria"
                                    PspanNomeInput1="Nome do bilhete"
                                    PnameInput1=""
                                    PplaceholderInput1="Nomo do bilhete"
                                    PtipoInput1="text"



                                    /* Grupo 2 - informação 2 */
                                    Pinformacao2="2. Informe a quantidade e o preço do bilhete"
                                    PsubInformacao2="Adicione os principais endereço do evento"

                                    /* Grupo 2 - inputs e select*/
                                    PspanNomeInput2="Quantidade"
                                    PnameInput2=""
                                    PplaceholderInput2="Quantidade de bilhete"
                                    PtipoInput2="number"

                                    PspanNomeInput3="Preço"
                                    PnameInput3=""
                                    PplaceholderInput3="Preço do bilhete"
                                    PtipoInput3="number"


                                    PspanNomeInput4="Munícipio"
                                    PnameInput4=""
                                    PplaceholderInput4="Nome do munícipio"
                                    PtipoInput4="text"

                                    /* Grupo 3 - informação 3 */
                                    Pinformacao3="3. Descriçao do evento"
                                    PsubInformacao3="Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!"
                                    /* Grupo 3 - textearea */
                                    PtexteareaDisplay="none"

                                    /* Grupo 4 - informação 4*/
                                    Pinformacao4="3. Data e horário"
                                    PsubInformacao4="Informe aos participantes os bilhetes estão desponiveis."

                                    /* Grupo 4 - inputs e selects */

                                    PspanNomeInput5="Data de Início"
                                    PnameInput5=""
                                    PtipoInput5="date"

                                    PspanNomeInput6="Hora de Início"
                                    PnameInput6=""
                                    PtipoInput6="time"

                                    PspanNomeInput7="Data de Término"
                                    PnameInput7=""
                                    PtipoInput7="date"

                                    PspanNomeInput8="Hora de Término"
                                    PnameInput8=""
                                    PtipoInput8="time"

                                    //! Display de todas informações
                                    PInformacao1Display=""
                                    PInformacao2Display=""
                                    PInformacao3Display="none"
                                    PInformacao4Display=""

                                    //! Display de todas select

                                    //! Display de todas inputs
                                    PInput1Display=""
                                    PInput2Display=""
                                    PInput3Display=""
                                    PInput4Display="none"
                                    PInput5Display=""
                                    PInput6Display=""
                                    PInput7Display=""
                                    PInput8Display=""
                                    PinputFileDisplay="none"
                                    PtabelaDisplay="none"
                                />}
                            />

                            <Route
                                path="listar"
                                element={<Criar
                                    /* Grupo 1 - informação 1 */
                                    Pinformacao1="1. Informações básicas"
                                    PsubInformacao1="
                                      Adicione as principais informações do evento."
                                    PnomeBotao="Salvar"

                                    /* Grupo 1 - inputs e select*/
                                    Pselect1="Evento"
                                    PselectOption1="Selecionar evento"
                                    Pselect2="Categoria do evento"
                                    PselectOption2="Selecionar categoria"
                                    PspanNomeInput1="Nome do evento"
                                    PnameInput1=""
                                    PplaceholderInput1="Nomo do vento"
                                    PtipoInput1="text"



                                    /* Grupo 2 - informação 2 */
                                    Pinformacao2="2. Informe o endereço ou o nome do local do evento"
                                    PsubInformacao2="Adicione os principais endereço do evento"

                                    /* Grupo 2 - inputs e select*/
                                    PspanNomeInput2="Nome do local"
                                    PnameInput2=""
                                    PplaceholderInput2="Nome do local"
                                    PtipoInput2="text"

                                    PspanNomeInput3="Bairro"
                                    PnameInput3=""
                                    PplaceholderInput3="Nome do bairro"
                                    PtipoInput3="text"


                                    PspanNomeInput4="Munícipio"
                                    PnameInput4=""
                                    PplaceholderInput4="Nome do munícipio"
                                    PtipoInput4="text"

                                    /* Grupo 3 - informação 3 */
                                    Pinformacao3="3. Descriçao do evento"
                                    PsubInformacao3="Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!"
                                    /* Grupo 3 - textearea */
                                    PtexteareaDisplay="none"

                                    /* Grupo 4 - informação 4*/
                                    Pinformacao4="4. Data e horário"
                                    PsubInformacao4="Informe aos participantes quando seu evento vai acontecer."

                                    /* Grupo 4 - inputs e selects */

                                    PspanNomeInput5="Data de Início"
                                    PnameInput5=""
                                    PtipoInput5="date"

                                    PspanNomeInput6="Hora de Início"
                                    PnameInput6=""
                                    PtipoInput6="time"

                                    PspanNomeInput7="Data de Término"
                                    PnameInput7=""
                                    PtipoInput7="date"

                                    PspanNomeInput8="Hora de Término"
                                    PnameInput8=""
                                    PtipoInput8="time"

                                    //! Display de todas informações
                                    PInformacao1Display="none"
                                    PInformacao2Display="none"
                                    PInformacao3Display="none"
                                    PInformacao4Display="none"

                                    //! Display de todas select
                                    PselectDisplay1="none"
                                    PselectDisplay2="none"

                                    //! Display de todas inputs
                                    PInput1Display="none"
                                    PInput2Display="none"
                                    PInput3Display="none"
                                    PInput4Display="none"
                                    PInput5Display="none"
                                    PInput6Display="none"
                                    PInput7Display="none"
                                    PInput8Display="none"
                                    PinputFileDisplay="none"
                                    PtabelaDisplay=""

                                />}

                            />


                            <Route path="excluir"
                                element={<Criar
                                    /* Grupo 1 - informação 1 */
                                    Pinformacao1="1. Informações básicas"
                                    PsubInformacao1="
                                  Pode excluir bilhete 2 dias antes do evento começar."
                                    PnomeBotao="Excluir"

                                    /* Grupo 1 - inputs e select*/
                                    PselectDisplay1=""
                                    Pselect1="Evento"
                                    PselectOption1="Selecionar evento"
                                    PselectDisplay2=""
                                    Pselect2="Categoria do evento"
                                    PselectOption2="Selecionar categoria"
                                    PspanNomeInput1="Nome do bilhete"
                                    PnameInput1=""
                                    PplaceholderInput1="Nomo do bilhete"
                                    PtipoInput1="text"



                                    /* Grupo 2 - informação 2 */
                                    Pinformacao2="2. Informe a quantidade e o preço do bilhete"
                                    PsubInformacao2="Adicione os principais endereço do evento"

                                    /* Grupo 2 - inputs e select*/
                                    PspanNomeInput2="Quantidade"
                                    PnameInput2=""
                                    PplaceholderInput2="Quantidade de bilhete"
                                    PtipoInput2="number"

                                    PspanNomeInput3="Preço"
                                    PnameInput3=""
                                    PplaceholderInput3="Preço do bilhete"
                                    PtipoInput3="number"


                                    PspanNomeInput4="Munícipio"
                                    PnameInput4=""
                                    PplaceholderInput4="Nome do munícipio"
                                    PtipoInput4="text"

                                    /* Grupo 3 - informação 3 */
                                    Pinformacao3="3. Descriçao do evento"
                                    PsubInformacao3="Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!"
                                    /* Grupo 3 - textearea */
                                    PtexteareaDisplay="none"

                                    /* Grupo 4 - informação 4*/
                                    Pinformacao4="3. Data e horário"
                                    PsubInformacao4="Informe aos participantes os bilhetes estão desponiveis."

                                    /* Grupo 4 - inputs e selects */

                                    PspanNomeInput5="Data de Início"
                                    PnameInput5=""
                                    PtipoInput5="date"

                                    PspanNomeInput6="Hora de Início"
                                    PnameInput6=""
                                    PtipoInput6="time"

                                    PspanNomeInput7="Data de Término"
                                    PnameInput7=""
                                    PtipoInput7="date"

                                    PspanNomeInput8="Hora de Término"
                                    PnameInput8=""
                                    PtipoInput8="time"

                                    //! Display de todas informações
                                    PInformacao1Display=""
                                    PInformacao2Display="none"
                                    PInformacao3Display="none"
                                    PInformacao4Display="none"

                                    //! Display de todas select

                                    //! Display de todas inputs
                                    PInput1Display="none"
                                    PInput2Display="none"
                                    PInput3Display="none"
                                    PInput4Display="none"
                                    PInput5Display="none"
                                    PInput6Display="none"
                                    PInput7Display="none"
                                    PInput8Display="none"
                                    PinputFileDisplay="none"
                                    PtabelaDisplay="none"
                                />}
                            />


                        </Route>


                        <Route path="orador"
                            element={
                                <Estrutura
                                    infoGeral={""}
                                    titulo="Orador"
                                    lista1="Criar"
                                    lista2="Editar"
                                    lista3={"Listar"}
                                    lista4="Excluir"
                                    rota1="/organizador/orador/criar"
                                    rota2="/organizador/orador/editar"
                                    rota3="/organizador/orador/listar"
                                    rota4="/organizador/orador/excluir"
                                />}
                        >

                            <Route path="criar"
                                element={
                                    <Criar
                                        /* Grupo 1 - informação 1 */
                                        Pinformacao1="1. Informações básicas"
                                        PsubInformacao1="
                                    Adicione as principais informações do orador."
                                        PnomeBotao="Criar"

                                        /* Grupo 1 - inputs e select*/
                                        Pselect1="Evento"
                                        PselectOption1="Selecionar evento"
                                        Pselect2="Categoria do evento"
                                        PselectOption2="Selecionar categoria"
                                        PspanNomeInput1="Nome do orador"
                                        PnameInput1=""
                                        PplaceholderInput1="Nomo do bilhete"
                                        PtipoInput1="text"



                                        /* Grupo 2 - informação 2 */
                                        Pinformacao2="2. Informe a quantidade e o preço do bilhete"
                                        PsubInformacao2="Adicione os principais endereço do evento"

                                        /* Grupo 2 - inputs e select*/
                                        PspanNomeInput2="Quantidade"
                                        PnameInput2=""
                                        PplaceholderInput2="Quantidade de bilhete"
                                        PtipoInput2="number"

                                        PspanNomeInput3="Preço"
                                        PnameInput3=""
                                        PplaceholderInput3="Preço do bilhete"
                                        PtipoInput3="number"


                                        PspanNomeInput4="Munícipio"
                                        PnameInput4=""
                                        PplaceholderInput4="Nome do munícipio"
                                        PtipoInput4="text"

                                        /* Grupo 3 - informação 3 */
                                        Pinformacao3="3. Descriçao do evento"
                                        PsubInformacao3="Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!"
                                        /* Grupo 3 - textearea */
                                        PtexteareaDisplay="none"

                                        /* Grupo 4 - informação 4*/
                                        Pinformacao4="3. Data e horário"
                                        PsubInformacao4="Informe aos participantes os bilhetes estão desponiveis."

                                        /* Grupo 4 - inputs e selects */

                                        PspanNomeInput5="Data de Início"
                                        PnameInput5=""
                                        PtipoInput5="date"

                                        PspanNomeInput6="Hora de Início"
                                        PnameInput6=""
                                        PtipoInput6="time"

                                        PspanNomeInput7="Data de Término"
                                        PnameInput7=""
                                        PtipoInput7="date"

                                        PspanNomeInput8="Hora de Término"
                                        PnameInput8=""
                                        PtipoInput8="time"

                                        //! Display de todas informações
                                        PInformacao1Display=""
                                        PInformacao2Display="none"
                                        PInformacao3Display="none"
                                        PInformacao4Display="none"

                                        //! Display de todas select
                                        PselectDisplay1=""
                                        PselectDisplay2="none"


                                        //! Display de todas inputs
                                        PInput1Display=""
                                        PInput2Display="none"
                                        PInput3Display="none"
                                        PInput4Display="none"
                                        PInput5Display="none"
                                        PInput6Display="none"
                                        PInput7Display="none"
                                        PInput8Display="none"
                                        PinputFileDisplay="none"
                                        PtabelaDisplay="none"
                                    />} />

                            <Route path="editar"
                                element={
                                    <Criar
                                        /* Grupo 1 - informação 1 */
                                        Pinformacao1="1. Informações básicas"
                                        PsubInformacao1="
                                    Adicione as principais informações do orador."
                                        PnomeBotao="Salvar"

                                        /* Grupo 1 - inputs e select*/
                                        Pselect1="Evento"
                                        PselectOption1="Selecionar evento"
                                        Pselect2="Categoria do evento"
                                        PselectOption2="Selecionar categoria"
                                        PspanNomeInput1="Nome do orador"
                                        PnameInput1=""
                                        PplaceholderInput1="Nomo do bilhete"
                                        PtipoInput1="text"



                                        /* Grupo 2 - informação 2 */
                                        Pinformacao2="2. Informe a quantidade e o preço do bilhete"
                                        PsubInformacao2="Adicione os principais endereço do evento"

                                        /* Grupo 2 - inputs e select*/
                                        PspanNomeInput2="Quantidade"
                                        PnameInput2=""
                                        PplaceholderInput2="Quantidade de bilhete"
                                        PtipoInput2="number"

                                        PspanNomeInput3="Preço"
                                        PnameInput3=""
                                        PplaceholderInput3="Preço do bilhete"
                                        PtipoInput3="number"


                                        PspanNomeInput4="Munícipio"
                                        PnameInput4=""
                                        PplaceholderInput4="Nome do munícipio"
                                        PtipoInput4="text"

                                        /* Grupo 3 - informação 3 */
                                        Pinformacao3="3. Descriçao do evento"
                                        PsubInformacao3="Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!"
                                        /* Grupo 3 - textearea */
                                        PtexteareaDisplay="none"

                                        /* Grupo 4 - informação 4*/
                                        Pinformacao4="3. Data e horário"
                                        PsubInformacao4="Informe aos participantes os bilhetes estão desponiveis."

                                        /* Grupo 4 - inputs e selects */

                                        PspanNomeInput5="Data de Início"
                                        PnameInput5=""
                                        PtipoInput5="date"

                                        PspanNomeInput6="Hora de Início"
                                        PnameInput6=""
                                        PtipoInput6="time"

                                        PspanNomeInput7="Data de Término"
                                        PnameInput7=""
                                        PtipoInput7="date"

                                        PspanNomeInput8="Hora de Término"
                                        PnameInput8=""
                                        PtipoInput8="time"

                                        //! Display de todas informações
                                        PInformacao1Display=""
                                        PInformacao2Display="none"
                                        PInformacao3Display="none"
                                        PInformacao4Display="none"

                                        //! Display de todas select
                                        PselectDisplay1=""
                                        PselectDisplay2="none"


                                        //! Display de todas inputs
                                        PInput1Display=""
                                        PInput2Display="none"
                                        PInput3Display="none"
                                        PInput4Display="none"
                                        PInput5Display="none"
                                        PInput6Display="none"
                                        PInput7Display="none"
                                        PInput8Display="none"
                                        PinputFileDisplay="none"
                                        PtabelaDisplay="none"
                                    />} />

                            <Route
                                path="listar"
                                element={<Criar
                                    /* Grupo 1 - informação 1 */
                                    Pinformacao1="1. Informações básicas"
                                    PsubInformacao1="
                                      Adicione as principais informações do evento."
                                    PnomeBotao="Salvar"

                                    /* Grupo 1 - inputs e select*/
                                    Pselect1="Evento"
                                    PselectOption1="Selecionar evento"
                                    Pselect2="Categoria do evento"
                                    PselectOption2="Selecionar categoria"
                                    PspanNomeInput1="Nome do evento"
                                    PnameInput1=""
                                    PplaceholderInput1="Nomo do vento"
                                    PtipoInput1="text"



                                    /* Grupo 2 - informação 2 */
                                    Pinformacao2="2. Informe o endereço ou o nome do local do evento"
                                    PsubInformacao2="Adicione os principais endereço do evento"

                                    /* Grupo 2 - inputs e select*/
                                    PspanNomeInput2="Nome do local"
                                    PnameInput2=""
                                    PplaceholderInput2="Nome do local"
                                    PtipoInput2="text"

                                    PspanNomeInput3="Bairro"
                                    PnameInput3=""
                                    PplaceholderInput3="Nome do bairro"
                                    PtipoInput3="text"


                                    PspanNomeInput4="Munícipio"
                                    PnameInput4=""
                                    PplaceholderInput4="Nome do munícipio"
                                    PtipoInput4="text"

                                    /* Grupo 3 - informação 3 */
                                    Pinformacao3="3. Descriçao do evento"
                                    PsubInformacao3="Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!"
                                    /* Grupo 3 - textearea */
                                    PtexteareaDisplay="none"

                                    /* Grupo 4 - informação 4*/
                                    Pinformacao4="4. Data e horário"
                                    PsubInformacao4="Informe aos participantes quando seu evento vai acontecer."

                                    /* Grupo 4 - inputs e selects */

                                    PspanNomeInput5="Data de Início"
                                    PnameInput5=""
                                    PtipoInput5="date"

                                    PspanNomeInput6="Hora de Início"
                                    PnameInput6=""
                                    PtipoInput6="time"

                                    PspanNomeInput7="Data de Término"
                                    PnameInput7=""
                                    PtipoInput7="date"

                                    PspanNomeInput8="Hora de Término"
                                    PnameInput8=""
                                    PtipoInput8="time"

                                    //! Display de todas informações
                                    PInformacao1Display="none"
                                    PInformacao2Display="none"
                                    PInformacao3Display="none"
                                    PInformacao4Display="none"

                                    //! Display de todas select
                                    PselectDisplay1="none"
                                    PselectDisplay2="none"

                                    //! Display de todas inputs
                                    PInput1Display="none"
                                    PInput2Display="none"
                                    PInput3Display="none"
                                    PInput4Display="none"
                                    PInput5Display="none"
                                    PInput6Display="none"
                                    PInput7Display="none"
                                    PInput8Display="none"
                                    PinputFileDisplay="none"
                                    PtabelaDisplay=""

                                />}

                            />


                            <Route path="excluir"
                                element={<Criar
                                    /* Grupo 1 - informação 1 */
                                    Pinformacao1="1. Excluir orador"
                                    PsubInformacao1="
                                  Pode excluir orador 2 dias antes de do evento começar."
                                    PnomeBotao="Excluir"

                                    /* Grupo 1 - inputs e select*/
                                    PselectDisplay1=""
                                    Pselect1="Evento"
                                    PselectOption1="Selecionar evento"
                                    PselectDisplay2=""
                                    Pselect2="Orador"
                                    PselectOption2="Selecionar orador"
                                    PspanNomeInput1="Nome do bilhete"
                                    PnameInput1=""
                                    PplaceholderInput1="Nomo do bilhete"
                                    PtipoInput1="text"



                                    /* Grupo 2 - informação 2 */
                                    Pinformacao2="2. Informe a quantidade e o preço do bilhete"
                                    PsubInformacao2="Adicione os principais endereço do evento"

                                    /* Grupo 2 - inputs e select*/
                                    PspanNomeInput2="Quantidade"
                                    PnameInput2=""
                                    PplaceholderInput2="Quantidade de bilhete"
                                    PtipoInput2="number"

                                    PspanNomeInput3="Preço"
                                    PnameInput3=""
                                    PplaceholderInput3="Preço do bilhete"
                                    PtipoInput3="number"


                                    PspanNomeInput4="Munícipio"
                                    PnameInput4=""
                                    PplaceholderInput4="Nome do munícipio"
                                    PtipoInput4="text"

                                    /* Grupo 3 - informação 3 */
                                    Pinformacao3="3. Descriçao do evento"
                                    PsubInformacao3="Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!"
                                    /* Grupo 3 - textearea */
                                    PtexteareaDisplay="none"

                                    /* Grupo 4 - informação 4*/
                                    Pinformacao4="3. Data e horário"
                                    PsubInformacao4="Informe aos participantes os bilhetes estão desponiveis."

                                    /* Grupo 4 - inputs e selects */

                                    PspanNomeInput5="Data de Início"
                                    PnameInput5=""
                                    PtipoInput5="date"

                                    PspanNomeInput6="Hora de Início"
                                    PnameInput6=""
                                    PtipoInput6="time"

                                    PspanNomeInput7="Data de Término"
                                    PnameInput7=""
                                    PtipoInput7="date"

                                    PspanNomeInput8="Hora de Término"
                                    PnameInput8=""
                                    PtipoInput8="time"

                                    //! Display de todas informações
                                    PInformacao1Display=""
                                    PInformacao2Display="none"
                                    PInformacao3Display="none"
                                    PInformacao4Display="none"

                                    //! Display de todas select

                                    //! Display de todas inputs
                                    PInput1Display="none"
                                    PInput2Display="none"
                                    PInput3Display="none"
                                    PInput4Display="none"
                                    PInput5Display="none"
                                    PInput6Display="none"
                                    PInput7Display="none"
                                    PInput8Display="none"
                                    PinputFileDisplay="none"
                                    PtabelaDisplay="none"
                                />}
                            />

                        </Route>


                        <Route path="palestrante"
                            element={
                                <Estrutura
                                    infoGeral={""}
                                    titulo="Palestrante"
                                    lista1="Criar"
                                    lista2="Foto"
                                    lista3="Editar"
                                    lista4="Listar"
                                    lista5="Excluir"


                                    rota1="/organizador/palestrante/criar"
                                    rota2="/organizador/palestrante/foto"
                                    rota3="/organizador/palestrante/editar"
                                    rota4="/organizador/palestrante/listar"
                                    rota5="/organizador/palestrante/excluir"
                                />}
                        >
                            <Route path="criar"
                                element={
                                    <Criar
                                        /* Grupo 1 - informação 1 */
                                        Pinformacao1="1. Informações básicas"
                                        PsubInformacao1="
                                    Adicione as principais informações do palestrante."
                                        PnomeBotao="Criar"

                                        /* Grupo 1 - inputs e select*/
                                        Pselect1="Evento"
                                        PselectOption1="Selecionar evento"
                                        Pselect2="Categoria do evento"
                                        PselectOption2="Selecionar categoria"
                                        PspanNomeInput1="Nome do palestrante"
                                        PnameInput1=""
                                        PplaceholderInput1="Nome do palestrante"
                                        PtipoInput1="text"



                                        /* Grupo 2 - informação 2 */
                                        Pinformacao2="2. Informe a quantidade e o preço do bilhete"
                                        PsubInformacao2="Adicione os principais endereço do evento"

                                        /* Grupo 2 - inputs e select*/
                                        PspanNomeInput2="Facebook"
                                        PnameInput2=""
                                        PplaceholderInput2="Nome do facebook"
                                        PtipoInput2="text"

                                        PspanNomeInput3="Instagram"
                                        PnameInput3=""
                                        PplaceholderInput3="Nome do instagram"
                                        PtipoInput3="number"


                                        PspanNomeInput4="Youtube"
                                        PnameInput4=""
                                        PplaceholderInput4="Nome do canal"
                                        PtipoInput4="text"

                                        /* Grupo 3 - informação 3 */
                                        Pinformacao3="3. Descriçao do evento"
                                        PsubInformacao3="Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!"
                                        /* Grupo 3 - textearea */
                                        PtexteareaDisplay="none"

                                        /* Grupo 4 - informação 4*/
                                        Pinformacao4="3. Data e horário"
                                        PsubInformacao4="Informe aos participantes os bilhetes estão desponiveis."

                                        /* Grupo 4 - inputs e selects */

                                        PspanNomeInput5="Data de Início"
                                        PnameInput5=""
                                        PtipoInput5="date"

                                        PspanNomeInput6="Hora de Início"
                                        PnameInput6=""
                                        PtipoInput6="time"

                                        PspanNomeInput7="Data de Término"
                                        PnameInput7=""
                                        PtipoInput7="date"

                                        PspanNomeInput8="Hora de Término"
                                        PnameInput8=""
                                        PtipoInput8="time"

                                        //! Display de todas informações
                                        PInformacao1Display=""
                                        PInformacao2Display="none"
                                        PInformacao3Display="none"
                                        PInformacao4Display="none"

                                        //! Display de todas select
                                        PselectDisplay1=""
                                        PselectDisplay2="none"


                                        //! Display de todas inputs
                                        PInput1Display=""
                                        PInput2Display=""
                                        PInput3Display=""
                                        PInput4Display=""
                                        PInput5Display="none"
                                        PInput6Display="none"
                                        PInput7Display="none"
                                        PInput8Display="none"
                                        PinputFileDisplay="none"
                                        PtabelaDisplay="none"
                                    />} />


                            <Route path="foto"
                                element={
                                    <Criar
                                        /* Grupo 1 - informação 1 */
                                        Pinformacao1="1. Informações básicas"
                                        PsubInformacao1="
                                        Formato JPEG ou PNG de no máximo 2MB."
                                        PnomeBotao="Enviar"

                                        /* Grupo 1 - inputs e select*/
                                        Pselect1=""
                                        PselectOption1=""
                                        Pselect2="Palestrante"
                                        PselectOption2="Selecionar palestrante"
                                        PspanNomeInput1="Nome do evento"
                                        PnameInput1=""
                                        PplaceholderInput1="Nomo do vento"
                                        PtipoInput1="text"



                                        /* Grupo 2 - informação 2 */
                                        Pinformacao2="2. Informe o endereço ou o nome do local do evento"
                                        PsubInformacao2="Adicione os principais endereço do evento"

                                        /* Grupo 2 - inputs e select*/
                                        PspanNomeInput2="Nome do local"
                                        PnameInput2=""
                                        PplaceholderInput2="Nome do local"
                                        PtipoInput2="text"

                                        PspanNomeInput3="Bairro"
                                        PnameInput3=""
                                        PplaceholderInput3="Nome do bairro"
                                        PtipoInput3="text"


                                        PspanNomeInput4="Munícipio"
                                        PnameInput4=""
                                        PplaceholderInput4="Nome do munícipio"
                                        PtipoInput4="text"

                                        /* Grupo 3 - informação 3 */
                                        Pinformacao3="3. Descriçao do evento"
                                        PsubInformacao3="Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!"
                                        /* Grupo 3 - textearea */

                                        /* Grupo 4 - informação 4*/
                                        Pinformacao4="4. Data e horário"
                                        PsubInformacao4="Informe aos participantes quando seu evento vai acontecer."

                                        /* Grupo 4 - inputs e selects */

                                        PspanNomeInput5="Data de Início"
                                        PnameInput5=""
                                        PtipoInput5="date"

                                        PspanNomeInput6="Hora de Início"
                                        PnameInput6=""
                                        PtipoInput6="time"

                                        PspanNomeInput7="Data de Término"
                                        PnameInput7=""
                                        PtipoInput7="date"

                                        PspanNomeInput8="Hora de Término"
                                        PnameInput8=""
                                        PtipoInput8="time"

                                        //! Display de todas informações
                                        PInformacao1Display=""
                                        PInformacao2Display="none"
                                        PInformacao3Display="none"
                                        PInformacao4Display="none"


                                        //! Display de todas textearea
                                        PtexteareaDisplay="none"




                                        //! Display de todas select
                                        PselectDisplay1="none"
                                        PselectDisplay2=""

                                        //! Display de todas inputs
                                        PInput1Display="none"
                                        PInput2Display="none"
                                        PInput3Display="none"
                                        PInput4Display="none"
                                        PInput5Display="none"
                                        PInput6Display="none"
                                        PInput7Display="none"
                                        PInput8Display="none"
                                        PinputFileDisplay=""
                                        PtabelaDisplay="none"


                                    />} />


                            <Route path="editar"
                                element={
                                    <Criar
                                        /* Grupo 1 - informação 1 */
                                        Pinformacao1="1. Informações básicas"
                                        PsubInformacao1="
                                    Adicione as principais informações do orador."
                                        PnomeBotao="Salvar"

                                        /* Grupo 1 - inputs e select*/
                                        Pselect1="Palestrante"
                                        PselectOption1="Selecionar palestrante"
                                        Pselect2="Categoria do evento"
                                        PselectOption2="Selecionar categoria"
                                        PspanNomeInput1="Nome do palestrante"
                                        PnameInput1=""
                                        PplaceholderInput1="Nome do palestrante"
                                        PtipoInput1="text"



                                        /* Grupo 2 - informação 2 */
                                        Pinformacao2="2. Informe a quantidade e o preço do bilhete"
                                        PsubInformacao2="Adicione os principais endereço do evento"

                                        /* Grupo 2 - inputs e select*/
                                        PspanNomeInput2="Facebook"
                                        PnameInput2=""
                                        PplaceholderInput2="Nome do facebook"
                                        PtipoInput2="text"

                                        PspanNomeInput3="Instagram"
                                        PnameInput3=""
                                        PplaceholderInput3="Nome do instagram"
                                        PtipoInput3="number"


                                        PspanNomeInput4="Youtube"
                                        PnameInput4=""
                                        PplaceholderInput4="Nome do canal"
                                        PtipoInput4="text"

                                        /* Grupo 3 - informação 3 */
                                        Pinformacao3="3. Descriçao do evento"
                                        PsubInformacao3="Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!"
                                        /* Grupo 3 - textearea */
                                        PtexteareaDisplay="none"

                                        /* Grupo 4 - informação 4*/
                                        Pinformacao4="3. Data e horário"
                                        PsubInformacao4="Informe aos participantes os bilhetes estão desponiveis."

                                        /* Grupo 4 - inputs e selects */

                                        PspanNomeInput5="Data de Início"
                                        PnameInput5=""
                                        PtipoInput5="date"

                                        PspanNomeInput6="Hora de Início"
                                        PnameInput6=""
                                        PtipoInput6="time"

                                        PspanNomeInput7="Data de Término"
                                        PnameInput7=""
                                        PtipoInput7="date"

                                        PspanNomeInput8="Hora de Término"
                                        PnameInput8=""
                                        PtipoInput8="time"

                                        //! Display de todas informações
                                        PInformacao1Display=""
                                        PInformacao2Display="none"
                                        PInformacao3Display="none"
                                        PInformacao4Display="none"

                                        //! Display de todas select
                                        PselectDisplay1=""
                                        PselectDisplay2="none"


                                        //! Display de todas inputs
                                        PInput1Display=""
                                        PInput2Display=""
                                        PInput3Display=""
                                        PInput4Display=""
                                        PInput5Display="none"
                                        PInput6Display="none"
                                        PInput7Display="none"
                                        PInput8Display="none"
                                        PinputFileDisplay="none"
                                        PtabelaDisplay="none"
                                    />} />

                            <Route
                                path="listar"
                                element={<Criar
                                    /* Grupo 1 - informação 1 */
                                    Pinformacao1="1. Informações básicas"
                                    PsubInformacao1="
                                      Adicione as principais informações do evento."
                                    PnomeBotao="Salvar"

                                    /* Grupo 1 - inputs e select*/
                                    Pselect1="Evento"
                                    PselectOption1="Selecionar evento"
                                    Pselect2="Categoria do evento"
                                    PselectOption2="Selecionar categoria"
                                    PspanNomeInput1="Nome do evento"
                                    PnameInput1=""
                                    PplaceholderInput1="Nomo do vento"
                                    PtipoInput1="text"



                                    /* Grupo 2 - informação 2 */
                                    Pinformacao2="2. Informe o endereço ou o nome do local do evento"
                                    PsubInformacao2="Adicione os principais endereço do evento"

                                    /* Grupo 2 - inputs e select*/
                                    PspanNomeInput2="Nome do local"
                                    PnameInput2=""
                                    PplaceholderInput2="Nome do local"
                                    PtipoInput2="text"

                                    PspanNomeInput3="Bairro"
                                    PnameInput3=""
                                    PplaceholderInput3="Nome do bairro"
                                    PtipoInput3="text"


                                    PspanNomeInput4="Munícipio"
                                    PnameInput4=""
                                    PplaceholderInput4="Nome do munícipio"
                                    PtipoInput4="text"

                                    /* Grupo 3 - informação 3 */
                                    Pinformacao3="3. Descriçao do evento"
                                    PsubInformacao3="Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!"
                                    /* Grupo 3 - textearea */
                                    PtexteareaDisplay="none"

                                    /* Grupo 4 - informação 4*/
                                    Pinformacao4="4. Data e horário"
                                    PsubInformacao4="Informe aos participantes quando seu evento vai acontecer."

                                    /* Grupo 4 - inputs e selects */

                                    PspanNomeInput5="Data de Início"
                                    PnameInput5=""
                                    PtipoInput5="date"

                                    PspanNomeInput6="Hora de Início"
                                    PnameInput6=""
                                    PtipoInput6="time"

                                    PspanNomeInput7="Data de Término"
                                    PnameInput7=""
                                    PtipoInput7="date"

                                    PspanNomeInput8="Hora de Término"
                                    PnameInput8=""
                                    PtipoInput8="time"

                                    //! Display de todas informações
                                    PInformacao1Display="none"
                                    PInformacao2Display="none"
                                    PInformacao3Display="none"
                                    PInformacao4Display="none"

                                    //! Display de todas select
                                    PselectDisplay1="none"
                                    PselectDisplay2="none"

                                    //! Display de todas inputs
                                    PInput1Display="none"
                                    PInput2Display="none"
                                    PInput3Display="none"
                                    PInput4Display="none"
                                    PInput5Display="none"
                                    PInput6Display="none"
                                    PInput7Display="none"
                                    PInput8Display="none"
                                    PinputFileDisplay="none"
                                    PtabelaDisplay=""

                                />}

                            />

                            <Route path="excluir"
                                element={<Criar
                                    /* Grupo 1 - informação 1 */
                                    Pinformacao1="1. Excluir palestrante"
                                    PsubInformacao1="
                                  Pode excluir palestrante 2 dias antes de do evento começar."
                                    PnomeBotao="Excluir"

                                    /* Grupo 1 - inputs e select*/
                                    PselectDisplay1=""
                                    Pselect1="Evento"
                                    PselectOption1="Selecionar evento"
                                    PselectDisplay2=""
                                    Pselect2="Palestrante"
                                    PselectOption2="Selecionar palestrante"
                                    PspanNomeInput1="Nome do bilhete"
                                    PnameInput1=""
                                    PplaceholderInput1="Nomo do bilhete"
                                    PtipoInput1="text"



                                    /* Grupo 2 - informação 2 */
                                    Pinformacao2="2. Informe a quantidade e o preço do bilhete"
                                    PsubInformacao2="Adicione os principais endereço do evento"

                                    /* Grupo 2 - inputs e select*/
                                    PspanNomeInput2="Quantidade"
                                    PnameInput2=""
                                    PplaceholderInput2="Quantidade de bilhete"
                                    PtipoInput2="number"

                                    PspanNomeInput3="Preço"
                                    PnameInput3=""
                                    PplaceholderInput3="Preço do bilhete"
                                    PtipoInput3="number"


                                    PspanNomeInput4="Munícipio"
                                    PnameInput4=""
                                    PplaceholderInput4="Nome do munícipio"
                                    PtipoInput4="text"

                                    /* Grupo 3 - informação 3 */
                                    Pinformacao3="3. Descriçao do evento"
                                    PsubInformacao3="Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!"
                                    /* Grupo 3 - textearea */
                                    PtexteareaDisplay="none"

                                    /* Grupo 4 - informação 4*/
                                    Pinformacao4="3. Data e horário"
                                    PsubInformacao4="Informe aos participantes os bilhetes estão desponiveis."

                                    /* Grupo 4 - inputs e selects */

                                    PspanNomeInput5="Data de Início"
                                    PnameInput5=""
                                    PtipoInput5="date"

                                    PspanNomeInput6="Hora de Início"
                                    PnameInput6=""
                                    PtipoInput6="time"

                                    PspanNomeInput7="Data de Término"
                                    PnameInput7=""
                                    PtipoInput7="date"

                                    PspanNomeInput8="Hora de Término"
                                    PnameInput8=""
                                    PtipoInput8="time"

                                    //! Display de todas informações
                                    PInformacao1Display=""
                                    PInformacao2Display="none"
                                    PInformacao3Display="none"
                                    PInformacao4Display="none"

                                    //! Display de todas select

                                    //! Display de todas inputs
                                    PInput1Display="none"
                                    PInput2Display="none"
                                    PInput3Display="none"
                                    PInput4Display="none"
                                    PInput5Display="none"
                                    PInput6Display="none"
                                    PInput7Display="none"
                                    PInput8Display="none"
                                    PinputFileDisplay="none"
                                    PtabelaDisplay="none"
                                />}
                            />


                        </Route>



                        <Route path="estatistica" />

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
                                    rota1={"/organizador/perfil/informacao"}
                                    rota2={"/organizador/perfil/editar"}
                                    rota3={"/organizador/perfil/senha"}
                                    rota4={"/organizador/perfil/foto"}
                                    rota5={"/login"}
                                />
                            }


                        >

                            <Route
                                path="informacao"
                                element={<Perfil
                                    PbotaoNome=""
                                    Pdivgrupo1Display="none"
                                    Pinput1="Nome"
                                    PinputNome1=""
                                    PinputPlaceholder1="Primiro nome"
                                    PinputTipo1="text"

                                    Pdivgrupo2Display="none"
                                    Pinput2="Apelido"
                                    PinputNome2=""
                                    PinputPlaceholder2="Último nome"
                                    PinputTipo2="text"


                                    Pdivgrupo3Display="none"
                                    Pinput3="IBAN"
                                    PinputNome3=""
                                    PinputPlaceholder3="IBAN"
                                    PinputTipo3="text"


                                    Pdivgrupo4Display="none"
                                    Pinput4="Telefone"
                                    PinputNome4=""
                                    PinputPlaceholder4="9xx xxx- xxx"
                                    PinputTipo4="number"


                                    Pdivgrupo5Display="none"
                                    Pinput5="Endereço"
                                    PinputNome5=""
                                    PinputPlaceholder5="Endereço"
                                    PinputTipo5="text"


                                    Pdivgrupo6Display="none"
                                    Pinput6="Data nascimento"
                                    PinputNome6=""
                                    PinputPlaceholder6=""
                                    PinputTipo6="date"

                                    PdivgrupoFileDisplay="none"
                                    exbirImagemDisplay=""
                                    criarInfoCriar="none"

                                />}
                            />

                            <Route
                                path="editar"
                                element={<Perfil
                                    PbotaoNome="Salvar"
                                    Pdivgrupo1Display=""
                                    Pinput1="Nome"
                                    PinputNome1=""
                                    PinputPlaceholder1="Primiro nome"
                                    PinputTipo1="text"

                                    Pdivgrupo2Display=""
                                    Pinput2="Apelido"
                                    PinputNome2=""
                                    PinputPlaceholder2="Último nome"
                                    PinputTipo2="text"


                                    Pdivgrupo3Display=""
                                    Pinput3="IBAN"
                                    PinputNome3=""
                                    PinputPlaceholder3="IBAN"
                                    PinputTipo3="text"


                                    Pdivgrupo4Display=""
                                    Pinput4="Telefone"
                                    PinputNome4=""
                                    PinputPlaceholder4="9xx xxx- xxx"
                                    PinputTipo4="number"


                                    Pdivgrupo5Display=""
                                    Pinput5="Endereço"
                                    PinputNome5=""
                                    PinputPlaceholder5="Endereço"
                                    PinputTipo5="text"


                                    Pdivgrupo6Display=""
                                    Pinput6="Data nascimento"
                                    PinputNome6=""
                                    PinputPlaceholder6=""
                                    PinputTipo6="date"

                                    PdivgrupoFileDisplay="none"
                                    exbirImagemDisplay="none"
                                    criarInfoCriar=""
                                />}

                            />

                            <Route
                                path="senha"
                                element={<Perfil
                                    PbotaoNome="Salvar"
                                    Pdivgrupo1Display=""
                                    Pinput1="Senha"
                                    PinputNome1=""
                                    PinputPlaceholder1="Senha antiga"
                                    PinputTipo1="password"

                                    Pdivgrupo2Display=""
                                    Pinput2="Senha"
                                    PinputNome2=""
                                    PinputPlaceholder2="Senha nova"
                                    PinputTipo2="password"


                                    Pdivgrupo3Display="none"
                                    Pinput3="IBAN"
                                    PinputNome3=""
                                    PinputPlaceholder3="IBAN"
                                    PinputTipo3="text"


                                    Pdivgrupo4Display="none"
                                    Pinput4="Telefone"
                                    PinputNome4=""
                                    PinputPlaceholder4="9xx xxx- xxx"
                                    PinputTipo4="number"


                                    Pdivgrupo5Display="none"
                                    Pinput5="Endereço"
                                    PinputNome5=""
                                    PinputPlaceholder5="Endereço"
                                    PinputTipo5="text"


                                    Pdivgrupo6Display="none"
                                    Pinput6="Data nascimento"
                                    PinputNome6=""
                                    PinputPlaceholder6=""
                                    PinputTipo6="date"

                                    PdivgrupoFileDisplay="none"
                                    exbirImagemDisplay="none"
                                    criarInfoCriar=""
                                />}

                            />

                            <Route
                                path="foto"
                                element={<Perfil
                                    PbotaoNome="Salvar"
                                    Pdivgrupo1Display="none"
                                    Pinput1="Senha"
                                    PinputNome1=""
                                    PinputPlaceholder1="Senha antiga"
                                    PinputTipo1="text"

                                    Pdivgrupo2Display="none"
                                    Pinput2="Senha"
                                    PinputNome2=""
                                    PinputPlaceholder2="Senha nova"
                                    PinputTipo2="text"


                                    Pdivgrupo3Display="none"
                                    Pinput3="IBAN"
                                    PinputNome3=""
                                    PinputPlaceholder3="IBAN"
                                    PinputTipo3="text"


                                    Pdivgrupo4Display="none"
                                    Pinput4="Telefone"
                                    PinputNome4=""
                                    PinputPlaceholder4="9xx xxx- xxx"
                                    PinputTipo4="number"


                                    Pdivgrupo5Display="none"
                                    Pinput5="Endereço"
                                    PinputNome5=""
                                    PinputPlaceholder5="Endereço"
                                    PinputTipo5="text"


                                    Pdivgrupo6Display="none"
                                    Pinput6="Data nascimento"
                                    PinputNome6=""
                                    PinputPlaceholder6=""
                                    PinputTipo6="date"

                                    PdivgrupoFileDisplay=""
                                    exbirImagemDisplay="none"

                                />}

                            />

                            <Route
                                path="sair"
                                element={<Perfil />}

                            />


                        </Route>






                    </Route>

                </Route>






                {/* Dashboard do Admininstrador */}
                <Route>
                    <Route path="administrador"
                        element={

                            <ContextDashboard.Provider
                                value={{
                                    CPadmin: true,
                                    CPli: "none"
                                }}
                            >
                                <DashboardLayout />
                            </ContextDashboard.Provider>
                        }>

                        <Route index
                            element={
                                <Home
                                    titulo="Olá, Nome do admin"
                                />}
                        />

                        <Route index path="home"
                            element={
                                <Home
                                    titulo="Olá, Nome do admin"
                                />}
                        />

                        <Route path="admin"
                            element={
                                <Estrutura
                                    infoGeral={""}
                                    titulo="Administrador"
                                    lista1="Listar"
                                    rota1="/administrador/admin/listar"
                                />}
                        >

                            <Route
                                path="listar"
                                element={<Criar
                                    /* Grupo 1 - informação 1 */
                                    Pinformacao1="1. Informações básicas"
                                    PsubInformacao1="
                                      Adicione as principais informações do evento."
                                    PnomeBotao="Salvar"

                                    /* Grupo 1 - inputs e select*/
                                    Pselect1="Evento"
                                    PselectOption1="Selecionar evento"
                                    Pselect2="Categoria do evento"
                                    PselectOption2="Selecionar categoria"
                                    PspanNomeInput1="Nome do evento"
                                    PnameInput1=""
                                    PplaceholderInput1="Nomo do vento"
                                    PtipoInput1="text"



                                    /* Grupo 2 - informação 2 */
                                    Pinformacao2="2. Informe o endereço ou o nome do local do evento"
                                    PsubInformacao2="Adicione os principais endereço do evento"

                                    /* Grupo 2 - inputs e select*/
                                    PspanNomeInput2="Nome do local"
                                    PnameInput2=""
                                    PplaceholderInput2="Nome do local"
                                    PtipoInput2="text"

                                    PspanNomeInput3="Bairro"
                                    PnameInput3=""
                                    PplaceholderInput3="Nome do bairro"
                                    PtipoInput3="text"


                                    PspanNomeInput4="Munícipio"
                                    PnameInput4=""
                                    PplaceholderInput4="Nome do munícipio"
                                    PtipoInput4="text"

                                    /* Grupo 3 - informação 3 */
                                    Pinformacao3="3. Descriçao do evento"
                                    PsubInformacao3="Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!"
                                    /* Grupo 3 - textearea */
                                    PtexteareaDisplay="none"

                                    /* Grupo 4 - informação 4*/
                                    Pinformacao4="4. Data e horário"
                                    PsubInformacao4="Informe aos participantes quando seu evento vai acontecer."

                                    /* Grupo 4 - inputs e selects */

                                    PspanNomeInput5="Data de Início"
                                    PnameInput5=""
                                    PtipoInput5="date"

                                    PspanNomeInput6="Hora de Início"
                                    PnameInput6=""
                                    PtipoInput6="time"

                                    PspanNomeInput7="Data de Término"
                                    PnameInput7=""
                                    PtipoInput7="date"

                                    PspanNomeInput8="Hora de Término"
                                    PnameInput8=""
                                    PtipoInput8="time"

                                    //! Display de todas informações
                                    PInformacao1Display="none"
                                    PInformacao2Display="none"
                                    PInformacao3Display="none"
                                    PInformacao4Display="none"

                                    //! Display de todas select
                                    PselectDisplay1="none"
                                    PselectDisplay2="none"

                                    //! Display de todas inputs
                                    PInput1Display="none"
                                    PInput2Display="none"
                                    PInput3Display="none"
                                    PInput4Display="none"
                                    PInput5Display="none"
                                    PInput6Display="none"
                                    PInput7Display="none"
                                    PInput8Display="none"
                                    PinputFileDisplay="none"
                                    PtabelaDisplay=""

                                />}

                            />

                            <Route path="excluir"
                                element={
                                    <Criar
                                        /* Grupo 1 - informação 1 */
                                        Pinformacao1="1. Exclua evento"
                                        PsubInformacao1="
                                    Pode excluir evento 2 dias antes de começar."
                                        PnomeBotao="Excluir"

                                        /* Grupo 1 - inputs e select*/
                                        PselectDisplay1="none"
                                        Pselect1=""
                                        PselectOption1=""
                                        PselectDisplay2=""
                                        Pselect2="Eventos"
                                        PselectOption2="eventos"
                                        PspanNomeInput1="Nome do evento"
                                        PnameInput1=""
                                        PplaceholderInput1="Nomo do vento"
                                        PtipoInput1="text"



                                        /* Grupo 2 - informação 2 */
                                        Pinformacao2="2. Informe o endereço ou o nome do local do evento"
                                        PsubInformacao2="Adicione os principais endereço do evento"

                                        /* Grupo 2 - inputs e select*/
                                        PspanNomeInput2="Nome do local"
                                        PnameInput2=""
                                        PplaceholderInput2="Nome do local"
                                        PtipoInput2="text"

                                        PspanNomeInput3="Bairro"
                                        PnameInput3=""
                                        PplaceholderInput3="Nome do bairro"
                                        PtipoInput3="text"


                                        PspanNomeInput4="Munícipio"
                                        PnameInput4=""
                                        PplaceholderInput4="Nome do munícipio"
                                        PtipoInput4="text"

                                        /* Grupo 3 - informação 3 */
                                        Pinformacao3="3. Descriçao do evento"
                                        PsubInformacao3="Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!"
                                        /* Grupo 3 - textearea */
                                        PtexteareaDisplay="none"

                                        /* Grupo 4 - informação 4*/
                                        Pinformacao4="4. Data e horário"
                                        PsubInformacao4="Informe aos participantes quando seu evento vai acontecer."

                                        /* Grupo 4 - inputs e selects */

                                        PspanNomeInput5="Data de Início"
                                        PnameInput5=""
                                        PtipoInput5="date"

                                        PspanNomeInput6="Hora de Início"
                                        PnameInput6=""
                                        PtipoInput6="time"

                                        PspanNomeInput7="Data de Término"
                                        PnameInput7=""
                                        PtipoInput7="date"

                                        PspanNomeInput8="Hora de Término"
                                        PnameInput8=""
                                        PtipoInput8="time"

                                        //! Display de todas informações
                                        PInformacao1Display=""
                                        PInformacao2Display="none"
                                        PInformacao3Display="none"
                                        PInformacao4Display="none"




                                        //! Display de todas select

                                        //! Display de todas inputs
                                        PInput1Display="none"
                                        PInput2Display="none"
                                        PInput3Display="none"
                                        PInput4Display="none"
                                        PInput5Display="none"
                                        PInput6Display="none"
                                        PInput7Display="none"
                                        PInput8Display="none"
                                        PinputFileDisplay="none"
                                        PtabelaDisplay="none"
                                    />} />

                        </Route>


                        <Route path="eventos"
                            element={
                                <Estrutura
                                    infoGeral={""}
                                    titulo="Eventos"
                                    lista1="Listar"
                                    rota1="/administrador/eventos/listar"
                                />}
                        >



                            <Route
                                path="listar"
                                element={<Criar
                                    /* Grupo 1 - informação 1 */
                                    Pinformacao1="1. Informações básicas"
                                    PsubInformacao1="
                                      Adicione as principais informações do evento."
                                    PnomeBotao="Salvar"

                                    /* Grupo 1 - inputs e select*/
                                    Pselect1="Evento"
                                    PselectOption1="Selecionar evento"
                                    Pselect2="Categoria do evento"
                                    PselectOption2="Selecionar categoria"
                                    PspanNomeInput1="Nome do evento"
                                    PnameInput1=""
                                    PplaceholderInput1="Nomo do vento"
                                    PtipoInput1="text"



                                    /* Grupo 2 - informação 2 */
                                    Pinformacao2="2. Informe o endereço ou o nome do local do evento"
                                    PsubInformacao2="Adicione os principais endereço do evento"

                                    /* Grupo 2 - inputs e select*/
                                    PspanNomeInput2="Nome do local"
                                    PnameInput2=""
                                    PplaceholderInput2="Nome do local"
                                    PtipoInput2="text"

                                    PspanNomeInput3="Bairro"
                                    PnameInput3=""
                                    PplaceholderInput3="Nome do bairro"
                                    PtipoInput3="text"


                                    PspanNomeInput4="Munícipio"
                                    PnameInput4=""
                                    PplaceholderInput4="Nome do munícipio"
                                    PtipoInput4="text"

                                    /* Grupo 3 - informação 3 */
                                    Pinformacao3="3. Descriçao do evento"
                                    PsubInformacao3="Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!"
                                    /* Grupo 3 - textearea */
                                    PtexteareaDisplay="none"

                                    /* Grupo 4 - informação 4*/
                                    Pinformacao4="4. Data e horário"
                                    PsubInformacao4="Informe aos participantes quando seu evento vai acontecer."

                                    /* Grupo 4 - inputs e selects */

                                    PspanNomeInput5="Data de Início"
                                    PnameInput5=""
                                    PtipoInput5="date"

                                    PspanNomeInput6="Hora de Início"
                                    PnameInput6=""
                                    PtipoInput6="time"

                                    PspanNomeInput7="Data de Término"
                                    PnameInput7=""
                                    PtipoInput7="date"

                                    PspanNomeInput8="Hora de Término"
                                    PnameInput8=""
                                    PtipoInput8="time"

                                    //! Display de todas informações
                                    PInformacao1Display="none"
                                    PInformacao2Display="none"
                                    PInformacao3Display="none"
                                    PInformacao4Display="none"

                                    //! Display de todas select
                                    PselectDisplay1="none"
                                    PselectDisplay2="none"

                                    //! Display de todas inputs
                                    PInput1Display="none"
                                    PInput2Display="none"
                                    PInput3Display="none"
                                    PInput4Display="none"
                                    PInput5Display="none"
                                    PInput6Display="none"
                                    PInput7Display="none"
                                    PInput8Display="none"
                                    PinputFileDisplay="none"
                                    PtabelaDisplay=""

                                />}

                            />

                        </Route>


                        <Route path="usuarios"
                            element={
                                <Estrutura
                                    infoGeral={""}
                                    titulo="Usuários"
                                    lista1="Listar"
                                    rota1="/administrador/usuarios/listar"
                                />}
                        >

                            <Route
                                path="listar"
                                element={<Criar
                                    /* Grupo 1 - informação 1 */
                                    Pinformacao1="1. Informações básicas"
                                    PsubInformacao1="
                                      Adicione as principais informações do evento."
                                    PnomeBotao="Salvar"

                                    /* Grupo 1 - inputs e select*/
                                    Pselect1="Evento"
                                    PselectOption1="Selecionar evento"
                                    Pselect2="Categoria do evento"
                                    PselectOption2="Selecionar categoria"
                                    PspanNomeInput1="Nome do evento"
                                    PnameInput1=""
                                    PplaceholderInput1="Nomo do vento"
                                    PtipoInput1="text"



                                    /* Grupo 2 - informação 2 */
                                    Pinformacao2="2. Informe o endereço ou o nome do local do evento"
                                    PsubInformacao2="Adicione os principais endereço do evento"

                                    /* Grupo 2 - inputs e select*/
                                    PspanNomeInput2="Nome do local"
                                    PnameInput2=""
                                    PplaceholderInput2="Nome do local"
                                    PtipoInput2="text"

                                    PspanNomeInput3="Bairro"
                                    PnameInput3=""
                                    PplaceholderInput3="Nome do bairro"
                                    PtipoInput3="text"


                                    PspanNomeInput4="Munícipio"
                                    PnameInput4=""
                                    PplaceholderInput4="Nome do munícipio"
                                    PtipoInput4="text"

                                    /* Grupo 3 - informação 3 */
                                    Pinformacao3="3. Descriçao do evento"
                                    PsubInformacao3="Conte todos os detalhes do seu evento, como a programação e os diferenciais da sua produção!"
                                    /* Grupo 3 - textearea */
                                    PtexteareaDisplay="none"

                                    /* Grupo 4 - informação 4*/
                                    Pinformacao4="4. Data e horário"
                                    PsubInformacao4="Informe aos participantes quando seu evento vai acontecer."

                                    /* Grupo 4 - inputs e selects */

                                    PspanNomeInput5="Data de Início"
                                    PnameInput5=""
                                    PtipoInput5="date"

                                    PspanNomeInput6="Hora de Início"
                                    PnameInput6=""
                                    PtipoInput6="time"

                                    PspanNomeInput7="Data de Término"
                                    PnameInput7=""
                                    PtipoInput7="date"

                                    PspanNomeInput8="Hora de Término"
                                    PnameInput8=""
                                    PtipoInput8="time"

                                    //! Display de todas informações
                                    PInformacao1Display="none"
                                    PInformacao2Display="none"
                                    PInformacao3Display="none"
                                    PInformacao4Display="none"

                                    //! Display de todas select
                                    PselectDisplay1="none"
                                    PselectDisplay2="none"

                                    //! Display de todas inputs
                                    PInput1Display="none"
                                    PInput2Display="none"
                                    PInput3Display="none"
                                    PInput4Display="none"
                                    PInput5Display="none"
                                    PInput6Display="none"
                                    PInput7Display="none"
                                    PInput8Display="none"
                                    PinputFileDisplay="none"
                                    PtabelaDisplay=""

                                />}

                            />

                        </Route>


                        <Route path="estatistica" />

                        <Route path="perfil"
                            element={
                                <Estrutura
                                    infoGeral={""}
                                    titulo="Informação da conta"
                                    lista1={"Informações"}
                                    lista2={"Editar"}
                                    lista3={"Senha"}
                                    lista4={"Sair"}
                                    rota1={"/administrador/perfil/informacao"}
                                    rota2={"/administrador/perfil/editar"}
                                    rota3={"/administrador/perfil/senha"}
                                    rota5={"/login"}
                                />
                            }


                        >

                            <Route
                                path="informacao"
                                element={<Perfil
                                    PbotaoNome=""
                                    Pdivgrupo1Display="none"
                                    Pinput1="Nome"
                                    PinputNome1=""
                                    PinputPlaceholder1="Primiro nome"
                                    PinputTipo1="text"

                                    Pdivgrupo2Display="none"
                                    Pinput2="Apelido"
                                    PinputNome2=""
                                    PinputPlaceholder2="Último nome"
                                    PinputTipo2="text"


                                    Pdivgrupo3Display="none"
                                    Pinput3="IBAN"
                                    PinputNome3=""
                                    PinputPlaceholder3="IBAN"
                                    PinputTipo3="text"


                                    Pdivgrupo4Display="none"
                                    Pinput4="Telefone"
                                    PinputNome4=""
                                    PinputPlaceholder4="9xx xxx- xxx"
                                    PinputTipo4="number"


                                    Pdivgrupo5Display="none"
                                    Pinput5="Endereço"
                                    PinputNome5=""
                                    PinputPlaceholder5="Endereço"
                                    PinputTipo5="text"


                                    Pdivgrupo6Display="none"
                                    Pinput6="Data nascimento"
                                    PinputNome6=""
                                    PinputPlaceholder6=""
                                    PinputTipo6="date"

                                    PdivgrupoFileDisplay="none"
                                    exbirImagemDisplay=""
                                    criarInfoCriar="none"

                                />}
                            />

                            <Route
                                path="editar"
                                element={<Perfil
                                    PbotaoNome="Salvar"
                                    Pdivgrupo1Display=""
                                    Pinput1="Nome"
                                    PinputNome1=""
                                    PinputPlaceholder1="Primiro nome"
                                    PinputTipo1="text"

                                    Pdivgrupo2Display=""
                                    Pinput2="Apelido"
                                    PinputNome2=""
                                    PinputPlaceholder2="Último nome"
                                    PinputTipo2="text"


                                    Pdivgrupo3Display=""
                                    Pinput3="IBAN"
                                    PinputNome3=""
                                    PinputPlaceholder3="IBAN"
                                    PinputTipo3="text"


                                    Pdivgrupo4Display=""
                                    Pinput4="Telefone"
                                    PinputNome4=""
                                    PinputPlaceholder4="9xx xxx- xxx"
                                    PinputTipo4="number"


                                    Pdivgrupo5Display=""
                                    Pinput5="Endereço"
                                    PinputNome5=""
                                    PinputPlaceholder5="Endereço"
                                    PinputTipo5="text"


                                    Pdivgrupo6Display=""
                                    Pinput6="Data nascimento"
                                    PinputNome6=""
                                    PinputPlaceholder6=""
                                    PinputTipo6="date"

                                    PdivgrupoFileDisplay="none"
                                    exbirImagemDisplay="none"
                                    criarInfoCriar=""
                                />}

                            />

                            <Route
                                path="senha"
                                element={<Perfil
                                    PbotaoNome="Salvar"
                                    Pdivgrupo1Display=""
                                    Pinput1="Senha"
                                    PinputNome1=""
                                    PinputPlaceholder1="Senha antiga"
                                    PinputTipo1="text"

                                    Pdivgrupo2Display=""
                                    Pinput2="Senha"
                                    PinputNome2=""
                                    PinputPlaceholder2="Senha nova"
                                    PinputTipo2="text"


                                    Pdivgrupo3Display="none"
                                    Pinput3="IBAN"
                                    PinputNome3=""
                                    PinputPlaceholder3="IBAN"
                                    PinputTipo3="text"


                                    Pdivgrupo4Display="none"
                                    Pinput4="Telefone"
                                    PinputNome4=""
                                    PinputPlaceholder4="9xx xxx- xxx"
                                    PinputTipo4="number"


                                    Pdivgrupo5Display="none"
                                    Pinput5="Endereço"
                                    PinputNome5=""
                                    PinputPlaceholder5="Endereço"
                                    PinputTipo5="text"


                                    Pdivgrupo6Display="none"
                                    Pinput6="Data nascimento"
                                    PinputNome6=""
                                    PinputPlaceholder6=""
                                    PinputTipo6="date"

                                    PdivgrupoFileDisplay="none"
                                    exbirImagemDisplay="none"
                                    criarInfoCriar=""
                                />}

                            />

                            <Route
                                path="foto"
                                element={<Perfil
                                    PbotaoNome="Salvar"
                                    Pdivgrupo1Display="none"
                                    Pinput1="Senha"
                                    PinputNome1=""
                                    PinputPlaceholder1="Senha antiga"
                                    PinputTipo1="text"

                                    Pdivgrupo2Display="none"
                                    Pinput2="Senha"
                                    PinputNome2=""
                                    PinputPlaceholder2="Senha nova"
                                    PinputTipo2="text"


                                    Pdivgrupo3Display="none"
                                    Pinput3="IBAN"
                                    PinputNome3=""
                                    PinputPlaceholder3="IBAN"
                                    PinputTipo3="text"


                                    Pdivgrupo4Display="none"
                                    Pinput4="Telefone"
                                    PinputNome4=""
                                    PinputPlaceholder4="9xx xxx- xxx"
                                    PinputTipo4="number"


                                    Pdivgrupo5Display="none"
                                    Pinput5="Endereço"
                                    PinputNome5=""
                                    PinputPlaceholder5="Endereço"
                                    PinputTipo5="text"


                                    Pdivgrupo6Display="none"
                                    Pinput6="Data nascimento"
                                    PinputNome6=""
                                    PinputPlaceholder6=""
                                    PinputTipo6="date"

                                    PdivgrupoFileDisplay=""
                                    exbirImagemDisplay="none"

                                />}

                            />

                            <Route
                                path="sair"
                                element={<Perfil />}

                            />


                        </Route>






                    </Route>

                </Route>


            </Routes>


        </>
    )
}