import React, { useState, useEffect } from "react";
import Modal from "react-modal"
import "./CardEventoOrg.css"

import img from "../../../assets/img/kaike3.png"

export default function CardEventoOrg({ id, name, price, image, date }) {

    return (
        <>


            <>
                {/* <Link to={"visualizarIngresso"} className={"link_cardEvento"}  > */}
                <div className="CardEvento_Org">

                    <div className="CardEventoTopo_Org"
                        key={id}>
                        <img src={img} alt="Imagem de um evento" className="CardEvento_Img_Org" />
                    </div>

                    <div className="CardEventoBaixo_Org container">
                        <div className="titulo_div"><h6>{name}</h6></div>
                        <div>
                            <p className="CardEventoData_Org">{date}</p>
                            <p className="CardEventoTipo_evento_Org">
                                 {price > 0 ? `Pago ${price}` : 'Grátis'} </p>
                            <p className="CardEventoTipo_bilhete_Org">Bilhetes</p>
                            <p className="CardEventoTipo_estado_Org">Estado Evento</p>
                        </div>

                    </div>

                </div>

                {/* </Link> */}
            </>

        </>
    )

}