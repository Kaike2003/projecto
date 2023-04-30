/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react"
import Carousel from "../../caroucel/Carousel"
import { format } from "date-fns"
import "../../tipo_Eventos/TodosEvento/TodosEvento"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import CardEvento from "../../card_evento/components/EventoCard"
import InfiniteScroll from 'react-infinite-scroll-component';
import CarouselOrganizador from "../../caroucel/CarouselOrganizador"
import InatividadePagina from "../../../middlewares/TerminarSessao"

export default function PalestraOrganizador() {


    const url = "/reservaOnline/dashboard/organizador/paginaPrincipal"

    const navigate = useNavigate()
    const [data, setData] = useState([]);
    const [hasMore, setHasMore] = useState(() => { return true })
    const [dataNovosEventos, setDataNovosEventos] = useState([]);
    const [dataListaCategoria, setDataListaCategoria] = useState([]);
    const [nomeUtilizador, setNomeUtilizador] = useState([]);
    const [categoria, setCategoria] = useState(() => {
        return []
    })
    const [currentePage, setCurrentPage] = useState(12)
    const urlImage = "http://localhost:3456/public/upload/evento/"





    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:3456/participante/palestraEventos');
            const newData = response.data;
            setData(newData);

            const responseNovosEventos = await axios.get('http://localhost:3456/participante/palestraEventosLimite?limite=8');
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


    console.log(data)


    const fetchMoreData = () => {

        setTimeout(async () => {

            // if (dataNovosEventos.length < data.length) {

            const responseNovosEventos = await axios.get(`http://localhost:3456/participante/palestraEventosLimite?limite=${currentePage} `)
            const newDataNovosEventos = responseNovosEventos.data;
            setDataNovosEventos(newDataNovosEventos);
            setCurrentPage(() => currentePage + 8)

            // } else {
            //     setHasMore(false)
            // }




        }, 200);
    }

    InatividadePagina()

    return (
        <>
            <div className="invisivel_caroucel"></div>

            <InfiniteScroll

                className="infiniteScroll"
                dataLength={dataNovosEventos.length}
                next={fetchMoreData}
                hasMore={hasMore}
                // loader={<p style={{ textAlign: 'center' }}>Carregando...</p>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>  Sem mais evento para listar.</b>
                    </p>
                }

            >

                <div className="container container_fundo">

                    <CarouselOrganizador></CarouselOrganizador>
                </div>


                <div className='container'>
                    <div className="conteudo_eventos_vermais">
                        <h4 className="pb-3 pt-2 text-dark">Palestra</h4>
                    </div>

                </div>
                <div className="section_eventos container">

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



            </InfiniteScroll>





        </>
    )

}