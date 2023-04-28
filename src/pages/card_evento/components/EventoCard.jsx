import React, { useState, useEffect } from "react";
import Modal from "react-modal"
import "./CardEvento.css"
import { Link } from "react-router-dom";




export default function CardEvento({ id, categoria, nome, preco, imagem, dataInicio, dataTermino, estado, quantidade }) {

    const url = "/reservaOnline/participante"


    function estadoEvento(estadoEvento) {

        switch (estadoEvento) {
            case "DESPONIVEL":
                return (
                    <>
                        <span style={{ color: "green", fontWeight: "450" }} >DISPONÍVEL</span>
                    </>
                )
                break;

            case "FINALIZADO":
                return (
                    <>
                        <span style={{ color: "red", fontWeight: "450" }} >TERMINADO</span>
                    </>
                )
                break;

            case "CANCELADO":
                return (
                    <>
                        <span style={{ color: "red", fontWeight: "450" }} >TERMINADO</span>
                    </>
                )
                break;

            case "ADECORRER":
                return (
                    <>
                        <span style={{ color: "#ff9716", fontWeight: "450" }} >A DECORRER</span>
                    </>
                )
                break;


            default:
                break;
        }

    }

    return (
        <>


            <>

                <div className="previsualizarEvento">

                    <div className="previsualizarEvento_Imagem"
                        key={id}>
                        <img src={imagem} alt="Imagem de um evento"
                            className="previsualizarEvento_Img" />
                    </div>

                    <div className="previsualizarEvento_Informacao container">
                        <span className="">
                            {categoria}
                        </span>
                        <h5>{nome}</h5>
                        <p className="mt-3">{`${dataInicio} - ${dataTermino}`}</p>
                        <p>
                            {preco > 0 ? `Preço: ${preco}kz` : 'Grátis'}
                        </p>
                        {quantidade > 0 ? `Bilhetes desponiveis: ${quantidade}` : 'Entrada livre'}
                        <p className="CardEventoTipo_bilhete"></p>
                        <p className="CardEventoTipo_estado">{estadoEvento(estado)}</p>

                    </div>

                </div>

            </>

        </>
    )

}