import React, { useEffect, useState } from "react";
import "./EstatisticaHome.css"
import axios from "axios";

export default function EstatisticaHome() {

    const [data, setData] = useState(() => {
        return []
    })

    const [dataEventos, setDataEventos] = useState(() => {
        return []
    })


    const [dataCategorias, setDataCatagorias] = useState(() => {
        return []
    })


    const [dataCompras, setDataCompras] = useState(() => {
        return []
    })

    useEffect(() => {

        async function fetchData() {

            const response = await axios.get(`http://localhost:3456/admin/utilizadores`)
            const newReponse = response.data
            setData(newReponse)

            const responseEvento = await axios.get(`http://localhost:3456/admin/eventosPublicadosEstatistica`)
            const newReponseEvento = responseEvento.data
            setDataEventos(newReponseEvento)

            const responseCategoria = await axios.get(`http://localhost:3456/admin/categoriasEstatistica`)
            const newCategoria = responseCategoria.data
            setDataCatagorias(newCategoria)

            const responseCompras = await axios.get(`http://localhost:3456/admin/comprasEstatistica`)
            const newCompra = responseCompras.data
            setDataCompras(newCompra)

        }

        fetchData()


    }, [])

    console.log(data)

    return (
        <>

            <div class="app container">
                <section class="service-section">
                    <div class="tiles">
                        <article class="tile">
                            <div class="tile-header">
                                <i class="ph-lightning-light"></i>
                                <h3>
                                    <span>Usuários</span>
                                    <span>{data}</span>
                                </h3>
                            </div>
                            <a href="#">
                                <span>Ver mais</span>
                                <span class="icon-button">
                                    <i class="ph-caret-right-bold"></i>
                                </span>
                            </a>
                        </article>
                        <article class="tile">
                            <div class="tile-header">
                                <i class="ph-fire-simple-light"></i>
                                <h3>
                                    <span>Eventos</span>
                                    <span>{dataEventos}</span>
                                </h3>
                            </div>
                            <a href="#">
                                <span>Ver mais</span>
                                <span class="icon-button">
                                    <i class="ph-caret-right-bold"></i>
                                </span>
                            </a>
                        </article>
                        <article class="tile">
                            <div class="tile-header">
                                <i class="ph-file-light"></i>
                                <h3>
                                    <span>Categorias</span>
                                    <span>{dataCategorias}</span>
                                </h3>
                            </div>
                            <a href="#">
                                <span>Ver mais</span>
                                <span class="icon-button">
                                    <i class="ph-caret-right-bold"></i>
                                </span>
                            </a>
                        </article>
                        <article class="tile">
                            <div class="tile-header">
                                <i class="ph-file-light"></i>
                                <h3>
                                    <span>Compras</span>
                                    <span>{dataCompras}</span>
                                </h3>
                            </div>
                            <a href="#">
                                <span>Ver mais</span>
                                <span class="icon-button">
                                    <i class="ph-caret-right-bold"></i>
                                </span>
                            </a>
                        </article>
                    </div>

                </section>

            </div>


        </>
    )

}