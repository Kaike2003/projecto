/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { format } from "date-fns";

import "./PaginaPrincipal.css"

// Componentes

import Contacto from "../contacto/Contacto";
import Perguntas from "../perguntas/Perguntas";
import CardEvento from "../card_evento/components/EventoCard";
import CarouselSemSessao from "../caroucel/CarouselSemSessao";
import ShowsFiltroSemSessao from "../tipo_Eventos/Shows/ShowsFiltroSemSessao";
import ConcertoFiltroSemSessao from "../tipo_Eventos/Concerto/ConcertoFiltroSemSessao";
import SeminarioFiltroSemSessao from "../tipo_Eventos/Seminario/SeminarioFiltroSemSessao";
import PalestraFiltroSemSessao from "../tipo_Eventos/Palestra/PalestraFiltroSemSessao";
import TeatroFiltroSemSessao from "../tipo_Eventos/Teatro/TeatroFiltroSemSessao";
import Footer from "../footer/Footer";

// import Eventos from "../section_eventos/Section_eventos_teste"

export default function PaginaPrincipalSemSessao() {

    const url = "/vendaOnline.com"
    const navigate = useNavigate()
    const [data, setData] = useState([]);
    const [dataNovosEventos, setDataNovosEventos] = useState([]);
    const [dataListaCategoria, setDataListaCategoria] = useState([]);
    const [nomeUtilizador, setNomeUtilizador] = useState([]);
    const urlImage = "http://localhost:3456/public/upload/evento/"


    const [categoria, setCategoria] = useState(() => {
        return "1"
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
            return <ShowsFiltroSemSessao />
        } else if (categoria === "3") {
            return <TeatroFiltroSemSessao />
        } else if (categoria === "4") {
            return <ConcertoFiltroSemSessao />
        } else if (categoria === "5") {
            return <SeminarioFiltroSemSessao />
        } else if (categoria === "6") {
            return <PalestraFiltroSemSessao />
        }

    }

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await
    //             fetch('http://localhost:3000/static/eventos.json')
    //                 .then((response) => response.json())
    //                 .then(setData);

    //     }
    //     fetchData()

    //     console.log(categoria)

    // }, [categoria]);






    return (
        <>
            <div className="invisivel_caroucel"></div>

            <div className="paginaPrincipal">

                <div className="container container_fundo">
                    <CarouselSemSessao />
                    <div className="container">
                        <div className="conteudo_evento_paragrafos mt-2 mb-1 ">
                            <p className=" sugestao text-dark ">Filtrar por:</p>
                            <div className="conteudo_categoria_p empreendedorismo">
                                <select
                                    className="conteudo_categoria_select"
                                    onChange={categoriaFiltro}
                                >
                                    <option value="1" >Categoria</option>
                                    <option value="2" >Shows</option>
                                    <option value="3" >Teatro</option>
                                    <option value="4" >Concerto</option>
                                    <option value="5" >Seminário</option>
                                    <option value="6" >Palestra</option>

                                </select>
                            </div>

                            {/* <div className="conteudo_categoria_p">
                                <select className="conteudo_categoria_select">
                                    <option value="6" >Mês</option>
                                    <option value="7" >Janeiro</option>
                                    <option value="8" >Fevereiro</option>
                                    <option value="9" >Março</option>
                                    <option value="10" >Abril</option>
                                </select>
                            </div> */}

                        </div>
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
                                                        <div key={Math.random().toString(36).substring(2) + item.id}>
                                                            <CardEvento
                                                                key={item.id}
                                                                id={item.id}
                                                                categoria={itemCategoria.nome}
                                                                nome={item.nome}
                                                                preco={item.bilhete[0]?.preco}
                                                                quantidade={item.bilhete[0]?.quantidade}
                                                                imagem={urlImage + item.foto}


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

                <div className="section_org_img">
                    <div className="container_conteudo">
                        <div className="conteudo_eventos">
                            <div className="conteudo_eventos_vermais">
                                <div className=" container section_org_img_evento">
                                    <p>Se torne um produtor de Eventos na nossa App.</p>
                                    <p>Crie eventos de forma gratuita.</p>
                                    <p>Ganhe dinheiro se descolocar de casa.</p>
                                    <p><button
                                        style={{ backgroundColor: "#e51b15", color: "#ffffff" }}
                                        className="btn"
                                        onClick={() => {
                                            return navigate("/reservaOnline/organizador/criarConta")
                                        }}>Registra-se</button></p>

                                </div>
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