import React from "react";
import "./Paginacao.css"

export default function Paginacao({ setCurrentPage, currentPage, pages }) {

    return (
        <>

            <div>{Array.from(Array(pages), (item, index) => {
                return <button
                    style={index === currentPage ? { backgroundColor: "rgb(0, 151, 235)" } : null}
                    className="paginacaoButton"
                    value={index}
                    onClick={(e) => setCurrentPage(Number(e.target.value))}
                >{index + 1}</button>
            })}</div>
        </>
    )

}