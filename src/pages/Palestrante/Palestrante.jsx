/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import "./Palestrante.css"
import Card_Palestrante from "./Card_Palestrante/Card_Palestrante"
import Paginacao from "./components/Paginacao";


export default function Palestrante() {



    const [data, setData] = useState([]);
    const [itensPerpage, setItensPerpage] = useState(10)
    const [currentPage, setCurrentPage] = useState(0)
    const startIndex = currentPage * itensPerpage
    const endIndex = startIndex + itensPerpage
    const currentItens = data.slice(startIndex, endIndex)

    const pages = Math.ceil(data.length / itensPerpage) 


    useEffect(() => {
        const fetchData = async () => {
            const result = await
                fetch('http://localhost:3000/static/palestrantes.json')
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

            <div className="container palestrante_div">

                {currentItens.map((item) => {
                    const { id, name, image } = item
                    return (
                        <>
                            <Card_Palestrante
                                id={id}
                                name={name}
                                image={image}
                            ></Card_Palestrante>
                        </>
                    )
                })}

            </div>

            <div className="container">
                <Paginacao
                    setCurrentPage={setCurrentPage}
                    pages={pages}
                    currentPage={currentPage}
                ></Paginacao>
            </div>


            {/* {currentItens.map((item) => (
                        <div className="card_palestrante ">
                            <img src={item.url} />
                            <div className="card_palestrante_info">
                                <p className="card_palestrante_p">Palestrante</p>
                                <div className="card_palestrante_nome">
                                    <p>Nome do palestrante</p>
                                </div>
                            </div>
                        </div>
                    ))} */}
            {/* 
                     */}


        </>)

}