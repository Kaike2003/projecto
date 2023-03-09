/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import "./PaginaPrincipal.css"

// Componentes

import InformacaoSite from "../InformacaoSite/InformacaoSite";
import EventoCardPago_Gratis from "../card_evento/EventoCardPago_Gratis";

import Contacto from "../contacto/Contacto";
import Carousel from "../caroucel/Carousel";
import Perguntas from "../perguntas/Perguntas";
import FestaFiltro from "../tipo_Eventos/Festa/FestaFiltro"
import PalestraFiltro from "../tipo_Eventos/Palestra/PalestraFiltro"
import ConcertoFiltro from "../tipo_Eventos/Concerto/ConcertoFiltro"
import EspetaculoFiltro from "../tipo_Eventos/Espetaculo/EspetaculoFiltro"
import TeatroFiltro from "../tipo_Eventos/Teatro/TeatroFiltro"

// import Eventos from "../section_eventos/Section_eventos_teste"

export default function PaginaPrincipal() {

    const navigate = useNavigate()
    const [data, setData] = useState([]);
    const [categoria, setCategoria] = useState(() => {
        return []
    })

    const categoriaFiltro = (e) => {
        return setCategoria((old) => {
            return old = e.target.value
        })
    }

    const filtro = function IfCategoria(valor) {

        if (categoria === "1") {
            return
        } else if (categoria === "2") {
            return <FestaFiltro></FestaFiltro>
        } else if (categoria === "3") {
            return <TeatroFiltro></TeatroFiltro>
        } else if (categoria === "4") {
            return <ConcertoFiltro></ConcertoFiltro>
        } else if (categoria === "5") {
            return <EspetaculoFiltro></EspetaculoFiltro>
        } else if (categoria === "6") {
            return <PalestraFiltro></PalestraFiltro>
        }

    }

    useEffect(() => {
        const fetchData = async () => {
            const result = await
                fetch('http://localhost:3000/static/eventos.json')
                    .then((response) => response.json())
                    .then(setData);

        }
        fetchData()

        console.log(categoria)

    }, [categoria]);






    return (
        <>
            <div className="invisivel"></div>

            <div className="container container_fundo ">

                <Carousel></Carousel>
                <div className="container">
                    <div className="conteudo_evento_paragrafos mt-3 mb-2 ">
                        <p className=" sugestao text-dark ">Filtrar por:</p>
                        <div className="conteudo_categoria_p empreendedorismo">
                            <select
                                className="conteudo_categoria_select"
                                onChange={categoriaFiltro}
                            >
                                <option value="1" >Categoria</option>
                                <option value="2" >Festa</option>
                                <option value="3" >Teatro</option>
                                <option value="4" >Concerto</option>
                                <option value="5" >Espetaculo</option>
                                <option value="6" >Palestra</option>

                            </select>
                        </div>

                        <div className="conteudo_categoria_p">
                            <select className="conteudo_categoria_select">
                                <option value="6" >Mês</option>
                                <option value="7" >Janeiro</option>
                                <option value="8" >Fevereiro</option>
                                <option value="9" >Março</option>
                                <option value="10" >Abril</option>
                            </select>
                        </div>

                    </div>
                </div>


                {
                      
                filtro(categoria)
                
                }

                <InformacaoSite></InformacaoSite>

                <div className="container_conteudo">
                    <div className="conteudo_eventos">
                        <div className="conteudo_eventos_vermais">
                            <h4 className="pb-3 pt-2 text-dark">Eventos top do mês</h4>
                            <Link to={"/topMes"} className="btn btn-primary">Ver mais</Link>
                        </div>
                    </div>

                    <div className="container_conteudo">
                        <div className="section_eventos">

                            {data.slice(1, 5).map((item) => {
                                return (
                                    <>
                                        <EventoCardPago_Gratis
                                            key={item.id}
                                            id={item.id}
                                            image={item.image}
                                            date={item.date}
                                            name={item.name}
                                            price={item.price}
                                        ></EventoCardPago_Gratis>
                                    </>
                                )
                            })}


                        </div>
                    </div>



                    <div className="container_conteudo">
                        <div className="conteudo_eventos">
                            <div className="conteudo_eventos_vermais">
                                <h4 className="pb-3 pt-2 text-dark">Todos os eventos</h4>
                                <Link to={"/todosEventos"} className="btn btn-primary">Ver mais</Link>
                            </div>
                        </div>
                    </div>



                    <div className="container_conteudo">
                        <div className="section_eventos">

                            {data.slice(1, 9).map((item) => {
                                return (
                                    <>
                                        <EventoCardPago_Gratis
                                            key={item.id}
                                            id={item.id}
                                            image={item.image}
                                            date={item.date}
                                            name={item.name}
                                            price={item.price}
                                        ></EventoCardPago_Gratis>
                                    </>
                                )
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
                                <p><button className="btn btn-primary" onClick={() => {
                                    return navigate("/LoginCreate")
                                }}>Registra-se</button></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Perguntas></Perguntas>
            </div>

            <div className="">
                <>
                    <Contacto></Contacto>
                </>

            </div>

        </>
    )


}