import React from "react";
import "./Main_ingresso.css"
import { Link, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicket, faPanorama, faMasksTheater } from '@fortawesome/free-solid-svg-icons'

// Componentes
import Section_eventos_alta from "../section_eventos_alta/Section_eventos_alta"


export default function Main_ingresso() {

    const [dados, setDados] = useState(() => {
        []
    })

    useEffect(() => {

        fetch("http://localhost:3000/static/eventos.json").
            then((res) => res.json()).then(setDados)

    }, [])

    if (!dados || !dados.length) return null


    return (
        <>

            <div className="insivivel"></div>
            <div className="container container_fundo">

                <div className="container_eventos_listados">
                    <div className="container_eventos_listados_div">
                        <Link to={"/"}>
                            <FontAwesomeIcon icon={faTicket}
                                className="bilhete" />
                            <p className="fw-bold">Todos</p>
                        </Link>
                    </div>

                    <div className="container_eventos_listados_div">
                        <Link to={"concertos"}>
                            <FontAwesomeIcon icon={faMasksTheater}
                                className="bilhete" />
                            <p className="fw-bold">Concerto</p>
                        </Link>
                    </div>

                    <div className="container_eventos_listados_div">
                        <Link to={"festas"}>
                            <FontAwesomeIcon icon={faPanorama}
                                className="bilhete" />
                            <p className="fw-bold">Festa</p>
                        </Link>
                    </div>

                    <div className="container_eventos_listados_div">
                        <Link to={"danca"}>
                            <FontAwesomeIcon icon={faTicket}
                                className="bilhete" />
                            <p className="fw-bold">Dança</p>
                        </Link>
                    </div>

                    <div className="container_eventos_listados_div">
                        <Link to={"teatro"}>
                            <FontAwesomeIcon icon={faTicket}
                                className="bilhete" />
                            <p className="fw-bold">Teatro</p>
                        </Link>
                    </div>

                    <div className="container_eventos_listados_div">
                        <Link to={"espetaculos"}>
                            <FontAwesomeIcon icon={faTicket}
                                className="bilhete" />
                            <p className="fw-bold">Espetaculos</p>
                        </Link>
                    </div>

                </div>



                <div className="container">
                    <div className="conteudo_evento_paragrafos mt-3">
                        <p
                            className="text-white sugestao ">Filtrar por:</p>
                        <p className="conteudo_categoria_p empreendedorismo">
                            <select className="conteudo_categoria_select">
                                <option value="" selected>Categoria</option>
                                <option value="" >Festa</option>
                                <option value="" >Teatro</option>
                                <option value="" >Concerto</option>
                                <option value="" >Espetaculo</option>


                            </select>
                        </p>

                        <p className="conteudo_categoria_p">
                            <select className="conteudo_categoria_select">
                                <option value="" selected>Mês</option>
                                <option value="" >Janeiro</option>
                                <option value="" >Fevereiro</option>
                                <option value="" >Março</option>
                                <option value="" >Abril</option>
                            </select>
                        </p>

                    </div>
                </div>


                <div className="container_conteudo">
                    <div className="conteudo_eventos">
                        <div className="conteudo_eventos_vermais">
                            <h4 className="pb-3 pt-2 text-white">Eventos top do mês</h4>
                            <Link to={"#"} className="btn btn-outline-primary">Ver mais</Link>
                        </div>
                    </div>


                    <div className="container_conteudo">
                        <div className="section_eventos">
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>

                        </div>
                    </div>

                    <div className="container_conteudo">
                        <div className="conteudo_eventos">
                            <div className="conteudo_eventos_vermais">
                                <h4 className="pb-3 pt-2 text-white">Todos os eventos</h4>
                            </div>
                        </div>
                    </div>


                    <div className="container_conteudo">
                        <div className="section_eventos">
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                            <Section_eventos_alta></Section_eventos_alta>
                        </div>
                    </div>

                </div>
            </div>

            <div className="section_org_img">
                <div className="container_conteudo">
                    <div className="conteudo_eventos">
                        <div className="conteudo_eventos_vermais">
                            <div className="text-white container section_org_img_evento">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque iusto perspiciatis nemo quidem sunt iste ipsam repellat excepturi et. Quidem amet non voluptate eaque eius hic dolorem perferendis voluptas tempora illo, itaque, minima eos asperiores quasi perspiciatis iusto nostrum dolor temporibus veniam rem cumque ipsam. Laboriosam voluptatum saepe reprehenderit magni.</p>

                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nobis?</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <form action="#" method="post" className="section_contato">
                    <h4>Fale concosco</h4>
                    <input type="text" name="" id="" placeholder="Nome" />
                    <input type="text" name="" id="" placeholder="Assunto" />
                    <textarea name="" id="" placeholder="Mensagem..."></textarea>
                    <input type="submit" value="Enviar" id="submit" className="mb-4 btn btn-primary" />
                </form>

            </div>



        </>
    )

}