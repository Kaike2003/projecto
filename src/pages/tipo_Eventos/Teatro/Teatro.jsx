/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react"
import EventoCardPago_Gratis from "../../card_evento/EventoCardPago_Gratis";
import Paginacao from "../../Palestrante/components/Paginacao"

import Carousel from '../../caroucel/Carousel'


export default function Teatro() {

    const [data, setData] = useState([]);
    const [itensPerpage, setItensPerpage] = useState(10)
    const [currentPage, setCurrentPage] = useState(0)
    const startIndex = currentPage * itensPerpage
    const endIndex = startIndex + itensPerpage
    const currentItens = data.slice(startIndex, endIndex)

    const pages = Math.ceil(data.length / itensPerpage)
    console.log(pages)


    useEffect(() => {
        const fetchData = async () => {
            const result = await
                fetch('http://localhost:3000/static/eventos.json')
                    .then((response) => response.json())
                    .then(setData);
        }
        fetchData()
    }, []);


    useEffect(() => {
        setCurrentPage(0)
    }, [itensPerpage])


    return (
        <>
            <div className="invisivel"></div>
            <div className="container container_fundo">
                <Carousel></Carousel>

            </div>

            <div className='container'>
                <div className="container_conteudo">
                    <div className="conteudo_eventos">
                        <div className="conteudo_eventos_vermais">
                            <h4 className="pb-3 pt-2 text-dark">Teatro</h4>
                        </div>
                    </div>
                </div>


                <div className="container_conteudo">
                    <div className="section_eventos">

                        {currentItens((item) => {
                            return (
                                <>
                                    <EventoCardPago_Gratis
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

                <Paginacao
                    setCurrentPage={setCurrentPage}
                    pages={pages}
                    currentPage={currentPage}
                >

                </Paginacao>
            </div>
        </>
    )

}