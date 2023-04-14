/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react"

import Paginacao from "../../Palestrante/components/Paginacao";


import Carousel from '../../caroucel/Carousel'

export default function Festa() {

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
            <div className='container'>
                <div className="container_conteudo">
                    <div className="conteudo_eventos">
                        <div className="conteudo_eventos_vermais">
                            <h4 className="pb-3 pt-2 text-dark"> Shows</h4>
                        </div>
                    </div>
                </div>


                <div className="container_conteudo">
                    <div className="section_eventos">

                        {currentItens.map((item) => {
                            return (
                                <>
                                    <div key={item.id}>
                                      
                                    </div>
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