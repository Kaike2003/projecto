/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { format } from "date-fns";

import "./PaginaPrincipal.css"

// Componentes

import Contacto from "../contacto/Contacto";
import Carousel from "../caroucel/Carousel";
import Perguntas from "../perguntas/Perguntas";
import PalestraFiltro from "../tipo_Eventos/Palestra/PalestraFiltro"
import ConcertoFiltro from "../tipo_Eventos/Concerto/ConcertoFiltro"
import TeatroFiltro from "../tipo_Eventos/Teatro/TeatroFiltro"
import CardEvento from "../card_evento/components/EventoCard";
import SeminarioFiltro from "../tipo_Eventos/Seminario/SeminarioFiltro";
import Shows from "../tipo_Eventos/Shows/ShowsFiltro";
import CarouselOrganizador from "../caroucel/CarouselOrganizador";
import InatividadePagina from "../../middlewares/TerminarSessao";
import Footer from "../footer/Footer";

// import Eventos from "../section_eventos/Section_eventos_teste"

export default function PaginaPrincipalOrganizador() {



    const url = "/reservaOnline/dashboard/organizador/paginaPrincipal"
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    const [dataNovosEventos, setDataNovosEventos] = useState([]);
    const [dataListaCategoria, setDataListaCategoria] = useState([]);
    const [nomeUtilizador, setNomeUtilizador] = useState([]);
    const urlImage = "http://localhost:3456/public/upload/evento/"


    const [categoria, setCategoria] = useState(() => {
        return []
    })


    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/participante/paginaPrincipal');
            const newData = response.data;
            setData(newData);

            const responseNovosEventos = await axios.get('http://localhost:3456/participante/novosEventosPaginaPrincipal');
            const newDataNovosEventos = responseNovosEventos.data;
            setDataNovosEventos(newDataNovosEventos);


            const responseListaCategoria = await axios.get('http://localhost:3456/admin/listarTodasCategorias');
            const newDataListaCategoria = responseListaCategoria.data;
            setDataListaCategoria(newDataListaCategoria);


        }



        if (localStorage.getItem("@Auth:email") !== null) {
            setNomeUtilizador(localStorage.getItem("@Auth:email"))
        }
        fetchData();
    }, []);

    // console.log("Eventos publicados", data)
    // console.log("Todas categorias", dataListaCategoria)
    // console.log("novos eventos", dataNovosEventos)








    const categoriaFiltro = (e) => {
        return setCategoria((old) => {
            return old = e.target.value
        })
    }

    const filtro = function IfCategoria(valor) {

        if (categoria === "1") {
            return
        } else if (categoria === "2") {
            return <Shows></Shows>
        } else if (categoria === "3") {
            return <TeatroFiltro></TeatroFiltro>
        } else if (categoria === "4") {
            return <ConcertoFiltro></ConcertoFiltro>
        } else if (categoria === "5") {
            return <SeminarioFiltro></SeminarioFiltro>
        } else if (categoria === "6") {
            return <PalestraFiltro></PalestraFiltro>
        }

    }






    return (
        <>
            <div className="invisivel_caroucel"></div>

            <div className="paginaPrincipal">

                <div className="container container_fundo">
                    <CarouselOrganizador />
                    <div className="container">

                    </div>


                    {

                        filtro(categoria)

                    }


                    <div className="container_conteudo">


                        <div className="imagemEventoPrincipal"></div>



                        <div className="container_conteudo">
                            <div className="conteudo_eventos">
                                <div className="conteudo_eventos_vermais">
                                    <h4 className="pb-3 pt-2 text-dark">Todos eventos</h4>
                                    <Link
                                        to={url + "/todosEventos"} className="btn">Ver mais</Link>
                                </div>
                            </div>
                        </div>



                        <div className="container_conteudo">
                            <div className="section_eventos">

                                {data.map((item) => {

                                    return dataListaCategoria.map(itemCategoria => {
                                        if (item.categoriaId === itemCategoria.id) {
                                            return (
                                                <>

                                                    <Link
                                                        to={url + `/visualizarBilhete/${item.id}`}
                                                        style={{ color: "black" }}
                                                    >
                                                        <div key={Math.random().toString(36).substring(2)}>
                                                            <CardEvento
                                                                id={item.id}
                                                                categoria={itemCategoria.nome}
                                                                nome={item.nome}
                                                                preco={item.bilhete[0]?.preco}
                                                                imagem={urlImage + item.foto}
                                                                quantidade={item.bilhete[0]?.quantidade}

                                                                dataInicio={
                                                                    format(new Date(item.dataInicio), 'dd/MM/yyyy')
                                                                }
                                                                dataTermino={
                                                                    format(new Date(item.dataTermino), 'dd/MM/yyyy')
                                                                }
                                                                estado={item.estado}
                                                            />
                                                        </div>

                                                    </Link>
                                                </>
                                            )
                                        }
                                    })

                                })}


                            </div>
                        </div>

                    </div>
                </div>

            
                <div>
                    <Perguntas></Perguntas>
                    <Contacto></Contacto>
                    <Footer />

                </div>


            </div>


        </>
    )


}