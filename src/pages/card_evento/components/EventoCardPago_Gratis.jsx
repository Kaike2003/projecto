import React, { useState, useEffect } from "react";
import Modal from "react-modal"
import "./CardEvento.css"



Modal.setAppElement("#root")

export default function CardEventoPago({ id, name, price, image, date }) {

    return (
        <>


            <>
                {/* <Link to={"visualizarIngresso"} className={"link_cardEvento"}  > */}
                <div className="CardEvento">

                    <div className="CardEventoTopo"
                        key={id}>
                        <img src={image} alt="Imagem de um evento" className="CardEvento_Img" />
                    </div>

                    <div className="CardEventoBaixo container">
                        <div className="titulo_div"><h6>{name}</h6></div>
                        <div>
                            <p className="CardEventoData">{date}</p>
                            <p className="CardEventoTipo_evento">
                                 {price > 0 ? `Pago ${price}` : 'Grátis'} </p>
                            <p className="CardEventoTipo_bilhete">Bilhetes</p>
                            <p className="CardEventoTipo_estado">Estado Evento</p>
                        </div>

                    </div>

                </div>

                {/* </Link> */}
            </>

        </>
    )

}