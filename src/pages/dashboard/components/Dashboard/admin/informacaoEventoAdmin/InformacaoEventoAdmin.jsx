import React, { useState, useEffect } from "react";
import "./Perfil.css"
import Imagem from "../../../../../../assets/img/palestrante.jpg"
import axios from "axios";
import { format } from "date-fns";
import { useParams } from "react-router-dom";
import "./InformacaoEvento.css"
import { ChevronRight } from "lucide-react";



export default function InformacaoEvento() {
    const { idUtilizador, idEvento } = useParams()
    const [dataListaCategoria, setDataListaCategoria] = useState([])
    const [data, setData] = useState([]);
    const [dataEvento, setDataEvento] = useState([])
    const [nomeUtilizador, setNomeUtilizador] = useState(() => {
        return ""
    })
    const [dataListaOradores, setDataListaOradores] = useState([])
    const [dataListaBilhetes, setDataListaBilhetes] = useState([])
    const [dataListaPalestrantes, setDataListaPalestrantes] = useState([])
    const [abirOrador, setAbrirOrador] = useState(() => {
        return { display: "none", rotate: 0 }
    })
    const [abirPalestrante, setAbrirPalestrante] = useState(() => {
        return { display: "none", rotate: 0 }
    })

    const [abirBilhete, setAbrirBilhete] = useState(() => {
        return { display: "none", rotate: 0 }
    })







    useEffect(() => {
        async function fetchData() {

            const responseListaCategoria = await axios.get('http://localhost:3456/admin/categoria/todasCategoria');
            const newDataCategoria = responseListaCategoria.data;
            setDataListaCategoria(newDataCategoria);


            const responseUtilizador = await axios.get(`http://localhost:3456/organizador/evento/lista/${idUtilizador}`);
            const newDataUtilizador = responseUtilizador.data;
            setDataEvento(newDataUtilizador);


            const responseListaOradores = await axios.get(`http://localhost:3456/organizador/evento/detalhe/editar/${idEvento}/orador`);
            const newDataListaOradores = responseListaOradores.data;
            setDataListaOradores(newDataListaOradores);

            const responseListaBilhetes = await axios.get(`http://localhost:3456/organizador/evento/detalhe/editar/${idEvento}/bilhete`);
            const newDataListaBilhetes = responseListaBilhetes.data;
            setDataListaBilhetes(newDataListaBilhetes);

            const responseListaPalestrantes = await axios.get(`http://localhost:3456/organizador/evento/detalhe/editar/${idEvento}/palestrante`);
            const newDataListaPalestrantes = responseListaPalestrantes.data;
            setDataListaPalestrantes(newDataListaPalestrantes);






            const response = await axios.get('http://localhost:3456/participante/listarParticipante');
            const newData = response.data;
            setData(newData);

        }

        if (localStorage.getItem("@Auth:email") !== null) {
            setNomeUtilizador(localStorage.getItem("@Auth:email"))
        }


        fetchData();
    }, []);




    function esconderOrador() {
        setAbrirOrador((oldValor) => {
            if (oldValor.display === "none") {
                return oldValor = { display: "block", rotate: "90deg" }
            } else {
                return oldValor = { display: "none", rotate: 0 }
            }
        }
        )
    }

    function esconderBilhete() {
        setAbrirBilhete((oldValor) => {
            if (oldValor.display === "none") {
                return oldValor = { display: "block", rotate: "90deg" }
            } else {
                return oldValor = { display: "none", rotate: 0 }
            }
        }
        )
    }

    function esconderPalestrante() {
        setAbrirPalestrante((oldValor) => {
            if (oldValor.display === "none") {
                return oldValor = { display: "block", rotate: "90deg" }
            } else {
                return oldValor = { display: "none", rotate: 0 }
            }
        }
        )
    }

    console.log(nomeUtilizador)
    console.log("Eventos do organizador", dataEvento)
    console.log("Lista de oradores", dataListaOradores)
    console.log("Lista de bilhetes", dataListaBilhetes)


    return (
        <>

            <div className="container">
                <div className="criar mt-5">
                    <div className="exibir_imagem">
                        <img src={Imagem} alt="" />
                    </div>
                    {

                        dataEvento.map(item => {

                            if (item.id === idEvento) {
                                return (
                                    <>

                                        <div key={item.id + 1} className="mb-3">

                                            <div className="criar_estrutura_InformacaoEvento container">
                                                <div>
                                                    <div className="criar_row">

                                                        <span>Nome</span>
                                                        <div> {item.nome} </div>


                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="criar_row">
                                                        <span>Estado</span>
                                                        <div> {item.estado} </div>

                                                    </div>

                                                </div>


                                                <div>
                                                    <div className="criar_row">


                                                        <span>Provincia</span>
                                                        <div> {item.provincia} </div>


                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="criar_row">


                                                        <span>Municipio</span>
                                                        <div> {item.municipio} </div>


                                                    </div>
                                                </div>


                                                <div>
                                                    <div className="criar_row">

                                                        <span>Bairro</span>
                                                        <div> {item.bairro} </div>


                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="criar_row">

                                                        <span>Categoria</span>
                                                        <div> {
                                                            dataListaCategoria.map(lista => {
                                                                if (lista.id === item.categoriaId) {
                                                                    return lista.nome
                                                                }
                                                            })
                                                        } </div>


                                                    </div>
                                                </div>


                                                <div>
                                                    <div className="criar_row">
                                                        <span>Data de inicio</span>
                                                        <div>
                                                            {format(new Date(item.dataInicio), 'MM/dd/yyyy')}
                                                        </div>

                                                    </div>

                                                </div>

                                                <div className="criar_row">
                                                    <span>Data de termino </span>
                                                    <div>
                                                        {format(new Date(item.dataTermino), 'MM/dd/yyyy')}
                                                    </div>

                                                </div>


                                                <div className="criar_row">
                                                    <span>Hora de inicio</span>
                                                    <div>

                                                        {format(new Date(item.horaInicio), "HH:mm:ss")}
                                                    </div>

                                                </div>


                                                <div className="criar_row">
                                                    <span>Hora de termino </span>
                                                    <div>
                                                        {format(new Date(item.horaTermino), "HH:mm:ss")}
                                                    </div>

                                                </div>

                                                <div className="criar_row">
                                                    <span>Publicado </span>
                                                    <div>
                                                        {item.publicado === true ? " Pulicado" : "Não publicado"}
                                                    </div>

                                                </div>

                                                <div className="criar_row">
                                                    <span>Banido </span>
                                                    <div>
                                                        {item.banido === true ? "Banido" : "Não banido"}
                                                    </div>

                                                </div>


                                                <div className="criar_row">
                                                    <span>Visualizações </span>
                                                    <div>
                                                        {item.visualizacao >= 1000 ?
                                                            item.visualizacao >= 1000000 ?
                                                                `${item.visualizacao} Milhão` :
                                                                `${item.visualizacao} mil`
                                                            :
                                                            item.visualizacao}
                                                    </div>

                                                </div>


                                            </div>

                                            <div className="spanOradorBilhetePalestrante">
                                                <span
                                                    onClick={esconderOrador}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    <div className="spanIcone">
                                                        Oradores
                                                        <ChevronRight
                                                            style={{
                                                                transform: `rotate(${abirOrador.rotate})`,
                                                                transition: "transform 0.50s ease-in-out"
                                                            }}
                                                            size={20} /></div>
                                                </span>
                                                <ul
                                                    className="container"
                                                    style={
                                                        { display: abirOrador.display }
                                                    }
                                                >
                                                    {dataListaOradores.map(item => {
                                                        return (
                                                            <>
                                                                <li className="
                                                                container
                                                                li_fundo">
                                                                    <li
                                                                        className="
                                                                    li_fundo_primeiro
                                                                    li_fundo_ultimo
                                                                    "
                                                                    >
                                                                        <span>Nome</span>: {item.nome}
                                                                    </li>

                                                                </li>
                                                                <li style={{ visibility: "hidden" }}></li>

                                                            </>
                                                        )
                                                    })}
                                                </ul>
                                            </div>

                                            <div className="spanOradorBilhetePalestrante">
                                                <span>
                                                    <div className="spanIcone"
                                                        onClick={esconderBilhete}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        Bilhetes <ChevronRight
                                                            style={{
                                                                transform: `rotate(${abirBilhete.rotate})`,
                                                                transition: "transform 0.50s ease-in-out"
                                                            }}
                                                            size={20} /></div>
                                                </span>
                                                <ul
                                                    className="container"
                                                    style={
                                                        { display: abirBilhete.display }
                                                    }>
                                                    {dataListaBilhetes.map(item => {
                                                        return (
                                                            <>
                                                                <li
                                                                    className="
                                                                li_fundo_primeiro
                                                                li_fundo 
                                                                container">
                                                                    <span>Nome</span>: {item.nome}
                                                                    <li><span>Data de inicio</span>: {format(new Date(item.dataInicio), 'MM/dd/yyyy')} - <span>hora de inicio</span>: {

                                                                        format(new Date(item.horaInicio), "HH:mm:ss")

                                                                    }</li>
                                                                    <li
                                                                    ><span>Data de termino</span>: {format(new Date(item.dataTermino), 'MM/dd/yyyy')} - <span>hora de termino</span>: {

                                                                            format(new Date(item.horaTermino), "HH:mm:ss")

                                                                        }</li>
                                                                    <li

                                                                    ><span>Preço</span>: {item.preco} kz</li>
                                                                    <li
                                                                        className="
                                                                    li_fundo_ultimo
                                                                    "
                                                                    ><span>Quantidade</span>: {item.quantidade}</li>
                                                                </li>
                                                                <li style={{ visibility: "hidden" }}></li>
                                                            </>
                                                        )
                                                    })}
                                                </ul>
                                            </div>

                                            <div className="spanOradorBilhetePalestrante">
                                                <span
                                                    onClick={esconderPalestrante}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    <div className="spanIcone"
                                                    >
                                                        Palestrantes<ChevronRight
                                                            style={{
                                                                transform: `rotate(${abirPalestrante.rotate})`,
                                                                transition: "transform 0.50s ease-in-out"
                                                            }}
                                                            size={20} />



                                                    </div>
                                                </span>
                                                <ul
                                                    className="container"
                                                    style={
                                                        {
                                                            display: abirPalestrante.display
                                                        }
                                                    }
                                                >
                                                    {dataListaPalestrantes.map(item => {
                                                        return (
                                                            <>
                                                                <li className="
                                                                container
                                                                    li_fundo
                                                                    ">
                                                                    <li
                                                                        className="
                                                                     li_fundo_primeiro
                                                                     "
                                                                    ><span>Nome</span>: {item.nome}</li>
                                                                    <li
                                                                        className="
                                                                    li_fundo_ultimo
                                                                    "
                                                                    ><span>Blog</span>: {item.blog}</li>
                                                                </li>
                                                                <li style={{ visibility: "hidden" }}></li>
                                                            </>
                                                        )
                                                    })}
                                                </ul>
                                            </div>





                                        </div>

                                    </>
                                )
                            }


                        })

                    }
                </div>
            </div>


        </>
    )

}